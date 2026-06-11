"use client";

import HeaderDashboard from "@/component/admin/HeaderDashboard";
import NavbarDashboard from "@/component/admin/NavbarDashboard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartColumn,
  faChevronUp,
  faCircleExclamation,
  faDollarSign,
  faDownload,
  faEye,
  faFileLines,
  faGlobe,
  faUsers,
  faXmark,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex overflow-hidden">

      {/* Sidebar */}
      <NavbarDashboard
        sidebarOpen={sidebarOpen}
        onCloseSidebar={() => setSidebarOpen(false)}
      />

      {/* Main */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">

        {/* Header */}
        <HeaderDashboard
          onOpenSidebar={() => setSidebarOpen(true)}
        />

        {/* Content */}
        <div className="bg-gray-100 rounded-3xl p-6">

          <div className="bg-white rounded-3xl p-6 border border-gray-200">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Blog Management
                </h1>

                <p className="text-gray-500 mt-1">
                  Kelola artikel website perusahaan
                </p>
              </div>

              <a href="/dashboard/management-blog/create" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition">
                + Tambah Artikel
              </a>
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full md:w-96 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 text-left text-gray-600">Judul</th>
                    <th className="py-4 text-left text-gray-600">Penulis</th>
                    <th className="py-4 text-left text-gray-600">Status</th>
                    <th className="py-4 text-left text-gray-600">Tanggal</th>
                    <th className="py-4 text-center text-gray-600">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">
                      Cara Membuat Website Company Profile
                    </td>

                    <td>Admin</td>

                    <td>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Published
                      </span>
                    </td>

                    <td>11 Juni 2026</td>

                    <td>
                      <div className="flex justify-center gap-2">
                        <button className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg">
                          Edit
                        </button>

                        <button className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}