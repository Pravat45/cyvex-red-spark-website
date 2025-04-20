
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyvex to-cyvex-light bg-clip-text text-transparent mb-4">
              Cyvex Labs
            </h3>
            <p className="text-gray-300 mb-4">
              Providing advanced cybersecurity services to protect your business
              in an evolving digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyvex transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyvex transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyvex transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyvex transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyvex transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyvex transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-cyvex transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-gray-300 hover:text-cyvex transition-colors">
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cyvex transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyvex transition-colors">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyvex transition-colors">
                  Staffing Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyvex transition-colors">
                  Health Care
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-300 hover:text-cyvex transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyvex transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-cyvex mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  5725 corporate way ste 206, west palm beach, FL, 33407, United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-cyvex flex-shrink-0" />
                <a href="mailto:hr@cyvexlab.com" className="text-gray-300 hover:text-cyvex transition-colors">
                  hr@cyvexlab.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-cyvex flex-shrink-0" />
                <a href="tel:+19843823218" className="text-gray-300 hover:text-cyvex transition-colors">
                  (984) 382-3218
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Cyvex Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
