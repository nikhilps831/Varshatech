import { COMPANY_INFO } from "@/data/companyData";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "description": COMPANY_INFO.subtitle,
    "url": "http://www.versatechepc.com",
    "telephone": COMPANY_INFO.phones[0],
    "email": COMPANY_INFO.emails.sales,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "33, Sarvashree Nagar, Umred Road, Dighori",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440034",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1095,
      "longitude": 79.1325
    },
    "foundingDate": "2008",
    "priceRange": "$$$",
    "openingHours": "Mo-Sa 09:00-18:00",
    "sameAs": [
      "http://www.versatechepc.com"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
