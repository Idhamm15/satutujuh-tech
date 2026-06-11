"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

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
    if (!slug) return; // 🔥 IMPORTANT GUARD

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

  return (
    <>
      <Navbar />

      <section className="bg-[#edf3fb] py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-3 lg:px-10 ">

          {/* =========================
              LEFT - DETAIL BLOG
          ========================= */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm lg:col-span-2">

        {/* IMAGE */}
        <div className="relative h-[400px] w-full">
            <Image
            src={blog.thumbnail_url || "/img/ai.jpg"}
            alt={blog.title}
            fill
            className="object-cover"
            />
        </div>

        {/* CONTENT */}
        <div className="space-y-8 p-8">

            <h1 className="text-4xl font-bold text-[#01085a]">
            {blog.title}
            </h1>

            <p className="text-sm text-gray-500">
            {blog.created_at
                ? new Date(blog.created_at).toLocaleDateString()
                : "N/A"}
            </p>

            <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{
                __html: blog.body,
            }}
            />

        </div>
        </div>

          {/* =========================
              RIGHT - SIDEBAR
          ========================= */}
          <div className="space-y-8">

            <h3 className="text-2xl font-bold text-[#01085a]">
              Artikel Lainnya
            </h3>

            {blogs
              .filter((b) => b.slug !== blog.slug)
              .slice(0, 5)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={item.thumbnail_url || "/img/ai.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#01085a]">
                      {limitText(item.title, 40)}
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.created_at
                        ? new Date(item.created_at).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />

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