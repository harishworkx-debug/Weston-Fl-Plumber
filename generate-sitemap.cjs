const fs = require('fs');
const locations = ['Miramar, FL', 'Pembroke Pines, FL', 'Cooper City, FL', 'Southwest Ranches, FL', 'Davie, FL', 'Plantation, FL', 'Sunrise, FL', 'Pembroke Park, FL', 'Hialeah, FL'];
const services = ['plumber', 'residential-plumbing', 'emergency-plumber', 'plumbing-repair', 'drain-cleaning', 'sewer-line-repair', 'leak-detection', 'water-heater-repair', 'water-heater-installation', 'toilet-repair'];
const locationSlug = (name) => name.toLowerCase().replace(/,/g, '').replace(/ /g, '-');

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
sitemap += '  <url><loc>https://www.westonflplumber.com/</loc><lastmod>2026-09-28</lastmod><priority>1.0</priority></url>\n';
sitemap += '  <url><loc>https://www.westonflplumber.com/services</loc><lastmod>2026-09-28</lastmod><priority>0.95</priority></url>\n';
sitemap += '  <url><loc>https://www.westonflplumber.com/service-area</loc><lastmod>2026-09-28</lastmod><priority>0.9</priority></url>\n';
sitemap += '  <url><loc>https://www.westonflplumber.com/why-us</loc><lastmod>2026-09-28</lastmod><priority>0.8</priority></url>\n';
sitemap += '  <url><loc>https://www.westonflplumber.com/contact</loc><lastmod>2026-09-28</lastmod><priority>0.8</priority></url>\n';
sitemap += '  <url><loc>https://www.westonflplumber.com/blog</loc><lastmod>2026-10-02</lastmod><priority>0.85</priority></url>\n';

const blogArticles = [
  "what-to-do-when-a-pipe-bursts-in-weston",
  "7-signs-you-need-professional-drain-cleaning",
  "why-is-my-water-bill-suddenly-so-high-weston",
  "water-heater-repair-vs-replacement-guide",
  "how-to-find-a-hidden-water-leak-in-your-home",
  "common-plumbing-problems-in-south-florida-homes",
  "when-should-you-call-an-emergency-plumber",
  "how-much-does-drain-cleaning-cost-in-weston-fl"
];
for (const article of blogArticles) {
  sitemap += '  <url><loc>https://www.westonflplumber.com/blog/' + article + '</loc><lastmod>2026-10-02</lastmod><priority>0.8</priority></url>\n';
}

for (const service of services) {
  sitemap += '  <url><loc>https://www.westonflplumber.com/' + service + '-weston-fl</loc><lastmod>2026-09-28</lastmod><priority>0.9</priority></url>\n';
}
for (const location of locations) {
  sitemap += '  <url><loc>https://www.westonflplumber.com/plumber-' + locationSlug(location) + '</loc><lastmod>2026-09-28</lastmod><priority>0.8</priority></url>\n';
}
for (const location of locations) {
  for (const service of services) {
    if (service === 'plumber') continue; // Avoid duplicate /plumber-{location} entry
    sitemap += '  <url><loc>https://www.westonflplumber.com/' + service + '-' + locationSlug(location) + '</loc><lastmod>2026-09-28</lastmod><priority>0.7</priority></url>\n';
  }
}
sitemap += '</urlset>\n';

fs.writeFileSync('client/public/sitemap.xml', sitemap);
