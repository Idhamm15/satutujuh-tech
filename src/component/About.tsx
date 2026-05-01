export default function About() {
  return (
    <div className="mt-28 px-6">
      
      {/* TEXT */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
          What is <span className="text-yellow-500">Satutujuh Tech?</span>
        </h1>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          Satutujuh is a software house and IT consulting partner that helps businesses 
          build scalable applications, streamline operations, and accelerate digital transformation.
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        
        {/* SOFTWARE DEVELOPMENT */}
        <div className="relative md:w-5/12 group">
          <img
            src="/img/Rectangle 19.png"
            className="rounded-2xl w-full object-cover"
            alt="Software Development"
          />

          <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center 
            group-hover:bg-black/50 transition">
            
            <div className="text-center px-4">
              <h1 className="text-white font-semibold text-sm sm:text-lg mb-3 tracking-wide">
                SOFTWARE DEVELOPMENT
              </h1>

              <button className="rounded-full border border-white text-white text-xs sm:text-sm px-5 py-2 
                hover:bg-white hover:text-black transition">
                Build Your Product
              </button>
            </div>
          </div>
        </div>

        {/* IT CONSULTING */}
        <div className="relative md:w-5/12 group">
          <img
            src="/img/Rectangle 21.png"
            className="rounded-2xl w-full object-cover"
            alt="IT Consulting"
          />

          <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center 
            group-hover:bg-black/50 transition">
            
            <div className="text-center px-4">
              <h1 className="text-white font-semibold text-sm sm:text-lg mb-3 tracking-wide">
                IT CONSULTING
              </h1>

              <button className="rounded-full text-white text-xs sm:text-sm px-5 py-2 
                bg-yellow-500 hover:bg-yellow-400 transition">
                Get Consultation
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}