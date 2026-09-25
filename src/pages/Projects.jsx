import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '☕ Smart Canteen Management System',
    desc: 'Digital ordering, billing, and inventory reconciliation platform. Automates student wallet transactions, eliminates cafeteria wait times, and applies a linked-list order queue with SQL persistence.',
    ss: '/projects/canteen.jpg',
    tech: ['Java', 'OOP', 'Data Structures', 'JDBC', 'MySQL'],
    live: 'https://github.com/keerthana2k7/Smart-Canteen-System',
    code: 'https://github.com/keerthana2k7/Smart-Canteen-System'
  },
  {
    title: '🌾 RVKS WEB — Farm & Livestock Portal',
    desc: 'Enterprise operational web platform designed to streamline poultry and livestock operations. Centralizes raw material logs, feed tracking metrics, and automated supplier billing records.',
    ss: '/projects/rvks.jpg',
    tech: ['Python', 'MySQL', 'Web UI', 'Relational DB'],
    live: 'https://github.com/keerthana2k7/RVKS_WEB',
    code: 'https://github.com/keerthana2k7/RVKS_WEB'
  },
  {
    title: '🗺️ DevTrack — DSA & Learning Roadmap',
    desc: 'Interactive developer learning dashboard and roadmap tracker engineered to monitor engineering milestones, algorithmic problem practice, and computer science skill progression.',
    ss: '/projects/devtrack.jpg',
    tech: ['React.js', 'JavaScript', 'Front-End', 'DSA Tracker'],
    live: 'https://github.com/keerthana2k7/DAS_MAP',
    code: 'https://github.com/keerthana2k7/DAS_MAP'
  },
  {
    title: '📈 TradeHub — Stock Trading Simulator',
    desc: 'Production-ready stock trading simulator featuring interactive charting, live market simulation, portfolio tracking, and responsive financial dashboard UI.',
    ss: '/projects/tradehub.jpg',
    tech: ['TypeScript', 'React.js', 'State Management', 'Web UI'],
    live: 'https://github.com/keerthana2k7/Stock_trading_stimulator',
    code: 'https://github.com/keerthana2k7/Stock_trading_stimulator'
  },
  {
    title: '👁️ VisionAttend — Face Recognition Attendance',
    desc: 'Computer vision automated attendance system with real-time face detection, video stream analysis, and verified attendance logging.',
    ss: '/projects/visionattend.jpg',
    tech: ['Python', 'Computer Vision', 'OpenCV', 'Analytics'],
    live: 'https://github.com/keerthana2k7/Attendance_management',
    code: 'https://github.com/keerthana2k7/Attendance_management'
  },
  {
    title: '🏥 AI-Driven Healthcare Chatbot',
    desc: 'Intelligent healthcare conversational assistant classifying 15+ medical intent categories with ~85% query accuracy and real-time guidance pipelines.',
    ss: '/projects/healthbot.jpg',
    tech: ['Python', 'NLP', 'AIML', 'Prompt Engineering'],
    live: 'https://github.com/keerthana2k7',
    code: 'https://github.com/keerthana2k7'
  },
  {
    title: '🚗 MultiDrive — Unified Multi-Service Web App',
    desc: 'Full-stack platform built for hackathon competition unifying service bookings, commerce workflows, and support ticketing with normalized MySQL tables.',
    ss: '/projects/canteen.jpg',
    tech: ['JavaScript', 'HTML5/CSS3', 'MySQL', 'Full-Stack'],
    live: 'https://github.com/keerthana2k7/mini-hackathon',
    code: 'https://github.com/keerthana2k7/mini-hackathon'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A showcase of real-world backend architectures, full-stack platforms, and engineering systems.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
