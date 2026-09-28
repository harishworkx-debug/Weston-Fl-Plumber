import { useEffect } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import {
  ArrowRight,
  Bath,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Facebook,
  Flame,
  Gauge,
  Hammer,
  House,
  Instagram,
  LocateFixed,
  Mail,
  MapPin,
  Menu,
  Phone,
  Pipette,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
  Wrench,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import Home from "./pages/Home";
import { ServiceAreaDirectory, ServicesDirectory } from "./pages/Directory";

export const PHONE = "954-251-0364";
export const PHONE_HREF = "tel:9542510364";
export const ADDRESS = "2645 Executive Park Drive, Weston, FL 33331";
export const MAP_LINK = "https://maps.app.goo.gl/qDUEhqRhmaQgg3tJ7";

export const servicePages = [
  { slug: "plumber-weston-fl", title: "Plumber in Weston, FL", short: "Full-service plumbing for homes and businesses in Weston.", icon: Wrench, image: "/manus-storage/weston-plumber-service_fcc91054.jpg", intro: "When your home needs a steady hand, Weston FL Plumber brings practical diagnosis, careful workmanship, and clear communication to every call. From everyday repairs to urgent plumbing problems, our team helps you understand the issue and the next best step.", benefits: ["Clear explanation before work begins", "Careful protection of floors and finished spaces", "Solutions matched to your property and priorities"], process: ["Tell us what is happening and where", "We inspect the visible symptoms and likely source", "We explain practical repair or replacement paths", "You decide how you would like to move forward"] },
  { slug: "residential-plumbing-weston-fl", title: "Residential Plumbing in Weston, FL", short: "Thoughtful plumbing service for South Florida homes.", icon: House, image: "/manus-storage/weston-plumber-service_fcc91054.jpg", intro: "Your home’s plumbing should feel invisible—in the best way. We help Weston homeowners with fixtures, supply lines, drains, water heaters, toilets, and the everyday repairs that keep a household moving.", benefits: ["Respectful in-home service", "Solutions for kitchens, baths, utility rooms, and exterior lines", "Straightforward options for repair and replacement"], process: ["Review the symptoms and your home’s layout", "Inspect the fixture, line, or equipment", "Prioritize the repair around safety and function", "Test the work and leave the area orderly"] },
  { slug: "emergency-plumber-weston-fl", title: "Emergency Plumber in Weston, FL", short: "Fast guidance when a plumbing problem cannot wait.", icon: Clock3, image: "/manus-storage/weston-plumber-drain_1c18ecd9.jpg", intro: "Burst pipes, overflowing fixtures, sudden loss of water, and active leaks can escalate quickly. Call Weston FL Plumber for help understanding the first steps and getting the problem under control.", benefits: ["Phone guidance for immediate containment", "Focused attention on active water damage risks", "A calm, methodical approach under pressure"], process: ["Call as soon as you notice active water or sewage", "Shut off the nearest fixture valve or main supply if safe", "We identify the source and limit further damage", "We outline the repair needed to restore service"] },
  { slug: "plumbing-repair-weston-fl", title: "Plumbing Repair in Weston, FL", short: "Dependable repairs for fixtures, lines, and plumbing systems.", icon: Hammer, image: "/manus-storage/weston-plumber-service_fcc91054.jpg", intro: "Small plumbing issues rarely improve on their own. We troubleshoot dripping fixtures, weak flow, running toilets, supply line concerns, and other repairs with an emphasis on the underlying cause—not just the symptom.", benefits: ["Diagnosis before parts are changed", "Repair-first thinking when it makes sense", "Respect for your time and your home"], process: ["Describe the issue and when it started", "Inspect connected components", "Repair the source and test the result", "Share care notes to help prevent repeat issues"] },
  { slug: "drain-cleaning-weston-fl", title: "Drain Cleaning in Weston, FL", short: "Clear slow, backed-up, and recurring drains.", icon: Waves, image: "/manus-storage/weston-plumber-drain_1c18ecd9.jpg", intro: "A slow drain is useful information. We help Weston homeowners clear kitchen, bath, laundry, and main-line drainage problems while looking for signs of buildup, intrusion, or a deeper restriction.", benefits: ["Approach matched to the drain and blockage", "Attention to recurring backups", "Practical maintenance guidance"], process: ["Identify which fixtures are affected", "Check for patterns and nearby access points", "Clear the restriction with the appropriate method", "Run water and confirm the drain is moving properly"] },
  { slug: "sewer-line-repair-weston-fl", title: "Sewer Line Repair in Weston, FL", short: "Support for sewer backups, odors, and line concerns.", icon: Waves, image: "/manus-storage/weston-plumber-drain_1c18ecd9.jpg", intro: "Sewer line problems can affect comfort, sanitation, and the way your whole property functions. We help locate the problem, explain what the symptoms may mean, and identify the least disruptive path forward.", benefits: ["Careful attention to recurring symptoms", "Clear explanation of repair considerations", "Solutions focused on restoring dependable flow"], process: ["Review backups, odors, and drainage patterns", "Inspect accessible cleanouts and connected fixtures", "Discuss repair scope and practical next steps", "Restore flow and verify the system response"] },
  { slug: "leak-detection-weston-fl", title: "Leak Detection in Weston, FL", short: "Find hidden water leaks before they become bigger problems.", icon: Gauge, image: "/manus-storage/weston-plumber-service_fcc91054.jpg", intro: "Some leaks announce themselves. Others show up as a warm wall, a damp cabinet, an unexplained water bill, or a sound behind the wall. We help Weston property owners narrow down the source and make an informed repair decision.", benefits: ["Focus on source, not just visible moisture", "Careful inspection around fixtures and supply lines", "Actionable next steps after the cause is identified"], process: ["Map the symptoms and affected areas", "Check fixtures, valves, visible lines, and pressure clues", "Narrow the likely source", "Repair or refer the next step based on what is found"] },
  { slug: "water-heater-repair-weston-fl", title: "Water Heater Repair in Weston, FL", short: "Restore reliable hot water and address heater concerns.", icon: Flame, image: "/manus-storage/weston-plumber-service_fcc91054.jpg", intro: "No hot water, inconsistent temperature, unusual sounds, and visible moisture around a heater all deserve attention. We help diagnose water heater concerns and explain the repair or replacement path that fits the situation.", benefits: ["Diagnosis of common heater symptoms", "Attention to connections, valves, and visible condition", "Repair and replacement guidance in plain language"], process: ["Review temperature, noise, and water symptoms", "Inspect the heater and surrounding connections", "Explain repairability and replacement considerations", "Test hot water delivery after the work"] },
  { slug: "water-heater-installation-weston-fl", title: "Water Heater Installation in Weston, FL", short: "A considered approach to new water heater installation.", icon: Droplets, image: "/manus-storage/weston-plumber-service_fcc91054.jpg", intro: "A new water heater is a household decision, not simply a box swap. We help evaluate your existing setup, usage needs, available space, and the practical details that affect a clean installation.", benefits: ["Installation planning around your home", "Clear discussion of equipment and connections", "Attention to safe, tidy final setup"], process: ["Review household hot-water needs", "Assess the existing location and connections", "Coordinate the installation approach", "Verify operation and explain basic care"] },
  { slug: "toilet-repair-weston-fl", title: "Toilet Repair in Weston, FL", short: "Fix running, leaking, rocking, or clogged toilets.", icon: Bath, image: "/manus-storage/weston-plumber-service_fcc91054.jpg", intro: "A toilet that runs, rocks, leaks, or clogs can waste water and disrupt your day. We troubleshoot the fixture, supply, seal, and drain connection to identify the repair that makes sense.", benefits: ["Repair of common toilet symptoms", "Attention to floor and supply-line leaks", "Testing for proper fill, flush, and shutoff"], process: ["Describe the issue and frequency", "Inspect tank, bowl, supply, seal, and connection", "Repair the failed component or explain options", "Test the fixture through multiple cycles"] },
];

export const locations = ["Miramar, FL", "Pembroke Pines, FL", "Cooper City, FL", "Southwest Ranches, FL", "Davie, FL", "Plantation, FL", "Sunrise, FL", "Pembroke Park, FL", "Hialeah, FL"];
export const locationSlug = (name: string) => name.toLowerCase().replaceAll(",", "").replaceAll(" ", "-");

export function SEO({ title, description, schema }: { title: string; description: string; schema?: object }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute("name", name); document.head.appendChild(tag); }
      tag.setAttribute("content", content);
    };
    setMeta("description", description);
    setMeta("robots", "index,follow");
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    const productionUrl = `https://www.westonflplumber.com${window.location.pathname}`;
    canonical.setAttribute("rel", "canonical"); canonical.setAttribute("href", productionUrl); if (!canonical.parentNode) document.head.appendChild(canonical);
    const setOg = (property: string, content: string) => { let tag = document.querySelector(`meta[property="${property}"]`); if (!tag) { tag = document.createElement("meta"); tag.setAttribute("property", property); document.head.appendChild(tag); } tag.setAttribute("content", content); };
    setOg("og:title", title); setOg("og:description", description); setOg("og:url", productionUrl); setOg("og:type", "website");
    if (schema) {
      const old = document.getElementById("page-schema"); old?.remove();
      const script = document.createElement("script"); script.id = "page-schema"; script.type = "application/ld+json"; script.textContent = JSON.stringify(schema); document.head.appendChild(script);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [title, description, schema]);
  return null;
}

export function CallButton({ children = "Call Now", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a className={`btn-primary ${className}`} href={PHONE_HREF}><Phone size={17} />{children}</a>;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="site-shell">
    <div className="topline"><div className="container topline-inner"><span><MapPin size={14} /> Proudly serving Weston and nearby South Florida communities</span><a href={PHONE_HREF}><Phone size={14} /> {PHONE}</a></div></div>
    <header className="site-header"><div className="container nav-wrap">
      <Link href="/" className="brand"><span className="brand-mark"><Wrench size={22} /></span><span><strong>Weston FL</strong><em>Plumber</em></span></Link>
      <nav className={open ? "main-nav open" : "main-nav"}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <div className="nav-dropdown"><button type="button">Services <ChevronDown size={15} /></button><div className="dropdown-menu"><Link href="/services" onClick={() => setOpen(false)}>All Plumbing Services <ArrowRight size={14} /></Link>{servicePages.slice(0, 6).map(service => <Link key={service.slug} href={`/${service.slug}`} onClick={() => setOpen(false)}>{service.title} <ArrowRight size={14} /></Link>)}</div></div>
        <div className="nav-dropdown"><button type="button">Service area <ChevronDown size={15} /></button><div className="dropdown-menu"><Link href="/service-area" onClick={() => setOpen(false)}>All Service Areas <ArrowRight size={14} /></Link><Link href="/plumber-weston-fl" onClick={() => setOpen(false)}>Weston, FL <ArrowRight size={14} /></Link>{locations.map(location => <Link key={location} href={`/plumber-${locationSlug(location)}`} onClick={() => setOpen(false)}>{location} <ArrowRight size={14} /></Link>)}</div></div>
        <a href="/#why-us" onClick={() => setOpen(false)}>Why us</a><a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
        <CallButton className="nav-call">Call Now</CallButton>
      </nav>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div></header>
    <main>{children}</main>
    <footer className="footer"><div className="container footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark"><Wrench size={22} /></span><span><strong>Weston FL</strong><em>Plumber</em></span></Link><p>Local plumbing support for homes and businesses in Weston, Florida and surrounding communities.</p></div><div><h3>Services</h3><Link href="/services">All plumbing services</Link><Link href="/plumber-weston-fl">Plumbing service</Link><Link href="/emergency-plumber-weston-fl">Emergency plumbing</Link><Link href="/drain-cleaning-weston-fl">Drain cleaning</Link><Link href="/leak-detection-weston-fl">Leak detection</Link><Link href="/water-heater-repair-weston-fl">Water heaters</Link></div><div><h3>Service area</h3><Link href="/service-area">All service areas</Link><Link href="/plumber-weston-fl">Weston, FL</Link>{locations.map(loc => <Link key={loc} href={`/plumber-${locationSlug(loc)}`}>{loc}</Link>)}</div><div><h3>Get in touch</h3><a href={PHONE_HREF} className="footer-contact"><Phone size={16} /> {PHONE}</a><a href={`mailto:service@westonflplumber.com`} className="footer-contact"><Mail size={16} /> service@westonflplumber.com</a><p className="footer-address"><MapPin size={16} /> {ADDRESS}</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Weston FL Plumber</span><span>Official business website · Weston, Florida</span></div></footer>
    <a href={PHONE_HREF} className="mobile-call"><Phone size={18} /> Call Now · {PHONE}</a>
  </div>;
}

function ContactStrip() { return <section className="contact-strip"><div className="container contact-strip-inner"><div><span className="eyebrow light">Ready when you need us</span><h2>Let’s get your plumbing back on track.</h2><p>Call Weston FL Plumber to talk through your plumbing concern with the team.</p></div><div className="contact-actions"><CallButton>Speak With a Plumber</CallButton><a className="btn-ghost-light" href={`mailto:service@westonflplumber.com`}><Mail size={17} /> Email the team</a></div></div></section> }

function ServicePage({ service }: { service: typeof servicePages[number] }) {
  const ServiceIcon = service.icon;
  const related = servicePages.filter(s => s.slug !== service.slug).slice(0, 3);
  return <><SEO title={`${service.title} | Weston FL Plumber`} description={`${service.short} Call Weston FL Plumber at ${PHONE}.`} schema={{"@context":"https://schema.org","@type":"Service","name":service.title,"serviceType":"Plumbing","areaServed":"Weston, Florida","provider":{"@type":"LocalBusiness","name":"Weston FL Plumber","telephone":PHONE}}} /><div className="subpage-hero"><div className="container subpage-hero-inner"><div><Link href="/" className="crumb">Home / Services / {service.title}</Link><div className="service-icon large"><ServiceIcon size={28} /></div><h1>{service.title}</h1><p>{service.short}</p><CallButton>Call Now</CallButton></div><img src={service.image} alt={`${service.title} service`} /></div></div><section className="section"><div className="container detail-grid"><article className="detail-copy"><span className="eyebrow">Service overview</span><h2>Clear answers. Careful work. A better next step.</h2><p>{service.intro}</p><p>Every property has its own layout, fixtures, access points, and history. Our approach is to start with what you are seeing, inspect the likely source, and give you useful information before the work moves forward.</p><div className="benefit-list">{service.benefits.map(item => <div key={item}><span><Check size={16} /></span><p>{item}</p></div>)}</div></article><aside className="process-card"><span className="eyebrow">What to expect</span><h3>A straightforward process</h3>{service.process.map((step, i) => <div className="process-step" key={step}><b>0{i + 1}</b><span>{step}</span></div>)}<CallButton className="full-button">Call About This Service</CallButton></aside></div></section><section className="faq-section"><div className="container faq-layout"><div><span className="eyebrow">Common questions</span><h2>Helpful context before you call.</h2><p>Have a question about a plumbing symptom or service? Call and tell us what is happening. We’ll help you understand the next useful step.</p></div><div className="faq-list"><Faq q={`How do I know I need ${service.title.toLowerCase()}?`} a="If the issue is recurring, worsening, affecting multiple fixtures, or causing moisture or water damage, it is worth calling sooner rather than later. We can help you talk through the symptoms." /><Faq q="What should I do before the plumber arrives?" a="If it is safe, stop using the affected fixture and shut off the nearest valve or main water supply for an active leak. For suspected gas leaks, leave the area and contact your gas utility or emergency services." /><Faq q="Can I call to ask a question first?" a="Yes. Call Weston FL Plumber and explain what you are noticing, where it is happening, and how long it has been going on." /></div></div></section><section className="section related-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Explore related services</span><h2>More ways we can help.</h2></div><Link href="/#services" className="text-link">View all services <ArrowRight size={16} /></Link></div><div className="related-grid">{related.map(item => <ServiceCard key={item.slug} service={item} />)}</div><div className="service-area-links"><span className="eyebrow">Also serving nearby</span><div>{locations.map(location => <Link key={location} href={`/plumber-${locationSlug(location)}`}>{location} <ArrowRight size={14} /></Link>)}</div></div></div></section><ContactStrip /></>;
}

function Faq({ q, a }: { q: string; a: string }) { const [open, setOpen] = useState(false); return <div className={open ? "faq open" : "faq"}><button onClick={() => setOpen(!open)}><span>{q}</span><ChevronDown size={18} /></button>{open && <p>{a}</p>}</div>; }

function ServiceCard({ service }: { service: typeof servicePages[number] }) { const Icon = service.icon; return <Link href={`/${service.slug}`} className="service-card"><div className="service-icon"><Icon size={22} /></div><h3>{service.title}</h3><p>{service.short}</p><span className="text-link">{service.title} <ArrowRight size={15} /></span></Link>; }

function LocationPage({ location }: { location: string }) { const city = location.replace(", FL", ""); return <><SEO title={`Plumber in ${location} | Weston FL Plumber`} description={`Local plumbing service for homes and businesses in ${location}. Call ${PHONE}.`} schema={{"@context":"https://schema.org","@type":"LocalBusiness","name":"Weston FL Plumber","telephone":PHONE,"address":{"@type":"PostalAddress","streetAddress":ADDRESS,"addressLocality":"Weston","addressRegion":"FL","postalCode":"33331"},"areaServed":location}} /><div className="subpage-hero location-hero"><div className="container subpage-hero-inner"><div><Link href="/" className="crumb">Home / Service area / {location}</Link><div className="service-icon large"><MapPin size={28} /></div><h1>Plumber in {location}</h1><p>Professional plumbing support for nearby South Florida homes and businesses.</p><CallButton>Call Now</CallButton></div><img src="/manus-storage/weston-plumber-hero_53f4aa36.jpg" alt={`South Florida plumbing service near ${city}`} /></div></div><section className="section"><div className="container location-copy"><div><span className="eyebrow">Serving {city}</span><h2>Plumbing help that feels close to home.</h2><p>Weston FL Plumber serves customers in {city} with practical support for repairs, drains, leaks, water heaters, fixtures, and other everyday plumbing needs. Whether you are dealing with a slow drain or planning a replacement, our team is ready to listen and help you understand the options.</p><p>Our main location is in Weston, Florida. From there, we support nearby communities with the same thoughtful communication and careful respect for your property.</p><CallButton>Speak With a Plumber</CallButton></div><div className="location-note"><ShieldCheck size={26} /><h3>Start with a clear conversation</h3><p>Tell us what is happening, where you are located, and what you have already noticed. We’ll help you take the next practical step.</p><a href={MAP_LINK} target="_blank" rel="noreferrer" className="text-link">View our Weston location <ArrowRight size={15} /></a></div></div></section><section className="soft-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Popular services</span><h2>Support for the problems that interrupt your day.</h2></div></div><div className="related-grid">{servicePages.slice(0, 6).map(item => <ServiceCard key={item.slug} service={item} />)}</div></div></section><ContactStrip /></> }

function NotFound() { return <div className="not-found"><span className="eyebrow">404</span><h1>That page has moved.</h1><p>Return to the Weston FL Plumber homepage to find the service you need.</p><Link href="/" className="btn-primary"><ArrowRight size={17} /> Back home</Link></div> }

function Router() { return <Switch><Route path="/" component={Home} /><Route path="/services" component={ServicesDirectory} /><Route path="/service-area" component={ServiceAreaDirectory} />{servicePages.map(service => <Route key={service.slug} path={`/${service.slug}`}>{() => <ServicePage service={service} />}</Route>)}{locations.map(location => <Route key={location} path={`/plumber-${locationSlug(location)}`}>{() => <LocationPage location={location} />}</Route>)}<Route component={NotFound} /></Switch>; }

export default function App() { return <Layout><Router /></Layout>; }
