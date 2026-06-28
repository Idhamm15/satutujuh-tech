"use client";

import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Header from "@/component/Header";
import BasePortfolio from "@/component/BasePortofolio";
import CTA from "@/component/CTA";
import WhyService from "@/component/seo_component/WhyService";
import ServiceList from "@/component/seo_component/ServiceList";
import PriceList from "@/component/seo_component/PriceList";
import ServiceTech from "@/component/seo_component/ServiceTech";
import ProcessOrderService from "@/component/seo_component/ProcessOrderService";
import WhyChooseUs from "@/component/seo_component/WhyChooseUs";
import OurClient from "@/component/seo_component/OurClient";
import {
  faComments,
  faScrewdriverWrench,
  faUserTie,
  faShieldHalved,
  faTags,
    faChartLine,
    faHeadset,
    faGift,
    faLightbulb,
    faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const services = [
    {
      title: "Manajemen &\nPemeliharaan Jaringan",
      description:
        "Instalasi, konfigurasi, dan monitoring jaringan agar tetap stabil dan aman.",
      image: "/img/seo/jasa-maintenance-web.webp",
    },
    {
      title: "Keamanan & Proteksi\nSistem",
      description:
        "Pencegahan serangan malware, firewall, enkripsi data, dan pemulihan keamanan.",
      image: "/img/seo/jasa-maintenance-web.webp",
    },
    {
      title: "Troubleshooting &\nPerbaikan IT",
      description:
        "Identifikasi dan perbaikan masalah pada hardware, software, dan sistem operasional.",
      image: "/img/seo/jasa-maintenance-web.webp",
    },
  ];

  const technologies = [
    {
      title: "Operating System",
      items: "Windows Server, Linux, macOS",
    },
    {
      title: "Networking",
      items: "Cisco, Mikrotik, Fortinet",
    },
    {
      title: "Cloud & Virtualisasi",
      items: "AWS, Azure, VMware",
    },
    {
      title: "Cyber Security",
      items: "Firewall, Antivirus, Data Encryption",
    },
    {
      title: "Software & Hardware",
      items: "Microsoft 365, ERP, CRM, PC/Laptop Maintenance",
    },
  ];

  const plans = [
    {
      badge: "Best Price",
      icon: faGift,
      name: "Basic",
      price: "1 Juta",
      features: [
        { text: "Monitoring Jaringan", available: true },
        { text: "Troubleshooting Software", available: true },
        { text: "Backup Bulanan", available: true },
        { text: "Support 24/7", available: false },
      ],
    },
    {
      badge: "Best Seller",
      icon: faLightbulb,
      name: "Standard",
      price: "2 Juta",
      features: [
        { text: "Monitoring Jaringan", available: true },
        { text: "Troubleshooting Software", available: true },
        { text: "Backup Mingguan", available: true },
        { text: "Support 24/7", available: true },
      ],
    },
    {
      badge: "Best Offer",
      icon: faBullhorn,
      name: "Premium",
      price: "3 Juta",
      features: [
        { text: "Monitoring Jaringan", available: true },
        { text: "Troubleshooting Software", available: true },
        { text: "Backup Harian", available: true },
        { text: "Support 24/7", available: true },
      ],
    },
  ];

  const steps = [
    {
      icon: faComments,
      title: "Konsultasi Awal",
      description:
        "Hubungi kami melalui WhatsApp, email, atau live chat untuk mendiskusikan kebutuhan Anda.",
    },
    {
      icon: faTags,
      title: "Penawaran & Paket",
      description:
        "Kami akan memberikan rekomendasi layanan yang sesuai dengan kebutuhan dan anggaran bisnis Anda.",
    },
    {
      icon: faScrewdriverWrench,
      title: "Pelaksanaan Layanan",
      description:
        "Tim kami mulai melakukan setup, implementasi, perbaikan, atau pemeliharaan sistem IT Anda.",
    },
    {
      icon: faHeadset,
      title: "Monitoring & Support",
      description:
        "Sistem IT Anda akan terus dimonitor dan kami siap memberikan support kapan saja dibutuhkan.",
    },
  ];

  const reasons = [
    {
      icon: faUserTie,
      title: "Berpengalaman & Profesional",
      description:
        "Tim kami terdiri dari teknisi IT berpengalaman yang memiliki sertifikasi dan siap menangani berbagai kebutuhan infrastruktur teknologi.",
    },
    {
      icon: faShieldHalved,
      title: "Keamanan Data Terjamin",
      description:
        "Kami menerapkan standar keamanan terbaik untuk melindungi data, server, jaringan, dan aset digital perusahaan Anda.",
    },
    {
      icon: faHeadset,
      title: "Support 24/7",
      description:
        "Tim support kami siap membantu kapan saja, baik secara remote maupun on-site untuk memastikan bisnis Anda tetap berjalan.",
    },
    {
      icon: faChartLine,
      title: "Efisiensi Operasional",
      description:
        "Layanan kami membantu meningkatkan performa sistem, mengurangi downtime, dan membuat operasional bisnis lebih efisien.",
    },
  ];
  

  return (
    <>
      <Navbar/>
      <Header
        badge="Services"
        title="Jasa Pembuatan Aplikasi"
      />
      <WhyService
        image="/img/seo/jasa-maintenance-web.webp"
        imageAlt="Jasa Pembuatan Aplikasi"
        title1="Kenapa Bisnis Anda"
        title2="Butuh Jasa Pembuatan Aplikasi?"
        descriptions={[
          "Pembuatan Aplikasi merupakan fondasi utama dalam mendukung operasional bisnis modern. Infrastruktur yang dirancang dengan baik mencakup server, jaringan, sistem penyimpanan data, virtualisasi, hingga cloud computing yang bekerja secara terintegrasi. Tanpa infrastruktur yang andal, perusahaan berisiko mengalami downtime, penurunan produktivitas, serta ancaman terhadap keamanan data.",

          "Melalui layanan Pembuatan Aplikasi, kami membantu perusahaan merancang, membangun, mengelola, dan mengoptimalkan infrastruktur teknologi sesuai kebutuhan bisnis. Mulai dari implementasi server, konfigurasi jaringan, cloud infrastructure, virtualisasi, monitoring sistem, hingga peningkatan performa dan keamanan, kami memastikan seluruh lingkungan IT Anda siap mendukung pertumbuhan bisnis secara stabil, aman, dan efisien.",
        ]}
      />
      <PriceList
        title="Paket Harga dan Layanan"
        description="Harga yang tertera adalah estimasi standar dan dapat disesuaikan dengan kebutuhan bisnis Anda."
        plans={plans}
      />
      <ServiceList
        title="Layanan Jasa Pembuatan Aplikasi Kami"
        subtitle="Kami menyediakan layanan Pembuatan Aplikasi yang mencakup berbagai aspek pengelolaan infrastruktur IT untuk memastikan sistem Anda tetap optimal dan aman."
        subtitle2="Berikut adalah tiga layanan utama yang kami tawarkan:"
        services={services}
      />
      <ServiceTech
        image="/img/seo/jasa-maintenance-web.webp"
        imageAlt="Teknologi Pembuatan Aplikasi"
        title1="Teknologi yang Kami"
        title2="Gunakan"
        description="Kami menguasai berbagai teknologi dan platform, termasuk:"
        technologies={technologies}
      />
      <ProcessOrderService
        title="Proses Pemesanan Layanan"
        steps={steps}
      />
      <WhyChooseUs
        image="/img/seo/jasa-maintenance-web.webp"
        imageAlt="Why Choose Us"
        title="Kenapa Memilih Kami?"
        description="Kami adalah tim IT profesional yang berpengalaman dalam menyediakan layanan Pembuatan Aplikasi untuk berbagai industri. Berikut alasan mengapa banyak perusahaan mempercayakan kebutuhan teknologi kepada kami."
        reasons={reasons}
      />
      <OurClient/>
      <BasePortfolio/>
      <CTA  />
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