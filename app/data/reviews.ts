export interface Review {
  id: string;
  name: string;
  country: string;
  safari: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    country: "United States",
    safari: "Masai Mara Adventure",
    rating: 5,
    date: "2025-11-15",
    comment:
      "Absolutely life-changing experience! Our guide James knew exactly where to find the big cats. We saw all of the Big Five within the first two days.",
    avatar: "SM",
  },
  {
    id: "2",
    name: "Hans Weber",
    country: "Germany",
    safari: "Amboseli & Kilimanjaro Views",
    rating: 5,
    date: "2025-10-22",
    comment:
      "Watching elephants with Kilimanjaro in the background is something I will never forget. The tented camp was surprisingly comfortable and the food was excellent.",
    avatar: "HW",
  },
  {
    id: "3",
    name: "Aiko Tanaka",
    country: "Japan",
    safari: "Samburu Special Five",
    rating: 5,
    date: "2025-09-10",
    comment:
      "Samburu was unlike any safari I have done before. The landscape is raw and wild, and seeing the Grevy zebras and reticulated giraffes was a dream come true.",
    avatar: "AT",
  },
  {
    id: "4",
    name: "James Ochieng",
    country: "Kenya",
    safari: "Coast & Safari Combo",
    rating: 4,
    date: "2025-08-05",
    comment:
      "A perfect blend of wildlife and beach relaxation. The transition from Tsavo to Diani was smooth and well organized. Highly recommend this combo for families.",
    avatar: "JO",
  },
  {
    id: "5",
    name: "Maria Santos",
    country: "Brazil",
    safari: "Rift Valley Lakes & Nakuru",
    rating: 5,
    date: "2025-12-01",
    comment:
      "The flamingos at Lake Nakuru were breathtaking. Our guide was passionate and informative. The whole trip exceeded our expectations. Thank you UKe!",
    avatar: "MS",
  },
];
