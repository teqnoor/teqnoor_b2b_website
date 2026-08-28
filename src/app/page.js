import Home from "./Home";

export const metadata = {
  title: "B2B SEO Agency UK | Rankings, Leads & AI | Teqnoor",
  description: "B2B SEO services that bring qualified leads, not just rankings. Consultant led, built for search and AI answers. Free SEO review, UK based.",
  alternates: {
    canonical: "https://www.b2bseodigitalagency.co.uk",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is B2B SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B2B SEO is search work for businesses selling to other businesses, where deals are high value and buyers research for weeks. It ranks the pages your buyers find during that research, and increasingly gets you named in AI answers, so search brings you qualified enquiries, not just traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Are you an agency or a consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both in practice. You get the focus and direct access of a consultant, so the person doing the work is the person you speak to, with the full service of an agency across technical, content, and authority. There are no junior handovers."
      }
    },
    {
      "@type": "Question",
      "name": "How long does B2B SEO take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a newer or low authority site, expect early ranking movement in three to six months and steady leads in six to twelve. Low competition industry terms move faster, and head terms take longer, so we focus on the winnable pages first."
      }
    },
    {
      "@type": "Question",
      "name": "How much does B2B SEO cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Work starts with a paid audit, then a scoped monthly retainer based on the pages and links your plan needs. You see the scope before you commit, with no long tie in."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with my industry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus on B2B and high value fields, with dedicated pages for SaaS, accountancy, law, healthcare, and financial services. If your buyers research before they buy, the approach fits, whether or not your sector is listed."
      }
    },
    {
      "@type": "Question",
      "name": "What is AI SEO, and do I need it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI SEO gets your brand named and cited by ChatGPT, Gemini, Perplexity, and Google's AI Overviews. As more buyers research with AI, being in those answers matters. It shares the same foundations as classic SEO, so we build both together."
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
      <Home />
    </>
  );
}