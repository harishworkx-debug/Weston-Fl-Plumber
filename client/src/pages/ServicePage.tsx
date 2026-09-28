import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, Phone, Star, AlertTriangle, Lightbulb, MapPin, Wrench } from "lucide-react";
import { useState } from "react";
import { servicePages } from "../data/services";
import { PHONE, PHONE_HREF, CallButton, SEO, locations, locationSlug } from "../App";
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

const getReviewData = (name: string) => {
  const reviews = [
    { name: "Alejandro", text: "I rarely leave reviews, but the service I received deserved one. They were dependable, communicated well, and took the time to make sure the job was done correctly rather than simply rushing to the next appointment. It’s obvious they care about their reputation and their customers. Five stars from me", service: "Customer service" },
    { name: "Nebulxx", text: "After dealing with the same plumbing issue more than once, I finally called this company and I’m glad I did. They didn’t just put a temporary fix on the problem they actually took the time to find out what was causing it. Everything has been working perfectly since. Knowledgeable, professional, and very thorough.", service: "Plumbing repair" },
    { name: "alex roman", text: "One of the best plumbing companies I’ve worked with. Communication was excellent, they showed up when promised, and the quality of the work was outstanding.", service: "Toilet repair · Water heater installation" },
    { name: "Lorenzo C", text: "We had an issue with our water heater and they did an excellent job. The technician explained our options clearly and never pressured us into choosing the most expensive solution. Everything is working perfectly now. Very professional company I'll be calling them back for sure. 10/10", service: "Water heater installation" },
    { name: "michelin star", text: "Called them for a plumbing issue at our home and received excellent customer service. The plumber was courteous, knowledgeable, and completed the repair efficiently.", service: "Drain cleaning · Plumbing leak detection" },
    { name: "Sophia R", text: "Five star experience. From scheduling the appointment to completing the repair, everything was handled professionally. Fair pricing, quality work, and great customer service", service: "Plumbing leak repair" },
    { name: "Maggie Lopez", text: "Best plumbing experience I’ve ever had! My kitchen sink was backing up and turns out my drain needed to be cleared out entirely. I called Weston FL plumber after my son tried to clear the drain and it didn’t work. They had the right equipment, made no mess, and were fast. Will definitely use them again", service: "Drain cleaning" },
    { name: "Tim Flounder", text: "I was iffy at first but these guys are the real deal, they took care of everything and cleaned up very well. They made sure everything was perfect and working, I seriously recommend these guys. Great Customer service and Plumbers.", service: "Customer service" }
  ];
  return reviews.find(r => r.name === name) || reviews[0];
};

export default function ServicePage({ service }: { service: any }) {
  const ServiceIcon = service.icon;
  const related = servicePages.filter(s => s.slug !== service.slug).slice(0, 3);
  const review = getReviewData(service.reviewName);

  return (
    <>
      <SEO 
        title={`${service.title} | Weston FL Plumber`} 
        description={`${service.short} Call Weston FL Plumber at ${PHONE}.`} 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "serviceType": "Plumbing",
            "areaServed": "Weston, Florida",
            "provider": { "@type": "LocalBusiness", "name": "Weston FL Plumber", "telephone": PHONE }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.westonflplumber.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.westonflplumber.com/services" },
              { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.westonflplumber.com/${service.slug}` }
            ]
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
            <CallButton>Call Now</CallButton>
          </div>
          <img src={service.image} alt={`${service.title} service`} />
        </div>
      </div>

      {/* Main Content & Repair Process */}
      <section className="section">
        <div className="container detail-grid">
          <article className="detail-copy">
            <span className="eyebrow">Service overview</span>
            <h2>Clear answers. Careful work. A better next step.</h2>
            <p>{service.intro}</p>
            <p>Every property in Weston has its own layout, fixtures, access points, and history. Our approach is to start with what you are seeing, inspect the likely source, and give you useful information before the work moves forward.</p>
            
            <div className="benefit-list">
              {service.benefits.map((item: string) => (
                <div key={item}>
                  <span><Check size={16} /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="deep-content">
              <h3>Common Symptoms</h3>
              <ul className="symptoms-list">
                {service.symptoms.map((sym: string) => (
                  <li key={sym}><AlertTriangle size={15} /> {sym}</li>
                ))}
              </ul>

              <h3>What Causes This?</h3>
              <p>{service.causes}</p>
              
              <h3>Cost Factors in Weston, FL</h3>
              <p>{service.costFactors}</p>

              <div className="emergency-callout">
                <h4><Phone size={18} /> Emergency Advice</h4>
                <p>{service.emergencyInfo}</p>
              </div>
            </div>
          </article>

          <aside className="process-card">
            <span className="eyebrow">What to expect</span>
            <h3>A straightforward process</h3>
            {service.process.map((step: string, i: number) => (
              <div className="process-step" key={step}>
                <b>0{i + 1}</b>
                <span>{step}</span>
              </div>
            ))}
            <CallButton className="full-button">Call About This Service</CallButton>

            <div className="review-sidebar">
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map(n => <Star key={n} size={15} fill="currentColor" />)}
              </div>
              <p>"{review.text}"</p>
              <strong>- {review.name}</strong>
              <small>{review.service}</small>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">Common questions</span>
            <h2>Helpful context before you call.</h2>
            <p>Have a question about a plumbing symptom or service? Call and tell us what is happening. We’ll help you understand the next useful step.</p>
          </div>
          <div className="faq-list">
            <Faq q={`How do I know I need ${service.title.toLowerCase()}?`} a="If the issue is recurring, worsening, affecting multiple fixtures, or causing moisture or water damage, it is worth calling sooner rather than later. We can help you talk through the symptoms." />
            <Faq q="What should I do before the plumber arrives?" a="If it is safe, stop using the affected fixture and shut off the nearest valve or main water supply for an active leak. For suspected gas leaks, leave the area and contact your gas utility or emergency services." />
            <Faq q="Can I call to ask a question first?" a="Yes. Call Weston FL Plumber and explain what you are noticing, where it is happening, and how long it has been going on." />
          </div>
        </div>
      </section>

      {/* Related Services & Areas */}
      <section className="section related-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Explore related services</span>
              <h2>More ways we can help.</h2>
            </div>
            <Link href="/#services" className="text-link">View all services <ArrowRight size={16} /></Link>
          </div>
          
          <div className="related-grid">
            {related.map(item => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>

          <div className="service-area-links mt-8">
            <span className="eyebrow">{service.title.replace(" in Weston, FL", "")} in nearby areas</span>
            <div>
              {locations.map(location => (
                <Link key={location} href={`/${service.baseSlug}-${locationSlug(location)}`}>{location} <ArrowRight size={14} /></Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
