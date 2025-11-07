import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building2, X, Download } from 'lucide-react';

// Import certificate images - if they don't exist, placeholders will be used
// After generating certificates, import them like:
// import reactCert from '../images/react-certificate.png';

// Import certificate images
import reactCert from '../images/certs/certs.jpg';
import jsCert from '../images/certs/cert1.png';
import botpressCert from '../images/certs/cert2.png';
import nodejsCert from '../images/certs/cert3.png';
import reactNativeCert from '../images/certs/cert3.png';
import webDesignCert from '../images/certs/cert3.png';
import fullstackCert from '../images/certs/cert3.png';
import aiBotCert from '../images/certs/cert3.png';



const Certs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
        setTimeout(() => setSelectedCert(null), 300);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCert(null), 300); // Delay to allow exit animation
  };

  const downloadCertificate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedCert && selectedCert.image) {
      try {
        const link = document.createElement('a');
        link.href = selectedCert.image;
        link.download = `${selectedCert.title.replace(/\s+/g, '-')}-certificate.png`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading certificate:', error);
        // Fallback: open in new tab
        window.open(selectedCert.image, '_blank');
      }
    }
  };
// START::CERTIFICATES
  const certifications = [
    {
      id: 1,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'January 2024',
      category: 'web',
      link: '#',
      image: reactCert,
      description: 'Advanced React development skills including hooks, state management, and component architecture',
    },
    {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'November 2023',
      category: 'web',
      link: '#',
      image: jsCert,
      description: 'Mastered JavaScript fundamentals including algorithms, data structures, and ES6+ features',
    },
    {
      id: 3,
      title: 'BotPress Developer Certification',
      issuer: 'BotPress',
      date: 'December 2024',
      category: 'ai',
      link: '#',
      image: botpressCert,
      description: 'Expert in chatbot development using BotPress platform for building conversational AI solutions',
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      issuer: 'Udemy',
      date: 'September 2023',
      category: 'web',
      link: '#',
      image: nodejsCert,
      description: 'Full-stack development skills including RESTful APIs, authentication, and database integration',
    },
    {
      id: 5,
      title: 'React Native Mobile Development',
      issuer: 'Meta',
      date: 'March 2024',
      category: 'mobile',
      link: '#',
      image: reactNativeCert,
      description: 'Cross-platform mobile app development using React Native and Expo framework',
    },
    {
      id: 6,
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'August 2023',
      category: 'web',
      link: '#',
      image: webDesignCert,
      description: 'Modern responsive design techniques using CSS Grid, Flexbox, and mobile-first approach',
    },
    {
      id: 7,
      title: 'Full Stack Web Development',
      issuer: 'Takoradi Technical University',
      date: 'August 2024',
      category: 'web',
      link: '#',
      image: fullstackCert,
      description: 'Complete full-stack development including frontend, backend, and database technologies',
    },
    {
      id: 8,
      title: 'AI Chatbot Integration',
      issuer: 'Gupshup',
      date: 'October 2024',
      category: 'ai',
      link: '#',
      image: aiBotCert,
      description: 'WhatsApp bot development and AI chatbot integration for business automation',
    },
  ];
// END::CERTIFICATES

// START::TABS
  const tabs = [
    { id: 'all', label: 'All', count: certifications.length },
    { id: 'web', label: 'Web Development', count: certifications.filter(c => c.category === 'web').length },
    { id: 'ai', label: 'AI & Bots', count: certifications.filter(c => c.category === 'ai').length },
    { id: 'cloud', label: 'Cloud', count: certifications.filter(c => c.category === 'cloud').length },
    { id: 'mobile', label: 'Mobile', count: certifications.filter(c => c.category === 'mobile').length },
  ];
// END::TABS

// START::FILTERED CERTIFICATES
  const filteredCerts = activeTab === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeTab);
// END::FILTERED CERTIFICATES

// START::CONTAINER VARIANTS
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
// END::CONTAINER VARIANTS

// START::ITEM VARIANTS
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };
// END::ITEM VARIANTS

// START::RETURN        
  return (
    <section id="certifications" className="py-16 px-6 bg-gradient-to-b from-slate-900 via-gray-800 to-slate-900 text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Award className="inline-block mr-3 w-10 h-10" />
            Certifications
          </motion.h2>
          <p className="text-gray-400 text-lg">
            My professional achievements and credentials
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300
                transform hover:scale-105 hover:shadow-lg
                ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }
              `}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-gray-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCerts.map((cert, idx) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${cert.category === 'web' ? 'bg-blue-500/80' : ''}
                      ${cert.category === 'ai' ? 'bg-purple-500/80' : ''}
                      ${cert.category === 'cloud' ? 'bg-orange-500/80' : ''}
                      ${cert.category === 'mobile' ? 'bg-green-500/80' : ''}
                    `}>
                      {cert.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                    <button
                      onClick={() => openModal(cert)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/50 cursor-pointer"
                    >
                      View
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Award className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400 text-lg">No certifications found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence mode="wait">
        {isModalOpen && selectedCert && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Content */}
            <motion.div
              key="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-gray-700 flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gradient-to-r from-blue-900/50 to-purple-900/50 flex-shrink-0">
                <div>
                  <h3 id="modal-title" className="text-2xl font-bold text-white mb-1">
                    {selectedCert.title || 'Certificate'}
                  </h3>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    {selectedCert.issuer || 'Unknown'} • <Calendar className="w-4 h-4 inline" /> {selectedCert.date || 'N/A'}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {/* Download Button */}
                  <button
                    onClick={downloadCertificate}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                    title="Download Certificate"
                    type="button"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Close modal"
                    type="button"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="bg-gray-800 p-6 overflow-auto max-h-[calc(90vh-200px)] flex items-center justify-center flex-1">
                {selectedCert.image ? (
                  <motion.img
                    key={selectedCert.image}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    src={selectedCert.image}
                    alt={selectedCert.title || 'Certificate'}
                    className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-2xl"
                    onError={(e) => {
                      console.error('Error loading certificate image:', selectedCert.image);
                      const parent = e.target.parentElement;
                      if (parent && !parent.querySelector('.error-message')) {
                        e.target.style.display = 'none';
                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'error-message text-red-400 text-center p-4';
                        errorDiv.textContent = 'Failed to load certificate image';
                        parent.appendChild(errorDiv);
                      }
                    }}
                  />
                ) : (
                  <div className="text-gray-400 text-center p-8">
                    <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Certificate image not available</p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-700 bg-gray-800/50 flex-shrink-0">
                <p className="text-gray-300 text-sm text-center">
                  {selectedCert.description || 'No description available'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certs;

