"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  faArrowRight,
  faCalendarDays,
  faMagnifyingGlass,
  faUser,
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

  // if (!mounted || loading) {
  //   return (
  //     <div className="flex h-screen items-center justify-center bg-[#edf3fb]">
  //       <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-[#01085a]"></div>
  //     </div>
  //   );
  // }
  return (
  <section className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      {/* SEARCH */}
      <div className="mb-16">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Cari artikel..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-5 pr-12 outline-none transition focus:border-cyan-500"
          />

          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>
      </div>

      {/* BLOG LIST */}
      {!mounted || loading ? (
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">

          {[...Array(6)].map((_, index) => (
            <article
              key={index}
              className="animate-pulse"
            >
              {/* Image */}
              <div className="aspect-[4/3] rounded-3xl bg-slate-200" />

              {/* Meta */}
              <div className="mt-5 flex gap-6">
                <div className="h-4 w-32 rounded bg-slate-200" />
                <div className="h-4 w-20 rounded bg-slate-200" />
              </div>

              {/* Title */}
              <div className="mt-5 space-y-3">
                <div className="h-7 w-full rounded bg-slate-200" />
                <div className="h-7 w-3/4 rounded bg-slate-200" />
              </div>

              {/* Description */}
              <div className="mt-5 space-y-3">
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-4/5 rounded bg-slate-200" />
              </div>

              {/* Button */}
              <div className="mt-6 h-5 w-36 rounded bg-slate-200" />
            </article>
          ))}

        </div>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">

          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group"
            >

              {/* IMAGE */}
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">

                  <Image
                    src={blog.thumbnail_url || "/img/ai.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>
              </Link>

              {/* META */}
              <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarDays} />

                  <span>
                    {blog.created_at
                      ? new Date(blog.created_at).toLocaleDateString(
                          "id-ID",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )
                      : "-"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Admin</span>
                </div>

              </div>

              {/* TITLE */}
              <Link href={`/blog/${blog.slug}`}>
                <h2 className="mt-5 text-2xl font-bold leading-snug text-[#01085a] transition group-hover:text-cyan-600">
                  {blog.title}
                </h2>
              </Link>

              {/* DESCRIPTION */}
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {limitText(stripHtml(blog.body), 120)}
              </p>

              {/* BUTTON */}
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-6 inline-flex items-center font-semibold text-cyan-600 transition hover:text-cyan-700"
              >
                Baca Selengkapnya →
              </Link>

            </article>
          ))}

        </div>
      )}

    </div>
  </section>
  );
}