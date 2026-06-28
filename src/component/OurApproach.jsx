"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const processes = [
  {
    id: 1,
    title: "Discovery Phase",
    description:
      "Aplikasi diagnostik dan prediktif berbasis data untuk meningkatkan hasil. Aplikasi diagnostik dan prediktif berbasis data untuk meningkatkan.",
  },
  {
    id: 2,
    title: "Design and Development",
    description:
      "Menciptakan aplikasi yang skalabel dan responsif dengan teknologi modern.",
  },
  {
    id: 3,
    title: "Maintenance",
    description:
      "Pemantauan, optimasi, dan dukungan berkelanjutan untuk stabilitas jangka panjang.",
  },
  {
    id: 4,
    title: "Deployment",
    description:
      "Alur penerapan yang lancar dengan integrasi infrastruktur cloud.",
  },
  {
    id: 5,
    title: "Testing and QA",
    description:
      "Memastikan kualitas produk melalui pengujian otomatis dan manual.",
  },
];

export default function OurApproach() {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full overflow-hidden bg-[#eaf1fb] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

        {/* LEFT */}
        <div>

          {/* LABEL */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[1px] w-16 bg-blue-200" />

            <span className="text-sm font-medium uppercase tracking-[3px] text-blue-900">
              Working Process
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mb-14 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
            Our <span className="text-blue-600">Approach</span>
          </h2>

          {/* ACCORDION */}
          <div className="space-y-6">
            {processes.map((item, index) => {
              const opened = active === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b border-slate-300 pb-6"
                >
                  <button
                    onClick={() => setActive(opened ? 0 : item.id)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {String(index + 1).padStart(2, "0")}. {item.title}
                    </h3>

                    <div className="text-xl text-slate-900">
                      <FontAwesomeIcon
                        icon={opened ? faMinus : faPlus}
                      />
                    </div>
                  </button>

                  {opened && (
                    <div className="mt-6 rounded-sm bg-[#dfe9f8] p-8">
                      <p className="text-lg leading-8 text-slate-700">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-[620px] w-full max-w-[500px]">

            {processes.map((item, index) => {
              const isActive = active === item.id;

              return (
                <div
                  key={item.id}
                  className={`absolute left-1/2 flex h-[110px] w-[420px] -translate-x-1/2 items-center justify-center rounded-full border text-2xl font-semibold transition-all duration-300
                  
                  ${
                    isActive
                      ? "z-20 border-blue-700 bg-blue-600 text-white"
                      : "border-slate-500 bg-transparent text-slate-900"
                  }`}
                  style={{
                    top: `${index * 110}px`,
                  }}
                >
                  {item.title}
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}