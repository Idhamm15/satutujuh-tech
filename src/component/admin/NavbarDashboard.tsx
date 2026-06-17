// app/components/dashboard/NavbarDashboard.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChartColumn,
  faChevronUp,
  faDollarSign,
  faFileLines,
  faUsers,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export default function NavbarDashboard({
  sidebarOpen,
  onCloseSidebar,
}: NavbarProps) {
    const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "Anda yakin ingin keluar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Logout",
      cancelButtonText: "Batal",
    });

    if (!result.isConfirmed) return;

    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    localStorage.removeItem("user");

    window.location.replace("/login");
  };
  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onCloseSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-100 flex flex-col transform transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <img src="/img/logo.webp" alt="" />
              </div>

              <div>
                <h1 className="text-slate-900 text-lg font-bold">
                  Satutujuh Tech
                </h1>

                <p className="text-slate-500 text-xs">
                  Dashboard
                </p>
              </div>
            </div>

            <button
              onClick={onCloseSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-6 py-4 space-y-6 overflow-y-auto">

          {/* Analytics */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Analytics
            </h3>

            <div className="space-y-1">
              <SidebarButton
                link="/dashboard"
                icon={faChevronUp}
                label="Overview"
              />

              <SidebarButton
                link="/dashboard/management-blog"
                icon={faDollarSign}
                label="Blog"
              />

              <SidebarButton
                link="/dashboard/management-user"
                icon={faUsers}
                label="Pengguna"
              />
            </div>
          </div>

          {/* Reports */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Reports
            </h3>

            <div className="space-y-1">
              <SidebarButton
                link="/dashboard/setting"
                icon={faFileLines}
                label="Pengaturan"
              />
            </div>

            <button
              onClick={handleLogout}
              className="w-full mt-3 flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:text-white hover:bg-red-500 transition"
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="w-4 h-4"
              />
              <span>Logout</span>
            </button>
          </div>
        </nav>

        {/* Profile */}
        <div className="px-6 pb-6">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold text-slate-900">
                Admin
              </p>

              <p className="text-sm text-slate-500">
                admin@satujutuh.net
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

interface SidebarButtonProps {
  link: string;
  icon: any;
  label: string;
}

function SidebarButton({
  link,
  icon,
  label,
}: SidebarButtonProps) {
  const pathname = usePathname();

  const active =
    link === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(link);

  return (
    <Link
      href={link}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
        active
          ? "bg-[#276874] text-white"
          : "hover:bg-gray-200 text-slate-700"
      }`}
    >
      <FontAwesomeIcon icon={icon} />

      <span>{label}</span>
    </Link>
  );
}