import Financial from "./Financial";

export const metadata = {
  title: "SEO for Financial Services UK | FCA Aware | Teqnoor",
  description: "SEO for UK financial firms, advisers, and fintechs. Rank product and adviser pages within FCA promotion rules. Consultant led, built for trust.",
  alternates: {
    canonical: "https://www.b2bseodigitalagency.co.uk/seo-for-financial-services",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SEO for financial services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is search work for advisers, brokers, and fintechs. It ranks product and advice pages so clients find you, while keeping every page within FCA financial promotion rules. The aim is qualified enquiries from a field where trust and accuracy decide who wins."
      }
    },
    {
      "@type": "Question",
      "name": "Does financial services SEO follow FCA rules?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Any page promoting a regulated product must be fair, clear, and not misleading under FCA rules. Good financial SEO writes within those rules and your compliance sign off, and still ranks by being clear, accurate, and genuinely useful."
      }
    },
    {
      "@type": "Question",
      "name": "Why is trust so important for finance sites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google treats money pages as high stakes, since poor financial information can cause real harm. Pages with clear author credentials, accurate claims, and honest depth earn both better rankings and client confidence. Trust is the deciding factor in this field."
      }
    },
    {
      "@type": "Question",
      "name": "Can fintechs get cited by AI assistants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with the right structure. Clear entity signals, self contained facts, and answer first content help AI assistants name your firm when users ask for options. This is new ground, so firms that act early gain an edge."
      }
    },
    {
      "@type": "Question",
      "name": "How much does financial services SEO cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A paid audit first, then a scoped monthly retainer based on your products, pages, and compliance needs. You see the scope before you commit, and the plan is built to bring qualified enquiries that cover the cost."
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
      <Financial />
    </>
  );
}