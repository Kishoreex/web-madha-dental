import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  type NewsItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  publishedDate: string;
  isActive: boolean;
};

const [news, setNews] = useState<NewsItem[]>([]);
const [loadingNews, setLoadingNews] = useState(true);   

useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await fetch("http://localhost:5232/api/News");

      if (!response.ok) {
        throw new Error("Failed to load news");
      }

      const data = await response.json();

      setNews(data);
    } catch (error) {
      console.error("Failed to load dashboard news:", error);
    } finally {
      setLoadingNews(false);
    }
  };

  fetchNews();
}, []);
  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030812] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_35%)]" />

      <div className="absolute top-[-180px] right-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

      <div className="absolute bottom-[-200px] left-[-200px] h-[550px] w-[550px] rounded-full bg-blue-600/[0.07] blur-[150px]" />

      {/* ================= HEADER ================= */}

      <header className="relative z-20 border-b border-white/[0.07] bg-[#07111f]/80 backdrop-blur-2xl">

        <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* BRAND */}

          <div className="flex items-center gap-4">

            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white shadow-[0_0_30px_rgba(34,211,238,0.16)]">

              <div className="absolute inset-[-5px] rounded-2xl border border-cyan-400/10" />

              <span className="text-sm font-black tracking-tight text-[#09234a]">
                MD
              </span>

            </div>

            <div>

              <h1
                className="text-base font-bold tracking-wide sm:text-lg"
                style={{
                  fontFamily: "'Cinzel', serif",
                }}
              >
                Madha Dental College
              </h1>

              <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[3px] text-cyan-300/80 sm:text-[9px]">
                Content Management System
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-3">

            {/* ADMIN PROFILE */}

            <div className="hidden items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 sm:flex">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-xs font-bold shadow-[0_0_18px_rgba(34,211,238,0.2)]">
                A
              </div>

              <div className="leading-tight">

                <p className="text-xs font-semibold text-white">
                  Administrator
                </p>

                <p className="mt-1 text-[9px] text-gray-500">
                  Content Manager
                </p>

              </div>

            </div>

            {/* LOGOUT */}

            <button
              onClick={logout}
              className="
                group flex items-center gap-2
                rounded-xl
                border border-red-400/15
                bg-red-500/[0.06]
                px-3.5 py-2.5
                text-xs font-medium text-red-300
                transition-all duration-300
                hover:border-red-400/30
                hover:bg-red-500/[0.12]
                hover:text-red-200
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4m-5-4l5-5m0 0l-5-5m5 5H3"
                />
              </svg>

              <span className="hidden sm:inline">
                Logout
              </span>

            </button>

          </div>

        </div>

      </header>

      {/* ================= MAIN ================= */}

      <main className="relative z-10 mx-auto max-w-[1400px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">

        {/* ================= WELCOME ================= */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >

          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

            <div>

              <div className="mb-3 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

                <span className="text-[10px] font-semibold uppercase tracking-[4px] text-cyan-300">
                  Administration
                </span>

              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Welcome back,
                <span className="text-cyan-300">
                  {" "}Administrator
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Manage and publish the latest news and announcements
                displayed on the Madha Dental College website.
              </p>

            </div>

            {/* SYSTEM STATUS */}

            <div className="flex w-fit items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-4 py-2">

              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />

              </span>

              <span className="text-[10px] font-medium uppercase tracking-[1.5px] text-emerald-300">
                CMS System Online
              </span>

            </div>

          </div>

        </motion.section>

        {/* ================= STATISTICS ================= */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >

          {/* TOTAL */}

          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#091322]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20">

            <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-cyan-400/[0.06] blur-2xl" />

            <div className="relative flex items-center justify-between">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Total News
                </p>

     <p className="mt-2 text-3xl font-bold text-white">
  {news.length}
</p>

              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-400/[0.07] text-cyan-300">

                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.6"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h9l5 5v9a2 2 0 01-2 2z"
                  />

                  <path
                    strokeWidth="1.6"
                    d="M14 4v5h5"
                  />
                </svg>

              </div>

            </div>

          </div>

          {/* PUBLISHED */}

          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#091322]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20">

            <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-blue-400/[0.06] blur-2xl" />

            <div className="relative flex items-center justify-between">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Published
                </p>

          <p className="mt-2 text-3xl font-bold text-white">
  {news.filter((item) => item.isActive).length}
</p>

              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/10 bg-blue-400/[0.07] text-blue-300">

                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.7"
                    d="M5 12l4 4L19 6"
                  />
                </svg>

              </div>

            </div>

          </div>

          {/* LAST UPDATE */}

          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#091322]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/20">

            <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-purple-400/[0.05] blur-2xl" />

            <div className="relative flex items-center justify-between">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Last Update
                </p>

          <p className="mt-2 text-xl font-bold text-white">
  {news.length > 0
    ? new Date(news[0].publishedDate)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .toUpperCase()
    : "NO NEWS"}
</p>

              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/10 bg-purple-400/[0.07] text-purple-300">

                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    strokeWidth="1.6"
                  />

                  <path
                    strokeWidth="1.6"
                    d="M12 8v4l2.5 2"
                  />
                </svg>

              </div>

            </div>

          </div>

        </motion.section>

        {/* ================= NEWS MANAGEMENT ================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >

          <div className="mb-5 flex items-end justify-between">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[3px] text-cyan-300/70">
                Content
              </p>

              <h3 className="mt-1 text-xl font-semibold text-white">
                News Management
              </h3>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* ================= ADD NEWS ================= */}

            <Link
              to="/admin/add-news"
              className="
                group relative overflow-hidden rounded-[24px]
                border border-cyan-300/10
                bg-gradient-to-br from-[#0b1b31] to-[#07101d]
                p-7
                transition-all duration-500
                hover:-translate-y-1
                hover:border-cyan-300/30
                hover:shadow-[0_20px_60px_rgba(34,211,238,0.10)]
              "
            >

              <div className="absolute right-[-70px] top-[-70px] h-52 w-52 rounded-full bg-cyan-400/[0.07] blur-[70px] transition-all duration-500 group-hover:bg-cyan-400/[0.13]" />

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />

              <div className="relative">

                <div className="mb-7 flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.07] text-cyan-300 transition-all duration-300 group-hover:bg-cyan-400/[0.12]">

                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>

                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] text-gray-500 transition-all group-hover:border-cyan-300/20 group-hover:text-cyan-300">
                    →
                  </span>

                </div>

                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[2px] text-cyan-300/70">
                  Create
                </p>

                <h4 className="text-2xl font-semibold text-white">
                  Add News
                </h4>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                  Create a new announcement or article and publish it
                  directly to the college website.
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-cyan-300">
                  Create Article
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>

            </Link>

            {/* ================= MANAGE NEWS ================= */}

            <Link
              to="/admin/manage-news"
              className="
                group relative overflow-hidden rounded-[24px]
                border border-blue-300/10
                bg-gradient-to-br from-[#0b1830] to-[#07101d]
                p-7
                transition-all duration-500
                hover:-translate-y-1
                hover:border-blue-300/30
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.10)]
              "
            >

              <div className="absolute right-[-70px] top-[-70px] h-52 w-52 rounded-full bg-blue-400/[0.07] blur-[70px] transition-all duration-500 group-hover:bg-blue-400/[0.13]" />

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-500 group-hover:w-full" />

              <div className="relative">

                <div className="mb-7 flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/15 bg-blue-400/[0.07] text-blue-300 transition-all duration-300 group-hover:bg-blue-400/[0.12]">

                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        d="M5 6h14M5 12h14M5 18h9"
                      />
                    </svg>

                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] text-gray-500 transition-all group-hover:border-blue-300/20 group-hover:text-blue-300">
                    →
                  </span>

                </div>

                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[2px] text-blue-300/70">
                  Administration
                </p>

                <h4 className="text-2xl font-semibold text-white">
                  Manage News
                </h4>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                  View published articles, edit existing content,
                  update images or remove old news.
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-blue-300">
                  Manage Articles
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>

            </Link>

          </div>

        </motion.section>

        {/* ================= RECENT NEWS ================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9"
        >

          <div className="mb-5 flex items-end justify-between">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[3px] text-cyan-300/70">
                Overview
              </p>

              <h3 className="mt-1 text-xl font-semibold text-white">
                Recent News
              </h3>

            </div>

            <Link
              to="/admin/manage-news"
              className="text-xs font-medium text-gray-500 transition-colors hover:text-cyan-300"
            >
              View all →
            </Link>

          </div>

   {loadingNews ? (
  <div className="p-8 text-center text-sm text-gray-500">
    Loading latest news...
  </div>
) : news.length === 0 ? (
  <div className="p-8 text-center">
    <p className="text-sm text-gray-400">
      No news published yet.
    </p>

    <Link
      to="/admin/add-news"
      className="mt-3 inline-block text-xs font-medium text-cyan-300 hover:text-cyan-200"
    >
      Create your first news →
    </Link>
  </div>
) : (
  news.slice(0, 5).map((item) => (
    <div
      key={item.id}
      className="group flex items-center gap-4 border-b border-white/[0.06] p-4 transition-colors hover:bg-white/[0.025] last:border-b-0"
    >

      {/* IMAGE */}

      <div className="h-14 w-20 shrink-0 overflow-hidden rounded-xl border border-white/[0.07] bg-[#050c17]">

        {item.imageUrl ? (
          <img
            src={`http://localhost:5232${item.imageUrl}`}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-900">
            <span className="text-[9px] font-bold tracking-widest text-cyan-200/60">
              NEWS
            </span>
          </div>
        )}

      </div>

      {/* CONTENT */}

      <div className="min-w-0 flex-1">

        <h4 className="truncate text-sm font-semibold text-white">
          {item.title}
        </h4>

        <p className="mt-1 text-[10px] text-gray-500">
          {new Date(item.publishedDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

      </div>

      {/* STATUS */}

      <span
        className={`hidden rounded-full border px-3 py-1 text-[9px] font-medium sm:block ${
          item.isActive
            ? "border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-300"
            : "border-gray-400/15 bg-gray-400/[0.05] text-gray-400"
        }`}
      >
        {item.isActive ? "Published" : "Inactive"}
      </span>

      <span className="text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-cyan-300">
        →
      </span>

    </div>
  ))
)}
        </motion.section>

        {/* ================= FOOTER ================= */}

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/[0.05] pt-5 text-[9px] text-gray-600 sm:flex-row">

          <p>
            Madha Dental College & Hospital
          </p>

          <p className="tracking-wide">
            ADMIN CMS • CONTENT MANAGEMENT
          </p>

        </div>

      </main>

    </div>
  );
}