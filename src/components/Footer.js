const Footer = () => {
    return (
      <footer className="bg-blue-900 text-gray-300 py-10">
        <div className="container mx-auto px-6 md:px-12">
          {/* Footer Top Section with Logo and Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition duration-300">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16.88 3.549A9.969 9.969 0 0112 2c-5.523 0-10 4.477-10 10 0 1.948.566 3.749 1.54 5.27L2 22l4.76-1.48A9.969 9.969 0 0112 22c5.523 0 10-4.477 10-10 0-2.128-.662-4.1-1.789-5.74"
                    />
                  </svg>
                  <span>Email: oppongcoffie27@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21h3m-9-6h3m2-5h4m3 6h2m3 4h2"
                    />
                  </svg>
                  <span>Phone: +233 551144173</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-4m-6-2H7a2 2 0 01-2-2V7a2 2 0 012-2h2m10 8H7"
                    />
                  </svg>
                  <span>Location: Accra, Ghana</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="mt-10 border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Voluntery Works. All Rights Reserved.
              </p>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  