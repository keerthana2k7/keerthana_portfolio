import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../CSS/Gallery.css";

const IMAGES = {
  personal: [
    {
      id: 1,
      caption: "From an idea to reality — the Green Lab is finally here! 🌱 Proud to collaborate with team members on campus sustainability and technology initiatives at Kongu Engineering College.",
      photos: ["/gallery/greenlab.jpg"],
    },
    {
      id: 2,
      caption: "Campus innovation, engineering hackathons, and collaborative problem-solving journey at Kongu Engineering College.",
      photos: ["/gallery/greenlab.jpg"],
    },
  ],
  projects: [
    {
      id: 1,
      caption: "☕ Smart Canteen Management System: Automated billing, menu queues, and wallet transactions reducing cafeteria wait times.",
      photos: ["/projects/canteen.jpg"],
    },
    {
      id: 2,
      caption: "📊 RVKS WEB & DevTrack: Enterprise livestock farm management and developer DSA roadmap trackers.",
      photos: ["/projects/rvks.jpg", "/projects/devtrack.jpg"],
    },
    {
      id: 3,
      caption: "📈 TradeHub & VisionAttend: Stock trading simulator and computer vision facial recognition analytics.",
      photos: ["/projects/tradehub.jpg", "/projects/visionattend.jpg"],
    },
  ],
  achievements: [
    {
      id: 1,
      caption: "Continuous practice and algorithmic problem solving on LeetCode (keerthana_357) 🏆!",
      photos: ["/gallery/leet.jpeg"],
    },
    {
      id: 2,
      caption: "🇮🇳 Smart India Hackathon (SIH 2025) Pre-Finalist — Selected among 1,000+ national teams across India!",
      photos: ["/gallery/presentation_sih.jpg"],
    },
    {
      id: 3,
      caption: "✨ Best Contributor Award by Tamil Nadu Java User Group (TNJUG) in collaboration with Kongu Engineering College.",
      photos: ["/gallery/meetup_tnjug.jpg"],
    },
  ],
  presentations: [
    {
      id: 1,
      caption: "🎤 Smart India Hackathon (SIH 2025) National Pre-Finals Presentation: Presenting and defending our team's real-time architecture, microservices data pipeline, and system workflows to expert jury panels.",
      photos: ["/gallery/presentation_sih.jpg"],
    },
    {
      id: 2,
      caption: "📊 Smart Urban & Infrastructure Systems Presentation: Technical presentation showcasing end-to-end data flow, cloud server integration, IoT gateways, and modern web interfaces.",
      photos: ["/gallery/presentation_defense.jpg"],
    },
  ],
  meetups: [
    {
      id: 1,
      caption: "🤝 Tamil Nadu Java User Group (TNJUG) Tech Meetup: Engaging with industry engineers, developers, and open-source practitioners discussing Java modern standards, backend patterns, and open-source collaboration.",
      photos: ["/gallery/meetup_tnjug.jpg"],
    },
    {
      id: 2,
      caption: "🌱 Green Lab Sustainability & Innovation Meetup: Brainstorming energy efficiency, sustainable computing, and IoT monitoring solutions with peers at Kongu Engineering College.",
      photos: ["/gallery/greenlab.jpg"],
    },
  ],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

const TABS = [
  { key: "personal", label: "Personal" },
  { key: "projects", label: "Projects" },
  { key: "achievements", label: "Achievements" },
  { key: "presentations", label: "Presentations" },
  { key: "meetups", label: "Meetups" },
];

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Gallery
      </motion.h2>

      {/* 🧭 Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {TABS.map(({ key, label }) => (
          <motion.button
            key={key}
            className={`tab ${tab === key ? "active" : ""}`}
            onClick={() => setTab(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>

      {/* 🖼️ Posts with Animation on Tab Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab} // Important for AnimatePresence to detect tab change
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              className="post-card"
              variants={childVariants}
              whileHover={{ y: -4 }}
            >
              <p className="caption">{post.caption}</p>
              <div
                className={`photo-grid ${
                  post.photos.length > 1 ? "multi" : "single"
                }`}
              >
                {post.photos.map((src, i) => (
                  <motion.div
                    key={i}
                    className="photo-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    onClick={() => openZoom(post, i)}
                  >
                    <img src={src} alt="gallery" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
