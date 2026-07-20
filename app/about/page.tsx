import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Unknown Kenya",
  description:
    "Learn about Unknown Kenya - our story, mission, and passion for authentic safari experiences across Kenya.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-earth text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">
            About Unknown Kenya
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Born from a love of Kenya&apos;s wild places, we exist to share the
            Africa that most visitors never see.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Story */}
          <div className="prose max-w-none">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
              <h2 className="text-2xl font-bold text-earth mb-4">Our Story</h2>
              <div className="space-y-4 text-earth-light/70 leading-relaxed">
                <p>
                  Unknown Kenya was founded in 2014 by a team of passionate
                  Kenyan wildlife enthusiasts and professional guides who
                  believed that the best safari experiences come from deep local
                  knowledge, not glossy brochures.
                </p>
                <p>
                  We started with a single Land Cruiser and a dream: to show
                  travelers the hidden corners of Kenya that most safari
                  operators ignore. From the remote northern deserts to the
                  pristine coastal forests, we sought out the places where
                  Africa&apos;s spirit still runs wild.
                </p>
                <p>
                  Today, we are a team of over 20 experienced guides and
                  support staff, having guided more than 2,000 travelers from
                  around the world. But our mission remains the same: to
                  deliver authentic, responsible, and unforgettable Kenyan
                  safari experiences.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
              <h2 className="text-2xl font-bold text-earth mb-4">
                Our Mission
              </h2>
              <p className="text-earth-light/70 leading-relaxed">
                To connect people with the raw, untamed beauty of Kenya through
                expertly guided safari experiences that benefit local
                communities and conservation efforts. We believe that tourism
                should leave both travelers and landscapes better than they were
                found.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
              <h2 className="text-2xl font-bold text-earth mb-6">
                Our Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Authenticity",
                    desc: "Real experiences, real communities, real Kenya. No tourist traps.",
                  },
                  {
                    title: "Conservation",
                    desc: "Every booking contributes to wildlife protection and habitat preservation.",
                  },
                  {
                    title: "Community",
                    desc: "We hire locally and invest in the communities we operate in.",
                  },
                  {
                    title: "Excellence",
                    desc: "Small groups, expert guides, and attention to every detail.",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="p-4 rounded-lg bg-sand/30 border border-sand"
                  >
                    <h3 className="font-bold text-earth mb-1">{value.title}</h3>
                    <p className="text-sm text-earth-light/60 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
