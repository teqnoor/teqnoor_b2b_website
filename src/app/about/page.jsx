import About from "./About";

export const metadata = {
  title: "About Us | B2B SEO & AI SEO Consultancy | Teqnoor",
  description:
    "Teqnoor is a UK B2B SEO consultancy built for search and AI answers. Founder led, no junior handovers, plain reporting, real data.",
  alternates: {
    canonical: "https://www.b2bseodigitalagency.co.uk/about",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Teqnoor",
  url: "https://b2bseodigitalagency.co.uk/",
  description: "B2B SEO and AI SEO consultancy based in London.",
  email: "info@teqnoor.com",
  telephone: "+447918092156",
  address: {
    "@type": "PostalAddress",
    streetAddress: "27 Gloucester Street",
    addressLocality: "London",
    postalCode: "WC1N 3AX",
    addressCountry: "GB",
  },
  founder: { "@type": "Person", name: "Aamir Ehsan" },
  sameAs: [],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <About />
    </>
  );
}
