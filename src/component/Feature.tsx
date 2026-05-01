import FeatureCard from "./FeatureCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Features() {
  return (
    <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700">
      
      {/* Heading */}
      <div className="max-w-xl mx-auto text-center mt-24">
        <h1 className="font-bold text-2xl mb-3">
          All-In-One <span className="text-yellow-500">Digital Solutions.</span>
        </h1>
        <p className="text-gray-500">
            Satutujuh provides end-to-end software development and IT consulting services to help businesses build, manage, and scale their digital products efficiently.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-20">
        
        <FeatureCard
            title="Custom Software Development"
            description="Build scalable and secure web and mobile applications tailored to your business needs."
            color="#5B72EE"
            icon={<i className="fa-solid fa-code text-white text-xl"></i>}
        />

        <FeatureCard
            title="IT Consulting & System Integration"
            description="Optimize your business processes with expert consulting and seamless system integration."
            color="#F48C06"
            icon={<i className="fa-solid fa-gear text-white text-xl"></i>}
        />

        <FeatureCard
            title="Business & Customer Solutions"
            description="Manage customers, data, and workflows efficiently with smart digital solutions."
            color="#29B9E7"
            icon={<i className="fa-solid fa-users text-white text-xl"></i>}
        />

      </div>
    </div>
  );
}