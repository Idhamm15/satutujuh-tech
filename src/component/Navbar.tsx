"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Home", href: "/" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <div className="w-full text-gray-700 bg-blue-200">
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:flex-row md:items-center md:justify-between">
        
        {/* LEFT */}
        <div className="flex items-center justify-between py-6">
          <div className="relative">
            <img src="/img/logo.webp" width={190} height={50} alt="" />
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MENU */}
        <nav
          className={`flex flex-col md:flex-row md:items-center md:justify-end transition-all duration-300 
          ${open ? "block bg-gray-100 p-4 rounded-xl mt-2" : "hidden md:flex bg-transparent"}`}
        >
        
          {menus.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2 mt-2 md:mt-8 md:ml-4 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}

          {/* BUTTON */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-6 py-3 mt-2 bg-white text-gray-800 rounded-full md:mt-8 md:ml-4 
            transition-all duration-500 transform hover:scale-115"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}