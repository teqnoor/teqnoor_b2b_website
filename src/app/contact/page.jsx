import Contact from "./Contact";

export const metadata = {
  title: "Contact Teqnoor | B2B SEO Consultancy London | Teqnoor",
  description: "Contact Teqnoor for B2B SEO and AI SEO in the UK. Call, email, or request a free SEO review. Based in London, working across the UK",
  alternates: {
    canonical: "https://www.b2bseodigitalagency.co.uk/contact",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Teqnoor",
  "url": "https://b2bseodigitalagency.co.uk/",
  "email": "info@teqnoor.com",
  "telephone": "+447918092156",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "27 Gloucester Street",
    "addressLocality": "London",
    "postalCode": "WC1N 3AX",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+442035764066",
    "contactType": "customer service",
    "areaServed": "GB",
    "availableLanguage": "English"
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Contact />
    </>
  );
}