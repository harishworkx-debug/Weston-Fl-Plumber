import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, Phone, Star, AlertTriangle, MapPin, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { servicePages } from "../data/services";
import { locationSlug, PHONE, CallButton, SEO, locations } from "../App";
import { cityProfiles, getLocalizedServiceContent } from "../data/cityData";

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

export default function ServiceLocationPage({ service, location }: { service: any; location: string }) {
  const ServiceIcon = service.icon;
  const city = location.replace(", FL", "");
  const cityProfile = cityProfiles[city] || cityProfiles["Weston"];
  const localized = getLocalizedServiceContent(service.baseSlug, city);

  const related = servicePages.filter(s => s.baseSlug !== service.baseSlug).slice(0, 3);
  const review = cityProfile.review;

  return (
    <>
      <SEO 
        title={`${localized.headline} | Weston FL Plumber`} 
        description={`${localized.intro.slice(0, 150)}... Call ${PHONE} for prompt local service.`} 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": localized.headline,
            "serviceType": service.title,
            "areaServed": {
              "@type": "City",
              "name": city,
              "containedInPlace": { "@type": "State", "name": "Florida" }
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Weston FL Plumber",
              "telephone": PHONE,
              "license": "CFC1428593",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2645 Executive Park Drive",
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
              { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.westonflplumber.com/service-area" },
              { "@type": "ListItem", "position": 3, "name": city, "item": `https://www.westonflplumber.com/plumber-${locationSlug(location)}` },
              { "@type": "ListItem", "position": 4, "name": localized.headline, "item": `https://www.westonflplumber.com/${service.baseSlug}-${locationSlug(location)}` }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": localized.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          }
        ]} 
      />

      <div className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div>
            <Link href="/" className="crumb">Home / Service area / {city} / {service.title.replace(" in Weston, FL", "")}</Link>
            <div className="service-icon large">
              <ServiceIcon size={28} />
            </div>
            <h1>{localized.headline}</h1>
            <p>{localized.intro}</p>
            <div className="hero-neighborhoods-badge mt-3 mb-4" style={{ fontSize: "0.9em", opacity: 0.9 }}>
              <MapPin size={15} style={{ display: "inline", marginRight: 6, verticalAlign: "-2px" }} />
              <strong>Neighborhoods Served:</strong> {cityProfile.neighborhoods.slice(0, 4).join(", ")} & surrounding {city} areas
            </div>
            <CallButton>Call Now for Service in {city}</CallButton>
          </div>
          <img src={service.image} alt={`${localized.headline} in ${city}, FL`} />
        </div>
      </div>
      
      <section className="section">
        <div className="container detail-grid">
          <article className="detail-copy">
            <span className="eyebrow">Local Plumbing Context for {city}</span>
            <h2>Tailored Plumbing Solutions for {city} Homes</h2>
            <p>{localized.localContext}</p>
            
            <div className="benefit-list">
              {service.benefits.map((item: string) => (
                <div key={item}>
                  <span><Check size={16} /></span>
                  <p>{item.replace("Weston", city)}</p>
                </div>
              ))}
            </div>

            <div className="deep-content mt-6">
              <h3>Common Symptoms in {city} Properties</h3>
              <ul className="symptoms-list">
                {localized.symptoms.map((sym: string) => (
                  <li key={sym}><AlertTriangle size={15} /> {sym}</li>
                ))}
              </ul>

              <h3>What Causes This in {city}?</h3>
              <p>{localized.causes}</p>
              
              <h3>Cost Factors in {city}, FL</h3>
              <p>{localized.costFactors}</p>

              <div className="emergency-callout">
                <h4><Phone size={18} /> Immediate Action & Emergency Advice</h4>
                <p>{localized.emergencyTip}</p>
              </div>
            </div>
          </article>

          <aside className="process-card">
            <span className="eyebrow">Service Expectations</span>
            <h3>Our 4-Step Process in {city}</h3>
            {service.process.map((step: string, i: number) => (
              <div className="process-step" key={step}>
                <b>0{i + 1}</b>
                <span>{step.replace("Weston", city)}</span>
              </div>
            ))}
            <CallButton className="full-button">Call {PHONE}</CallButton>

            <div className="review-sidebar mt-6">
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map(n => <Star key={n} size={15} fill="currentColor" color="#eab308" />)}
              </div>
              <p>"{review.quote}"</p>
              <strong>- {review.name}</strong>
              <small>{review.neighborhood}</small>
            </div>

            <div className="local-dispatch-box mt-6 p-4 border rounded" style={{ background: "var(--soft-bg, #f8fafc)" }}>
              <Clock size={20} className="mb-2 text-primary" />
              <h4 style={{ margin: "0 0 4px 0", fontSize: "1rem" }}>Fast Dispatch to {city}</h4>
              <p style={{ margin: 0, fontSize: "0.88rem", opacity: 0.85 }}>{cityProfile.responseNote}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">Local FAQs for {city}</span>
            <h2>Common Questions About {service.baseSlug.replace(/-/g, " ")} in {city}</h2>
            <p>Have a question about a plumbing issue in your {city} home? Speak directly with our team for clear guidance before scheduling.</p>
          </div>
          <div className="faq-list">
            {localized.faqs.map(faq => (
              <Faq key={faq.question} q={faq.question} a={faq.answer} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section related-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Explore related services</span>
              <h2>More Plumbing Services Available in {city}</h2>
            </div>
          </div>
          <div className="related-grid">
            {related.map(item => {
              const Icon = item.icon;
              return (
                <Link key={item.slug} href={`/${item.baseSlug}-${locationSlug(location)}`} className="service-card">
                  <div className="service-icon"><Icon size={22} /></div>
                  <h3>{item.title.replace("Weston", city)}</h3>
                  <p>{item.short.replace("Weston", city)}</p>
                  <span className="text-link">View Service <ArrowRight size={15} /></span>
                </Link>
              );
            })}
          </div>

          <div className="service-area-links mt-8">
            <span className="eyebrow">Nearby South Florida Communities for {service.title.replace(" in Weston, FL", "")}</span>
            <div className="location-chip-grid mt-3">
              <Link href={`/${service.slug}`} className="chip">Weston, FL</Link>
              {locations.filter((l: string) => l !== location).map((loc: string) => (
                <Link key={loc} href={`/${service.baseSlug}-${locationSlug(loc)}`} className="chip">{loc}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
