import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap, FaBriefcase, FaAward, FaUsers } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me Container --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0, 150, 255, 0.08)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "2.2rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: 800,
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.9)",
            marginBottom: "1.2rem",
          }}
        >
          Hi! I’m <strong>Keerthana R</strong> — a <strong>Computer Science Engineering</strong> student at{" "}
          <strong>Kongu Engineering College</strong> with a deep passion for engineering high-reliability backend systems,
          scalable full-stack architectures, and robust problem-solving software.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "1.2rem",
          }}
        >
          With real-world industry experience as a <strong>Software Development Intern at Zoho Corporation</strong> and an{" "}
          <strong>AI Prompt Engineering Intern at Virdhi Tech Lab</strong>, I combine solid foundations in Data Structures & Algorithms,
          Object-Oriented Programming (OOP), and Relational Database Schema Design to deliver clean, production-grade solutions.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "2rem",
          }}
        >
          I am a <strong>Smart India Hackathon (SIH 2025) Pre-Finalist</strong> selected among 1,000+ national teams, an active open-source
          contributor with <strong>TNEBooks educational initiatives</strong>, and an involved member of the{" "}
          <strong>Tamil Nadu Java User Group (TNJUG)</strong> and Kongu Engineering College’s <strong>Open Source Lab</strong>.
        </p>

        {/* --- Experience Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: "2.5rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.2rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FaBriefcase color="var(--accent)" /> Professional Experience
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {/* Zoho Experience Card */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(0, 150, 255, 0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "14px",
                padding: "1.6rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <h4 style={{ color: "var(--accent-2)", fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>
                  Software Development Intern — Zoho Corporation Private Limited
                </h4>
                <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Dec 2025 – May 2026</span>
              </div>
              <p style={{ color: "#aaa", fontSize: "0.95rem", margin: "4px 0 10px 0" }}>
                Backend-focused role, Technical Staff team | Coimbatore / Chennai, India
              </p>
              <ul style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", paddingLeft: "1.2rem", margin: 0, lineHeight: 1.6 }}>
                <li>Engineered and maintained software modules using Java and Object-Oriented principles, improving application reliability.</li>
                <li>Reviewed and updated Java codebases alongside senior backend engineers, applying clean architecture to internal systems.</li>
                <li>Diagnosed and resolved backend issues in a production environment; earned a 'Good' performance rating on the official certificate.</li>
              </ul>
            </motion.div>

            {/* Virdhi Experience Card */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(0, 150, 255, 0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "14px",
                padding: "1.6rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <h4 style={{ color: "var(--accent-2)", fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>
                  AI Prompt Engineer Intern — Virdhi Tech Lab Pvt Ltd
                </h4>
                <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Jun 2026 – Jul 2026</span>
              </div>
              <p style={{ color: "#aaa", fontSize: "0.95rem", margin: "4px 0 10px 0" }}>
                On-site Internship | AI & Relational Database Design
              </p>
              <ul style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", paddingLeft: "1.2rem", margin: 0, lineHeight: 1.6 }}>
                <li>Designed, tested, and refined prompts for AI applications, analyzing AI-generated responses to optimize query precision and relevance.</li>
                <li>Developed backend logic and designed normalized relational database schemas using MySQL to support core business functionality.</li>
                <li>Gained hands-on exposure to UI/UX design while aligning prompt outputs with project requirements.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.2rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FaUniversity color="var(--accent)" /> Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {/* Education Card 1 */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(0, 150, 255, 0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={38} color="var(--accent-2)" />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  <h4 style={{ color: "var(--accent-2)", marginBottom: "0.3rem", fontSize: "1.2rem" }}>
                    B.E. in Computer Science and Engineering
                  </h4>
                  <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Aug 2024 – Jun 2028 (Expected)</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.85)", margin: "2px 0" }}>
                  <strong>Kongu Engineering College</strong> — Perundurai, Erode, Tamil Nadu
                </p>
                <p style={{ color: "var(--accent)", margin: "4px 0 0 0", fontWeight: 600 }}>
                  CGPA: 8.12 (Pursuing)
                </p>
              </div>
            </motion.div>

            {/* Education Card 2 */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(0, 150, 255, 0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent-2)" />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  <h4 style={{ color: "var(--accent-2)", marginBottom: "0.3rem", fontSize: "1.2rem" }}>
                    Higher Secondary Education (Class XII)
                  </h4>
                  <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Completed 2024</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.85)", margin: "2px 0" }}>
                  <strong>Rasi International School</strong> — CBSE
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", margin: "4px 0 0 0" }}>
                  Percentage: 80%
                </p>
              </div>
            </motion.div>

            {/* Education Card 3 */}
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(0, 150, 255, 0.15)" }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent-2)" />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  <h4 style={{ color: "var(--accent-2)", marginBottom: "0.3rem", fontSize: "1.2rem" }}>
                    Secondary Education (Class X)
                  </h4>
                  <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Completed 2022</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.85)", margin: "2px 0" }}>
                  <strong>CBSE Board</strong>
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", margin: "4px 0 0 0" }}>
                  Percentage: 85%
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Leadership & Community Involvement --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.2rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FaUsers color="var(--accent)" /> Activities & Leadership
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              {
                title: "SPOC, Innovation & Entrepreneurship Forum (IEF)",
                desc: "Serving as Single Point of Contact, coordinating student entrepreneurship and innovation initiatives.",
              },
              {
                title: "Open Source Lab & TNJUG Member",
                desc: "Active participant in Tamil Nadu Java User Group meetups and Kongu Engineering College Open Source Lab workshops.",
              },
              {
                title: "TNEBooks Open Source Contributor",
                desc: "Collaborative contributor to educational resource digitisation and tools for Tamil Nadu school students.",
              },
              {
                title: "Member, Computer Society of India (CSI)",
                desc: "Engaging in professional computing forums, seminars, and peer-to-peer technical knowledge exchanges.",
              },
              {
                title: "NSS Volunteer",
                desc: "Volunteering with National Service Scheme (NSS) at Kongu Engineering College for community social outreach.",
              },
            ].map((act, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, borderColor: "var(--accent)" }}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  padding: "1.2rem",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h5 style={{ margin: "0 0 6px 0", color: "#60a5fa", fontSize: "1rem" }}>{act.title}</h5>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.5 }}>{act.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
