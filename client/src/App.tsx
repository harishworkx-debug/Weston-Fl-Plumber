import { useEffect } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import {
  ArrowRight,
  Bath,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Flame,
  Gauge,
  Hammer,
  House,
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
} from "lucide-react";
import { useState } from "react";
import Home from "./pages/Home";
import { ServiceAreaDirectory, ServicesDirectory } from "./pages/Directory";
import { ContactPage, WhyUsPage } from "./pages/Company";
import ServiceLocationPage from "./pages/ServiceLocation";
import ServicePage from "./pages/ServicePage";
import { servicePages } from "./data/services";

export const PHONE = "754-283-8022";
export const PHONE_HREF = "tel:+17542838022";
export const ADDRESS = "2645 Executive Park Drive, Weston, FL 33331";
export const MAP_LINK = "https://maps.app.goo.gl/qDUEhqRhmaQgg3tJ7";



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
    setMeta("twitter:card", "summary_large_image"); setMeta("twitter:title", title); setMeta("twitter:description", description);
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
        <Link href="/why-us" onClick={() => setOpen(false)}>Why us</Link><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <CallButton className="nav-call">Call Now</CallButton>
      </nav>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div></header>
    <main>{children}</main>
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <Link href="/" className="brand footer-brand"><span className="brand-mark"><Wrench size={22} /></span><span><strong>Weston FL</strong><em>Plumber</em></span></Link>
          <p>Local plumbing support for homes and businesses in Weston, Florida and surrounding communities.</p>
          <div className="eeat-badges mt-4">
            <p className="text-sm"><strong>State Certified Plumbing Contractor</strong><br/><a href="https://www.myfloridalicense.com/wl11.asp?mode=0&SID=" target="_blank" rel="noreferrer" className="text-link" style={{fontSize: '0.85em'}}>License #CFC1428593</a></p>
            <p className="text-sm mt-2"><strong>Fully Licensed, Bonded & Insured</strong><br/><span style={{fontSize: '0.85em', opacity: 0.8}}>For your protection and peace of mind.</span></p>
            <p className="text-sm mt-2"><strong>1-Year Warranty</strong><br/><span style={{fontSize: '0.85em', opacity: 0.8}}>On all recommended parts & labor.</span></p>
          </div>
        </div>
        <div>
          <h3>Services</h3>
          <Link href="/services">All plumbing services</Link>
          <Link href="/plumber-weston-fl">Plumbing service</Link>
          <Link href="/emergency-plumber-weston-fl">Emergency plumbing</Link>
          <Link href="/drain-cleaning-weston-fl">Drain cleaning</Link>
          <Link href="/leak-detection-weston-fl">Leak detection</Link>
          <Link href="/water-heater-repair-weston-fl">Water heaters</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/why-us">Why choose us</Link>
          <Link href="/contact">Contact the team</Link>
          <h3 className="mt-4">Hours</h3>
          <p className="text-sm" style={{opacity: 0.8, marginBottom: 4}}><strong>Emergency Service:</strong><br/>24/7 Available</p>
          <p className="text-sm" style={{opacity: 0.8}}><strong>Regular Hours:</strong><br/>Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat-Sun: Closed</p>
        </div>
        <div>
          <h3>Service area</h3>
          <Link href="/service-area">All service areas</Link>
          <Link href="/plumber-weston-fl">Weston, FL</Link>
          {locations.map(loc => <Link key={loc} href={`/plumber-${locationSlug(loc)}`}>{loc}</Link>)}
        </div>
        <div>
          <h3>Get in touch</h3>
          <a href={PHONE_HREF} className="footer-contact"><Phone size={16} /> {PHONE}</a>
          <a href={`mailto:service@westonflplumber.com`} className="footer-contact"><Mail size={16} /> service@westonflplumber.com</a>
          <p className="footer-address"><MapPin size={16} /> {ADDRESS}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Weston FL Plumber</span>
        <span>Official business website · Weston, Florida</span>
      </div>
    </footer>
    <a href={PHONE_HREF} className="mobile-call" aria-label={`Call Weston FL Plumber at ${PHONE}`}><Phone size={18} /><span>Call Now</span><b>{PHONE}</b></a>
  </div>;
}

function ContactStrip() { return <section className="contact-strip"><div className="container contact-strip-inner"><div><span className="eyebrow light">Ready when you need us</span><h2>Let’s get your plumbing back on track.</h2><p>Call Weston FL Plumber to talk through your plumbing concern with the team.</p></div><div className="contact-actions"><CallButton>Speak With a Plumber</CallButton><a className="btn-ghost-light" href={`mailto:service@westonflplumber.com`}><Mail size={17} /> Email the team</a></div></div></section> }



function Faq({ q, a }: { q: string; a: string }) { const [open, setOpen] = useState(false); return <div className={open ? "faq open" : "faq"}><button onClick={() => setOpen(!open)}><span>{q}</span><ChevronDown size={18} /></button>{open && <p>{a}</p>}</div>; }

function ServiceCard({ service }: { service: typeof servicePages[number] }) { const Icon = service.icon; return <Link href={`/${service.slug}`} className="service-card"><div className="service-icon"><Icon size={22} /></div><h3>{service.title}</h3><p>{service.short}</p><span className="text-link">{service.title} <ArrowRight size={15} /></span></Link>; }

function LocationPage({ location }: { location: string }) { const city = location.replace(", FL", ""); return <><SEO title={`Plumber in ${location} | Weston FL Plumber`} description={`Local plumbing service for homes and businesses in ${location}. Call ${PHONE}.`} schema={{"@context":"https://schema.org","@type":"LocalBusiness","name":"Weston FL Plumber","telephone":PHONE,"address":{"@type":"PostalAddress","streetAddress":ADDRESS,"addressLocality":"Weston","addressRegion":"FL","postalCode":"33331"},"areaServed":location}} /><div className="subpage-hero location-hero"><div className="container subpage-hero-inner"><div><Link href="/" className="crumb">Home / Service area / {location}</Link><div className="service-icon large"><MapPin size={28} /></div><h1>Plumber in {location}</h1><p>Professional plumbing support for nearby South Florida homes and businesses.</p><CallButton>Call Now</CallButton></div><img src="/assets/hero.jpg" alt={`South Florida plumbing service near ${city}`} /></div></div><section className="section"><div className="container location-copy"><div><span className="eyebrow">Serving {city}</span><h2>Plumbing help that feels close to home.</h2><p>Weston FL Plumber serves customers in {city} with practical support for repairs, drains, leaks, water heaters, fixtures, and other everyday plumbing needs. Whether you are dealing with a slow drain or planning a replacement, our team is ready to listen and help you understand the options.</p><p>Our main location is in Weston, Florida. From there, we support nearby communities with the same thoughtful communication and careful respect for your property.</p><CallButton>Speak With a Plumber</CallButton></div><div className="location-note"><ShieldCheck size={26} /><h3>Start with a clear conversation</h3><p>Tell us what is happening, where you are located, and what you have already noticed. We’ll help you take the next practical step.</p><a href={MAP_LINK} target="_blank" rel="noreferrer" className="text-link">View our Weston location <ArrowRight size={15} /></a></div></div></section><section className="soft-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Popular services in {city}</span><h2>Support for the problems that interrupt your day.</h2></div></div><div className="related-grid">{servicePages.map(item => { const Icon = item.icon; return <Link key={item.slug} href={`/${item.baseSlug}-${locationSlug(location)}`} className="service-card"><div className="service-icon"><Icon size={22} /></div><h3>{item.title.replace("Weston", city)}</h3><p>{item.short.replace("Weston", city)}</p><span className="text-link">View Service <ArrowRight size={15} /></span></Link>; })}</div></div></section><ContactStrip /></> }

function NotFound() { return <div className="not-found"><span className="eyebrow">404</span><h1>That page has moved.</h1><p>Return to the Weston FL Plumber homepage to find the service you need.</p><Link href="/" className="btn-primary"><ArrowRight size={17} /> Back home</Link></div> }

function Router() { return <Switch><Route path="/" component={Home} /><Route path="/services" component={ServicesDirectory} /><Route path="/service-area" component={ServiceAreaDirectory} /><Route path="/why-us" component={WhyUsPage} /><Route path="/contact" component={ContactPage} />{servicePages.map(service => <Route key={service.slug} path={`/${service.slug}`}>{() => <ServicePage service={service} />}</Route>)}{locations.map(location => <Route key={location} path={`/plumber-${locationSlug(location)}`}>{() => <LocationPage location={location} />}</Route>)}{locations.map(location => servicePages.map(service => <Route key={`${(service as any).baseSlug}-${location}`} path={`/${(service as any).baseSlug}-${locationSlug(location)}`}>{() => <ServiceLocationPage service={service} location={location} />}</Route>))}<Route component={NotFound} /></Switch>; }

export default function App() { return <Layout><Router /></Layout>; }
