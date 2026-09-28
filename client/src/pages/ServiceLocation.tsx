import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, Phone, Star, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { servicePages } from "../data/services";
import { locationSlug, PHONE, CallButton, SEO, locations } from "../App";

function Faq({ q, a }: { q: string; a: string }) { 
  const [open, setOpen] = useState(false); 
  return <div className={open ? "faq open" : "faq"}><button onClick={() => setOpen(!open)}><span>{q}</span><ChevronDown size={18} /></button>{open && <p>{a}</p>}</div>; 
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

export default function ServiceLocationPage({ service, location }: { service: any, location: string }) {
  const ServiceIcon = service.icon;
  const city = location.replace(", FL", "");
  const title = service.title.replace("Weston", city);
  const related = servicePages.filter(s => s.slug !== service.slug).slice(0, 3);
  const review = getReviewData(service.reviewName);
  
  const localIntro = service.intro.replace("Weston", city);
  const shortDesc = service.short.replace("Weston", city);
  
  const getLocalContext = (city: string) => {
    const contexts: Record<string, string> = {
      "Miramar": "Miramar homes often have specific plumbing layouts that require experienced attention. We understand the local housing styles and common wear patterns.",
      "Pembroke Pines": "With the mix of newer developments and established neighborhoods in Pembroke Pines, we adapt our approach to fit your property's specific plumbing era.",
      "Cooper City": "Cooper City’s family homes deserve dependable plumbing. We focus on long-lasting repairs for the systems your household uses most.",
      "Southwest Ranches": "Properties in Southwest Ranches often involve unique layouts and distances. We bring the right tools and thorough diagnostics to every call.",
      "Davie": "From rural estates to suburban neighborhoods in Davie, we handle a wide range of plumbing systems with careful, knowledgeable service.",
      "Plantation": "Plantation’s mature trees and established neighborhoods mean we frequently help with root intrusion and aging fixture updates.",
      "Sunrise": "Whether you are in a newer Sunrise community or an older build, our team diagnoses the root cause of your plumbing issue before starting work.",
      "Pembroke Park": "We provide prompt, practical plumbing support to Pembroke Park residents, focusing on clear communication and lasting repairs.",
      "Hialeah": "For our neighbors in Hialeah, we deliver straightforward plumbing solutions that respect your property and your budget."
    };
    return contexts[city] || `We provide dedicated plumbing support for homes and businesses throughout ${city}.`;
  };

  return (
    <>
      <SEO 
        title={`${title} | Weston FL Plumber`} 
        description={`${shortDesc} Local plumbing service in ${location}. Call ${PHONE}.`} 
        schema={[
          {"@context":"https://schema.org","@type":"Service","name":title,"serviceType":"Plumbing","areaServed":`${city}, Florida`,"provider":{"@type":"LocalBusiness","name":"Weston FL Plumber","telephone":PHONE}},
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.westonflplumber.com/" },
              { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.westonflplumber.com/service-area" },
              { "@type": "ListItem", "position": 3, "name": city, "item": `https://www.westonflplumber.com/plumber-${locationSlug(location)}` },
              { "@type": "ListItem", "position": 4, "name": title, "item": `https://www.westonflplumber.com/${service.baseSlug}-${locationSlug(location)}` }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `How do I know I need ${service.title.toLowerCase().replace("weston", city)}?`,
                "acceptedAnswer": { "@type": "Answer", "text": `If the issue is recurring, worsening, affecting multiple fixtures, or causing moisture or water damage in your ${city} home, it is worth calling sooner rather than later. We can help you talk through the symptoms.` }
              },
              {
                "@type": "Question",
                "name": `Do you charge a travel fee to ${city}?`,
                "acceptedAnswer": { "@type": "Answer", "text": "We provide transparent pricing and will discuss any dispatch or diagnostic fees when you call, so you know what to expect before we head to your property." }
              },
              {
                "@type": "Question",
                "name": "Can I call to ask a question first?",
                "acceptedAnswer": { "@type": "Answer", "text": `Yes. Call Weston FL Plumber and explain what you are noticing, where it is happening in ${city}, and how long it has been going on.` }
              }
            ]
          }
        ]} 
      />
      <div className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div>
            <Link href="/" className="crumb">Home / Service area / {city} / {title.replace(` in ${city}, FL`, "")}</Link>
            <div className="service-icon large">
              <ServiceIcon size={28} />
            </div>
            <h1>{title}</h1>
            <p>{shortDesc}</p>
            <CallButton>Call Now</CallButton>
          </div>
          <img src={service.image} alt={`${title} service in ${city}`} />
        </div>
      </div>
      
      <section className="section">
        <div className="container detail-grid">
          <article className="detail-copy">
            <span className="eyebrow">Serving {city}</span>
            <h2>Clear answers. Careful work. A better next step.</h2>
            <p>{localIntro}</p>
            <p>{getLocalContext(city)}</p>
            <p>Every property in {city} has its own layout, fixtures, access points, and history. Our approach is to start with what you are seeing, inspect the likely source, and give you useful information before the work moves forward.</p>
            
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
              
              <h3>Cost Factors in {city}, FL</h3>
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

      <section className="faq-section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">Common questions</span>
            <h2>Helpful context before you call.</h2>
            <p>Have a question about a plumbing symptom or service in {city}? Call and tell us what is happening. We’ll help you understand the next useful step.</p>
          </div>
          <div className="faq-list">
            <Faq q={`How do I know I need ${service.title.toLowerCase().replace("weston", city)}?`} a={`If the issue is recurring, worsening, affecting multiple fixtures, or causing moisture or water damage in your ${city} home, it is worth calling sooner rather than later. We can help you talk through the symptoms.`} />
            <Faq q={`Do you charge a travel fee to ${city}?`} a="We provide transparent pricing and will discuss any dispatch or diagnostic fees when you call, so you know what to expect before we head to your property." />
            <Faq q="Can I call to ask a question first?" a={`Yes. Call Weston FL Plumber and explain what you are noticing, where it is happening in ${city}, and how long it has been going on.`} />
          </div>
        </div>
      </section>
      
      <section className="section related-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Explore related services</span>
              <h2>More ways we can help in {city}.</h2>
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
            <span className="eyebrow">More locations for this service</span>
            <div>
              <Link href={`/${service.slug}`}>Weston, FL <ArrowRight size={14} /></Link>
              {servicePages.length > 0 && locations.filter((l: string) => l !== location).map((loc: string) => (
                <Link key={loc} href={`/${service.baseSlug}-${locationSlug(loc)}`}>{loc} <ArrowRight size={14} /></Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
