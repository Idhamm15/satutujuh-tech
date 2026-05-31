"use client";

import Image from "next/image";
import Link from "next/link";

import {
  faCalendarDays,
  faComments,
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const blogs = [
  {
    id: 1,
    title:
      "How Our Software Solutions Drive Insights.",
    category: "Consulting",
    date: "18 / 08 / 2024",
    comments: 24,
    image: "/img/blog1.jpg",
    description:
      "Student visa consulting agencies are equipped with professionals who specialize in the intricacies of visa applications.",
  },
  {
    id: 2,
    title:
      "Exploring Emerging Trends in Software Development.",
    category: "Consulting",
    date: "25 / 08 / 2024",
    comments: 24,
    image: "/img/blog2.jpg",
    description:
      "The realm of visa applications is a and ever-changing landscape...",
  },
];

const relatedPosts = [
  {
    title:
      "Leveraging Analytics for Business Growth Modernizing...",
    date: "11/12/2024",
    comments: 35,
  },
  {
    title:
      "How Emerging Technologies are Shaping the Future...",
    date: "11/02/2024",
    comments: 80,
  },
  {
    title:
      "Creating Engaging Digital for Your Audience Software...",
    date: "11/09/2024",
    comments: 42,
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#edf3fb] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-3 lg:px-10">

        {/* LEFT CONTENT */}
        <div className="space-y-10 lg:col-span-2">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden rounded-[30px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* IMAGE */}
                <div className="relative h-[320px] w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-10">

                  {/* META */}
                  <div className="mb-6 flex flex-wrap items-center gap-5">

                    <span className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                      {blog.category}
                    </span>

                    <div className="flex items-center gap-2 text-slate-600">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="text-sm"
                      />

                      <span className="text-sm">
                        {blog.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <FontAwesomeIcon
                        icon={faComments}
                        className="text-sm"
                      />

                      <span className="text-sm">
                        {blog.comments}
                      </span>
                    </div>
                  </div>

                  {/* TITLE */}
                  <h2 className="mb-6 text-4xl font-bold leading-tight text-[#01085a]">
                    {blog.title}
                  </h2>

                  {/* DESC */}
                  <p className="mb-8 text-lg leading-8 text-slate-600">
                    {blog.description}
                  </p>

                  {/* BUTTON */}
                  <Link
                    href="#"
                    className="inline-flex w-fit items-center gap-3 rounded-full bg-[#01085a] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                  >
                    READ MORE

                    <FontAwesomeIcon
                      icon={faArrowRight}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <div>

          {/* SEARCH */}
          <div className="mb-14">
            <h3 className="mb-8 text-3xl font-bold uppercase text-[#01085a]">
              Search
            </h3>

            <div className="relative">
              <input
                type="text"
                placeholder="Search your keyword"
                className="h-20 w-full rounded-2xl border-none bg-white px-8 pr-16 text-lg outline-none"
              />

              <button className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                />
              </button>
            </div>
          </div>

          {/* RELATED POSTS */}
          <div>
            <h3 className="mb-8 text-3xl font-bold uppercase text-[#01085a]">
              Related Posts
            </h3>

            <div className="space-y-6">

              {relatedPosts.map((post, index) => (
                <div
                  key={index}
                  className="rounded-[24px] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h4 className="mb-6 text-2xl font-bold leading-snug text-[#01085a]">
                    {post.title}
                  </h4>

                  <div className="flex items-center gap-6 text-slate-600">

                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="text-sm"
                      />

                      <span className="text-sm">
                        {post.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faComments}
                        className="text-sm"
                      />

                      <span className="text-sm">
                        {post.comments}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}