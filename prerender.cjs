const fs = require('fs');
const path = require('path');

const DIST_PUBLIC = path.join(__dirname, 'dist', 'public');
const TEMPLATE_PATH = path.join(DIST_PUBLIC, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('Template index.html not found in dist/public!');
  process.exit(1);
}

const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf8');

const PHONE = "754-283-8022";
const ADDRESS = "2645 Executive Park Drive, Weston, FL 33331";
const MAP_LINK = "https://maps.app.goo.gl/qDUEhqRhmaQgg3tJ7";

const locations = ["Miramar, FL", "Pembroke Pines, FL", "Cooper City, FL", "Southwest Ranches, FL", "Davie, FL", "Plantation, FL", "Sunrise, FL", "Pembroke Park, FL", "Hialeah, FL"];
const locationSlug = (name) => name.toLowerCase().replace(/,/g, '').replace(/ /g, '-');

const services = [
  { slug: "plumber-weston-fl", baseSlug: "plumber", title: "Plumber in Weston, FL", short: "Full-service plumbing for homes and businesses in Weston." },
  { slug: "residential-plumbing-weston-fl", baseSlug: "residential-plumbing", title: "Residential Plumbing in Weston, FL", short: "Thoughtful plumbing service for South Florida homes." },
  { slug: "emergency-plumber-weston-fl", baseSlug: "emergency-plumber", title: "Emergency Plumber in Weston, FL", short: "Fast 24/7 priority response when a plumbing emergency cannot wait." },
  { slug: "plumbing-repair-weston-fl", baseSlug: "plumbing-repair", title: "Plumbing Repair in Weston, FL", short: "Dependable repairs for fixtures, lines, and plumbing systems." },
  { slug: "drain-cleaning-weston-fl", baseSlug: "drain-cleaning", title: "Drain Cleaning in Weston, FL", short: "Clear clogged kitchen sinks, bathroom drains, and recurring main line backups." },
  { slug: "sewer-line-repair-weston-fl", baseSlug: "sewer-line-repair", title: "Sewer Line Repair in Weston, FL", short: "Support for sewer line backups, odors, and trenchless pipe repairs." },
  { slug: "leak-detection-weston-fl", baseSlug: "leak-detection", title: "Leak Detection in Weston, FL", short: "Find hidden water leaks under slabs and behind walls before major damage occurs." },
  { slug: "water-heater-repair-weston-fl", baseSlug: "water-heater-repair", title: "Water Heater Repair in Weston, FL", short: "Restore reliable hot water and address tank noise, leaks, or heating failures." },
  { slug: "water-heater-installation-weston-fl", baseSlug: "water-heater-installation", title: "Water Heater Installation in Weston, FL", short: "Expert installation of high-efficiency tank and tankless water heaters." },
  { slug: "toilet-repair-weston-fl", baseSlug: "toilet-repair", title: "Toilet Repair in Weston, FL", short: "Fix running, leaking, rocking, or clogged toilets." }
];

const cityProfiles = {
  "Miramar": { name: "Miramar, FL", tagline: "Dependable plumbing for Miramar's growing neighborhoods", neighborhoods: ["SilverLakes", "Sunset Lakes", "Miramar Town Center", "Historic Miramar"] },
  "Pembroke Pines": { name: "Pembroke Pines, FL", tagline: "Expert local plumbing service for Pembroke Pines households", neighborhoods: ["Pembroke Falls", "Chapel Trail", "Towngate", "Grand Palms"] },
  "Cooper City": { name: "Cooper City, FL", tagline: "Dedicated plumbing repair & maintenance in Cooper City", neighborhoods: ["Country Glen", "Rock Creek", "Embassy Lakes"] },
  "Southwest Ranches": { name: "Southwest Ranches, FL", tagline: "Specialized estate & rural plumbing support in Southwest Ranches", neighborhoods: ["Sunshine Ranches", "Rolling Oaks", "Landmark Ranch Estates"] },
  "Davie": { name: "Davie, FL", tagline: "Prompt, honest plumbing repair & installation for Davie residents", neighborhoods: ["Pine Island Ridge", "Shenandoah", "Davie Ranches", "Forest Ridge"] },
  "Plantation": { name: "Plantation, FL", tagline: "Comprehensive local plumbing solutions in Plantation, FL", neighborhoods: ["Jacaranda", "Plantation Acres", "Plantation Isles"] },
  "Sunrise": { name: "Sunrise, FL", tagline: "Fast & reliable residential plumbing in Sunrise, FL", neighborhoods: ["Sawgrass Mills Area", "Welleby", "Sunrise Golf Village"] },
  "Pembroke Park": { name: "Pembroke Park, FL", tagline: "Straightforward, professional plumbing in Pembroke Park", neighborhoods: ["Lake Shore", "Parkwoods", "Pembroke Park Estates"] },
  "Hialeah": { name: "Hialeah, FL", tagline: "Reliable, high-quality plumbing service for Hialeah homes", neighborhoods: ["Palm Springs", "Hialeah Park", "West Hialeah"] },
  "Weston": { name: "Weston, FL", tagline: "Weston's premier local plumbing contractor since day one", neighborhoods: ["Windmill Ranches", "Savanna", "Weston Hills", "Bonaventure"] }
};

const routes = [];

// 1. Core pages
routes.push({
  path: "",
  title: "Weston FL Plumber | Local Plumbing & Emergency Repairs",
  description: "Looking for a reliable plumber in Weston, FL? Explore professional plumbing, drain cleaning, leak detection, and emergency plumbing services. Call today.",
  h1: "Trusted Plumber in Weston, FL for Residential Plumbing Services",
  schema: {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Weston FL Plumber",
    "telephone": PHONE,
    "address": { "@type": "PostalAddress", "streetAddress": "2645 Executive Park Dr", "addressLocality": "Weston", "addressRegion": "FL", "postalCode": "33331" }
  }
});

routes.push({
  path: "services",
  title: "Plumbing Services in Weston, FL | Weston FL Plumber",
  description: `Explore complete plumbing services in Weston, FL including repairs, drains, leaks, water heaters, toilets, and more. Call ${PHONE}.`,
  h1: "Plumbing Services in Weston, FL",
  schema: { "@context": "https://schema.org", "@type": "CollectionPage", "name": "Plumbing Services in Weston, FL" }
});

routes.push({
  path: "service-area",
  title: "Service Areas | Weston FL Plumber",
  description: `Weston FL Plumber serves Weston and nearby South Florida communities including Miramar, Pembroke Pines, Cooper City, Southwest Ranches, and Davie. Call ${PHONE}.`,
  h1: "Our Plumbing Service Area",
  schema: { "@context": "https://schema.org", "@type": "CollectionPage", "name": "Weston FL Plumber Service Areas" }
});

routes.push({
  path: "why-us",
  title: "Why Choose Weston FL Plumber | Local Plumbing Service",
  description: "Learn why Weston homeowners and businesses choose Weston FL Plumber for clear communication, careful work, and practical plumbing support.",
  h1: "Why Choose Our Weston Plumbing Team?",
  schema: { "@context": "https://schema.org", "@type": "AboutPage", "name": "Why Choose Weston FL Plumber" }
});

routes.push({
  path: "contact",
  title: "Contact Weston FL Plumber | Weston, Florida",
  description: `Contact Weston FL Plumber at ${PHONE} for local plumbing support in Weston, Florida and nearby South Florida communities.`,
  h1: "Contact Weston FL Plumber",
  schema: { "@context": "https://schema.org", "@type": "ContactPage", "name": "Contact Weston FL Plumber" }
});

routes.push({
  path: "blog",
  title: "Plumbing Tips & Guides for Weston Homeowners | Weston FL Plumber Blog",
  description: "Helpful plumbing tips, problem-solving guides, drain cleaning costs, and emergency shutoff advice for Weston and South Florida homeowners.",
  h1: "Plumbing Tips & Guides for Weston Homeowners",
  schema: { "@context": "https://schema.org", "@type": "CollectionPage", "name": "Plumbing Advice & Articles for Weston Homeowners" }
});

const blogArticles = [
  { slug: "what-to-do-when-a-pipe-bursts-in-weston", title: "What to Do When a Pipe Bursts in Your Weston Home", desc: "A burst pipe can flood living spaces in minutes. Learn the immediate shutoff steps to limit water damage in Weston homes before help arrives." },
  { slug: "7-signs-you-need-professional-drain-cleaning", title: "7 Signs You Need Professional Drain Cleaning", desc: "Slow drains and gurgling sinks are warning signs of deep sewer line restrictions. Discover 7 indicators that your drains need expert cleaning." },
  { slug: "why-is-my-water-bill-suddenly-so-high-weston", title: "Why Is My Water Bill Suddenly So High?", desc: "An unexplained jump in your monthly water bill often points to a hidden leak. Learn the top causes of high water bills in South Florida homes." },
  { slug: "water-heater-repair-vs-replacement-guide", title: "Water Heater Repair vs. Replacement: What Should You Choose?", desc: "Not sure whether to repair or replace your failing water heater? Compare costs, tank age, energy efficiency, and warning signs to decide." },
  { slug: "how-to-find-a-hidden-water-leak-in-your-home", title: "How to Find a Hidden Water Leak in Your Home", desc: "Hidden water leaks cause rot, structural damage, and mold before they are noticed. Learn early warning signs and DIY leak detection methods." },
  { slug: "common-plumbing-problems-in-south-florida-homes", title: "Common Plumbing Problems in South Florida Homes", desc: "South Florida's hard water, high humidity, tropical root systems, and soil conditions create distinct plumbing issues. Explore common local challenges." },
  { slug: "when-should-you-call-an-emergency-plumber", title: "When Should You Call an Emergency Plumber?", desc: "Not every plumbing issue requires an midnight service call. Learn how to distinguish between true emergencies and issues that can wait." },
  { slug: "how-much-does-drain-cleaning-cost-in-weston-fl", title: "How Much Does Drain Cleaning Cost in Weston, FL?", desc: "Explore realistic drain cleaning cost factors in Weston, FL. Learn what impacts pricing—from simple sink augering to main sewer line hydro-jetting." }
];

for (const art of blogArticles) {
  routes.push({
    path: `blog/${art.slug}`,
    title: `${art.title} | Weston FL Plumber`,
    description: art.desc,
    h1: art.title,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": art.title, "description": art.desc }
  });
}

// 2. Weston service pages
for (const s of services) {
  routes.push({
    path: s.slug,
    title: `${s.title} | Licensed Plumber Weston FL`,
    description: `${s.short} Premier local plumbing service in Weston, Florida by Weston FL Plumber (#CFC1428593). Call ${PHONE}.`,
    h1: s.title,
    schema: { "@context": "https://schema.org", "@type": "Service", "name": s.title, "areaServed": "Weston, Florida" }
  });
}

// 3. Location pages
for (const loc of locations) {
  const city = loc.replace(", FL", "");
  const prof = cityProfiles[city] || cityProfiles["Weston"];
  const p = `plumber-${locationSlug(loc)}`;
  routes.push({
    path: p,
    title: `Plumber in ${loc} | Weston FL Plumber`,
    description: `Licensed local plumber serving ${loc}. ${prof.tagline}. Neighborhoods: ${prof.neighborhoods.slice(0, 3).join(", ")}. Call ${PHONE}.`,
    h1: `Plumber in ${loc}`,
    schema: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "Weston FL Plumber", "areaServed": loc }
  });
}

// 4. Service-Location pages
for (const loc of locations) {
  const city = loc.replace(", FL", "");
  for (const s of services) {
    if (s.baseSlug === "plumber") continue;
    const p = `${s.baseSlug}-${locationSlug(loc)}`;
    const title = `${s.title.replace("Weston", city)} | Weston FL Plumber`;
    const desc = `${s.short.replace("Weston", city)} Local plumbing service in ${loc}. Call ${PHONE}.`;
    routes.push({
      path: p,
      title: title,
      description: desc,
      h1: s.title.replace("Weston", city),
      schema: { "@context": "https://schema.org", "@type": "Service", "name": s.title.replace("Weston", city), "areaServed": loc }
    });
  }
}

console.log(`Pre-rendering ${routes.length} static routes for technical SEO & crawlers...`);

let count = 0;
for (const r of routes) {
  const canonicalUrl = `https://www.westonflplumber.com/${r.path}`;
  
  let html = templateHtml;
  
  // Replace title
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${r.title}</title>`);
  
  // Replace description
  html = html.replace(/<meta name="description" content=".*?" \/>/gi, `<meta name="description" content="${r.description}" />`);
  
  // Replace canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/gi, `<link rel="canonical" href="${canonicalUrl}" />`);
  
  // Replace Open Graph / Twitter tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/gi, `<meta property="og:title" content="${r.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/gi, `<meta property="og:description" content="${r.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/gi, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/gi, `<meta name="twitter:title" content="${r.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/gi, `<meta name="twitter:description" content="${r.description}" />`);

  // Inject JSON-LD Schema
  const schemaScript = `\n    <script id="page-schema" type="application/ld+json">\n    ${JSON.stringify(r.schema, null, 2)}\n    </script>\n  `;
  html = html.replace('</head>', `${schemaScript}</head>`);

  // Inject initial pre-rendered HTML into #root for zero-JS headless crawlers
  const staticContent = `
    <header className="site-header-ssr" style="padding:15px;background:#0d2433;color:#fff;">
      <div style="max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;">
        <a href="/" style="color:#fff;text-decoration:none;font-weight:bold;font-size:1.2rem;">Weston FL Plumber</a>
        <a href="tel:+17542838022" style="color:#2563eb;background:#fff;padding:8px 16px;border-radius:6px;text-decoration:none;font-weight:bold;">Call 754-283-8022</a>
      </div>
    </header>
    <main style="max-width:1200px;margin:30px auto;padding:0 20px;">
      <h1>${r.h1}</h1>
      <p style="font-size:1.1rem;line-height:1.6;color:#334155;">${r.description}</p>
      <div style="margin-top:20px;padding:20px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
        <p><strong>Primary Service Area:</strong> Weston, Florida & surrounding communities.</p>
        <p><strong>License:</strong> State Certified Plumbing Contractor #CFC1428593</p>
        <p><strong>Office:</strong> 2645 Executive Park Drive, Weston, FL 33331</p>
        <p><strong>24/7 Phone:</strong> <a href="tel:+17542838022">754-283-8022</a></p>
      </div>
    </main>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);

  // Clean unreplaced analytics placeholder
  html = html.replace(/<script defer src="%VITE_ANALYTICS_ENDPOINT%.*?<\/script>/gi, '');

  if (r.path === "") {
    fs.writeFileSync(path.join(DIST_PUBLIC, 'index.html'), html, 'utf8');
  } else {
    const routeDir = path.join(DIST_PUBLIC, r.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
  }
  count++;
}

console.log(`Successfully pre-rendered ${count} static HTML pages in dist/public for Search Console & live technical crawlers!`);
