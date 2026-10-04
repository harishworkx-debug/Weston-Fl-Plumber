import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, Phone, Star, AlertTriangle, MapPin, ShieldCheck, Clock } from "lucide-react";
import { useState } from "react";
import { servicePages } from "../data/services";
import { PHONE, PHONE_HREF, CallButton, SEO, locations, locationSlug, ADDRESS } from "../App";
import { ServiceCard } from "./Home";

function Faq({ q, a }: { q: string; a: string }) { 
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

const getWestonServiceFaqs = (baseSlug: string) => {
  const faqsMap: Record<string, { q: string; a: string }[]> = {
    "plumber": [
      { q: "Why is Weston FL Plumber the leading choice for local plumbing in Weston Florida?", a: "We are headquartered right here in Weston at 2645 Executive Park Drive. We hold Florida Certified Plumbing Contractor License #CFC1428593, provide 24/7 emergency dispatch, upfront transparent pricing, and back all recommended work with a 1-year warranty." },
      { q: "Do you handle residential and commercial plumbing repairs in Weston FL?", a: "Yes! We serve single-family homes, townhomes, condominiums, and commercial businesses across all Weston neighborhoods including Savanna, Weston Hills, Windmill Ranches, Tequesta, and Bonaventure." },
      { q: "How quickly can a plumber arrive at my Weston FL home?", a: "Because our main operational office is in Weston, our average response time for urgent callouts in Weston is 15 to 30 minutes." }
    ],
    "residential-plumbing": [
      { q: "What residential plumbing services in Weston FL do you specialize in?", a: "We handle all household plumbing needs, including fixture repairs, faucet replacements, toilet rebuilds, supply line leak fixes, drain cleaning, water heater repairs, and slab leak detection." },
      { q: "Are your residential plumbers licensed and insured to work in Weston, FL?", a: "Yes. All technicians carry full state licensing (#CFC1428593), worker's compensation, and general liability insurance required by Florida law and Weston HOA boards." },
      { q: "How can I prevent hard water damage to my Weston home's plumbing?", a: "Regular flushing of water heater tanks, installing high-quality water filters, and replacing aging rubber washers with ceramic cartridges help protect fixtures from South Florida hard water scale." }
    ],
    "emergency-plumber": [
      { q: "What qualifies as a plumbing emergency in Weston FL?", a: "Active pipe ruptures, rapid water accumulation on floors or ceilings, raw sewage backing up into tubs, complete loss of water pressure, or leaking gas/water heaters require immediate emergency plumber dispatch." },
      { q: "Are emergency plumber Weston FL services available 24/7?", a: "Yes! Our phone line (754-283-8022) is answered 24 hours a day, 7 days a week, 365 days a year. Our technicians dispatch immediately from our Weston office." },
      { q: "What should I do while waiting for the emergency plumber to arrive in Weston?", a: "Locate your main water shutoff valve on the exterior wall of your home and turn it 90 degrees clockwise. If water is standing near electrical outlets, turn off power at the main breaker." }
    ],
    "plumbing-repair": [
      { q: "Do you provide written estimates before starting plumbing repair in Weston FL?", a: "Yes. Our technician inspects the affected fixture or line, explains the underlying cause, and provides a clear, transparent written estimate before any work begins." },
      { q: "Can you fix leaking pipes behind drywall or under concrete slabs in Weston?", a: "Yes. We utilize advanced non-invasive leak detection equipment to locate pipe leaks accurately and perform surgical repairs or line rerouting." },
      { q: "Is there a warranty on plumbing repairs in Weston FL?", a: "All recommended replacement parts and repair labor performed by Weston FL Plumber come with our written 1-Year Warranty." }
    ],
    "drain-cleaning": [
      { q: "How do you perform drain cleaning in Weston FL?", a: "We use professional electric drain augers (snakes), hydro-jetting equipment, and high-definition video sewer cameras to locate and clear grease, hair, scale, and root blockages cleanly." },
      { q: "Why shouldn't I use liquid chemical drain cleaners in my Weston home?", a: "Chemical drain cleaners contain harsh acids that generate heat, which can crack PVC pipes or corrode older copper and cast iron lines without removing heavy clogs." },
      { q: "How do I know if my main sewer line is clogged in Weston?", a: "If multiple ground-floor fixtures (shower, toilet, kitchen sink) gurgle or back up simultaneously when running water, your main sewer line requires professional clearing." }
    ],
    "sewer-line-repair": [
      { q: "What causes sewer line failure in Weston FL homes?", a: "Sewer lines fail due to cast iron pipe bottom channeling, tree root intrusion at pipe joints, or ground settling. We conduct video camera inspections to evaluate your line's structural condition." },
      { q: "Do you offer trenchless sewer line repair in Weston?", a: "Yes. Whenever feasible, we utilize trenchless pipe lining (CIPP) to restore damaged sewer lines without excavating your lawn, driveway, or landscaping." },
      { q: "Do I need a city permit for sewer line replacement in Weston FL?", a: "Yes. Major sewer repairs and line replacements require permits from the City of Weston. We manage all permit filings and city inspections." }
    ],
    "leak-detection": [
      { q: "How does non-invasive leak detection in Weston FL work?", a: "We use electro-acoustic sound amplification sensors, digital tracer gas, and thermal imaging cameras to pinpoint under-slab and behind-wall pipe leaks without breaking floor tiles." },
      { q: "What are the early signs of a slab leak in Weston Florida?", a: "An unexplained jump in your water bill, warm spots on tile or laminate floors, damp baseboards, or the sound of water running when all taps are off indicate a slab leak." },
      { q: "Does insurance cover leak detection in Weston FL?", a: "Most homeowner policies cover leak detection and water damage restoration costs. We provide detailed photographic reports for insurance claims." }
    ],
    "water-heater-repair": [
      { q: "Why is my water heater not producing enough hot water in Weston FL?", a: "Common causes include burnt heating elements, faulty thermostats, corroded dip tubes, or heavy mineral sediment scale buildup at the bottom of the tank." },
      { q: "Should I repair or replace my water heater in Weston, FL?", a: "If your heater is under 8 years old and failed an electrical part, repair is cost-effective. If the tank is over 10 years old or rusting, replacement is safer and more energy efficient." },
      { q: "How long does a water heater repair take in Weston?", a: "Most standard repairs (replacing thermostats, heating elements, or valves) are completed within 1 to 2 hours." }
    ],
    "water-heater-installation": [
      { q: "Should I install a tankless water heater in my Weston FL home?", a: "Tankless water heaters deliver continuous hot water, take up 80% less space, and lower energy bills by up to 30%. We inspect electrical amperage or gas supply to confirm compatibility." },
      { q: "How long does a new water heater installation take in Weston?", a: "Standard tank replacements take 2 to 4 hours. Tankless conversions take 4 to 6 hours including line fitting, venting, and testing." },
      { q: "Are expansion tanks required on new water heaters in Weston FL?", a: "Yes. Current Florida Building Code requires thermal expansion tanks on closed municipal water systems in Weston to prevent pressure spikes." }
    ],
    "toilet-repair": [
      { q: "Why is my toilet in Weston FL constantly running?", a: "A running toilet is usually caused by a degraded flapper seal allowing tank water to leak into the bowl, or a faulty fill valve that fails to shut off water." },
      { q: "What causes water to pool around the base of a toilet in Weston?", a: "Water around the base indicates a failed wax ring seal or a cracked closet flange beneath the toilet. Replacing the wax ring prevents subfloor water damage." },
      { q: "Do you install low-flow toilets in Weston Florida?", a: "Yes! We install modern WaterSense certified high-efficiency toilets that save up to 4,000 gallons of water per year per fixture." }
    ]
  };

  return faqsMap[baseSlug] || faqsMap["plumber"];
};

const getReviewData = (name: string) => {
  const reviews = [
    { name: "Alejandro", text: "I rarely leave reviews, but the service I received in Savanna deserved one. They were dependable, communicated well, and took the time to make sure our repair was done correctly rather than rushing. Five stars from me!", service: "Plumbing Service · Weston, FL" },
    { name: "Nebulxx", text: "After dealing with a recurring plumbing issue in Weston Hills, I called Weston FL Plumber. They brought diagnostic tools, found the exact root cause, and fixed it clean. Very thorough.", service: "Plumbing Repair · Weston, FL" },
    { name: "alex roman", text: "One of the best plumbing companies in Weston FL I've worked with. Communication was excellent, showed up on time in Windmill Ranches, and the quality of work was outstanding.", service: "Toilet Repair · Water Heater Installation" },
    { name: "Lorenzo C", text: "We had an issue with our water heater in Bonaventure and they did an excellent job. Explained our repair vs replacement options clearly and never pressured us. 10/10", service: "Water Heater Repair · Weston, FL" },
    { name: "michelin star", text: "Called them for a drain issue at our home in Tequesta. The plumber was courteous, knowledgeable, and completed the clear-out efficiently.", service: "Drain Cleaning · Weston, FL" },
    { name: "Sophia R", text: "Five-star experience in Isles at Weston. From scheduling to completing the leak detection, everything was handled professionally. Fair pricing and quality work.", service: "Leak Detection · Weston, FL" },
    { name: "Maggie Lopez", text: "Best plumbing experience in Weston! My kitchen sink was backing up and turns out my drain needed to be cleared out entirely. Fast, clean, and reliable.", service: "Drain Cleaning · Weston, FL" },
    { name: "Tim Flounder", text: "Real deal residential plumber in Weston FL. Took care of our bathroom pipe leak, cleaned up impeccably, and verified everything was working.", service: "Residential Plumbing · Weston, FL" }
  ];
  return reviews.find(r => r.name === name) || reviews[0];
};

export default function ServicePage({ service }: { service: any }) {
  const ServiceIcon = service.icon;
  const related = servicePages.filter(s => s.slug !== service.slug).slice(0, 3);
  const review = getReviewData(service.reviewName);
  const westonFaqs = getWestonServiceFaqs(service.baseSlug);

  return (
    <>
      <SEO 
        title={`${service.title} | Licensed Plumber Weston FL`} 
        description={`${service.short} Premier local plumbing service in Weston, Florida by Weston FL Plumber (#CFC1428593). Call ${PHONE}.`} 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "serviceType": service.title,
            "areaServed": {
              "@type": "City",
              "name": "Weston",
              "containedInPlace": { "@type": "State", "name": "Florida" }
            },
            "provider": { 
              "@type": "LocalBusiness", 
              "name": "Weston FL Plumber", 
              "telephone": PHONE,
              "license": "CFC1428593",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": ADDRESS,
                "addressLocality": "Weston",
                "addressRegion": "FL",
                "postalCode": "33331"
              }
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.westonflplumber.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.westonflplumber.com/services" },
              { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.westonflplumber.com/${service.slug}` }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": westonFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          }
        ]} 
      />

      <div className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div>
            <Link href="/" className="crumb">Home / Services / {service.title}</Link>
            <div className="service-icon large">
              <ServiceIcon size={28} />
            </div>
            <h1>{service.title}</h1>
            <p>{service.short}</p>
            <div className="hero-neighborhoods-badge mt-3 mb-4" style={{ fontSize: "0.9em", opacity: 0.9 }}>
              <MapPin size={15} style={{ display: "inline", marginRight: 6, verticalAlign: "-2px" }} />
              <strong>Primary Service Area:</strong> Weston, FL (Savanna, Weston Hills, Windmill Ranches, Tequesta, Bonaventure & Isles at Weston)
            </div>
            <CallButton>Call Now for Service in Weston, FL</CallButton>
          </div>
          <img src={service.image} alt={`${service.title} in Weston, FL`} />
        </div>
      </div>

      {/* Main Content */}
      <section className="section">
        <div className="container detail-grid">
          <article className="detail-copy">
            <span className="eyebrow">Plumber Weston FL Expert Service</span>
            <h2>Professional {service.title} by Local Weston Specialists</h2>
            <p>{service.intro}</p>
            <p>Every property in Weston has its own layout, fixtures, access points, and history. Operating directly from our main office at 2645 Executive Park Drive, our licensed plumbers bring dedicated diagnostic equipment, upfront transparent pricing, and meticulous care to every home in Weston, Florida.</p>
            
            <div className="benefit-list">
              {service.benefits.map((item: string) => (
                <div key={item}>
                  <span><Check size={16} /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="deep-content mt-6">
              <h3>Common Symptoms</h3>
              <ul className="symptoms-list">
                {service.symptoms.map((sym: string) => (
                  <li key={sym}><AlertTriangle size={15} /> {sym}</li>
                ))}
              </ul>

              <h3>What Causes This in Weston Homes?</h3>
              <p>{service.causes}</p>
              
              <h3>Cost Factors in Weston, FL</h3>
              <p>{service.costFactors}</p>

              <div className="emergency-callout">
                <h4><Phone size={18} /> 24/7 Emergency Advice for Weston Residents</h4>
                <p>{service.emergencyInfo}</p>
              </div>
            </div>
          </article>

          <aside className="process-card">
            <span className="eyebrow">Service Expectations</span>
            <h3>Our 4-Step Process in Weston</h3>
            {service.process.map((step: string, i: number) => (
              <div className="process-step" key={step}>
                <b>0{i + 1}</b>
                <span>{step}</span>
              </div>
            ))}
            <CallButton className="full-button">Call {PHONE}</CallButton>

            <div className="review-sidebar mt-6">
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map(n => <Star key={n} size={15} fill="currentColor" color="#eab308" />)}
              </div>
              <p>"{review.text}"</p>
              <strong>- {review.name}</strong>
              <small>{review.service}</small>
            </div>

            <div className="local-dispatch-box mt-6 p-4 border rounded" style={{ background: "var(--soft-bg, #f8fafc)" }}>
              <Clock size={20} className="mb-2 text-primary" />
              <h4 style={{ margin: "0 0 4px 0", fontSize: "1rem" }}>Fast Weston Dispatch</h4>
              <p style={{ margin: 0, fontSize: "0.88rem", opacity: 0.85 }}>Dispatched directly from 2645 Executive Park Drive, Weston, FL 33331. Average arrival time 15–30 mins.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">Weston Plumbing FAQs</span>
            <h2>Common Questions About {service.title}</h2>
            <p>Have a question about a plumbing issue in your Weston home? Speak directly with our local team for clear guidance before scheduling.</p>
          </div>
          <div className="faq-list">
            {westonFaqs.map(faq => (
              <Faq key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & Nearby Areas */}
      <section className="section related-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Explore Related Services</span>
              <h2>More Ways We Help Weston Homeowners</h2>
            </div>
            <Link href="/#services" className="text-link">View all services <ArrowRight size={16} /></Link>
          </div>
          
          <div className="related-grid">
            {related.map(item => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>

          <div className="service-area-links mt-8">
            <span className="eyebrow">{service.title.replace(" in Weston, FL", "")} in Nearby South Florida Communities</span>
            <div className="location-chip-grid mt-3">
              {locations.map(location => (
                <Link key={location} href={`/${service.baseSlug}-${locationSlug(location)}`} className="chip">
                  {location}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
