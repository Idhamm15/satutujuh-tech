import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface TechnologyItem {
  title: string;
  items: string;
}

interface ServiceTechProps {
  image: string;
  imageAlt?: string;
  title1: string;
  title2: string;
  description: string;
  technologies: TechnologyItem[];
}

export default function ServiceTech({
  image,
  imageAlt = "Technology",
  title1,
  title2,
  description,
  technologies,
}: ServiceTechProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}
        <div
          data-aos="fade-right"
          className="flex justify-center"
        >
          <div className="rounded-[32px] bg-slate-50 p-10 shadow-sm">
            <Image
              src={image}
              alt={imageAlt}
              width={520}
              height={520}
              className="h-auto w-full max-w-lg object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-left">

          <h2 className="text-3xl font-extrabold leading-tight text-[#11153D] md:text-4xl lg:text-3xl">
            {title1}
            <br />
            {title2}
          </h2>

          <p className="mt-8 text-sm leading-6 text-slate-600">
            {description}
          </p>

          <div className="mt-5 space-y-3">

            {technologies.map((tech, index) => (
              <div key={index} className="flex gap-4">

                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <FontAwesomeIcon icon={faCheck} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#11153D]">
                    {tech.title}
                  </h3>

                  <p className="mt-2 text-sm leading-8 text-slate-600">
                    {tech.items}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}