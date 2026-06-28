import FeatureCard from "./FeatureCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Features() {
  return (
    <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 mb-30">
      
      {/* Heading */}
      <div className="max-w-xl mx-auto text-center mt-24">
        <h1 className="font-bold text-2xl mb-3">
          All-In-One <span className="text-blue-600">Digital Solutions.</span>
        </h1>
        <p className="text-gray-500">
            Satutujuh menyediakan layanan pengembangan perangkat lunak dan konsultasi TI menyeluruh untuk membantu bisnis membangun, mengelola, dan meningkatkan skala produk digital mereka secara efisien.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-20">
        
        <FeatureCard
            title="Custom Software Development"
            description="Bangun aplikasi web dan seluler yang skalabel dan aman, yang disesuaikan dengan kebutuhan bisnis Anda."
            color="#5B72EE"
            icon={<i className="fa-solid fa-code text-white text-xl"></i>}
        />

        <FeatureCard
            title="IT Consulting & System Integration"
            description="Optimalkan proses bisnis Anda dengan konsultasi ahli dan integrasi sistem yang lancar."
            color="#F48C06"
            icon={<i className="fa-solid fa-gear text-white text-xl"></i>}
        />

        <FeatureCard
            title="Business & Customer Solutions"
            description="Kelola pelanggan, data, dan alur kerja secara efisien dengan solusi digital cerdas."
            color="#29B9E7"
            icon={<i className="fa-solid fa-users text-white text-xl"></i>}
        />

      </div>
    </div>
  );
}