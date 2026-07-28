import { Link, useLocation } from "react-router-dom";
import { Cpu, Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const isSoftwarePage = location.pathname === "/software" || location.pathname.startsWith("/software/");

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/software" className="flex items-center space-x-3 group">
            <div className="flex w-42 items-center justify-left overflow-hidden ">
              {isSoftwarePage ? (
                <object>
                  <img
                    src="/logos/horizontal-product-logo.png"
                    alt="Product logo"
                    className=" w-full object-contain"
                  />
                </object>
              ) : (
                <img
                  src="/logos/RSAY-logo.svg"
                  alt="RSAY logo"
                  className="h-full w-20 object-contain"
                />
              )}
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              {/* Leotech */}
            </span>
          </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Building smart digital solutions for modern businesses. We empower enterprises with cutting-edge AI, Cloud, and Data transitions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="text-slate-500 hover:text-blue-600 transition-colors">AI Services</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-blue-600 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-blue-600 transition-colors">Data Analysis</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-blue-600 transition-colors">Digital Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="text-slate-500 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-slate-500 hover:text-blue-600 transition-colors">Products</Link></li>
              <li><Link to="/partner" className="text-slate-500 hover:text-blue-600 transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              {/* <li className="flex items-start space-x-3 text-slate-500">
                <MapPin size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>123 Innovation Drive, Patna Bihar, CA 94025</span>
              </li> */}
              <li className="flex items-center space-x-3 text-slate-500">
                <Phone size={18} className="text-blue-600 flex-shrink-0" />
                <span>+91 9608524375</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Mail size={18} className="text-blue-600 flex-shrink-0" />
                <span>retailsingh@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-xs text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Leotech Software Services Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs text-slate-400">
            <a href="/Privacy-Policy" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            {/* <a href="/cookie-policy" className="hover:text-slate-900 transition-colors">Cookie Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
