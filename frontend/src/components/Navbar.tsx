import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { Menu, X, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Software", href: "/software" },
  { name: "Home", href: "/home" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Partner", href: "/partner" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSoftwarePage = location.pathname === "/software" || location.pathname.startsWith("/software/");

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b h-[72px] flex items-center",
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm" 
          : "bg-white border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="flex justify-between items-center">
          <Link to="/software" className="flex items-center space-x-3 group">
            <div className="flex w-42 items-center justify-left overflow-hidden ">
              {isSoftwarePage ? (
                <object>
                  <img
                    src="/logos/horizontal-product-logo.png"
                    alt="Product logo"
                    className="h-full w-full object-contain"
                  />
                </object>
              ) : (
                <img
                  src="/logos/RSAY-logo.svg"
                  alt="RSAY logo"
                  className="h-20 w-20 object-contain text-align-left"
                />
              )}
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              {/* Leotech */}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.href 
                    ? "text-blue-600" 
                    : "text-slate-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all active:scale-95 shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 absolute top-full left-0 w-full p-4"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium py-2",
                  location.pathname === link.href 
                    ? "text-blue-600" 
                    : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-bold"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
