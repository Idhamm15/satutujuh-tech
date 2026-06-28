import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface ServiceListProps {
  title: string;
  subtitle: string;
  subtitle2?: string;
  services: ServiceItem[];
}

export default function ServiceList({
  title,
  subtitle,
  subtitle2,
  services,
}: ServiceListProps) {
  return (
    <section className="bg-blue-200 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-5xl text-center">

          <h2 className="text-2xl font-extrabold leading-tight text-blue-600 md:text-4xl">
            {title}
          </h2>

          <p className="mt-8 text-sm leading-6 text-gray-600">
            {subtitle}
          </p>

          {subtitle2 && (
            <p className="mt-2 text-sm font-medium text-gray-600">
              {subtitle2}
            </p>
          )}

        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
            >

              {/* Image */}
              <div className="flex justify-center p-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={260}
                  height={220}
                  className="h-52 w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="border-t border-slate-200 px-8 py-10 text-center">

                <h3 className="whitespace-pre-line text-2xl font-bold leading-tight text-[#12173F]">
                  {service.title}
                </h3>

                <p className="mt-8 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}