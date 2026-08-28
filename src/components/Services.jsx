"use client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
 const services = [
    {
      title: "B2B SEO services",
      desc: "The full programme. Technical, content, and authority work to rank the pages that bring leads.",
      icon: "/images/4.png",
      href: "/b2b-seo-services",
    },
    {
      title: "AI SEO (GEO)",
      desc: "Get named and cited by ChatGPT, Gemini, Perplexity, and Google's AI Overviews, not just ranked.",
      icon: "/images/2.png",
      href: "/ai-seo",
    },
    {
      title: "B2B SEO consulting",
      desc: "Direct access to a specialist who plans and guides the work, with no agency layers.",
      icon: "/images/3.png",
      href: "/b2b-seo-consultant",
    },
    {
      title: "Free B2B SEO audit",
      desc: "See what is holding your rankings back, and where the quick wins are.",
      icon: "/images/5.png",
      href: "/b2b-seo-audit",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0C10] text-white py-20 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* BACKGROUND DECORATIONS - Using fixed dimensions to prevent layout errors */}
      <div className="absolute left-4 top-[4%] w-[260px] h-[260px] opacity-10 pointer-events-none z-0">
        <Image
          src="/images/white.png"
          alt="decoration"
          width={260}
          height={260}
        />
      </div>

      <div className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] opacity-10 pointer-events-none z-0">
        <Image
          src="/images/Ellipse.png"
          alt="decoration"
          width={400}
          height={400}
        />
      </div>

      <div className="absolute right-[5%] top-[50%] w-[250px] h-[250px] opacity-[0.05] pointer-events-none z-0">
        <Image
          src="/images/Ellipse1.png"
          alt="decoration"
          width={250}
          height={250}
        />
      </div>

      {/* HEADER */}
      <div className="max-w-[800px] w-full text-center space-y-3 mb-16 z-10">
        <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
          OUR SERVICES
        </span>
        <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-tight">
          What we Offer
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed font-normal">
          Four services, one aim: qualified enquiries from search and AI.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[1240px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 z-10">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="bg-[#111319] border border-[#1F232E]/60 rounded-[12px] p-7 flex flex-col items-start justify-start text-left space-y-4 hover:border-[#8A2BE2]/60 hover:translate-y-[-2px] transition-all duration-200 group cursor-pointer"
          >
            <div className="w-[44px] h-[44px] rounded-[8px] bg-[#1A1131] flex items-center justify-center shrink-0 group-hover:bg-[#8A2BE2]/20 transition-colors">
              <Image
                src={service.icon}
                alt={service.title}
                width={24}
                height={24}
              />
            </div>
            <div className="space-y-1.5 w-full">
              <h3 className="text-[16.5px] font-semibold text-white tracking-tight group-hover:text-[#8A2BE2] transition-colors">
                {service.title}
              </h3>
              <p className="text-[14px] font-normal text-[#8A92A6]">
                {service.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}