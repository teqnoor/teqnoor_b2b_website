import Law from "./Law";

export const metadata = {
  title: "SEO for Law Firms UK | More Case Enquiries | Teqnoor",
  description: "SEO for UK solicitors and law firms. Rank practice area and local pages for high value case enquiries. Consultant led, built for a trust heavy field.",
  alternates: {
    canonical: "https://www.b2bseodigitalagency.co.uk/seo-for-law-firms",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do law firms need SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients find a solicitor through search, usually looking for a practice area and a location. SEO puts a firm in front of those searches and wins high value case enquiries. Because legal cases are worth a lot, a single ranking can return the cost many times over."
      }
    },
    {
      "@type": "Question",
      "name": "What are practice area pages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "These are pages built for one legal service each, such as conveyancing, family law, or personal injury. Each matches how clients search for that specific need. They rank better than one general services page because they answer a single, clear intent."
      }
    },
    {
      "@type": "Question",
      "name": "Does SEO for solicitors follow SRA rules?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It should. The SRA requires firm advertising to be accurate and not misleading. Good legal SEO keeps every claim truthful and evidenced, avoids guarantees about outcomes, and still ranks by being genuinely useful and clearly written."
      }
    },
    {
      "@type": "Question",
      "name": "How long until a law firm sees results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a newer site, expect early ranking movement in three to six months and steady case enquiries from search in six to twelve. Local and practice area pages with strong trust signals tend to move first."
      }
    },
    {
      "@type": "Question",
      "name": "How much does SEO for law firms cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A paid audit first, then a scoped monthly retainer based on your practice areas and locations. Because legal cases are high value, even a few extra enquiries a month usually cover the work many times over. You see the scope before you commit."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Law />
    </>
  );
}