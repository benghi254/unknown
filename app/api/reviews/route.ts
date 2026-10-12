import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import type { Review } from "@/app/data/reviews";
import { reviews as fallbackReviews } from "@/app/data/reviews";

const reviewsFilePath = path.join(
  process.cwd(),
  "app",
  "data",
  "user-reviews.json"
);

// In-memory cache for fast response and fallback
let inMemoryReviews: Review[] | null = null;

async function getStoredReviews(): Promise<Review[]> {
  try {
    const fileContent = await fs.readFile(reviewsFilePath, "utf-8");
    const parsed = JSON.parse(fileContent);
    if (Array.isArray(parsed) && parsed.length > 0) {
      inMemoryReviews = parsed;
      return parsed;
    }
  } catch (err) {
    // If file read fails, use in-memory cache or fallback data
  }

  if (inMemoryReviews && inMemoryReviews.length > 0) {
    return inMemoryReviews;
  }

  inMemoryReviews = fallbackReviews;
  return fallbackReviews;
}

async function saveStoredReviews(reviewsList: Review[]): Promise<void> {
  inMemoryReviews = reviewsList;
  try {
    await fs.writeFile(
      reviewsFilePath,
      JSON.stringify(reviewsList, null, 2),
      "utf-8"
    );
  } catch (err) {
    console.error("Failed to persist reviews to disk, kept in memory:", err);
  }
}

export async function GET() {
  const reviews = await getStoredReviews();
  return NextResponse.json({
    success: true,
    reviews,
    total: reviews.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, country, safari, rating, comment } = body;

    if (!name || !country || !safari || !comment) {
      return NextResponse.json(
        { error: "Please fill out all required fields" },
        { status: 400 }
      );
    }

    const currentReviews = await getStoredReviews();

    const initials = name
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((w: string) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "KE";

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      country: country.trim(),
      safari: safari.trim(),
      rating: Math.min(5, Math.max(1, Number(rating) || 5)),
      date: new Date().toISOString().split("T")[0],
      comment: comment.trim(),
      avatar: initials,
    };

    const updatedReviews = [newReview, ...currentReviews];
    await saveStoredReviews(updatedReviews);

    return NextResponse.json({
      success: true,
      message: "Review successfully published and saved!",
      addedReview: newReview,
      reviews: updatedReviews,
      total: updatedReviews.length,
    });
  } catch (err) {
    console.error("Error submitting review:", err);
    return NextResponse.json(
      { error: "Failed to process review submission" },
      { status: 500 }
    );
  }
}
