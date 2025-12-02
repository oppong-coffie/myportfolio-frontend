import { Link } from 'react-scroll';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Oppong<span className="text-primary">.</span></h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building digital experiences that matter. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '_home' : item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="hover:text-primary transition-colors duration-300 cursor-pointer text-sm"
                  >
                    {item}
                  </Link>
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