"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// remove HTML tags
const stripHtml = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
};

// limit text
const limitText = (text: string, max = 50) => {
  if (!text) return "";
  return text.length > max
    ? text.substring(0, max) + "..."
    : text;
};

export default function BlogSection() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_URL =
    process.env.NEXT_PUBLIC_URL + "/blog";

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchBlogs = async () => {
      try {
        const res = await fetch(API_URL);
        const result = await res.json();

        if (result.status) {
          const publishedOnly = result.data.filter(
            (b: any) => b.status === "published"
          );

          setBlogs(publishedOnly);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, [mounted]);

  // FIX: fetch only after mount
  useEffect(() => {
    if (!mounted) return;

    const fetchBlogs = async () => {
      try {
        const res = await fetch(API_URL);
        const result = await res.json();

        if (result.status) {
          const publishedOnly = result.data.filter(
            (b: any) => b.status === "published"
          );

          setBlogs(publishedOnly);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, [mounted]);

  if (!mounted) return null;

  const filteredBlogs = blogs.filter((b) =>
    b.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  if (!mounted || loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#edf3fb]">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-[#01085a]"></div>
      </div>
    );
  }
  return (
    <section className="bg-[#edf3fb] py-24">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-3 lg:px-10">

        {/* LEFT CONTENT */}
        <div className="space-y-10 lg:col-span-2">

          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden rounded-[30px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* IMAGE */}
                <div className="relative h-[320px] w-full">
                  <Image
                    src={
                      blog.thumbnail_url ||
                      "/img/ai.jpg"
                    }
                    alt={blog.title || "blog"}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-10">

                  {/* STATUS */}
                  <span className="mb-3 inline-block w-fit rounded-md border px-4 py-2 text-sm">
                    di buat{" "}
                    {blog.created_at
                      ? new Date(
                          blog.created_at
                        ).toLocaleDateString()
                      : "N/A"}
                  </span>

                  {/* TITLE */}
                  <h2 className="mb-4 text-3xl font-bold leading-tight text-[#01085a]">
                    {blog.title}
                  </h2>

                  {/* BODY (SAFE TEXT ONLY) */}
                  <p className="mb-6 text-slate-600">
                    {limitText(
                      stripHtml(blog.body),
                      50
                    )}
                  </p>

                  {/* READ MORE */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex w-fit items-center gap-3 rounded-full bg-[#01085a] px-6 py-3 text-white"
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

        {/* SIDEBAR */}
        <div>

          {/* SEARCH */}
          <div className="mb-14">
            <h3 className="mb-6 text-2xl font-bold text-[#01085a]">
              Search
            </h3>

            <div className="relative">

              {/* FIX: uncontrolled input (no hydration issue) */}
              <input
                type="text"
                placeholder="Search blog..."
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full rounded-xl bg-white px-6 py-4 pr-12 outline-none"
              />

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}