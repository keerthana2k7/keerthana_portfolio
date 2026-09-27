import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, GitPullRequest, Code2, Users, Trophy, Briefcase, ExternalLink, CheckCircle2, Cpu, Brain, Sparkles } from "lucide-react";

const ACHIEVEMENTS = {
  certifications: [
    {
      id: "hcl-aiml-cert",
      title: "HCL AI/ML Certification",
      org: "HCLTech / HCL Training Program",
      date: "2026",
      category: "Professional Certification",
      badge: "AI/ML Certified",
      icon: Cpu,
      accent: "#6366f1",
      desc: "Professional Certification in Artificial Intelligence & Machine Learning awarded by HCL. Mastered machine learning pipelines, predictive modeling, data preprocessing, and model serving with FastAPI and interactive web interfaces.",
      skills: ["Artificial Intelligence", "Machine Learning", "Python", "FastAPI", "Predictive Modeling", "Scikit-Learn"],
      link: "https://www.linkedin.com/in/keerthana-rajendran357",
    },
    {
      id: "zoho-cert",
      title: "Software Development Internship Certificate",
      org: "Zoho Corporation Private Limited",
      date: "Dec 2025 – May 2026",
      category: "Industry Certificate",
      badge: "Corporate Certified",
      icon: Briefcase,
      accent: "#0ea5e9",
      desc: "Earned official Certificate of Completion for 6-month Java backend engineering internship with a 'Good' performance rating within Zoho Corporation's Technical Staff team.",
      skills: ["Java Backend", "OOP Principles", "Production Debugging", "Enterprise Systems"],
      link: "https://www.linkedin.com/in/keerthana-rajendran357",
    },
    {
      id: "virdhi-cert",
      title: "AI Prompt Engineering & Relational DB Certificate",
      org: "Virdhi Tech Lab Pvt Ltd",
      date: "Jun 2026 – Jul 2026",
      category: "Industry Certificate",
      badge: "AI & DB Certified",
      icon: Brain,
      accent: "#8b5cf6",
      desc: "Official certification recognizing completion of prompt engineering workflows, model accuracy tuning, and normalized MySQL relational schema architecture for production applications.",
      skills: ["Prompt Engineering", "MySQL", "Relational Schemas", "UI/UX Integration"],
      link: "https://www.linkedin.com/in/keerthana-rajendran357",
    },
    {
      id: "tnjug-award-cert",
      title: "Best Contributor Award & Certificate — Open Source Lab",
      org: "Tamil Nadu Java User Group (TNJUG) & KEC",
      date: "2025",
      category: "Honors Certificate",
      badge: "Honors & Award",
      icon: Award,
      accent: "#f59e0b",
      desc: "Certificate of honor awarded by Tamil Nadu Java User Group (TNJUG) in collaboration with Kongu Engineering College for outstanding code contributions and active student mentoring.",
      skills: ["Java", "TNJUG Community", "Peer Mentoring", "Open Source Tooling"],
      link: "https://github.com/keerthana2k7",
    },
  ],
  internships: [
    {
      id: "hcl-aiml-training",
      title: "HCL AI/ML Certification & Applied Training",
      org: "HCLTech",
      date: "2026",
      category: "Certification & Training",
      badge: "AI/ML Certification",
      icon: Cpu,
      accent: "#6366f1",
      desc: "Certified in Artificial Intelligence and Machine Learning by HCL. Developed supervised learning algorithms, predictive modeling pipelines, and deployed real-time inference APIs with FastAPI.",
      skills: ["Artificial Intelligence", "Machine Learning", "Python", "FastAPI", "Data Analytics"],
      link: "https://www.linkedin.com/in/keerthana-rajendran357",
    },
    {
      id: "zoho-intern",
      title: "Software Development Intern",
      org: "Zoho Corporation Private Limited",
      date: "Dec 2025 – May 2026",
      category: "Industry Experience",
      badge: "6-Month Internship",
      icon: Briefcase,
      accent: "#0ea5e9",
      desc: "Engineered Java backend modules within the Technical Staff team. Refactored object-oriented systems, resolved production bugs, and earned a 'Good' performance rating on the official internship evaluation.",
      skills: ["Java Backend", "OOP Principles", "Production Debugging", "Enterprise Systems"],
      link: "https://www.linkedin.com/in/keerthana-rajendran357",
    },
    {
      id: "virdhi-intern",
      title: "AI Prompt Engineer Intern",
      org: "Virdhi Tech Lab Pvt Ltd",
      date: "Jun 2026 – Jul 2026",
      category: "Industry Experience",
      badge: "AI & DB Internship",
      icon: Brain,
      accent: "#8b5cf6",
      desc: "Designed and tested prompts for AI-driven applications, refined model query accuracy, and developed normalized MySQL relational schemas supporting core backend functionalities.",
      skills: ["Prompt Engineering", "MySQL", "Relational Schemas", "UI/UX Integration"],
      link: "https://www.linkedin.com/in/keerthana-rajendran357",
    },
  ],
  community: [
    {
      id: "os-tnebooks",
      title: "Open Source Contributor",
      org: "TNEBooks Educational Initiatives",
      date: "2024 – Present",
      category: "Open Source",
      badge: "Open Source Initiative",
      icon: GitPullRequest,
      accent: "#38bdf8",
      desc: "Contributed to collaborative open-source educational resources and software tools for Tamil Nadu state board curriculum, digitizing and standardizing science and learning materials for school students across Tamil Nadu.",
      skills: ["Open Source", "Tamil Nadu State Board", "Educational Tech", "Git/GitHub"],
      link: "https://github.com/keerthana2k7",
    },
    {
      id: "tnjug-award",
      title: "Best Contributor Award — Open Source Lab",
      org: "Tamil Nadu Java User Group (TNJUG) & KEC",
      date: "2025",
      category: "Award",
      badge: "Honors & Award",
      icon: Award,
      accent: "#f59e0b",
      desc: "Awarded by the Tamil Nadu Java User Group (TNJUG) in collaboration with Kongu Engineering College for outstanding code contribution, active peer mentoring, and developer engagement in Open Source Lab initiatives.",
      skills: ["Java", "TNJUG Community", "Peer Mentoring", "Open Source Tooling"],
      link: "https://github.com/keerthana2k7",
    },
    {
      id: "tnjug-member",
      title: "Community Member & Technical Volunteer",
      org: "Tamil Nadu Java User Group (TNJUG)",
      date: "2024 – Present",
      category: "Community",
      badge: "Community Involvement",
      icon: Users,
      accent: "#a855f7",
      desc: "Active participant in TNJUG community technical meetups and workshops, exploring modern Java releases, JVM internals, garbage collection tuning, and enterprise backend design patterns.",
      skills: ["Core Java", "JVM Architecture", "Tech Meetups", "Community Engagement"],
      link: "https://www.linkedin.com/in/keerthana-rajendran357",
    },
    {
      id: "os-lab-kec",
      title: "Student Member — Open Source Lab",
      org: "Kongu Engineering College",
      date: "2024 – Present",
      category: "Community",
      badge: "Campus Leadership",
      icon: Code2,
      accent: "#10b981",
      desc: "Collaborating with college peers on open-source initiatives, developer tooling, campus code jams, and hackathons while fostering open-source software culture among students.",
      skills: ["Developer Tooling", "Hackathons", "Code Jams", "Collaborative Dev"],
      link: "https://github.com/keerthana2k7",
    },
  ],
  hackathons: [
    {
      id: "sih-2025",
      title: "Smart India Hackathon (SIH 2025) Pre-Finalist",
      org: "Ministry of Education & AICTE, Govt. of India",
      date: "2025",
      category: "National Hackathon",
      badge: "National Pre-Finalist",
      icon: Trophy,
      accent: "#ec4899",
      desc: "Shortlisted among top national teams from over 1,000+ entries across India for engineering an innovative technological solution tackling real-world governance and civic problem statements.",
      skills: ["National Hackathon", "System Design", "Rapid Prototyping", "Full Stack"],
      link: "https://www.linkedin.com/in/keerthana-rajendran357",
    },
    {
      id: "kec-hackathon",
      title: "Finalist — Internal College Hackathon",
      org: "Kongu Engineering College",
      date: "2025",
      category: "Hackathon",
      badge: "College Finalist",
      icon: Award,
      accent: "#3b82f6",
      desc: "Selected as top finalist among senior and peer cohorts for building end-to-end full-stack web applications and presenting architectural defenses under intensive 24-hour sprint conditions.",
      skills: ["Web Architecture", "Database Design", "Agile Prototyping"],
      link: "https://github.com/keerthana2k7",
    },
    {
      id: "mini-hackathon",
      title: "Finalist — First-Year Exclusive Mini Hackathon",
      org: "Department of CSE, Kongu Engineering College",
      date: "2025",
      category: "Hackathon",
      badge: "Competition Finalist",
      icon: Code2,
      accent: "#06b6d4",
      desc: "Engineered and pitched 'MultiDrive', an all-in-one multi-service web platform uniting service bookings, inventory handling, and support ticketing under rapid development deadlines.",
      skills: ["JavaScript", "MySQL", "Authentication", "Service Booking"],
      link: "https://github.com/keerthana2k7/mini-hackathon",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("certifications");

  const tabLabels = [
    { key: "certifications", label: "Certifications" },
    { key: "internships", label: "Internships & Industry" },
    { key: "hackathons", label: "Hackathons & Competitions" },
    { key: "community", label: "Open Source & Community" },
  ];

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div
        className="card"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          borderRadius: 16,
          padding: "36px 30px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <h2 style={{ fontSize: "2rem", color: "#38bdf8", marginBottom: 6, fontWeight: 700 }}>
          Achievements & Recognition 🏅
        </h2>
        <p className="lead" style={{ color: "#aaa", marginBottom: 24, fontSize: "1rem" }}>
          Verified accomplishments across open-source initiatives, national hackathons, and software engineering internships.
        </p>

        {/* Tab Buttons */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
          {tabLabels.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: "10px 20px",
                borderRadius: 10,
                border: "1px solid " + (tab === t.key ? "var(--accent-2)" : "rgba(255,255,255,0.08)"),
                cursor: "pointer",
                background: tab === t.key ? "linear-gradient(90deg, var(--accent), var(--accent-2))" : "rgba(255,255,255,0.04)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                transition: "all 0.3s ease",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: 24,
          }}
        >
          <AnimatePresence mode="wait">
            {ACHIEVEMENTS[tab].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 12px 30px ${item.accent}22`,
                    borderColor: `${item.accent}66`,
                  }}
                  style={{
                    background: "linear-gradient(145deg, rgba(20,24,33,0.8), rgba(12,14,20,0.9))",
                    borderRadius: 16,
                    padding: 24,
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div>
                    {/* Header badge & icon */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: `${item.accent}18`,
                          border: `1px solid ${item.accent}44`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: item.accent,
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          padding: "4px 10px",
                          borderRadius: 20,
                          background: `${item.accent}15`,
                          color: item.accent,
                          border: `1px solid ${item.accent}33`,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: 6, fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <div style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: 14 }}>
                      <strong style={{ color: "#e2e8f0" }}>{item.org}</strong> • {item.date}
                    </div>

                    <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: 16 }}>
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    {/* Skills pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                      {item.skills.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontSize: "0.75rem",
                            padding: "3px 8px",
                            borderRadius: 6,
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#94a3b8",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Verified indicator & link */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: 12,
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 5, color: "#10b981", fontSize: "0.82rem", fontWeight: 600 }}>
                        <CheckCircle2 size={15} /> Verified Achievement
                      </span>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          color: item.accent,
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        View Profile <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
