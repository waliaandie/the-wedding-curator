import React from "react";

const weddingCuratorLogo = "/TWC-logo.png";

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
      title: "Month-of / Partial ",
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
            {/* HERO */}
      <section className="border-b border-[#e7d9c7] bg-gradient-to-b from-[#f6efe6] via-[#f8f3ed] to-[#fbf8f4]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
          <div>
            <div className="mb-4 flex items-start">
              <img
                src={weddingCuratorLogo}
                alt="The Wedding Curator logo"
                className="h-64 md:h-80 w-auto object-contain"
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

            <div className="mt-6">
              <a
                href="#contact"
                
                className="inline-block bg-[#c5a46d] text-white px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:opacity-90 transition shadow-md"
              >
                Begin Your Wedding Experience
              </a>
            </div>

            <p className="mt-4 text-base text-[#6d5544] leading-7 max-w-xl">
              This is not based on endless phone calls or back-and-forth video meetings. We prefer to meet in person, understand your expectations clearly, and build the execution around what you actually want.
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="rounded-[2rem] overflow-hidden h-[400px] shadow-lg">
            <img
              src="/hero.png"
              alt="Wedding Couple"
              className="rounded-2xl w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
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
  _subject: "New Wedding Inquiry",
  name: form[0].value,
  email: form[1].value,
  date: form[2].value,
  guests: form[3].value,
  details: form[4].value,
};

              try {
                const res = await fetch("https://formspree.io/f/mlgadkqk", {
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
            <input
  type="date"
  className="w-full mb-4 p-3 border rounded-xl"
  min={new Date().toISOString().split("T")[0]}
  required
/>
            <input placeholder="Guest Count" className="w-full mb-4 p-3 border rounded-xl" required />
            <textarea placeholder="Tell us about your wedding" className="w-full mb-4 p-3 border rounded-xl" required />

            <button type="submit" className="bg-[#2f241d] text-white px-6 py-3 rounded-full w-full">
              Request a Meeting
            </button>
          </form>
        </div>
      </section>
      

      
      

<footer className="mt-24 pt-16 border-t border-[#eadfce] bg-[#fbf6ef]">
  
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE */}
    <div>
      <img
        src={weddingCuratorLogo}
        alt="The Wedding Curator"
        className="h-64 md:h-80 w-auto object-contain"
      />

      <p className="text-lg text-[#5e4b3c] mb-2">
        Curating refined, calm wedding experiences.
      </p>

      <p className="text-sm text-[#b09a7c]">
        Ottawa, Ontario
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="text-left md:text-right">
      <p className="text-sm text-[#b09a7c] mb-2">
        Let’s begin your wedding journey
      </p>

      <p className="text-lg font-medium text-[#2f241d] mb-4">
        hello@theweddingcurator.ca
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex md:justify-end gap-4">
        
        {/* Instagram */}
        <a href="https://instagram.com/theweddingcurator.ca" target="_blank">
          <svg className="w-5 h-5 text-[#6b4f3b] hover:opacity-70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm4.25 3.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm0 2a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5zm4.75-.88a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a href="https://facebook.com/" target="_blank">
          <svg className="w-5 h-5 text-[#6b4f3b] hover:opacity-70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12"/>
          </svg>
        </a>

      </div>
    </div>

  </div>

  {/* BOTTOM COPYRIGHT */}
  <div className="text-center text-sm text-[#b09a7c] mt-12 pb-6">
    © 2026 The Wedding Curator. All rights reserved.
  </div>

</footer>
      
    </div>
  );
}
