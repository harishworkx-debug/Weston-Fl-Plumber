import { Link } from "wouter";
import { ArrowRight, BookOpen, Clock, Phone, ShieldCheck, Tag } from "lucide-react";
import { useState } from "react";
import { blogPosts, BlogPost } from "../data/blogPosts";
import { PHONE, CallButton, SEO } from "../App";

export default function BlogDirectory() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Emergency Guidance", "Drain Maintenance", "Water Heaters", "Leak Detection", "Local Advice"];

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <>
      <SEO 
        title="Plumbing Tips & Guides for Weston Homeowners | Weston FL Plumber Blog" 
        description="Helpful plumbing tips, problem-solving guides, drain cleaning costs, and emergency shutoff advice for Weston and South Florida homeowners." 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Plumbing Advice & Articles for Weston Homeowners",
            "description": "Expert advice, cost breakdowns, and emergency plumbing guides by Weston FL Plumber.",
            "url": "https://www.westonflplumber.com/blog"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.westonflplumber.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.westonflplumber.com/blog" }
            ]
          }
        ]}
      />

      <div className="subpage-hero">
        <div className="container subpage-hero-inner">
          <div>
            <Link href="/" className="crumb">Home / Blog & Guides</Link>
            <div className="service-icon large">
              <BookOpen size={28} />
            </div>
            <h1>Plumbing Tips & Guides for <i>Weston Homeowners</i></h1>
            <p>Practical advice, emergency shutoff steps, cost breakdowns, and troubleshooting tips from your local Weston plumbing team.</p>
            <CallButton>Need Help Now? Call {PHONE}</CallButton>
          </div>
          <div className="directory-hero-note" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)" }}>
            <ShieldCheck size={28} style={{ marginBottom: "0.5rem" }} />
            <strong>Original Local Guidance</strong>
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", opacity: 0.9 }}>
              Written by state-certified master plumbers (#CFC1428593) based at 2645 Executive Park Drive, Weston, FL.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">Browse By Topic</span>
            <h2>Helpful Plumbing Articles</h2>
            <p>Select a category below to explore focused guidance for your household.</p>
          </div>

          {/* Category Filter Chips */}
          <div className="category-chips mt-6" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "1px solid #cbd5e1",
                  background: activeCategory === cat ? "#2563eb" : "#ffffff",
                  color: activeCategory === cat ? "#ffffff" : "#334155",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {filteredPosts.map(post => (
              <article key={post.slug} className="blog-card border rounded-lg bg-white shadow-sm hover:shadow-md" style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", background: "#eff6ff", color: "#2563eb", padding: "4px 8px", borderRadius: "4px" }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: "0.85rem", opacity: 0.7, display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0.5rem 0", lineHeight: 1.35 }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {post.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.55, margin: "0.75rem 0 1.25rem 0" }}>
                    {post.excerpt}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1rem", marginTop: "auto" }}>
                  <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "0.75rem" }}>
                    Related Service: <Link href={`/${post.relatedServiceSlug}`} style={{ color: "#2563eb", fontWeight: 600 }}>{post.relatedServiceTitle}</Link>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-link" style={{ fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    Read Full Article <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="home-contact">
        <div className="container home-contact-inner">
          <div>
            <span className="eyebrow light">Have a Specific Plumbing Question?</span>
            <h2>Speak Directly With a Weston Plumber</h2>
            <p>Call {PHONE} to describe your symptoms and get straightforward advice from our licensed team.</p>
          </div>
          <a href={`tel:+17542838022`} className="btn-primary"><Phone size={18} /> Call {PHONE}</a>
        </div>
      </section>
    </>
  );
}
