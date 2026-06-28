import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ReasonItem {
  icon: IconDefinition;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  reasons: ReasonItem[];
}

export default function WhyChooseUs({
  image,
  imageAlt = "Why Choose Us",
  title,
  description,
  reasons,
}: WhyChooseUsProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-extrabold text-[#11153D] md:text-4xl">
            {title}
          </h2>

          <p className="mt-8 text-sm leading-6 text-slate-600">
            {description}
          </p>

          <div className="mt-12 space-y-8">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="group flex gap-6"
              >
                {/* Icon */}
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full border-[4px] border-[#FFD4B5] bg-[#0F5D9A] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-600">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-3xl"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-[#11153D]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          data-aos="fade-left"
          className="flex justify-center"
        >
          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <Image
              src={image}
              alt={imageAlt}
              width={650}
              height={650}
              className="h-auto w-full max-w-xl object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}