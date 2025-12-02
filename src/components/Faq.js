import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in ReactJS, NextJS, React Native, Tailwind CSS and modern web development practices.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline varies depending on the project's complexity, but I typically complete projects in 2-6 weeks.",
    },
    {
      question: "Do you offer ongoing support after the project is completed?",
      answer:
        "Yes, I offer ongoing support for maintenance, updates, and any other adjustments needed after the project completion.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Pricing is typically based on the scope of the project. I provide custom quotes after understanding the client's needs and requirements.",
    },
    {
      question: "Can you work on existing codebases?",
      answer:
        "Yes, I am comfortable working on existing codebases and can help with improvements, bug fixes, and feature enhancements.",
    },
    {
      question: "What is your process for working on a project?",
      answer:
        "I follow a structured approach: requirement gathering, design, development, testing, and delivery. I ensure continuous communication with the client throughout the project.",
    },
    {
      question: "Do you offer a free consultation?",
      answer:
        "Yes, I offer a free initial consultation to discuss your project, requirements, and how I can help you achieve your goals.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-600">
            Everything you need to know about my services and process.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="text-primary">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
