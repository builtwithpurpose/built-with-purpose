/**
 * Schema.org Structured Data Generator for Built With Purpose
 * Generates unified @graph JSON-LD schemas with stable @id references
 */

const DOMAIN = 'https://www.builtwithpurpose.in';

// Verified Organization / LocalBusiness Base Schema Node
export const organizationSchemaNode = {
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${DOMAIN}/#organization`,
  name: 'Built With Purpose',
  url: `${DOMAIN}/`,
  logo: `${DOMAIN}/logo.png`,
  image: `${DOMAIN}/og-image.png`,
  description:
    'Built With Purpose is a premier web development, technical SEO, and UI/UX design company in Coimbatore, Tamil Nadu.',
  email: 'builtwithpurposein@gmail.com',
  telephone: '+91 98422 62888',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Singanallur',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641005',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Coimbatore, Tamil Nadu, India',
  },
  sameAs: [
    'https://twitter.com',
    'https://linkedin.com',
    'https://github.com',
    'https://youtube.com',
    'https://instagram.com',
  ],
};

// Verified WebSite Base Schema Node
export const websiteSchemaNode = {
  '@type': 'WebSite',
  '@id': `${DOMAIN}/#website`,
  url: `${DOMAIN}/`,
  name: 'Built With Purpose',
  description:
    'High-performance web development, technical SEO, and UI/UX design services in Coimbatore.',
  publisher: {
    '@id': `${DOMAIN}/#organization`,
  },
  inLanguage: 'en-IN',
};

// Visible FAQ data from FAQ component (Homepage / Contact Page)
export const mainFaqItems = [
  {
    question: 'What services does Built With Purpose offer in Coimbatore?',
    answer:
      'We provide custom web development, business website development, React web applications, UI/UX design, and technical SEO services in Coimbatore for startups and growing enterprises.',
  },
  {
    question: 'Do you provide web development services in Coimbatore?',
    answer:
      'Yes. Built With Purpose is based in Coimbatore, Tamil Nadu, engineering fast, responsive, and search-optimized websites for local businesses and global brands alike.',
  },
  {
    question: 'Do you provide SEO services in Coimbatore?',
    answer:
      'Yes! We deliver technical SEO audits, on-page keyword optimization, local search strategy, and Schema.org structured data to help your business rank higher on Google.',
  },
  {
    question: 'How long does a typical web development project take?',
    answer:
      'Standard business websites take 3 to 5 weeks from discovery to launch, while complex React web applications take 4 to 8 weeks depending on requirements.',
  },
  {
    question: 'How can I start a website development or SEO project with Built With Purpose?',
    answer:
      'You can reach out through our contact form or call us directly. We will analyze your project requirements and provide a detailed strategy, estimate, and timeline.',
  },
];

/**
 * Route-based Schema Builder
 * Returns a clean JSON-LD graph object with @context and @graph array
 */
export const generateRouteSchema = (routePath, pageMeta = {}) => {
  const normalizedPath = routePath === '/' ? '' : routePath;
  const pageUrl = `${DOMAIN}${normalizedPath}`;
  const webpageId = `${pageUrl}#webpage`;

  const graph = [organizationSchemaNode, websiteSchemaNode];

  // Helper for BreadcrumbList
  const createBreadcrumbs = (items) => ({
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${DOMAIN}${item.path}`,
    })),
  });

  // Helper for FAQPage
  const createFaqPage = (faqs, faqId) => ({
    '@type': 'FAQPage',
    '@id': faqId,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  });

  switch (normalizedPath) {
    case '': // Home
      graph.push({
        '@type': 'WebPage',
        '@id': `${DOMAIN}/#webpage`,
        url: `${DOMAIN}/`,
        name: pageMeta.title || 'Built With Purpose | Web Development & SEO Company in Coimbatore',
        description:
          pageMeta.description ||
          'Built With Purpose is a premier web development and SEO company in Coimbatore, Tamil Nadu.',
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push(createFaqPage(mainFaqItems, `${DOMAIN}/#faq`));
      break;

    case '/about':
      graph.push({
        '@type': 'AboutPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'About Built With Purpose',
        description:
          pageMeta.description ||
          'Learn about Built With Purpose, a premier web development and SEO company based in Coimbatore.',
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push(
        createBreadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ])
      );
      break;

    case '/services':
      graph.push({
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'Web Development & Digital Services Overview',
        description:
          pageMeta.description ||
          'Explore our range of technical services in Coimbatore: React web development, SEO, UI/UX.',
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push(
        createBreadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Services Overview', path: '/services' },
        ])
      );
      break;

    case '/portfolio':
      graph.push({
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'Our Works & Portfolio',
        description:
          pageMeta.description ||
          'Discover our portfolio of high-performance web applications and design solutions.',
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push(
        createBreadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ])
      );
      break;

    case '/contact':
      graph.push({
        '@type': 'ContactPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'Contact Built With Purpose',
        description:
          pageMeta.description ||
          'Get in touch with Built With Purpose for web development and SEO projects in Coimbatore.',
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push(
        createBreadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ])
      );
      graph.push(createFaqPage(mainFaqItems, `${pageUrl}#faq`));
      break;

    case '/web-development':
      graph.push({
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'Web Development Services in Coimbatore',
        description: pageMeta.description,
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push({
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: 'Web Development Services',
        name: 'Web Development Services in Coimbatore',
        description:
          'Professional custom web development services in Coimbatore building high-speed React web applications, business websites, and SEO-optimized digital platforms.',
        url: pageUrl,
        provider: { '@id': `${DOMAIN}/#organization` },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Coimbatore, Tamil Nadu, India',
        },
      });
      graph.push(
        createBreadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Web Development', path: '/web-development' },
        ])
      );
      graph.push(
        createFaqPage(
          [
            {
              question: 'Why choose Built With Purpose for web development in Coimbatore?',
              answer:
                'We build fast, secure, and mobile-friendly websites using modern frameworks like React and Vite. Every site is optimized for Google search rankings and high conversion performance.',
            },
            {
              question: 'How long does it take to develop a custom website?',
              answer:
                'Standard business websites typically take 3 to 5 weeks from initial wireframing to production deployment, while custom React web applications require 4 to 8 weeks depending on features.',
            },
          ],
          `${pageUrl}#faq`
        )
      );
      break;

    case '/seo-services':
      graph.push({
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'SEO Services in Coimbatore',
        description: pageMeta.description,
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push({
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: 'Search Engine Optimization',
        name: 'SEO Services in Coimbatore',
        description:
          'Professional SEO company in Coimbatore specializing in technical SEO, local SEO, keyword optimization, and Core Web Vitals performance.',
        url: pageUrl,
        provider: { '@id': `${DOMAIN}/#organization` },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Coimbatore, Tamil Nadu, India',
        },
      });
      graph.push(
        createBreadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'SEO Services', path: '/seo-services' },
        ])
      );
      graph.push(
        createFaqPage(
          [
            {
              question: 'How quickly can SEO results be seen for a Coimbatore business?',
              answer:
                'Technical SEO fixes and on-page optimizations usually show indexing improvements within 2 to 4 weeks, with measurable organic traffic growth within 3 to 6 months.',
            },
            {
              question: 'What SEO services do you offer?',
              answer:
                'We provide complete technical SEO audits, local Google Business optimization in Coimbatore, semantic keyword mapping, JSON-LD structured data implementation, and Core Web Vitals speed optimization.',
            },
          ],
          `${pageUrl}#faq`
        )
      );
      break;

    case '/ui-ux-design':
      graph.push({
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'UI/UX Design Services in Coimbatore',
        description: pageMeta.description,
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push({
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: 'UI/UX & Website Design Services',
        name: 'UI/UX Design Services in Coimbatore',
        description:
          'Professional UI/UX design services in Coimbatore delivering user-centered web design, mobile app wireframes, interactive prototypes, and design systems.',
        url: pageUrl,
        provider: { '@id': `${DOMAIN}/#organization` },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Coimbatore, Tamil Nadu, India',
        },
      });
      graph.push(
        createBreadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'UI/UX Design', path: '/ui-ux-design' },
        ])
      );
      graph.push(
        createFaqPage(
          [
            {
              question: 'Why is user-centered UI/UX design critical for business websites?',
              answer:
                'Intuitive UI/UX design reduces bounce rates, improves brand credibility, and guides visitors toward conversion actions seamlessly across all screen sizes.',
            },
            {
              question: 'What deliverables are included in your UI/UX design services in Coimbatore?',
              answer:
                'We provide complete user research, wireframes, high-fidelity visual mockups, design tokens, interactive prototypes, and clean developer handoff assets.',
            },
          ],
          `${pageUrl}#faq`
        )
      );
      break;

    case '/react-development':
      graph.push({
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'React Development Company in Coimbatore',
        description: pageMeta.description,
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push({
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: 'React & MERN Development Services',
        name: 'React Development Services in Coimbatore',
        description:
          'Specialized React development services in Coimbatore building high-speed single-page applications, custom React interfaces, and full-stack MERN web platforms.',
        url: pageUrl,
        provider: { '@id': `${DOMAIN}/#organization` },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Coimbatore, Tamil Nadu, India',
        },
      });
      graph.push(
        createBreadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'React Development', path: '/react-development' },
        ])
      );
      graph.push(
        createFaqPage(
          [
            {
              question: 'Why choose React for business web development in Coimbatore?',
              answer:
                'React offers modular component architecture, fast virtual DOM rendering, and seamless scaling, making it ideal for high-speed business web applications.',
            },
            {
              question: 'Can React websites be optimized for SEO?',
              answer:
                'Yes. Built With Purpose builds React websites with semantic HTML structure, pre-rendered metadata, dynamic JSON-LD schema, and fast Vite bundling to ensure clean Google indexation.',
            },
          ],
          `${pageUrl}#faq`
        )
      );
      break;

    case '/business-website-development':
      graph.push({
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'Business Website Development in Coimbatore',
        description: pageMeta.description,
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      graph.push({
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: 'Small Business & Startup Website Development',
        name: 'Business Website Development in Coimbatore',
        description:
          'Tailored business website development solutions for startups and small businesses in Coimbatore. Fast turnaround, responsive UI, and high conversion potential.',
        url: pageUrl,
        provider: { '@id': `${DOMAIN}/#organization` },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Coimbatore, Tamil Nadu, India',
        },
      });
      graph.push(
        createBreadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Business Website Development', path: '/business-website-development' },
        ])
      );
      graph.push(
        createFaqPage(
          [
            {
              question: 'Why is professional business website development important for startups in Coimbatore?',
              answer:
                'A professionally engineered business website builds instant brand credibility, ranks for local commercial search terms, and converts online visitors into qualified sales leads.',
            },
            {
              question: 'How long does business website development take?',
              answer:
                'Standard business websites and startup landing pages typically take 3 to 5 weeks from initial requirements discovery to production deployment.',
            },
          ],
          `${pageUrl}#faq`
        )
      );
      break;

    default:
      graph.push({
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageMeta.title || 'Built With Purpose',
        description: pageMeta.description,
        isPartOf: { '@id': `${DOMAIN}/#website` },
        about: { '@id': `${DOMAIN}/#organization` },
        inLanguage: 'en-IN',
      });
      break;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};
