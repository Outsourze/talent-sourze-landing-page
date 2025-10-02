// components/SEO.js
import Head from "next/head";

export default function SEO({ 
  title, 
  description, 
  url, 
  image = "/og-image.png" 
}) {
  const siteName = "Talentsourze"; // you can set this once

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Talentsourze",
    "url": "https://talentsourze.com",
    "logo": "https://talentsourze.com/favicon-96x96.png"
  };

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://talentsourze.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Talentsourze" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://talentsourze.com/og-image.png" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Organization Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} 
      />
    </Head>
  );
}
