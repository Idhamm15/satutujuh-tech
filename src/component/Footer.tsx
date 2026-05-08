"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-700 pt-16 mt-20">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* LOGO + DESC */}
        <div>
          <img
            src="/img/satutujuhtech.webp"
            alt="logo"
            className="mb-4 w-32"
          />

          <p className="text-sm leading-6 text-gray-600">
            Satutujuh is a software house and IT consultant delivering scalable
            digital solutions for modern businesses.
          </p>

          {/* SOCIAL */}
          <div className="flex space-x-3 mt-5">
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-yellow-500 hover:text-white transition">
              <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-yellow-500 hover:text-white transition">
              <FontAwesomeIcon icon={faTwitter} className="text-sm" />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-yellow-500 hover:text-white transition">
              <FontAwesomeIcon icon={faInstagram} className="text-sm" />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-yellow-500 hover:text-white transition">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-sm" />
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a className="hover:text-gray-900 transition">Web Development</a></li>
            <li><a className="hover:text-gray-900 transition">Mobile Apps</a></li>
            <li><a className="hover:text-gray-900 transition">UI/UX Design</a></li>
            <li><a className="hover:text-gray-900 transition">IT Consulting</a></li>
            <li><a className="hover:text-gray-900 transition">IT Infrastructure</a></li>
            <li><a className="hover:text-gray-900 transition">Sosial Media Management</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a className="hover:text-gray-900 transition">About Us</a></li>
            <li><a className="hover:text-gray-900 transition">Careers</a></li>
            <li><a className="hover:text-gray-900 transition">Blog</a></li>
            <li><a className="hover:text-gray-900 transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>

          <div className="space-y-3 text-sm text-gray-600">
            
            {/* Phone group */}
            <div className="flex items-start gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-sm mt-1" />
              <div className="space-y-1">
                <p>+62 857 0000 717 17 (Admin)</p>
                <p>+62 877 888 98 454 (Sales)</p>
                <p>+62 838 2472 3921 (Sales)</p>z
              </div>
            </div>

            {/* Email */}
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
              satutujuhtech@gmail.com
            </p>

            {/* Location */}
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-sm" />
              Jakarta, Indonesia
            </p>

          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Let’s Build</h4>

          <p className="text-sm text-gray-600 leading-6 mb-4">
            Have a project in mind? We help you build scalable software,
            modern UI systems, and reliable backend architecture.
          </p>

          <a
            href="https://wa.me/62857000071717?text=Halo%20kak,%20saya%20ingin%20buat%20project%20bersama%20Satutujuh%20Tech,%20apakah%20bisa%20di%20bantu%3F"
            className="inline-block bg-yellow-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-yellow-400 hover:scale-110"
          >
            Start Project
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-400 mt-12 mb-8 pt-6 text-sm flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto px-8 text-gray-600">
        <p>© 2026 Satutujuh. All rights reserved.</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a className="hover:text-gray-900 transition">Terms</a>
          <a className="hover:text-gray-900 transition">Privacy</a>
          <a className="hover:text-gray-900 transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
}