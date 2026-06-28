// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const menus = [
//     { name: "Beranda", href: "/" },
//     { name: "Layanan", href: "/layanan" },
//     { name: "Portofolio", href: "/portofolio" },
//     { name: "Blog", href: "/blog" },
//     { name: "Kontak Kami", href: "/kontak-kami" },
//   ];

//   return (
//     <div className="w-full text-gray-700 bg-blue-200">
//       <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:flex-row md:items-center md:justify-between">
        
//         {/* LEFT */}
//         <div className="flex items-center justify-between py-6">
//           <div className="relative">
//             <img src="/img/logo.webp" width={190} height={50} alt="" />
//           </div>

//           {/* HAMBURGER */}
//           <button
//             className="text-white md:hidden"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle Menu"
//           >
//             <FontAwesomeIcon icon={faBars} size="lg" />
//           </button>
//         </div>

//         {/* MENU */}
//         <nav
//           className={`flex flex-col md:flex-row md:items-center md:justify-end transition-all duration-300 
//           ${open ? "block bg-gray-100 p-4 rounded-xl mt-2" : "hidden md:flex bg-transparent"}`}
//         >
        
//           {menus.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => setOpen(false)}
//               className="px-4 py-2 mt-2 md:mt-8 md:ml-4 rounded-lg transition-all duration-200 hover:bg-yellow-500 hover:text-white"
//             >
//               {item.name}
//             </Link>
//           ))}

//           {/* BUTTON */}
//           <Link
//             href="https://wa.me/62857000071717?text=Halo%20kak,%20saya%20ingin%20buat%20project%20bersama%20Satutujuh%20Tech,%20apakah%20bisa%20di%20bantu%3F"
//             onClick={() => setOpen(false)}
//             className="px-6 py-3 mt-2 bg-white hover:bg-yellow-500 hover:text-white text-gray-800 rounded-full md:mt-8 md:ml-4 
//             transition-all duration-500 transform hover:scale-115"
//           >
//             Hubungi Kami
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menus = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak Kami", href: "/kontak-kami" },
  ];

  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-blue-200 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/img/logo.webp"
              alt="Logo"
              className="h-12 w-auto"
              // style={{
              //   filter:
              //     "drop-shadow(0 0 4px #fff) drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px rgba(255,255,255,1))",
              // }}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menus.map((menu) => {
              const isActive = pathname === menu.href;

              return (
                <Link
                  key={menu.name}
                  href={menu.href}
                  className={`
                    relative
                    py-2
                    text-white
                    font-medium
                    transition-all
                    duration-300
                    hover:text-white

                    after:absolute
                    after:left-1/2
                    after:-translate-x-1/2
                    after:-bottom-1
                    after:h-[3px]
                    after:rounded-full
                    after:bg-white
                    after:transition-all
                    after:duration-300

                    ${
                        isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {menu.name}
                </Link>
              );
            })}

            <Link
              href="https://api.whatsapp.com/send/?phone=62857000071717&text=Halo+kak%2C+saya+ingin+buat+project+bersama+Satutujuh+Tech%2C+apakah+bisa+di+bantu%3F&type=phone_number&app_absent=0"
              className="bg-blue-600 text-white hover:bg-yellow-400 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-white"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="bg-blue-200 shadow-lg border-t border-white shadow-amber-300">
          <div className="flex flex-col p-6 space-y-4">

            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-[#25bbfb] font-medium transition"
              >
                {menu.name}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="bg-[#25bbfb] hover:bg-sky-600 text-white rounded-full py-3 text-center font-medium transition"
            >
              Login
            </Link>

          </div>
        </nav>
      </div>
    </header>
  );
}