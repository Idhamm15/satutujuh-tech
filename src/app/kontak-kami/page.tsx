"use client";

import About from "@/component/About";
import Footer from "@/component/Footer";
import OurApproach from "@/component/OurApproach";
import FaqSection from "@/component/FaqSection";
import Navbar from "@/component/Navbar";
import Header from "@/component/Header";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <>
      <Navbar/>
      <Header
        badge="Services"
        title="Kontak Kami"
      />
       <section className="bg-[#f5f5f5] py-10 md:py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#eef2f6] flex justify-center items-center p-6 sm:p-10">
              <Image
                src="/img/contact.png"
                alt="Contact"
                width={450}
                height={1450}
                className="w-full max-w-[350px] md:max-w-[450px] h-auto"
              />
            </div>

            <div className="bg-[#0f4f82] p-5 md:p-8 flex justify-center">
              <div className="flex items-center gap-3 md:gap-5 border-2 border-[#ffd8bd] rounded-full px-5 md:px-8 py-3 md:py-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="text-white text-xl md:text-2xl"
                  />
                </div>

                <span className="text-white text-lg md:text-3xl font-semibold">
                  +62 857 000 717 17
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-1 lg:order-2 px-5 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12">
            <div className="mb-8">
              <p className="text-[#1f5d96] text-sm md:text-lg font-medium mb-2">
                Get in Touch
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11183d] leading-tight">
                Have any question
              </h2>
            </div>

            <form className="space-y-4 md:space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-14 md:h-16 px-5 md:px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f4f82]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full h-14 md:h-16 px-5 md:px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f4f82]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-14 md:h-16 px-5 md:px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f4f82]"
              />

              <textarea
                rows={5}
                placeholder="Write Message"
                className="w-full rounded-3xl border border-gray-300 px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#0f4f82]"
              />

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0f4f82] text-white px-10 py-4 rounded-full hover:bg-[#0c426d] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

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