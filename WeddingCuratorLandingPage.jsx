import React from "react";

const weddingCuratorLogo = "/TWC-logo.jpeg";

export default function WeddingCuratorLandingPage() {
  const services = [
    {
      title: "Wedding Day Coordination",
      description:
        "For couples who have planned their wedding and want flawless execution on the day. We take over timelines, vendors, and flow so nothing feels rushed or unmanaged.",
      bullets: [
        "Complete timeline management",
        "Vendor coordination & supervision",
        "On-site event execution",
      ],
      price: "Tailored after consultation",
    },
    {
      title: "Month-of / Partial Planning",
      description:
        "You’ve started planning — we step in to refine, organize, and structure everything so your wedding runs exactly as it should.",
      bullets: [
        "Planning refinement",
        "Event flow structuring",
        "Vendor alignment",
      ],
      price: "Tailored after consultation",
    },
    {
      title: "Full Planning & Cultural Weddings",
      description:
        "End-to-end planning for weddings that require depth, hospitality, and precision — including multi-day and South Asian celebrations.",
      bullets: [
        "Full planning support",
        "Multi-day coordination",
        "Cultural wedding execution",
      ],
      price: "Tailored after consultation",
    },
  ];

  const testimonials = [
    "Planning your wedding and feeling overwhelmed? Let me take that off your shoulders.",
    "The approach feels calm, structured, and genuinely focused on the couple — not just the event.",
    "Everything flows. Nothing feels chaotic. That’s the difference.",
  ];

  return (
    <div className="min-h-screen bg-[#f7f2eb] text-[#2f241d]">
      {/* HERO */}
      <section className="border-b border-[#e7d9c7] bg-gradient-to-b from-[#f6efe6] via-[#f8f3ed] to-[#fbf8f4]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
          <div>
            <div className="mb-8 flex items-center">
              <img
                src={weddingCuratorLogo}
                alt="The Wedding Curator logo"
                className="h-16 w-auto object-contain md:h-20"
              />
            </div>

            <p className="text-sm uppercase tracking-[0.35em] text-[#8f7558] mb-4">
              Ottawa Wedding Planning
            </p>

            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              When we work, everything flows.
            </h1>

            <p className="mt-6 text-lg text-[#5b4637] leading-8 max-w-xl">
              You don’t chase vendors. You don’t manage timelines. You don’t deal with chaos.
            </p>

            <p className="mt-4 text-base text-[#6d5544] leading-7 max-w-xl">
              The Wedding Curator is built for couples who want a calm, luxury experience — where every detail is handled, and your only role is to show up and experience your day. We believe in meeting properly, understanding your vision in person, and then coordinating everything with precision.
            </p>

            <p className="mt-4 text-base text-[#6d5544] leading-7 max-w-xl">
              This is not based on endless phone calls or back-and-forth video meetings. We prefer to meet in person, understand your expectations clearly, and build the execution around what you actually want.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="bg-[#2f241d] text-white px-6 py-3 rounded-full">
                Start Planning
              </a>
              <a href="#services" className="border border-[#b89a7b] px-6 py-3 rounded-full">
                View Services
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="rounded-[2rem] overflow-hidden h-[400px] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop"
              alt="South Asian Wedding Couple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16 md:px-10">
        <div className="rounded-[2rem] border border-[#eadfce] bg-white px-8 py-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8f7558]">Who this is for</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] bg-[#f8f3ed] px-5 py-5 text-[#5f4a3a]">For couples who want hospitality, structure, and someone dependable handling the flow.</div>
            <div className="rounded-[1.5rem] bg-[#f8f3ed] px-5 py-5 text-[#5f4a3a]">For those who do not want to chase vendors, timelines, family movement, or on-day coordination.</div>
            <div className="rounded-[1.5rem] bg-[#f8f3ed] px-5 py-5 text-[#5f4a3a]">For weddings that deserve a personal, in-person approach rather than generic planning.</div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <h2 className="font-serif text-4xl mb-10">
          Services built around hospitality, structure, and personal attention
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-7 rounded-[2rem] shadow-sm border">
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="mt-4 text-[#5f4a3a]">{s.description}</p>

              <div className="mt-6 space-y-2">
                {s.bullets.map((b) => (
                  <div key={b} className="text-sm bg-[#f7f1e8] px-4 py-2 rounded-full">
                    {b}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#8f7558]">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#fcf8f3] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-4">How we work</h2>
          <p className="max-w-3xl text-[#6a5341] leading-8 mb-10">
            We do not believe in endless calls or scattered communication. We prefer to meet properly, understand what you want in detail, and then build the coordination around your event with clarity and intention.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-[2rem] bg-white p-7 shadow-sm border border-[#eadfce]">
              <h3 className="text-xl font-semibold">1. Meet in Person</h3>
              <p className="mt-3 text-[#5f4a3a] leading-7">
                We begin with an in-person meeting so we can understand your event, your expectations, and the atmosphere you want to create.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-sm border border-[#eadfce]">
              <h3 className="text-xl font-semibold">2. Curate the Flow</h3>
              <p className="mt-3 text-[#5f4a3a] leading-7">
                Once we understand your direction, we shape timelines, vendor coordination, hospitality flow, and every moving part around it.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-sm border border-[#eadfce]">
              <h3 className="text-xl font-semibold">3. Execute with Control</h3>
              <p className="mt-3 text-[#5f4a3a] leading-7">
                On the day, we take over completely so you are not managing people, chasing updates, or carrying the pressure of execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-[#fffaf5] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#8f7558]">Brand Experience</p>
              <h2 className="font-serif text-4xl">What people feel</h2>
            </div>
            <p className="max-w-xl text-[#6a5341] leading-7">The Wedding Curator is built to feel calm, personal, structured, and deeply taken care of from the first meeting onward.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm">
                “{t}”
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#f7f2eb] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="font-serif text-4xl">Start your wedding planning</h2>
            <p className="mt-4 leading-8 text-[#5f4a3a]">
              Share your date, guest count, and what you have planned so far. From there, we will arrange an in-person meeting to understand your event clearly and guide the next step properly.
            </p>
            <p className="mt-5 leading-8 text-[#6a5341]">
              This is not built around endless calls or generic packages. We believe in understanding your event personally, then coordinating it with structure, warmth, and precision.
            </p>

            <div className="mt-8 rounded-[2rem] border border-[#eadfce] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-[#8f7558]">Currently Booking</p>
              <p className="mt-3 font-serif text-2xl text-[#2f241d]">Ottawa weddings with limited availability</p>
              <p className="mt-3 leading-7 text-[#6a5341]">Based in Ottawa, Ontario. In-person consultation is part of how we begin, because understanding your celebration properly matters.</p>
            </div>
          </div>

          <form
            className="bg-white p-7 rounded-[2rem] shadow-sm"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;

              const data = {
                name: form[0].value,
                email: form[1].value,
                date: form[2].value,
                guests: form[3].value,
                details: form[4].value,
              };

              try {
                const res = await fetch("https://formspree.io/f/your-form-id", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify(data),
                });

                if (res.ok) {
                  alert("Thank you. Your request has been received. We will connect with you shortly.");
                  form.reset();
                } else {
                  alert("Something went wrong. Please try again.");
                }
              } catch (error) {
                alert("Network error. Please try again.");
              }
            }}
          >
            <input placeholder="Full Name" className="w-full mb-4 p-3 border rounded-xl" required />
            <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded-xl" required />
            <input placeholder="Event Date" className="w-full mb-4 p-3 border rounded-xl" required />
            <input placeholder="Guest Count" className="w-full mb-4 p-3 border rounded-xl" required />
            <textarea placeholder="Tell us about your wedding" className="w-full mb-4 p-3 border rounded-xl" required />

            <button type="submit" className="bg-[#2f241d] text-white px-6 py-3 rounded-full w-full">
              Request a Meeting
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#eadfce] bg-[#fbf6ef] py-10 text-center text-sm text-[#8f7558]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6">
          <img
            src={weddingCuratorLogo}
            alt="The Wedding Curator logo"
            className="h-12 w-auto object-contain"
          />
          <p>The Wedding Curator — Ottawa Wedding Planning</p>
        </div>
      </footer>
    </div>
  );
}
