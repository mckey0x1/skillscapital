import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#111936] text-white">
      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-6 py-10 border-b border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-xl font-semibold">
            Signup for latest news and insights from SkillsCapital
          </h3>
          <form className="flex flex-col gap-2 items-center sm:gap-0 sm:flex-row w-full md:w-auto overflow-hidden">
            <div className="flex relative items-center px-3 text-gray-500">
              <Mail size={18} className="absolute left-6" />

              <input
                type="email"
                placeholder="Enter your email address"
                className="px-12 py-2 rounded-full mr-3 bg-white text-gray-900 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-300 w-[150px] text-gray-900 font-semibold px-6 py-2 rounded-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h4 className="text-lg font-bold">SkillsCapital.</h4>
          <p className="mt-3 text-gray-400 text-sm">
            SkillsCapital is a professional tech talent platform that
            accelerates hiring by connecting businesses with pre-vetted experts
            in SAP, AI/ML, and enterprise software.
          </p>
          <p className="mt-4 font-semibold">Follow our socials</p>
          <div className="flex gap-3 mt-2 text-lg">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">SAP Talent Cloud</a>
            </li>
            <li>
              <a href="#">Enterprise Talent Cloud</a>
            </li>
            <li>
              <a href="#">AI-Powered Vetting</a>
            </li>
            <li>
              <a href="#">Tech Talent Solution</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="font-semibold mb-3">Support</h5>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold mb-3">Get In Touch</h5>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 123 465 789
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@skillscapital.io
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Pune, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-yellow-300 text-gray-900 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>Copyright © 2025 All Rights Reserved.</p>
          <div className="flex gap-6 sm:text-base text-xs">
            <a href="#">Privacy policy</a>
            <a href="#">Legal notice</a>
            <a href="#">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
