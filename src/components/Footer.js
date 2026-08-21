import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 text-gray-300 py-5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-2">
            <img className="w-32 h-32 rounded-full overflow-hidden" src="/logo.png" alt="" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Building digital experiences that matter. Let's create something amazing together.
            </p>
          </div>

          {/* Roles I Can Fit */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Roles I Can Fit</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-400">
              {[
                "AI Chatbot Builder",
                "Frontend Developer",
                "Backend Developer",
                "Hardware Engineer",
                "Cloud Practitioner",
                "Graphics Designer",
                "Digital Marketer",
                "Project Manager"
              ].map((role, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>oppongcoffie27@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>+233 551 1441 73</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Emmanuel Oppong Coffie. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            {[
              { icon: Facebook, link: "#" },
              { icon: Twitter, link: "#" },
              { icon: Instagram, link: "#" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/oppong-coffie-3b8538236" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;