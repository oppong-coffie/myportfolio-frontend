import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Download, X, Award, Building2, Calendar } from 'lucide-react';

import edu1 from '../images/TTU-LOGO.jpg';
import ipmc from '../images/ipmc.jpg';
import amalitech from '../images/amalitech.png';
import aws from '../images/aws.jpg';

// Import Certificate images
import ttuCert from '../images/certs/ttu.jpg';
import ipmcCert from '../images/certs/ipmc.png';
import amalitechCert from '../images/certs/va.jpg';
import awsCert from '../images/certs/aws.jpg';

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Smooth easing
      delay: 200, // Delay between animations
      once: true, // Ensures animations play only once
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

  // Lock body scroll when modal is open
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

  const openModal = (educationItem) => {
    setSelectedCert(educationItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCert(null), 300);
  };

  const downloadCertificate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedCert && selectedCert.certImage) {
      try {
        const link = document.createElement('a');
        link.href = selectedCert.certImage;
        link.download = `${selectedCert.institution.replace(/\s+/g, '-')}-Certificate.jpg`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading certificate:', error);
        window.open(selectedCert.certImage, '_blank');
      }
    }
  };

  const educationData = [
    {
      institution: 'Takoradi Technical University',
      degree: 'Degree in Software Engineering',
      date: '07/2020 – 08/2024',
      image: edu1,
      certImage: ttuCert,
    },
    {
      institution: 'IPMC-Takoradi',
      degree: 'Professional in Hardware and Networking',
      date: '02/2022 – 08/2022',
      image: ipmc,
      certImage: ipmcCert,
    },
    {
      institution: 'Amalitech Company Limited',
      degree: 'Virtual Assistantance',
      date: '03/2023 – 07/2023',
      image: amalitech,
      certImage: amalitechCert,
    },
    {
      institution: 'AWS',
      degree: 'Cloud Practicioner',
      date: '01/2026 – 03/2026',
      image: aws,
      certImage: awsCert,
    },
  ];

  return (
    <section id="education" className="py-12 px-6 bg-gradient-to-b from-blue-100 to-gray-100">
      <h2
        className="text-3xl font-bold text-center text-blue-800 mb-8"
        data-aos="fade-down"
      >
        🎓 Education
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-6 md:justify-center space-y-8 md:space-y-0">
        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="relative p-6 bg-white shadow-lg rounded-xl flex items-center gap-4 hover:shadow-xl transition-shadow duration-300 md:w-[48%] lg:w-[30%]"
            data-aos="fade-up"
            data-aos-delay={idx * 200}
          >
            <button
              onClick={() => openModal(item)}
              className="absolute top-3 right-3 flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs font-semibold hover:underline p-1 transition-colors cursor-pointer"
              title="View Certificate"
              type="button"
            >
              <span>View Cert</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <img
              src={item.image}
              alt={item.institution}
              className="w-16 h-16 rounded-full border border-gray-300 object-cover flex-shrink-0"
              data-aos="zoom-in"
              data-aos-delay={idx * 200 + 100}
            />
            <div className="flex-1 pr-14">
              <h3
                className="font-bold text-lg text-gray-800"
                data-aos="fade-right"
                data-aos-delay={idx * 200 + 150}
              >
                {item.institution}
              </h3>
              <p
                className="text-gray-600 text-sm mt-1"
                data-aos="fade-left"
                data-aos-delay={idx * 200 + 200}
              >
                {item.degree}
              </p>
              <p
                className="text-xs text-gray-500 mt-1"
                data-aos="fade-up"
                data-aos-delay={idx * 200 + 250}
              >
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate View Modal */}
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
            aria-labelledby="education-modal-title"
          >
            <motion.div
              key="modal-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gray-900 text-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700 flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-700 bg-gradient-to-r from-blue-900/60 to-purple-900/60 flex-shrink-0">
                <div>
                  <h3 id="education-modal-title" className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {selectedCert.institution}
                  </h3>
                  <p className="text-gray-300 text-sm flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span>{selectedCert.degree}</span>
                    <span className="text-gray-500">•</span>
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">{selectedCert.date}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {/* Download Cert Button */}
                  <button
                    onClick={downloadCertificate}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-md cursor-pointer"
                    title="Download Certificate"
                    type="button"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download Cert</span>
                    <span className="sm:hidden">Download</span>
                  </button>
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-all duration-200 hover:scale-110 cursor-pointer"
                    aria-label="Close modal"
                    type="button"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body - Certificate Image */}
              <div className="bg-gray-800 p-6 overflow-auto max-h-[calc(90vh-140px)] flex items-center justify-center flex-1">
                {selectedCert.certImage ? (
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    src={selectedCert.certImage}
                    alt={`${selectedCert.institution} Certificate`}
                    className="w-full h-auto max-h-[550px] object-contain rounded-lg shadow-xl"
                    onError={(e) => {
                      console.error('Error loading certificate image:', selectedCert.certImage);
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
                    <Award className="w-16 h-16 mx-auto mb-4 opacity-50 text-blue-400" />
                    <p>Certificate image not available</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;

