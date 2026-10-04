import { Link, useRoute } from "wouter";
import { ArrowRight, BookOpen, Clock, Phone, ShieldCheck, Tag, AlertTriangle, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { blogPosts, BlogPost } from "../data/blogPosts";
import { PHONE, PHONE_HREF, CallButton, SEO } from "../App";

function FaqItem({ q, a }: { q: string; a: string }) { 
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

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  return (
    <>
      <SEO 
        title={`${post.title} | Weston FL Plumber`} 
        description={post.excerpt} 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": { "@type": "Organization", "name": "Weston FL Plumber" },
            "publisher": { "@type": "Organization", "name": "Weston FL Plumber", "url": "https://www.westonflplumber.com/" },
            "datePublished": "2026-10-01",
            "mainEntityOfPage": `https://www.westonflplumber.com/blog/${post.slug}`
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.westonflplumber.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.westonflplumber.com/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.westonflplumber.com/blog/${post.slug}` }
            ]
          },
          ...(post.faqs ? [{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": post.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          }] : [])
        ]} 
      />

      <div className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div>
            <Link href="/blog" className="crumb">Home / Blog / {post.category}</Link>
            <div style={{ display: "inline-block", background: "#eff6ff", color: "#2563eb", padding: "4px 10px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              {post.category} · {post.intent}
            </div>
            <h1 style={{ fontSize: "2.2rem", lineHeight: 1.25 }}>{post.title}</h1>
            <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>{post.excerpt}</p>
            <div style={{ display: "flex", gap: "16px", fontSize: "0.85rem", opacity: 0.8, marginTop: "1rem" }}>
              <span>By {post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span><Clock size={13} style={{ display: "inline", verticalAlign: "-1px" }} /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container detail-grid">
          <article className="detail-copy">
            {post.sections.map((sec, idx) => (
              <div key={idx} className="blog-section mb-8" style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "1.5rem 0 0.75rem 0", color: "#0f172a" }}>
                  {sec.heading}
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#334155" }}>
                  {sec.body}
                </p>
                {sec.list && sec.list.length > 0 && (
                  <ul style={{ paddingLeft: "1.2rem", margin: "1rem 0", lineHeight: 1.6 }}>
                    {sec.list.map((item, i) => (
                      <li key={i} style={{ marginBottom: "0.5rem", color: "#334155" }}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Service Connection Box */}
            <div className="p-6 border rounded-lg mt-8" style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "1.5rem", borderRadius: "12px" }}>
              <h3 style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0", color: "#1e40af" }}>
                Need Help With This Issue in Weston, FL?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#1e3a8a", margin: "0 0 1rem 0" }}>
                Our licensed local plumbers at Weston FL Plumber are available for immediate service. Dispatched directly from 2645 Executive Park Drive.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                <a href={PHONE_HREF} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Phone size={16} /> Call {PHONE}
                </a>
                <Link href={`/${post.relatedServiceSlug}`} className="text-link" style={{ fontWeight: 600 }}>
                  Learn about {post.relatedServiceTitle} <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Article FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-10" style={{ marginTop: "2.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Frequently Asked Questions</h3>
                <div className="faq-list">
                  {post.faqs.map(faq => (
                    <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="process-card">
            <span className="eyebrow">Weston Operational Base</span>
            <h3>Weston FL Plumber</h3>
            <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.5, margin: "0.5rem 0 1rem 0" }}>
              State Certified Master Plumbing Contractor #CFC1428593 serving Weston, Florida.
            </p>
            <div className="contact-detail-item" style={{ fontSize: "0.9rem", marginBottom: "0.75rem" }}>
              <strong>Main Office:</strong><br />2645 Executive Park Drive, Weston, FL 33331
            </div>
            <div className="contact-detail-item" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
              <strong>Emergency Dispatch:</strong><br />24/7 Available across all Weston neighborhoods
            </div>
            <CallButton className="full-button">Call {PHONE}</CallButton>

            <div className="mt-6 p-4 border rounded" style={{ background: "var(--soft-bg, #f8fafc)", marginTop: "1.5rem" }}>
              <strong style={{ fontSize: "0.9rem" }}>Related Service:</strong>
              <div style={{ marginTop: "4px" }}>
                <Link href={`/${post.relatedServiceSlug}`} style={{ color: "#2563eb", fontWeight: 700, fontSize: "0.95rem" }}>
                  {post.relatedServiceTitle} <ArrowRight size={14} style={{ display: "inline" }} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="home-contact">
        <div className="container home-contact-inner">
          <div>
            <span className="eyebrow light">Ready to Resolve Your Plumbing Issue?</span>
            <h2>Talk With Our Weston Plumbing Team Today</h2>
            <p>Call {PHONE} for upfront pricing and fast dispatch across Weston, FL.</p>
          </div>
          <a href={PHONE_HREF} className="btn-primary"><Phone size={18} /> Call {PHONE}</a>
        </div>
      </section>
    </>
  );
}
