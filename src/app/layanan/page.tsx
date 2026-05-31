"use client";

import About from "@/component/About";
import Footer from "@/component/Footer";
import OurApproach from "@/component/OurApproach";
import FaqSection from "@/component/FaqSection";
import Navbar from "@/component/Navbar";
import Header from "@/component/Header";
import PortofolioSection from "@/component/PortofolioSection";
import Image from "next/image";
import CTA from "@/component/CTA";

const clients = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
  "/logos/logo11.png",
  "/logos/logo12.png",
  "/logos/logo13.png",
  "/logos/logo14.png",
];

const benefits = [
  {
    title: "Ramah dan Profesional",
    desc: "Tim kami akan memandu Anda untuk mendapatkan layanan terbaik, cepat dan bersahabat.",
  },
  {
    title: "Gratis Hosting Cepat",
    desc: "Sudah termasuk hosting SSD yang terbukti lebih cepat untuk akses website.",
  },
  {
    title: "Harga Transparan",
    desc: "Tidak ada biaya tersembunyi, semua sudah dijelaskan di awal.",
  },
  {
    title: "Keamanan SSL / HTTPS",
    desc: "Website terlindungi dengan protokol keamanan global.",
  },
  {
    title: "Gratis WebCare LITE",
    desc: "Bebas khawatir dengan dukungan teknis dan panduan selama 1 tahun.",
  },
  {
    title: "Desain Modern Responsive",
    desc: "Tampilan website menyesuaikan berbagai ukuran layar.",
  },
  {
    title: "Gratis Email Bisnis",
    desc: "Email profesional sesuai nama domain bisnis Anda.",
  },
  {
    title: "SEO Friendly Ready",
    desc: "Struktur website siap untuk optimasi mesin pencari.",
  },
  {
    title: "Gratis Domain .COM",
    desc: "Domain profesional untuk meningkatkan kredibilitas bisnis.",
  },
  {
    title: "Integrasi Kode Tracking",
    desc: "Bantuan pemasangan Pixel, GA4, dan tracking lainnya.",
  },
];

export default function ServicePage() {
  return (
    <>
      <Navbar/>
      <Header
        badge="Services"
        title="Layanan"
      />

      {/* Layanan */}

      <section className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div className="flex justify-center">
              <Image
                src="/img/layanan.png"
                alt="Website Illustration"
                width={1000}
                height={600}
                className="w-full max-w-md"
              />
            </div>

            {/* Right */}
            <div>
              <span className="text-sm text-gray-500">
                Mengapa Memilih Satutujuh?
              </span>

              <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Sebagai Mitra Jasa
                <br />
                Pembuatan Website Anda
              </h1>

              <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
                <p className="mb-4 text-sm text-gray-500">
                  Selain tampilan profesional, website yang kami bangun juga
                  mampu:
                </p>

                <ul className="space-y-2 text-gray-700">
                  <li>• Mendeteksi iklan gagal ads yang tidak wajar.</li>
                  <li>• Menemukan prospek lebih akurat dan tepat sasaran.</li>
                  <li>• Memberikan wawasan hasil marketing untuk keputusan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Telah Dipercaya Oleh
            </h2>

            <p className="mt-3 text-gray-600">
              Berbagai Brand dan Bisnis di Seluruh Indonesia
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="flex h-24 items-center justify-center rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Yakin Mau Dilewatkan?
            </h2>

            <p className="mt-3 text-gray-600">
              10 Keuntungan Memesan Jasa Pembuatan Website
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortofolioSection />
      <CTA />

      <Footer />
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed hover:bg-yellow-500 hover:text-white bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#01085a] shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110"
      >
        ↑
      </button>
    </>
  );
}