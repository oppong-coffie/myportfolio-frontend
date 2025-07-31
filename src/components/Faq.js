import { useState } from "react";

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
    <section id="faq" className="faq py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white shadow-md rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <h3
                className="text-xl font-semibold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </h3>
              <div
                className={`transition-all duration-500 overflow-hidden mt-2 ${
                  openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {openIndex === index && (
                  <p className="text-gray-500">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
