// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

// export default function CTA() {
//   return (
//     <section className="px-4">
//       <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[24px] bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-8 text-center shadow-xl sm:mt-16 sm:px-8 sm:py-10 md:mt-20 md:px-12 lg:px-20 lg:py-12">
//         {/* Heading */}
//         <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
//           Website Berguna Sudah Menanti Anda
//         </h3>

//         {/* Description */}
//         <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
//           Hanya beli website? AI juga bisa!
//           <br />
//           Tapi membangun website yang siap untuk mendatangkan prospek
//           secara optimal, hanya tim profesional yang mampu.
//         </p>

//         {/* CTA Button */}
//         <div className="mt-8 flex justify-center">
//           <a
//             href="https://api.whatsapp.com/send/?phone=62857000071717&text=Halo+kak%2C+saya+ingin+buat+project+bersama+Satutujuh+Tech%2C+apakah+bisa+di+bantu%3F&type=phone_number&app_absent=0"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex w-full items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:shadow-lg sm:w-auto"
//           >
//             <FontAwesomeIcon icon={faPhone} />
//             <span>Konsultasi Sekarang Gratis!</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-sky-500 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
          Punya pertanyaan? Hubungi kami!
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-5xl lg:mx-32 mx-5 text-sm md:text-xl font-semibold text-blue-100 leading-relaxed">
          Kami dapat menyediakan segala yang Anda butuhkan untuk
          bertransformasi, optimasi, dan pengembangan bisnis.
        </p>

        {/* Button */}
        <div className="mt-16">
          <Link
            href="https://api.whatsapp.com/send/?phone=62857000071717&text=Halo+kak%2C+saya+ingin+buat+project+bersama+Satutujuh+Tech%2C+apakah+bisa+di+bantu%3F&type=phone_number&app_absent=0"
            className="inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 px-12 py-5 text-xl font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            Konsultasi Gratis Sekarang!
          </Link>
        </div>

      </div>
    </section>
  );
}