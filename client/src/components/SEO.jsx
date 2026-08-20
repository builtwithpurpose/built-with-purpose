import { Helmet } from 'react-helmet-async';
import { generateRouteSchema } from '../utils/schemaGenerator';

const DEFAULT_TITLE = 'Built With Purpose | Web Development, SEO & UI/UX Company in Coimbatore';
const DEFAULT_DESCRIPTION = 'Built With Purpose is a premier web development and SEO company in Coimbatore, Tamil Nadu. We build modern React applications, MERN stack solutions, custom website designs, and SEO strategies.';
const DEFAULT_KEYWORDS = 'web development company in Coimbatore, website development company in Coimbatore, website design company in Coimbatore, SEO services in Coimbatore, web development for small businesses, website development for startups, React development services, business website development';
const DOMAIN = 'https://www.builtwithpurpose.in';
const DEFAULT_OG_IMAGE = `${DOMAIN}/og-image.png`;

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  schema = null,
}) => {
  const canonicalUrl = canonicalPath ? `${DOMAIN}${canonicalPath}` : DOMAIN;
  const finalSchema = schema || generateRouteSchema(canonicalPath, { title, description });

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Built With Purpose" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {finalSchema && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
