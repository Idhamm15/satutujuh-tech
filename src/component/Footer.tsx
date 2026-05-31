"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-800 text-white rounded-t-[40px] mt-20">

      {/* BACKGROUND SHAPE */}
      <div className="absolute left-0 top-20 h-[400px] w-[400px] opacity-10">
        <div className="h-full w-full rounded-full border border-cyan-400" />
      </div>

      <div className="absolute right-0 top-20 h-[400px] w-[400px] opacity-10">
        <div className="h-full w-full rounded-full border border-cyan-400" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* TOP CONTACT */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 py-10 md:grid-cols-3">

          {/* EMAIL */}
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-lg text-white"
              />
            </div>

            <div>
              <p className="mb-1 text-sm text-white/60">
                Email
              </p>

              <h4 className="text-lg font-semibold">
                satutujuhtech@gmail.com
              </h4>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-lg text-white"
              />
            </div>

            <div>
              <p className="mb-1 text-sm text-white/60">
                Telepon
              </p>

              <h4 className="text-lg font-semibold">
                +62 857 000 717 17 (Admin) <br />
                +62 877 888 98 454 (Sales) <br />
                +62 838 2472 3921 (Sales)
              </h4>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-lg text-white"
              />
            </div>

            <div>
              <p className="mb-1 text-sm text-white/60">
                Alamat Kantor
              </p>

              <h4 className="text-lg font-semibold">
                Jakarta, Indonesia
              </h4>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-14 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* ABOUT */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Tentang Kami
            </h3>

            <p className="leading-8 text-white/70">
              Satutujuh adalah perusahaan perangkat lunak dan konsultan TI yang menyediakan solusi digital yang skalabel untuk bisnis modern.
            </p>

            <div className="mt-8">
              <p className="mb-4 font-semibold">
                Office :
              </p>

              <div className="space-y-5 text-white/70">
                <p className="leading-7">
                  Jakarta, Indonesia
                </p>

              </div>
            </div>

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
            <h3 className="mb-6 text-xl font-bold">
              Layanan Kami
            </h3>

            <ul className="space-y-4 text-white/80">

              <li>
                <a className="transition hover:text-cyan-300">
                  Jasa Pembuatan Aplikasi
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Jasa Pembuatan Website
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Jasa Mobile Apps
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  IT Infrastructure
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Maintenance Website
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Strategi Digital
                </a>
              </li>

            </ul>
          </div>

          {/* QUICK LINK */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Pintasan Link
            </h3>

            <ul className="space-y-4 text-white/80">

              <li>
                <a className="transition hover:text-cyan-300">
                  Jasa Pembuatan Aplikasi Jakarta
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Jasa Pembuatan Website Bekasi
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Jasa Pembuatan Website Bogor
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Jasa Pembuatan Website Tangerang
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Jasa Pembuatan Aplikasi Depok
                </a>
              </li>

            </ul>
          </div>

          {/* PAGES */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Halaman
            </h3>

            <ul className="space-y-4 text-white/80">

              <li>
                <a className="transition hover:text-cyan-300">
                  Beranda
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Layanan
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Service
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Portfolio
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Blog
                </a>
              </li>

              <li>
                <a className="transition hover:text-cyan-300">
                  Kontak Kami
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm font-medium text-white md:flex-row lg:px-10">

          <p>
            Copyright © 2026 Satutujuh. All rights reserved.
          </p>

          <p>
            Developed by Satutujuh
          </p>

        </div>
      </div>
    </footer>
  );
}