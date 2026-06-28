import Image from "next/image";

interface WhyServiceProps {
  image: string;
  imageAlt?: string;
  title1: string;
  title2: string;
  descriptions: string[];
}

export default function WhyService({
  image,
  imageAlt = "Why Service",
  title1,
  title2,
  descriptions,
}: WhyServiceProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <Image
            src={image}
            alt={imageAlt}
            width={650}
            height={650}
            className="h-auto w-full max-w-xl object-contain"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="mb-8 text-2xl font-extrabold leading-tight text-[#11153D] md:text-2xl lg:text-4xl">
            {title1}
            <br />
            {title2}
          </h2>

          <div className="space-y-4 text-sm leading-7 text-slate-700">
            {descriptions.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}