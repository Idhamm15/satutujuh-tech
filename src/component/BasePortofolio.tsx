import Image from "next/image";

const portfolios = [
  {
    title: "Booking Ticket Web App",
    category: "Software Development",
    image: "/img/portofolio/1.jpg",
  },
  {
    title: "Health Education Web",
    category: "Software Development",
    image: "/img/portofolio/2.jpg",
  },
  {
    title: "Virtual Tour Guide Web App",
    category: "Software Development",
    image: "/img/portofolio/3.jpg",
  },
  {
    title: "Company Profile Web",
    category: "Software Development",
    image: "/img/portofolio/4.jpg",
  },
  {
    title: "Training Management System",
    category: "Software Development",
    image: "/img/portofolio/5.jpg",
  },
  {
    title: "Help Desk Mobile App",
    category: "Software Development",
    image: "/img/portofolio/5556.png",
  },
];

export default function BasePortfolio() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-8 w-8 rotate-45 rounded-sm bg-sky-500" />
            <span className="text-xl text-sky-700">
              Portfolio Kami
            </span>
          </div>

          <h2 className="text-5xl font-bold text-[#0d1035]">
            Portfolio Terbaru Kami
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Image Area */}
              <div className="relative h-[280px] overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1035]/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Button Hover */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-600 shadow-lg hover:bg-sky-600 hover:text-white">
                    Lihat Detail
                  </button>
                </div>
              </div>

              {/* Content Card */}
              <div className="relative mx-auto -mt-14 w-[88%] rounded-lg bg-white p-8 shadow-md transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                <p className="mb-3 text-sm text-slate-500">
                  {item.category}
                </p>

                <h3 className="text-3xl font-semibold text-[#0d1035] transition-colors duration-300 group-hover:text-sky-500">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}