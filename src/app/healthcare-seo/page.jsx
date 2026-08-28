import Healthcare from "./Healthcare";

export const metadata = {
  title: "Healthcare SEO UK | Clinics & Practices | Teqnoor",
  description: "Healthcare SEO for UK private clinics and practices. Rank treatment and local pages to Google's medical standard and win bookings. Consultant led.",
  alternates: {
    canonical: "https://www.b2bseodigitalagency.co.uk/healthcare-seo",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is healthcare SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Healthcare SEO is search work for clinics and practices. It ranks treatment and location pages so patients find you when they search for care. Because health affects wellbeing, Google holds these pages to a high standard for expertise, accuracy, and trust."
      }
    },
    {
      "@type": "Question",
      "name": "Why is E-E-A-T important for health sites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google judges health pages on experience, expertise, authority, and trust, because poor medical information can cause harm. Pages written or reviewed by a qualified clinician, with clear credentials and accurate claims, rank better and serve patients more safely."
      }
    },
    {
      "@type": "Question",
      "name": "Can clinics make claims about treatment results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only careful, honest ones. The ASA and sector rules limit claims about medical outcomes, so copy must avoid guarantees and misleading promises. Good healthcare SEO ranks by being clear, credible, and useful, not by overpromising."
      }
    },
    {
      "@type": "Question",
      "name": "How do private clinics get more bookings from search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rank treatment and location pages, keep a complete Google Business Profile, gather patient reviews, and make booking easy on every page. Credible, well structured content wins both the ranking and the booking."
      }
    },
    {
      "@type": "Question",
      "name": "How much does healthcare SEO cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A paid audit first, then a scoped monthly retainer based on your treatments and locations. You see the scope before you commit, and the plan is built to bring bookings that cover the cost."
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
      <Healthcare />
    </>
  );
}