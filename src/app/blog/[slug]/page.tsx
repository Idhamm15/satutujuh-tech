"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { faCalendarDays, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const limitText = (text: string, max = 60) => {
  if (!text) return "";
  return text.length > max ? text.substring(0, max) + "..." : text;
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<any>(null);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_URL + "/blog";

  // =========================
  // FETCH DETAIL BLOG
  // =========================
  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_URL}/${slug}`);
        const result = await res.json();

        if (result.status) {
          setBlog(result.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // =========================
  // FETCH SIDEBAR BLOGS
  // =========================
    useEffect(() => {
    const fetchBlogs = async () => {
        try {
        const res = await fetch(API_URL);
        const result = await res.json();

        if (result.status) {
            const publishedBlogs = result.data.filter(
            (blog: any) => blog.status === "published"
            );

            setBlogs(publishedBlogs);
        }
        } catch (err) {
        console.error(err);
        }
    };

    fetchBlogs();
    }, []);

  // =========================
  // LOADING
  // =========================
  if (!slug || loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#edf3fb]">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-[#01085a]" />
      </div>
    );
  }

  // =========================
  // NOT FOUND
  // =========================
  if (!blog) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Blog tidak ditemukan</p>
      </div>
    );
  }

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

  return (
    <>
      <Navbar />

      <section className="bg-white">

        {/* ===========================
            HERO IMAGE
        =========================== */}
        <div className="relative h-[260px] md:h-[420px] w-full">

          <Image
            src={blog.thumbnail_url || "/img/ai.jpg"}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f248e]/80 to-[#1f248e]/40" />

        </div>

        {/* ===========================
            HEADER CARD
        =========================== */}
        <div className="relative z-10 mx-auto -mt-24 max-w-5xl px-6">

          <div className="rounded-3xl bg-white px-8 py-10 shadow-xl md:px-16">

            <h1 className="text-center text-3xl font-bold text-[#11153D] md:text-5xl">
              {blog.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-gray-500">

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
                <span>Admin Satutujuh Tech</span>
              </div>

            </div>

          </div>

        </div>

        {/* ===========================
            ARTICLE CONTENT
        =========================== */}
        <div className="mx-auto max-w-4xl px-6 py-20">

          <article
            className="
              prose
              prose-lg
              max-w-none

              prose-headings:text-[#11153D]
              prose-p:text-slate-700
              prose-a:text-cyan-600
              prose-img:rounded-2xl
            "
            dangerouslySetInnerHTML={{
              __html: blog.body,
            }}
          />

        </div>

      </section>

      {/* =========================
            RELATED ARTICLES
        ========================= */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="mb-16 text-center text-4xl font-bold text-[#01085a]">
              Related Articles
            </h2>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              spaceBetween={35}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogs
                .filter((item) => item.slug !== blog.slug)
                .map((item) => (
                  <SwiperSlide key={item.id}>

                    <article className="group">

                      {/* IMAGE */}
                      <Link href={`/blog/${item.slug}`}>
                        <div className="relative h-[260px] overflow-hidden rounded-3xl">

                          <Image
                            src={item.thumbnail_url || "/img/ai.jpg"}
                            alt={item.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />

                        </div>
                      </Link>

                      {/* META */}
                      <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">

                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCalendar} />
                          <span>
                            {item.created_at
                              ? new Date(item.created_at).toLocaleDateString(
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
                      <Link
                        href={`/blog/${item.slug}`}
                        className="mt-5 block text-2xl font-bold leading-snug text-[#1D4ED8] transition hover:text-cyan-600"
                      >
                        {limitText(item.title, 65)}
                      </Link>

                      {/* DESCRIPTION */}
                      <p className="mt-4 text-base leading-8 text-slate-600">
                        {limitText(stripHtml(blog.body), 120)}
                      </p>

                    </article>

                  </SwiperSlide>
                ))}
            </Swiper>

          </div>
        </section>

      <div className="mt-[-20px]">
        <Footer />
      </div>

      {/* BACK TO TOP */}
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#01085a] shadow-2xl transition-all hover:scale-110 hover:bg-yellow-500 hover:text-white"
      >
        ↑
      </button>
    </>
  );
}