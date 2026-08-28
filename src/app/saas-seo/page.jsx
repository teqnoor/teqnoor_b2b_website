import Saas from "./Saas";

export const metadata = {
  title: "SaaS SEO Agency UK | B2B Software Growth | Teqnoor",
  description: "SaaS SEO built for long sales cycles and product-led growth. Rank for the terms buyers use before they book a demo. Consultant led, no filler.",
  alternates: {
    canonical: "https://www.b2bseodigitalagency.co.uk/saas-seo",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SaaS SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SaaS SEO is search optimisation for software companies. It targets the terms buyers use while comparing tools, such as category, comparison, and alternative searches, and ties them to trials and demos. The aim is qualified pipeline, not traffic for its own sake."
      }
    },
    {
      "@type": "Question",
      "name": "How long does SaaS SEO take to work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a new or low authority site, expect early ranking movement in three to six months and meaningful trials or demos from search in six to twelve. Bottom of funnel comparison pages often convert first, since those buyers are close to a decision."
      }
    },
    {
      "@type": "Question",
      "name": "What are comparison and alternative pages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "These are pages built for buyers searching \"your tool vs rival\" or \"rival alternative\". They set out the differences plainly and honestly. They convert well because the reader is close to choosing, and they are among the highest value pages in SaaS SEO."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with AI SEO for SaaS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We structure your pages so AI assistants name your product when buyers ask for options. That means clear entity signals, self contained facts, and answer first content ChatGPT, Perplexity, and Google AI Overviews can quote."
      }
    },
    {
      "@type": "Question",
      "name": "How do you measure SaaS SEO success?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We measure trials, demos, and pipeline from search, not raw traffic. Rankings and clicks matter only where they lead to a product action, so reporting focuses on the visits that turn into signups and sales conversations."
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
      <Saas />
    </>
  );
}