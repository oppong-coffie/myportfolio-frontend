import React, { useState, useEffect } from 'react';
import { Input, Textarea, Button, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Home, ExternalLink, Info, CheckCircle2, Code, Building2, Sparkles, Globe, Layers, Users, GitBranch, Play, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Project Images
import zeazn from '../images/zeazn.png';
import zulupromo from '../images/zulupromr.png';
import game from '../images/game.png';
import gupshup from '../images/gupshup.png';
import ipa from '../images/ipa.png';
import telaxben from '../images/telaxben.png';
import prime from '../images/prime.jpeg';
import aurafits from '../images/aurafits.png';
import nextlogic from '../images/nextlogic.png';
import quay from '../images/quay.png';
import eco from '../images/eco.jpeg';
import bcm from '../images/bcm.png';
import aura from '../images/aura.png';
import betty1 from '../images/betty1.png';
import betty2 from '../images/betty2.png';

const projectsData = [
  {
    id: 'zeazn',
    name: 'Zeazn Limited Website',
    client: 'Zeazn Limited',
    category: 'Web App',
    link: 'https://zeazn.com',
    image: zeazn,
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    description: 'A web portal for Zeazn Limited, engineered with high performance and responsive layout to present business services.',
    hasDetails: true,
    features: [
      'Fully responsive layout across all device viewports',
      'Modern executive visual identity with animated UI elements',
      'Performance-optimized assets ensuring quick page loads',
      'Secure lead capture and contact forms'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel']
  },
  {
    id: 'ipa',
    name: 'IPAGH NGO Web Portal',
    client: 'IPA GH',
    category: 'Web App',
    link: 'https://ipagh.org',
    image: ipa,
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    description: 'A web portal for IPAGH NGO, designed to facilitate community engagement and streamline information.',
    hasDetails: true,
    features: [
      'Interactive community advocacy & updates center',
      'Fully responsive UI for mobile and desktop screens',
      'Optimized SEO and accessibility compliance',
      'Dynamic event highlights and news portal'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel']
  },
  {
    id: 'memory-game',
    name: 'Memory Matching Game',
    client: 'Personal Project',
    category: 'Games',
    link: 'https://game-mocha-zeta-14.vercel.app',
    image: game,
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    description: 'A memory card matching game',
    hasDetails: true,
    features: [
      'Fluid 3D card-flip animations with Framer Motion',
      'Real-time score calculation and move tracking',
      'Responsive touch UI tailored for desktop & mobile devices',
      'Audio feedback & celebratory completion modal'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel']
  },
  {
    id: 'aurafit',
    name: 'Aurafits Website',
    client: 'AurafitsGH Shop',
    category: 'Web App',
    link: 'https://aurafitsgh.org',
    image: aura,
    tags: ['Next.jx', 'MongoDB', 'AWS'],
    description: 'E-commerce website for easy online shopping experience. Online ordering, secure checkout, and convenient delivery—designed to attract customers.',
    hasDetails: true,
    features: [
      'Modern project portfolio showcase grid',
      'Service overview and client testimonials',
      'Streamlined contact form & lead capture setup',
      'Fast responsive page loading'
    ],
    techStack: ['Next.js', 'Tailwind CSS']
  },
    {
    id: 'teamalfy',
    name: 'TeamAlfy Company Website',
    client: 'TeamAlfy',
    category: 'Web App',
    link: 'https://team-alfy.vercel.app/',
    image: zulupromo,
    tags: ['React', 'Tailwind CSS'],
    description: 'Official corporate website for TeamAlfy showcasing software development services, team portfolios, and prospective client booking options.',
    hasDetails: true,
    features: [
      'Modern project portfolio showcase grid',
      'Service overview and client testimonials',
      'Streamlined contact form & lead capture setup',
      'Fast responsive page loading'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Vercel']
  },
    {
    id: 'quay',
    name: 'Quay Shopping App',
    client: 'Quay Sunglasses Shop',
    category: 'Web App',
    link: 'https://quay-production.up.railway.app',
    image: quay,
    tags: ['React', 'Tailwind CSS'],
    description: 'An E-commerce website for online ordering, secure checkout, and convenient delivery—designed to attract customers.',
    hasDetails: true,
    features: [
      'Modern project portfolio showcase grid',
      'Service overview and client testimonials',
      'Streamlined contact form & lead capture setup',
      'Fast responsive page loading'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'supabase', 'aws']
  },
    {
    id: 'bcm',
    name: 'BCM Environmental Website',
    client: 'Mr. Lord',
    category: 'Web App',
    link: 'https://ghabcm-production.up.railway.app',
    image: bcm,
    tags: ['React', 'Tailwind CSS'],
    description: 'Environmental website designed to helps users understand atmospheric carbon and its impact on the environment.',
    hasDetails: true,
    features: [
      'Modern project portfolio showcase grid',
      'Service overview and client testimonials',
      'Streamlined contact form & lead capture setup',
      'Fast responsive page loading'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'supabase', 'aws']
  },
  {
    id: 'sms-portal',
    name: 'Bulk SMS Messaging System',
    client: 'Telecom System',
    category: 'Systems',
    link: '',
    image: gupshup,
    tags: ['Node.js', 'Express', 'SMS API'],
    description: 'A scalable bulk SMS communication gateway built to handle broadcast campaigns, contact list management, and real-time delivery reports.',
    hasDetails: true,
    features: [
      'High-throughput SMS gateway integration',
      'Contact list import & segment management',
      'Scheduled broadcast message queues',
      'Real-time delivery status logs'
    ],
    techStack: ['Node.js', 'Express.js', 'SMS Gateway API']
  },
  {
    id: 'graphic-designs',
    name: 'Graphic Design & Brand Marketing',
    client: 'Prime Quarm Travel Consult',
    category: 'Graphic Design',
    link: '',
    image: prime,
    tags: [],
    description: 'A collection of promotional flyers, social media banners, corporate branding, and visual marketing assets created using Photoshop, Figma, and Canva.',
    hasDetails: true,
    features: [
      'Custom flyer and promotional banner designs',
      'High-resolution vector assets and social media graphics',
      'Brand identity style guides and logo concepts',
      'Print-ready marketing materials and layout designs'
    ],
  },
  {
    id: 'video-ads',
    name: 'NextLogic Promotional Video Ad',
    client: 'NextLogic Inc',
    category: 'Video Ads',
    link: '',
    image: nextlogic,
    videoUrl: 'https://drive.google.com/file/d/1lYLF0_CEb2P8JU5DnUub998H9tOAz_b4/view?usp=sharing',
    tags: [],
    description: 'Video and social media ad created to showcase IT solutions, software development, websites, AI automation, and digital services. Increase brand awareness, and generate new business leads',
    hasDetails: true,
    features: [
      'High-converting promotional video ad edits',
      'Motion graphics, animated titles, and lower thirds',
      'Optimized video ratios for TikTok, Instagram Reels, and YouTube Shorts',
      'Professional audio mixing and sound design'
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'CapCut', 'Canva']
  },
    {
    id: 'aurafits-video-ad',
    name: 'AurafitsGH Video Ad',
    client: 'AurafitsGH',
    category: 'Video Ads',
    link: '',
    image: aurafits,
    videoUrl: 'https://drive.google.com/file/d/1_xPf4yv3HI_ujXttETyn6mr8mZZ30NU7/view?usp=sharing',
    tags: [],
    description: 'video ad created to showcase stylish clothing and an easy online shopping experience.',
    hasDetails: true,
    features: [
      'High-converting promotional video ad edits',
      'Motion graphics, animated titles, and lower thirds',
      'Optimized video ratios for TikTok, Instagram Reels, and YouTube Shorts',
      'Professional audio mixing and sound design'
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'CapCut']
  },
    {
    id: 'Telaxben-video-ad',
    name: 'Telaxben Promotional Video Ad',
    client: 'Telaxben Shop',
    category: 'Video Ads',
    link: '',
    image: telaxben,
    videoUrl: 'https://drive.google.com/file/d/1yrONnKlQkfQW6CFh3eU03BfwmFsT1XC-/view?usp=sharing',
    tags: [],
    description: 'Promotional social media ad to showcase stylish clothing, attract new customers, and drive sales.',
    hasDetails: true,
    features: [
      'High-converting promotional video ad edits',
      'Motion graphics, animated titles, and lower thirds',
      'Optimized video ratios for TikTok, Instagram Reels, and YouTube Shorts',
      'Professional audio mixing and sound design'
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'CapCut']
  },
  {
    id: 'Passport ad',
    name: 'Ghana Passport Video Ad',
    client: 'Personal Project',
    category: 'Video Ads',
    link: '',
    image: eco,
    videoUrl: 'https://drive.google.com/file/d/1kGu_7GuK2-nQLlC7KdNboGpijZEO1Dg3/view?usp=sharing',
    tags: [],
    description: 'Social media ad created to promote Ghana passport application assistance, processing, and doorstep delivery. Designed to attract customers.',
    hasDetails: true,
    features: [
      'High-converting promotional video ad edits',
      'Motion graphics, animated titles, and lower thirds',
      'Optimized video ratios for TikTok, Instagram Reels, and YouTube Shorts',
      'Professional audio mixing and sound design'
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'CapCut']
  },
  {
    id: 'betty',
    name: 'Betty Collections Flyer',
    client: 'Betty Collections',
    category: 'Graphic Design',
    link: '',
    image: betty1,
    tags: [],
    description: 'Flyer created to promote Ghana passport application assistance, processing, and doorstep delivery. Designed to attract customers.',
    hasDetails: true,
    features: [
      'High-converting promotional video ad edits',
      'Motion graphics, animated titles, and lower thirds',
      'Optimized video ratios for TikTok, Instagram Reels, and YouTube Shorts',
      'Professional audio mixing and sound design'
    ],
    techStack: ['Google Flow', 'ElevenLabs','pixabay', 'CapCut']
  },
  {
    id: 'betty ad',
    name: 'Betty Video Ad',
    client: 'Betty Collections',
    category: 'Video Ads',
    link: '',
    image: betty2,
    videoUrl: 'https://drive.google.com/file/d/1Pa6C-n6mv9xq8xYFt1ZKQLtn8ba2p7wj/view?usp=sharing',
    tags: [],
    description: 'Video add to showcase different perfumes for ladies and guys, increase brand awareness, and generate new business leads',
    hasDetails: true,
    features: [
      'High-converting promotional video ad edits',
      'Motion graphics, animated titles, and lower thirds',
      'Optimized video ratios for TikTok, Instagram Reels, and YouTube Shorts',
      'Professional audio mixing and sound design'
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'CapCut']
  }
];

const contributionsData = [
  {
    title: "Blaccbook",
    role: "Core Contributor",
    description: "Contributed to specialized React platform components and accessibility audits.",
    myContribution: "Developed custom React UI components, improved WCAG web accessibility standards, and audited performance.",
    link: ""
  },
  {
    title: "FinTech Analytics Dashboard",
    role: "Frontend Consultant",
    description: "Collaborated on real-time data visualization and security modules.",
    myContribution: "Built D3.js real-time analytics charts and implemented Auth0 authentication flows.",
    link: ""
  },
  {
    title: "Medical Record System",
    role: "Team Lead",
    description: "Developed high-fidelity design system and component architecture.",
    myContribution: "Led frontend architecture, designed Figma component library, and built patient record management screens in React Native.",
    link: ""
  }
];

const categories = ['All', 'Web App', 'Systems', 'Games', 'Graphic Design', 'Video Ads'];

//  'Mobile', 'AI & Automation',

const formatVideoEmbedUrl = (url) => {
  if (!url) return '';
  // Convert Google Drive view links to embeddable preview links
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/d\/([^/?]+)/) || url.match(/id=([^&]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }
  // Convert YouTube watch links to embed links
  if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
    const match = url.match(/v=([^&]+)/) || url.match(/youtu\.be\/([^/?]+)/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    }
  }
  return url;
};

const AllProjects = () => {
  // Idea Contact Modal controls
  const { isOpen: isContactOpen, onOpen: onContactOpen, onOpenChange: onContactOpenChange } = useDisclosure();

  // Details Modal controls
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onOpenChange: onDetailsOpenChange } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  // Category filter state
  const [activeCategory, setActiveCategory] = useState('All');

  // Contact Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    emailjs.init("T5HMx10wLGbYc1M3F");
  }, []);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    onDetailsOpen();
  };

  const sendSms = async () => {
    try {
      await axios.post(
        'https://myportfolio-backend-nu.vercel.app/sms/sendme',
        { name, phone },
        { headers: { 'Content-Type': 'application/json' } }
      );
      await axios.post(
        'https://myportfolio-backend-nu.vercel.app/sms/sendsms',
        { name, phone },
        { headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Error sending SMS:', error.message);
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setFeedback("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setFeedback("");

    const params = { name, phone, email, message: `Idea Description from All Projects:\n\n${message}` };
    const serviceID = "service_2whq5dc";
    const templateID = "template_5a8k82b";

    emailjs
      .send(serviceID, templateID, params)
      .then(() => {
        setFeedback("Message sent successfully!");
        setLoading(false);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        sendSms();
      })
      .catch((error) => {
        setFeedback("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
        setLoading(false);
      });
  };

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Back Home */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-semibold text-sm"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>

            {/* Title */}
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              All Projects Showcase
            </h1>

            {/* Ongoing Products Badge */}
            <Link to="/ongoing-projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full transition-all duration-300 cursor-pointer"
              >
                <div className="relative flex h-2 w-2">
                  <motion.span
                    animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inline-flex h-full w-full rounded-full bg-amber-400"
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </div>
                <span className="relative text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-300">
                  Ongoing Products
                </span>
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>Portfolio Highlights</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight leading-tight">
            My <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Creative & Technical</span> Journey
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore a curated collection of web applications, AI automation tools, and enterprise systems built for real-world impact.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Card Grid */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-slate-900/90 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Image Preview (No iFrame) */}
                <div className="">
                  <div className="relative h-64 overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-blue-300 text-xs font-semibold rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2">
                      <Building2 size={14} className="text-blue-400" />
                      <span>Client: {project.client}</span>
                    </div>

                    <p className="text-slate-400 text-sm line-clamp-3 mb-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 text-slate-300 text-[11px] font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              

                {/* Card Action Footer */}
                <div className="p-3 pt-1 border-t border-slate-800/50 mt-auto flex items-center justify-between gap-3">
                  {/* Left: View Live Website Button (Hidden if no link) */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md hover:shadow-blue-500/20 transform hover:scale-105 cursor-pointer"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <span>Visit Live Website</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div />
                  )}

                  {/* Right: Details / Watch Ads Button */}
                  {project.hasDetails || project.category === 'Video Ads' || project.videoUrl ? (
                    <button
                      onClick={() => handleOpenDetails(project)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        project.category === 'Video Ads' || project.videoUrl
                          ? 'bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-600/20 border border-red-500/40 transform hover:scale-105'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600'
                      }`}
                      type="button"
                    >
                      {project.category === 'Video Ads' || project.videoUrl ? (
                        <>
                          <Play size={14} className="fill-white text-white" />
                          <span>Watch Ads</span>
                        </>
                      ) : (
                        <>
                          <Info size={14} className="text-purple-400" />
                          <span>Details</span>
                        </>
                      )}
                    </button>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Contributed Projects Section (Simple & Clean - No Pictures) */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users size={14} />
            <span>Team Collaboration</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Projects I've <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Contributed To</span>
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Collaborative initiatives where I contributed to frontend engineering, architecture, or features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contributionsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Title & Role */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <GitBranch size={16} className="text-purple-400" />
                    {item.title}
                  </h4>
                  <span className="px-2.5 py-0.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-semibold rounded-full">
                    {item.role}
                  </span>
                </div>

                <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* My Contribution / What I Did */}
                <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-purple-300 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-purple-400" />
                    <span>My Contribution</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed font-medium">
                    {item.myContribution}
                  </p>
                </div>

              </div>

              {/* Visit Link if present */}
              {item.link && item.link !== '#' ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-xl text-xs font-semibold transition-all mt-2 cursor-pointer"
                >
                  <span>Visit Project</span>
                  <ExternalLink size={13} />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-slate-900/60 border-t border-slate-800 text-center relative overflow-hidden mt-12">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight text-white">
            Ready to bring your next idea to life?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Let's collaborate on your next web application, mobile app, or AI chatbot solution.
          </p>

          <button
            onClick={() => onContactOpen()}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-500/20 hover:scale-105 cursor-pointer"
            type="button"
          >
            <span>Describe your idea</span>
            <Home size={20} />
          </button>
        </div>
      </section>

      {/* PROJECT DETAILS / WATCH ADS MODAL */}
      <Modal
        isOpen={isDetailsOpen}
        onOpenChange={onDetailsOpenChange}
        backdrop="blur"
        size={selectedProject?.category === 'Video Ads' || selectedProject?.videoUrl ? "4xl" : "2xl"}
        classNames={{
          base: "bg-slate-900 border border-slate-800 text-white shadow-2xl rounded-2xl overflow-hidden",
          header: "border-b border-slate-800 bg-slate-950/80 p-5",
          body: "p-6 max-h-[85vh] overflow-y-auto",
          footer: "border-t border-slate-800 bg-slate-950/80 p-4",
          closeButton: "hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {selectedProject && (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full border ${
                        selectedProject.category === 'Video Ads' || selectedProject.videoUrl
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                      }`}>
                        {selectedProject.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Building2 size={12} />
                        {selectedProject.client}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white mt-1">
                      {selectedProject.name}
                    </h3>
                  </ModalHeader>

                  <ModalBody className="space-y-6">
                    {/* Big Modal Iframe / Video Player for Video Ads */}
                    {selectedProject.category === 'Video Ads' || selectedProject.videoUrl ? (
                      <div className="space-y-4">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 aspect-video shadow-2xl">
                          {selectedProject.videoUrl || selectedProject.link ? (
                            selectedProject.videoUrl?.endsWith('.mp4') || selectedProject.videoUrl?.endsWith('.webm') ? (
                              <video
                                src={selectedProject.videoUrl}
                                controls
                                autoPlay
                                poster={selectedProject.image}
                                className="w-full h-full object-contain"
                              >
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <iframe
                                src={formatVideoEmbedUrl(selectedProject.videoUrl || selectedProject.link)}
                                title={selectedProject.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full border-none"
                              />
                            )
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-950">
                              <Film size={48} className="text-red-400 mb-3 opacity-60 animate-pulse" />
                              <p className="text-slate-300 font-bold text-lg mb-1">Commercial Video Ad Showcase</p>
                              <p className="text-slate-500 text-xs max-w-md">
                                Set <code className="text-red-400 bg-slate-900 px-1.5 py-0.5 rounded">videoUrl</code> in AllProjects.js to play your video ad file or YouTube/Vimeo embed in this iframe modal.
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Video Details */}
                        <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-2">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                            <Film size={14} />
                            <span>Ad Campaign Details</span>
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {selectedProject.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Regular project details modal body */
                      <>
                        {/* Banner Image / Full Image View */}
                        <div className="relative min-h-[280px] max-h-[520px] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center p-3">
                          <img
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            className="max-h-[480px] w-auto h-auto object-contain rounded-lg shadow-2xl"
                          />
                          <a
                            href={selectedProject.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-3 right-3 px-3 py-1.5 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md border border-slate-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-lg transition-all"
                          >
                            <ExternalLink size={13} className="text-blue-400" />
                            <span>View Full Size</span>
                          </a>
                        </div>

                        {/* Overview */}
                        <div>
                          <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                            Project Overview
                          </h4>
                          <p className="text-slate-300 text-base leading-relaxed">
                            {selectedProject.description}
                          </p>
                        </div>

                        {/* Key Features */}
                        {selectedProject.features && selectedProject.features.length > 0 && (
                          <div>
                            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                              <CheckCircle2 size={16} className="text-green-400" />
                              <span>Key Features</span>
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {selectedProject.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech Stack */}
                        {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                          <div>
                            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                              <Code size={16} className="text-blue-400" />
                              <span>Technical Stack</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.techStack.map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5">
                                  <Layers size={12} className="text-purple-400" />
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </ModalBody>

                  <ModalFooter className="flex items-center justify-between">
                    <div>
                      {selectedProject.link ? (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold text-xs rounded-xl transition-all shadow-md"
                        >
                          <Globe size={16} />
                          <span>Visit Live Website</span>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-500 italic">No live link available</span>
                      )}
                    </div>

                    <Button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl"
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </>
          )}
        </ModalContent>
      </Modal>

      {/* DESCRIBE IDEA / CONTACT MODAL */}
      <Modal
        isOpen={isContactOpen}
        onOpenChange={onContactOpenChange}
        backdrop="blur"
        classNames={{
          base: "bg-slate-900 border border-slate-800 shadow-2xl pb-6 text-white rounded-2xl",
          header: "border-b border-slate-800",
          closeButton: "hover:bg-slate-800 text-slate-400 hover:text-white",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white text-2xl font-black italic uppercase tracking-wider">
                Describe Your Idea
              </ModalHeader>
              <ModalBody>
                <form onSubmit={sendEmail} className="space-y-6 mt-4">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      label="Name"
                      variant="bordered"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      classNames={{
                        inputWrapper: "border-slate-700 group-data-[focus=true]:border-blue-500",
                        label: "text-slate-400",
                        input: "text-white"
                      }}
                      required
                    />
                    <Input
                      type="email"
                      label="Email"
                      variant="bordered"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      classNames={{
                        inputWrapper: "border-slate-700 group-data-[focus=true]:border-blue-500",
                        label: "text-slate-400",
                        input: "text-white"
                      }}
                      required
                    />
                    <Input
                      type="tel"
                      label="Phone"
                      variant="bordered"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      classNames={{
                        inputWrapper: "border-slate-700 group-data-[focus=true]:border-blue-500",
                        label: "text-slate-400",
                        input: "text-white"
                      }}
                    />
                    <Textarea
                      label="Your Idea"
                      variant="bordered"
                      minRows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      classNames={{
                        inputWrapper: "border-slate-700 group-data-[focus=true]:border-blue-500",
                        label: "text-slate-400",
                        input: "text-white"
                      }}
                      required
                      placeholder="Tell me a bit about what you want to build..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all cursor-pointer"
                    disabled={loading}
                  >
                    {loading ? <Spinner color="white" size="sm" /> : "Send Details"}
                  </Button>

                  {feedback && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 text-center font-bold text-sm bg-black/20 p-3 rounded-lg ${feedback.includes("successfully") ? "text-emerald-400 border border-emerald-500/20" : "text-red-400 border border-red-500/20"
                        }`}
                    >
                      {feedback}
                    </motion.p>
                  )}
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AllProjects;
