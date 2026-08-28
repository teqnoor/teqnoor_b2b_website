import Accountants from "./Accountants";

export const metadata = {
  title: "SEO for Accountants UK | Win Local Clients | Teqnoor",
  description: "SEO for UK accountancy practices. Rank for the services and towns your clients search, from self assessment to bookkeeping. Consultant led, no filler.",
  alternates: {
    canonical: "https://www.b2bseodigitalagency.co.uk/seo-for-accountants",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do accountants need SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most people find an accountant through search, often looking for a service and a town together. SEO puts a practice in front of those searchers, wins map pack visibility, and brings enquiries without paying per click. It is a steady source of local clients."
      }
    },
    {
      "@type": "Question",
      "name": "When should an accountant start SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start at least three to four months before your busy season. Self assessment demand builds through autumn to the 31 January deadline, and tax year end demand rises before April. Rankings take time, so early work means you are visible when searches peak."
      }
    },
    {
      "@type": "Question",
      "name": "How do accountants rank in the local map pack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A complete, accurate Google Business Profile, consistent name, address, and phone across the web, local reviews, and a service page for each town you cover. Google rewards practices with clear local signals and genuine, useful content."
      }
    },
    {
      "@type": "Question",
      "name": "Is SEO better than paid ads for accountants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They do different jobs. Ads bring enquiries fast but stop when you stop paying. SEO builds slower and keeps working, and clicks are free once you rank. Most practices use ads for busy seasons and SEO for steady, long term enquiries."
      }
    },
    {
      "@type": "Question",
      "name": "How much does SEO for accountants cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Work starts with a paid audit, then a scoped monthly retainer based on the services and towns you want to rank for. You see the scope before you commit, and the plan fits a practice budget."
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
      <Accountants />
    </>
  );
}