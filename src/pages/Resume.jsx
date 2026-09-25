import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code, ExternalLink, Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 32, color: "#00b4ff", marginBottom: 10, fontWeight: 700 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 30 }}
        >
          Curriculum Vitae and professional credentials.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 22px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <h3 style={{ fontSize: 26, color: "#00b4ff", marginBottom: 6, fontWeight: 800 }}>
              KEERTHANA R
            </h3>
            <p style={{ margin: "4px 0", fontSize: 15, color: "#e2e8f0", fontWeight: 600 }}>
              Software Development Intern | Java Backend | Full Stack Developer
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#94a3b8" }}>
              B.E. Computer Science and Engineering (2024–2028) • Kongu Engineering College
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Erode, Tamil Nadu, India
            </p>
            <p style={{ margin: "6px 0 0 0", fontSize: 14, color: "#38bdf8" }}>
              ✉️ keerthanarajendran.vanitha@gmail.com | 📞 +91 9360517234
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: "linear-gradient(135deg, rgba(0, 180, 255, 0.15), #0b0b0b)",
              borderRadius: 12,
              padding: "16px 20px",
              border: "1px solid rgba(0, 180, 255, 0.3)",
              maxWidth: 540,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff", fontSize: 15 }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#cbd5e1", marginBottom: 0 }}>
              B.E. Computer Science student (CGPA: 8.12) at Kongu Engineering College with a 6-month Java backend internship
              at Zoho Corporation and an AI prompt engineering internship at Virdhi Tech Lab. Builds on strong foundations in
              Data Structures, Algorithms, and OOP through software projects in backend systems, AI/ML, and relational database design.
              Pre-Finalist, Smart India Hackathon 2025 (shortlisted from 1,000+ national entries).
            </p>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 35,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: "24px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <Briefcase size={20} /> Work Experience
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <strong style={{ fontSize: 16, color: "#fff" }}>
                  Software Development Intern — Zoho Corporation Private Limited
                </strong>
                <span style={{ color: "#00b4ff", fontSize: 14 }}>Dec 2025 – May 2026</span>
              </div>
              <p style={{ color: "#94a3b8", fontSize: 13, margin: "2px 0 6px 0" }}>
                Backend-focused role, Technical Staff team | Java, OOP, Data Structures
              </p>
              <ul style={{ color: "#ccc", margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.6 }}>
                <li>Reviewed and updated Java codebases alongside backend engineers, applying OOP design principles to internal systems.</li>
                <li>Diagnosed and resolved backend issues in a production environment; earned a 'Good' performance rating on official internship certificate.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <strong style={{ fontSize: 16, color: "#fff" }}>
                  AI Prompt Engineer Intern — Virdhi Tech Lab Pvt Ltd
                </strong>
                <span style={{ color: "#00b4ff", fontSize: 14 }}>Jun 2026 – Jul 2026</span>
              </div>
              <p style={{ color: "#94a3b8", fontSize: 13, margin: "2px 0 6px 0" }}>
                On-site | Prompt Engineering, MySQL & Relational DB Schema Design
              </p>
              <ul style={{ color: "#ccc", margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.6 }}>
                <li>Designed, tested, and refined prompts for AI applications, analyzing AI-generated responses to optimize accuracy and relevance.</li>
                <li>Developed backend logic and designed normalized relational database schemas using MySQL to support core business functionality.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 25,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: "24px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <GraduationCap size={20} /> Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.E. Computer Science and Engineering</strong> — Kongu Engineering College, Erode (Aug 2024 – Jun 2028 Expected) <br />
              <span style={{ color: "#38bdf8", fontWeight: 600 }}>CGPA: 8.12 (pursuing)</span>
            </li>
            <li style={{ marginTop: 12 }}>
              <strong>Class XII (CBSE)</strong> — Rasi International School (2024) <br />
              <span style={{ color: "#aaa" }}>Percentage: 80%</span>
            </li>
            <li style={{ marginTop: 12 }}>
              <strong>Class X (CBSE)</strong> — (2022) <br />
              <span style={{ color: "#aaa" }}>Percentage: 85%</span>
            </li>
          </ul>
        </motion.div>

        {/* Key Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 25,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: "24px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <Code size={20} /> Key Engineering Projects
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, fontSize: 14 }}>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: "#fff" }}>☕ Smart Canteen Management System:</strong>{" "}
              <span style={{ color: "#cbd5e1" }}>Java · OOP · Data Structures · MySQL — Ordering/billing platform for 100+ menu items, linked-list order queue, reduced billing errors by 90%.</span>
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: "#fff" }}>🌾 RVKS Farm Operations Portal:</strong>{" "}
              <span style={{ color: "#cbd5e1" }}>Python · MySQL · Web UI — Enterprise operations dashboard centralizing raw material logs, feed tracking, and automated supplier billing records.</span>
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: "#fff" }}>🗺️ DevTrack DSA Roadmap Tracker:</strong>{" "}
              <span style={{ color: "#cbd5e1" }}>React.js · JavaScript — Interactive developer learning dashboard and roadmap tracker for tracking engineering milestones and algorithms.</span>
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: "#fff" }}>🏥 AI-Driven Health Chatbot:</strong>{" "}
              <span style={{ color: "#cbd5e1" }}>Python · NLP · AIML — Chatbot classifying 15+ health intent categories with ~85% query accuracy and real-time guidance pipeline.</span>
            </li>
            <li>
              <strong style={{ color: "#fff" }}>🚗 MultiDrive Multi-Service Web Platform:</strong>{" "}
              <span style={{ color: "#cbd5e1" }}>HTML · CSS · JavaScript · MySQL — Full-stack web app with authentication, service booking, payment workflows, and support ticketing.</span>
            </li>
          </ul>
        </motion.div>

        {/* Achievements & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: 25,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: "24px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <Award size={20} /> Honors & Achievements
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, fontSize: 14, color: "#cbd5e1" }}>
            <li>🏆 <strong>Best Contributor Award – Open Source Lab:</strong> Awarded by Tamil Nadu Java User Group (TNJUG) in collaboration with Kongu Engineering College.</li>
            <li>🇮🇳 <strong>Pre-Finalist, Smart India Hackathon (SIH 2025):</strong> National-level hackathon, shortlisted among top teams from 1,000+ national entries.</li>
            <li>⚡ <strong>Finalist, Internal College Hackathon 2025:</strong> Shortlisted among top teams from senior and first-year cohorts at Kongu Engineering College.</li>
            <li>📚 <strong>Open Source Contributor, TNEBooks:</strong> Contributed to educational open-source resources for Tamil Nadu school students.</li>
          </ul>
        </motion.div>

        {/* Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ marginTop: 30 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 14 }}>⚙️ Skills & Tools</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Java (Core & Advanced)",
              "C++",
              "C",
              "Python",
              "JavaScript",
              "SQL",
              "MySQL",
              "JDBC",
              "Spring Boot",
              "React",
              "Bootstrap",
              "HTML5",
              "CSS3",
              "Data Structures & Algorithms",
              "OOP Principles",
              "Relational DB Design",
              "Git & GitHub",
              "Docker Basics",
              "VS Code",
              "DBeaver",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.08, backgroundColor: "rgba(0,180,255,0.25)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#cbd5e1",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Profile Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            { name: "💻 GitHub (keerthana2k7)", link: "https://github.com/keerthana2k7" },
            { name: "💼 LinkedIn (keerthana-rajendran357)", link: "https://www.linkedin.com/in/keerthana-rajendran357" },
            { name: "🏆 LeetCode (keerthana_357)", link: "https://leetcode.com/u/keerthana_357" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08, color: "#00b4ff" }}
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              {site.name} <ExternalLink size={14} />
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{
            marginTop: 40,
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Keerthana Rajendran Resume"
            style={{
              width: "100%",
              height: "680px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <motion.a
            href="/resume.pdf"
            download="Keerthana_Rajendran_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(90deg, #0284c7, #0369a1)",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: 0.3,
              boxShadow: "0 4px 15px rgba(2, 132, 199, 0.3)",
            }}
          >
            <Download size={18} /> Download Official Resume (PDF)
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
