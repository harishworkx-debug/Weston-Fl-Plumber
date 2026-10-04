import { Link } from "wouter";
import { ArrowRight, Bath, Check, ChevronDown, Clock3, Droplets, Flame, Gauge, House, MapPin, Phone, ShieldCheck, Sparkles, Star, Waves, Wrench } from "lucide-react";
import { useState } from "react";
import { ADDRESS, MAP_LINK, PHONE, PHONE_HREF, SEO } from "../App";
import { servicePages } from "../data/services";

const areas = ["Weston", "Miramar", "Pembroke Pines", "Cooper City", "Southwest Ranches", "Davie", "Plantation", "Sunrise", "Pembroke Park", "Hialeah"];
const problems = [
  "Emergency plumbing backups or burst pipes",
  "Slow, gurgling, or clogged kitchen and bath drains",
  "No hot water or leaking water heater tank",
  "Hidden leaks behind drywall or under concrete slabs",
  "Running or overflowing toilets",
  "Low water pressure from faucets and showerheads",
  "Dripping fixtures and corroded vanity shutoff valves",
  "Garbage disposal jams and laundry line backups"
];

const reviews = [
  { name: "Alejandro", text: "I rarely leave reviews, but the service I received in Savanna deserved one. They were dependable, communicated well, and took the time to make sure our water heater repair was done correctly rather than rushing. Five stars from me!", service: "Water Heater Repair · Weston, FL" },
  { name: "Nebulxx", text: "After dealing with a recurring drain issue in Weston Hills, I called Weston FL Plumber. They brought camera diagnostic gear, found the exact root cause, and fixed it clean. Knowledgeable and very thorough.", service: "Drain Cleaning · Weston, FL" },
  { name: "alex roman", text: "One of the best plumbing companies in Weston FL I've worked with. Communication was excellent, showed up on time in Windmill Ranches, and the quality of work was outstanding.", service: "Toilet Repair & Installation · Weston, FL" },
  { name: "Lorenzo C", text: "We had a midnight emergency leak in Bonaventure. Their emergency plumber in Weston FL responded within 30 minutes, shut off the main, and repaired the burst line smoothly.", service: "Emergency Plumber · Weston, FL" },
  { name: "michelin star", text: "Called them for leak detection in Tequesta. The plumber was courteous, knowledgeable, pinpointed the hidden wall leak without tearing up our tile, and repaired it efficiently.", service: "Leak Detection · Weston, FL" },
  { name: "Sophia R", text: "Five-star experience with this local plumbing company in Weston FL. From scheduling to completing our residential plumbing repair, everything was handled professionally.", service: "Plumbing Repair · Weston, FL" },
  { name: "Maggie Lopez", text: "Best plumbing experience in Weston! My kitchen sink was backing up and turns out my drain needed hydro-jetting. They had the right equipment, made no mess, and were fast.", service: "Drain Cleaning · Weston, FL" },
  { name: "Tim Flounder", text: "Real deal residential plumber in Weston FL. Took care of our bathroom pipe leak, cleaned up impeccably, and verified everything was leak-free before leaving.", service: "Residential Plumbing · Weston, FL" }
];

function HomeFaq({ q, a }: { q: string; a: string }) { 
  const [open, setOpen] = useState(false); 
  return (
    <div className={open ? "faq open" : "faq"}>
      <button onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <ChevronDown size={18} />
      </button>
      {open && <p>{a}</p>}
    </div>
  ); 
}

export function ServiceCard({ service }: { service: typeof servicePages[number] }) { 
  const Icon = service.icon; 
  return (
    <Link href={`/${service.slug}`} className="service-card">
      <div className="service-icon"><Icon size={22} /></div>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <span className="text-link">Explore Service <ArrowRight size={15} /></span>
    </Link>
  ); 
}

export default function Home() { 
  return (
    <>
      <SEO 
        title="Weston FL Plumber | Local Plumbing & Emergency Repairs" 
        description="Looking for a reliable plumber in Weston, FL? Explore professional plumbing, drain cleaning, leak detection, and emergency plumbing services. Call today." 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Plumber",
            "name": "Weston FL Plumber",
            "url": "https://www.westonflplumber.com/",
            "telephone": PHONE,
            "license": "CFC1428593",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2645 Executive Park Dr",
              "addressLocality": "Weston",
              "addressRegion": "FL",
              "postalCode": "33331",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.1003,
              "longitude": -80.3998
            },
            "areaServed": areas.map(area => ({ "@type": "City", "name": area })),
            "openingHours": "Mo-Su 00:00-23:59",
            "sameAs": [MAP_LINK],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services Weston FL",
              "itemListElement": servicePages.map((s, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title
                },
                "position": i + 1
              }))
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why choose Weston FL Plumber as your local plumbing company in Weston, FL?",
                "acceptedAnswer": { "@type": "Answer", "text": "We are headquartered right here in Weston at 2645 Executive Park Drive. We hold Florida Certified Plumbing Contractor License #CFC1428593, provide 24/7 emergency response, transparent upfront pricing, and back all recommended work with a 1-year warranty." }
              },
              {
                "@type": "Question",
                "name": "How fast can an emergency plumber in Weston, FL respond?",
                "acceptedAnswer": { "@type": "Answer", "text": "Because our main office is located in Weston, FL, our emergency plumber response time in Weston averages 15 to 30 minutes for urgent issues like burst pipes, main sewer backups, or leaking water heaters." }
              },
              {
                "@type": "Question",
                "name": "What plumbing services in Weston, FL do you offer?",
                "acceptedAnswer": { "@type": "Answer", "text": "We provide full-service residential and commercial plumbing in Weston, including drain cleaning, high-definition sewer camera inspections, slab leak detection, water heater repair & installation, toilet repair, faucet replacements, and pipe repairs." }
              },
              {
                "@type": "Question",
                "name": "Do you serve nearby South Florida communities outside Weston?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes! While Weston is our primary location and home base, we also provide plumbing service to neighboring areas including Miramar, Pembroke Pines, Cooper City, Southwest Ranches, Davie, Plantation, Sunrise, Pembroke Park, and Hialeah." }
              }
            ]
          }
        ]} 
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow light">Local Plumbing & Emergency Repairs</span>
            <h1>Trusted Plumber in Weston, FL for Residential Plumbing Services</h1>
            <p>
              Looking for a reliable <strong>plumber in Weston, FL</strong>? Weston FL Plumber delivers 24/7 emergency plumbing response, transparent upfront estimates, and master craftsmanship for homes and businesses across Weston. From <strong>drain cleaning</strong> and <strong>leak detection</strong> to <strong>water heater repair</strong> and comprehensive residential plumbing, our licensed team is ready to help.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href={PHONE_HREF}><Phone size={17} /> Call {PHONE} Now</a>
              <a className="btn-ghost-light" href="#services">Explore Professional Plumbing Services <ArrowRight size={17} /></a>
            </div>
            <div className="hero-note">
              <ShieldCheck size={17} />
              <span>Weston HQ: 2645 Executive Park Dr · Licensed & Insured #CFC1428593 · 1-Year Warranty</span>
            </div>
          </div>
          <div className="hero-stat">
            <span>24/7 Emergency Plumbing Service</span>
            <strong>{PHONE}</strong>
            <small>Click to call for immediate priority dispatch in Weston.</small>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container hero-bottom-inner">
            <span><Clock3 size={16} /> 24/7 Emergency Plumber Response</span>
            <span><MapPin size={16} /> Primary Operational Hub: Weston, FL</span>
            <span><Wrench size={16} /> Residential & Commercial Plumbing</span>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <div className="credentials-bar">
        <div className="container credentials-inner">
          <div className="cred-item">
            <ShieldCheck size={24} className="cred-icon" />
            <div>
              <strong>Licensed & Insured</strong>
              <span>State Certified #CFC1428593</span>
            </div>
          </div>
          <div className="cred-item">
            <Clock3 size={24} className="cred-icon" />
            <div>
              <strong>24/7 Emergency Response</strong>
              <span>Fast dispatch across Weston, FL</span>
            </div>
          </div>
          <div className="cred-item">
            <Star size={24} className="cred-icon" fill="currentColor" color="#eab308" />
            <div>
              <strong>Top Rated Local Plumber</strong>
              <span>Trusted by Weston homeowners</span>
            </div>
          </div>
          <div className="cred-item">
            <Check size={24} className="cred-icon" />
            <div>
              <strong>1-Year Warranty</strong>
              <span>On recommended parts & labor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="intro section">
        <div className="container intro-grid">
          <div className="intro-image">
            <img src="/assets/service.jpg" alt="Licensed Plumber in Weston, FL inspecting residential water heater and piping" loading="lazy" />
            <div className="image-badge">
              <strong>Weston, Florida</strong>
              <span>Primary Office: 2645 Executive Park Dr</span>
            </div>
          </div>
          <div className="intro-copy">
            <span className="eyebrow">Local Weston Plumbing Team</span>
            <h2>Your Dedicated Plumbing Company in Weston, Florida</h2>
            <p>
              When a plumbing problem threatens your household, you need a local plumbing team that responds quickly, diagnoses accurately, and treats your property with care. Headquartered right here at 2645 Executive Park Drive, Weston FL Plumber serves homeowners in Savanna, Weston Hills, Windmill Ranches, Bonaventure, Tequesta, and surrounding neighborhoods.
            </p>
            <p>
              As your premier residential plumber, we handle everyday maintenance and critical emergencies with equal dedication. From fixing dripping faucets and weak shower pressure to performing complex line repairs, we deliver honest work without high-pressure sales.
            </p>
            <div className="mini-points">
              <div><Check size={16} /><span>Licensed & Insured Florida Master Plumber (#CFC1428593)</span></div>
              <div><Check size={16} /><span>Fast 24/7 Dispatch for Emergency Plumbing Callouts</span></div>
              <div><Check size={16} /><span>Transparent Upfront Estimates & Written 1-Year Guarantee</span></div>
            </div>
            <Link href="/plumber-weston-fl" className="text-link">
              Learn more about our Weston plumbing services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended H2 #1: Professional Plumbing Services in Weston, Florida */}
      <section id="services" className="soft-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Full Service Range</span>
              <h2>Professional Plumbing Services in Weston, Florida</h2>
            </div>
            <p>
              From routine maintenance to urgent repairs, our licensed technicians provide specialized care for every plumbing system in your home or business.
            </p>
          </div>
          <div className="service-grid">
            {servicePages.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="center-cta">
            <Link href="/plumber-weston-fl" className="btn-secondary">
              View All Plumbing Services in Weston, FL <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Priority H2 Sections 2, 3, 4 */}
      <section className="section keyword-spotlight-section" style={{ background: "var(--bg-alt, #f1f5f9)", padding: "4rem 0" }}>
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">Focused Expertise</span>
            <h2>Core Priority Plumbing Solutions</h2>
            <p>Targeted repair and diagnostic capabilities for the most common household plumbing challenges.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {/* Recommended H2 #2: Emergency Plumbing and Urgent Repairs */}
            <div className="p-6 border rounded-lg bg-white shadow-sm" style={{ background: "#fff", padding: "1.75rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <div className="service-icon mb-3" style={{ color: "#2563eb" }}><Clock3 size={28} /></div>
              <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", fontWeight: 700 }}>Emergency Plumbing and Urgent Repairs</h2>
              <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6 }}>
                Active flooding, burst pipes, and main sewer backups require rapid containment. Our 24/7 emergency plumbers dispatch within 15–30 minutes in Weston to stop water damage and restore safety.
              </p>
              <Link href="/emergency-plumber-weston-fl" className="text-link mt-4" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontWeight: 600 }}>
                Emergency Plumbing Info <ArrowRight size={15} />
              </Link>
            </div>

            {/* Recommended H2 #3: Drain Cleaning and Clogged Drain Solutions */}
            <div className="p-6 border rounded-lg bg-white shadow-sm" style={{ background: "#fff", padding: "1.75rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <div className="service-icon mb-3" style={{ color: "#2563eb" }}><Waves size={28} /></div>
              <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", fontWeight: 700 }}>Drain Cleaning and Clogged Drain Solutions</h2>
              <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6 }}>
                Slow sinks, backed-up showers, and recurring main line blockages? We clear tough drain clogs cleanly using electric augers, high-pressure hydro-jetting, and HD video sewer camera inspections.
              </p>
              <Link href="/drain-cleaning-weston-fl" className="text-link mt-4" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontWeight: 600 }}>
                Drain Cleaning Solutions <ArrowRight size={15} />
              </Link>
            </div>

            {/* Recommended H2 #4: Water Heater Repair and Installation */}
            <div className="p-6 border rounded-lg bg-white shadow-sm" style={{ background: "#fff", padding: "1.75rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <div className="service-icon mb-3" style={{ color: "#2563eb" }}><Flame size={28} /></div>
              <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", fontWeight: 700 }}>Water Heater Repair and Installation</h2>
              <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6 }}>
                No hot water, rumbling sediment noise, or leaking relief valves? We provide expert troubleshooting, component repairs, and high-efficiency tank or tankless water heater replacements.
              </p>
              <Link href="/water-heater-repair-weston-fl" className="text-link mt-4" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontWeight: 600 }}>
                Water Heater Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended H2 #5: Why Choose Our Weston Plumbing Team? */}
      <section id="why-us" className="why-section section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">Local Excellence</span>
            <h2>Why Choose Our Weston Plumbing Team?</h2>
            <p>We treat your home with the care, cleanliness, and professionalism it deserves.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><ShieldCheck /></div>
              <h3>Respect for Your Space</h3>
              <p>We use protective shoe covers, work mats, and clean up thoroughly after every repair in your Weston residence.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Gauge /></div>
              <h3>Focused Diagnosis</h3>
              <p>We target the underlying cause behind symptoms to deliver long-lasting plumbing repair solutions.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Sparkles /></div>
              <h3>Transparent Upfront Pricing</h3>
              <p>No surprise fees or hidden add-ons. You get clear pricing and honest recommendations every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended H2 #6: Plumbing Service Areas Near Weston, FL */}
      <section id="service-area" className="area-section section">
        <div className="container area-grid">
          <div>
            <span className="eyebrow">Weston Operational Base & Nearby Communities</span>
            <h2>Plumbing Service Areas Near Weston, FL</h2>
            <p>
              Weston, Florida is our primary operational base. From our headquarters at 2645 Executive Park Drive, we provide rapid plumbing dispatch throughout all Weston neighborhoods—including Savanna, Weston Hills, Windmill Ranches, Tequesta, Bonaventure, and Isles at Weston—plus neighboring South Florida municipalities.
            </p>
            <div className="area-pills">
              {areas.map((area, i) => (
                <Link key={area} href={i === 0 ? "/plumber-weston-fl" : `/plumber-${area.toLowerCase().replaceAll(" ", "-")}-fl`}>
                  {area}, FL
                </Link>
              ))}
            </div>
            <a href={MAP_LINK} target="_blank" rel="noreferrer" className="text-link mt-4">View Weston office location on Google Maps <ArrowRight size={16} /></a>
          </div>
          <div className="map-card">
            <iframe title="Weston FL Plumber office location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835252.349245451!2d-82.44260179080565!3d26.05065508657955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90b486768c50f%3A0xa7fa6d410079f71a!2sWeston%20Fl%20Plumber!5e0!3m2!1sen!2sin!4v1790576466757!5m2!1sen!2sin" loading="lazy"></iframe>
            <div className="map-label"><MapPin size={16} /><span>{ADDRESS}</span></div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section section">
        <div className="container">
          <div className="section-heading reviews-heading">
            <div>
              <span className="eyebrow">Verified Reviews</span>
              <h2>What Weston Homeowners Say About Our Service</h2>
            </div>
            <p>Genuine customer reviews from homeowners across Weston, Florida.</p>
          </div>
          <div className="review-cards">
            {reviews.map(review => (
              <article className="review-card" key={review.name}>
                <div className="review-card-top">
                  <div className="review-stars">
                    {[1, 2, 3, 4, 5].map(n => <Star key={n} size={15} fill="currentColor" color="#eab308" />)}
                  </div>
                  <span>5.0</span>
                </div>
                <p>“{review.text}”</p>
                <div className="review-author">
                  <strong>{review.name}</strong>
                  <span>{review.service}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="reviews-footer">
            <a href={PHONE_HREF} className="btn-secondary"><Phone size={16} /> Speak With a Plumber in Weston</a>
          </div>
        </div>
      </section>

      {/* Recommended H2 #7: Frequently Asked Plumbing Questions */}
      <section className="faq-section section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">Helpful Information</span>
            <h2>Frequently Asked Plumbing Questions</h2>
            <p>Got a question about a plumbing issue in your Weston home? Speak directly with our team for expert guidance.</p>
            <Link href="/plumber-weston-fl" className="text-link mt-3" style={{ display: "inline-block" }}>
              See all Weston plumbing services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="faq-list">
            <HomeFaq q="Why is Weston FL Plumber the preferred choice for Weston homeowners?" a="Our main office is right here in Weston at 2645 Executive Park Drive. We provide state-certified (#CFC1428593) master plumbing service, 24/7 emergency dispatch, transparent pricing, and a written 1-year warranty on all recommended repairs." />
            <HomeFaq q="How quickly can an emergency plumber in Weston, FL respond?" a="Because we are based in Weston, our average arrival time for emergency plumber dispatch in Weston is 15 to 30 minutes." />
            <HomeFaq q="What are the most common plumbing issues in Weston, FL?" a="Due to South Florida's warm climate and hard municipal water, Weston homes frequently experience water heater sediment scale buildup, slab leaks under post-tension foundations, tree root intrusion in drain lines, and high municipal pressure valve failures." />
            <HomeFaq q="Do you offer drain cleaning and hydro-jetting in Weston?" a="Yes! We provide complete drain cleaning Weston FL services, including heavy augering, hydro-jetting line clearing, and high-definition video sewer camera inspections." />
          </div>
        </div>
      </section>

      {/* Contact CTA Strip */}
      <section id="contact" className="home-contact">
        <div className="container home-contact-inner">
          <div>
            <span className="eyebrow light">Local Weston Office: 2645 Executive Park Dr</span>
            <h2>Need a Plumber in Weston, FL?</h2>
            <p>Call {PHONE} now to discuss your plumbing issue with our licensed team. 24/7 Emergency Service Available.</p>
          </div>
          <a href={PHONE_HREF} className="btn-primary"><Phone size={18} /> Call {PHONE}</a>
        </div>
      </section>
    </>
  ); 
}
