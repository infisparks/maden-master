// src/components/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import IMAGE from "./../../maden.png"

export default function Footer() {
  return (
    <footer className="bg-[#15302d] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            {/* Company Logo */}
            <Link to="/" className="mb-4 flex items-center">
              <img
                src={IMAGE}
                alt="MADEN Logo"
                style={{ height: '50px', width: 'auto' }}
              />
            </Link>
            <p className="text-[#f6db98]/80">
            Over seven years of success in the construction industry.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#f6db98] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#f6db98]/80 hover:text-[#f6db98]">About Us</Link></li>
              <li><Link to="/Floor Plans" className="text-[#f6db98]/80 hover:text-[#f6db98]">Projects</Link></li>
              <li><Link to="/gallery" className="text-[#f6db98]/80 hover:text-[#f6db98]">Gallery</Link></li>
              <li><Link to="/contact" className="text-[#f6db98]/80 hover:text-[#f6db98]">Contact</Link></li>
              <li><Link to="/privacy" className="text-[#f6db98]/80 hover:text-[#f6db98]">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#f6db98] mb-4">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-[#f6db98]/80">
                <MapPin className="mr-2" size={20} />
           CBD Belapur, Navi Mumbai,
400614.
              </li>
              <li className="flex items-center text-[#f6db98]/80">
                <Phone className="mr-2" size={20} />
                +91 78697 86492
              </li>
              <li className="flex items-center text-[#f6db98]/80">
                <Mail className="mr-2" size={20} />
                madenmulticorp@gmail.com
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#f6db98] mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61568815327916" className="text-[#f6db98] hover:text-[#b48c2e]">
                <Facebook size={24} />
              </a>
              {/* <a href="#" className="text-[#f6db98] hover:text-[#b48c2e]">
                <Twitter size={24} />
              </a> */}
              <a href="https://www.instagram.com/madenmulticorp_mumbai" className="text-[#f6db98] hover:text-[#b48c2e]">
                <Instagram size={24} />
              </a>
              {/* <a href="#" className="text-[#f6db98] hover:text-[#b48c2e]">
                <Linkedin size={24} />
              </a> */}
            </div>
          </div>
        </div>
        
      <div className="mt-12 pt-8 border-t border-[#f6db98]/20 text-center text-[#f6db98]/60">
  <p>&copy; {new Date().getFullYear()} Maden Multicorp. All rights reserved.</p>
  <p>
    Powered by{' '}
    <a
      href="https://infispark.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#f6db98]/80 hover:text-[#f6db98]"
    >
      Infispark
    </a>
  </p>
</div>

      </div>
    </footer>
  );
}
