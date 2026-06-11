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

function StatCard({
  title,
  value,
  subtitle,
  icon,
  bg,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: any;
  bg: string;
}) {
  return (
    <div className="bg-gray-100 rounded-3xl p-3">
      <h3 className="text-lg font-bold text-slate-900 mb-4 px-2">
        {title}
      </h3>

      <div className="bg-white rounded-3xl p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-extrabold text-slate-900">
              {value}
            </p>

            <p className="text-sm text-green-600 mt-1">
              {subtitle}
            </p>
          </div>

          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${bg}`}
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-2xl text-slate-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <div className="bg-gray-100 rounded-3xl p-10 text-center">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          <StatCard
            title="Total Revenue"
            value="$127K"
            subtitle="+23% vs last month"
            icon={faDollarSign}
            bg="bg-lime-300"
          />

          <StatCard
            title="Active Users"
            value="24.7K"
            subtitle="+12% this week"
            icon={faUsers}
            bg="bg-cyan-300"
          />

          <StatCard
            title="Page Views"
            value="89.2K"
            subtitle="+5% today"
            icon={faEye}
            bg="bg-orange-300"
          />

          <StatCard
            title="Conversion Rate"
            value="3.8%"
            subtitle="-2% vs target"
            icon={faChevronUp}
            bg="bg-lime-300"
          />
        </div>
        </div>
      </main>
    </div>
  );
}