"use client";

import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

     const result = await response.json();

      if (!result.status) {
        await Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: result.message,
        });

        return;
      }

      // simpan token
      Cookies.set(
        "access_token",
        result.data.access_token
      );

      Cookies.set(
        "refresh_token",
        result.data.refresh_token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(result.data.user)
      );

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      await Toast.fire({
        icon: "success",
        title: "Login berhasil",
      });

      window.location.replace("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        {/* Left Side */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          {/* Logo */}
          <div>
            <Image
              src="/img/logo.webp"
              alt="Logo"
              width={300}
              height={128}
              className="w-32 mx-auto"
            />
          </div>

          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Welcome Back! 👋
            </h1>

            <div className="w-full flex-1 mt-8">
              {/* Divider */}
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  login with e-mail
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleLogin}
                className="mx-auto max-w-xs"
              >
                {/* Email */}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />

                {/* Password */}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                {/* Forgot Password */}
                <div className="text-right mt-3">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-white w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center disabled:opacity-50"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line
                      x1="15"
                      y1="12"
                      x2="3"
                      y2="12"
                    />
                  </svg>

                  <span className="ml-3">
                    {loading
                      ? "Loading..."
                      : "Login"}
                  </span>
                </button>

                {/* Register */}
                <p className="mt-6 text-sm text-center text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          />
        </div>
      </div>
    </div>
  );
}