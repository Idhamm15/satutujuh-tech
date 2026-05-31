"use client";

import { useState } from "react";
import {
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const processes = [
  {
    id: 1,
    title: "Discovery Phase",
    description:
      "Data-driven diagnostic and predictive app for improving outcomes. Data driven diagnostic and predictive app for improving.",
  },
  {
    id: 2,
    title: "Design and Development",
    description:
      "Creating scalable and responsive applications with modern technologies.",
  },
  {
    id: 3,
    title: "Maintenance",
    description:
      "Continuous monitoring, optimization, and support for long-term stability.",
  },
  {
    id: 4,
    title: "Deployment",
    description:
      "Seamless deployment pipelines with cloud infrastructure integration.",
  },
  {
    id: 5,
    title: "Testing and QA",
    description:
      "Ensuring quality through automation and manual testing workflows.",
  },
];

const technologies = {
  "Web Platform": [
    "PHP",
    "JavaScript",
    "PostgreSQL",
    "Swift",
    "Typescript",
    "Python",
    "G318",
    "Java",
    "Ruby",
    "C++",
    "React Js",
    "Laravel",
  ],
  Databases: [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "SQLite",
    "MariaDB",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Kubernetes",
    "Firebase",
    "Vercel",
    "GitHub Actions",
  ],
  "Mobile Apps": [
    "Flutter",
    "React Native",
    "Swift",
    "Kotlin",
    "Android",
    "iOS",
  ],
  "Other Frameworks": [
    "Next.js",
    "Nuxt.js",
    "Laravel",
    "Express",
    "NestJS",
    "Django",
  ],
};

function FaqSection() {
  const [activeProcess, setActiveProcess] = useState(1);

  const [activeTech, setActiveTech] =
    useState("Web Platform");

  return (
    <section className="relative overflow-hidden bg-[#edf3fb] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* PROCESS SECTION */}
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            {/* LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[1px] w-16 bg-blue-600" />

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
                const opened = activeProcess === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-slate-300 pb-6"
                  >
                    <button
                      onClick={() =>
                        setActiveProcess(
                          opened ? 0 : item.id
                        )
                      }
                      className="flex w-full items-center justify-between text-left"
                    >
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {String(index + 1).padStart(2, "0")}.{" "}
                        {item.title}
                      </h3>

                      <div className="text-lg text-slate-900">
                        <FontAwesomeIcon
                          icon={
                            opened ? faMinus : faPlus
                          }
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
            <div className="relative h-[620px] w-full max-w-[520px]">

              {processes.map((item, index) => {
                const active =
                  activeProcess === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      setActiveProcess(item.id)
                    }
                    className={`absolute left-1/2 flex h-[110px] w-[430px] -translate-x-1/2 items-center justify-center rounded-full border text-2xl font-semibold transition-all duration-300

                    ${
                      active
                        ? "z-20 border-blue-700 bg-blue-700 text-white"
                        : "border-slate-500 bg-transparent text-slate-900"
                    }`}
                    style={{
                      top: `${index * 108}px`,
                    }}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* TECHNOLOGY SECTION */}
        <div className="mt-40">

          {/* LABEL */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-blue-600" />

            <span className="text-sm font-medium uppercase tracking-[3px] text-blue-900">
              Our Technologies
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mb-14 text-center text-5xl font-bold text-slate-900 lg:text-6xl">
            We Use{" "}
            <span className="text-blue-600">
              Technologies
            </span>
          </h2>

          {/* TABS */}
          <div className="mx-auto mb-20 flex max-w-5xl flex-wrap items-center justify-center gap-4 rounded-2xl bg-[#dbe8fa] p-4">

            {Object.keys(technologies).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTech(tab)}
                className={`rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300

                ${
                  activeTech === tab
                    ? "bg-white text-slate-900 shadow-md"
                    : "bg-transparent text-slate-700 hover:bg-white/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TECHNOLOGY GRID */}
          <div className="grid grid-cols-2 gap-y-14 sm:grid-cols-3 lg:grid-cols-6">

            {technologies[activeTech].map((tech) => (
              <div
                key={tech}
                className="flex flex-col items-center justify-center text-center"
              >
                {/* HEXAGON */}
                <div className="mb-6 flex h-24 w-24 items-center justify-center bg-white shadow-md"
                  style={{
                    clipPath:
                      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                  }}
                >
                  <span className="text-lg font-bold text-slate-700">
                    {tech.charAt(0)}
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-slate-900">
                  {tech}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DECORATION */}
      <div className="absolute right-0 top-10 hidden h-[700px] w-[220px] rounded-l-[120px] border border-blue-200 lg:block" />

      <div className="absolute right-28 top-1/3 hidden h-5 w-5 rounded-full bg-blue-600 lg:block" />
    </section>
  );
}

export default FaqSection;