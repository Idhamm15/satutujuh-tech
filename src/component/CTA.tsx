import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function CTA() {
  return (
    <>
      {/* CTA BOX */}
      <div className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 to-sky-500 px-50 py-12 text-center shadow-xl">
        <h3 className="text-3xl font-bold text-white">
          Website Berguna Sudah Menanti Anda
        </h3>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100">
          Hanya beli website? AI juga bisa!
          <br />
          Tapi membangun website yang siap untuk mendatangkan prospek
          secara optimal, hanya tim profesional yang mampu.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="https://api.whatsapp.com/send/?phone=62857000071717&text=Halo+kak%2C+saya+ingin+buat+project+bersama+Satutujuh+Tech%2C+apakah+bisa+di+bantu%3F&type=phone_number&app_absent=0" className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-medium text-white transition hover:bg-green-600">
            <FontAwesomeIcon icon={faPhone} />
            <span>Konsultasi Sekarang Gratis!</span>
          </a>
        </div>
      </div>
    </>
  );
}