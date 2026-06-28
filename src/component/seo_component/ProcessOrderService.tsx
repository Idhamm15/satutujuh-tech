import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface StepItem {
  icon: IconDefinition;
  title: string;
  description: string;
}

interface ProcessOrderServiceProps {
  title: string;
  steps: StepItem[];
}

export default function ProcessOrderService({
  title,
  steps,
}: ProcessOrderServiceProps) {
  return (
    <section className="bg-blue-200 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-extrabold text-blue-600 md:text-4xl">
            {title}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group text-center"
            >
              {/* Icon */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-cyan-300 p-2 transition-all duration-300 group-hover:scale-110">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0F5D9A] text-white transition-all duration-300 group-hover:bg-cyan-600">
                  <FontAwesomeIcon
                    icon={step.icon}
                    className="text-2xl"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-blue-600">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}