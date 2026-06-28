import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FeatureItem {
  text: string;
  available: boolean;
}

interface PlanItem {
  badge: string;
  icon: IconDefinition;
  name: string;
  price: string;
  features: FeatureItem[];
}

interface PriceListProps {
  title: string;
  description: string;
  plans: PlanItem[];
}

export default function PriceList({
  title,
  description,
  plans,
}: PriceListProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold text-[#11153D] md:text-4xl">
            {title}
          </h2>

          <p className="mt-6 text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <FontAwesomeIcon
                    icon={plan.icon}
                    className="text-2xl"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    {plan.badge}
                  </p>

                  <h3 className="text-3xl font-bold text-[#11153D]">
                    {plan.name}
                  </h3>
                </div>
              </div>

              {/* Price */}
              <div className="my-8 rounded-lg bg-slate-100 py-6 text-center">
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Mulai Dari
                </p>

                <h4 className="mt-2 text-2xl font-bold text-[#11153D]">
                  {plan.price}
                </h4>
              </div>

              {/* Features */}
              <ul className="space-y-5">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-sm ${
                        feature.available
                          ? "border-green-400 text-green-500"
                          : "border-red-400 text-red-500"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={
                          feature.available
                            ? faCheck
                            : faTimes
                        }
                      />
                    </div>

                    <span className="text-sm text-slate-700">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}