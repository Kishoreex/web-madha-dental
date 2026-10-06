import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  publishedDate: string;
  isActive: boolean;
};

export default function ManageNews() {
  const navigate = useNavigate();

  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // ================= LOAD NEWS =================

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch("http://localhost:5232/api/News");

      if (!response.ok) {
        throw new Error("Failed to load news");
      }

      const data = await response.json();

      setNews(data);
    } catch (error) {
      console.error("Failed to load news:", error);
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE NEWS =================

  const deleteNews = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this news?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `http://localhost:5232/api/News/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete news");
      }

      setNews((currentNews) =>
        currentNews.filter((item) => item.id !== id)
      );

      alert("News deleted successfully.");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete news.");
    }
  };

  // ================= SEARCH =================

  const filteredNews = news.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030812] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_35%)]" />

      <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

      <div className="absolute bottom-[-200px] left-[-200px] h-[550px] w-[550px] rounded-full bg-blue-600/[0.07] blur-[150px]" />

      {/* ================= HEADER ================= */}

      <header className="relative z-20 border-b border-white/[0.07] bg-[#07111f]/80 backdrop-blur-2xl">

        <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* BRAND */}

          <div className="flex items-center gap-4">

            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white shadow-[0_0_30px_rgba(34,211,238,0.16)]">

              <div className="absolute inset-[-5px] rounded-2xl border border-cyan-400/10" />

              <span className="text-sm font-black text-[#09234a]">
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

              <p className="mt-0.5 text-[8px] uppercase tracking-[3px] text-cyan-300/80 sm:text-[9px]">
                Content Management System
              </p>

            </div>

          </div>

          {/* BACK */}

          <Link
            to="/admin/dashboard"
            className="
              flex items-center gap-2
              rounded-xl
              border border-white/[0.08]
              bg-white/[0.03]
              px-4 py-2.5
              text-xs font-medium text-gray-300
              transition-all duration-300
              hover:border-cyan-300/20
              hover:bg-cyan-400/[0.06]
              hover:text-cyan-300
            "
          >

            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>

            Dashboard

          </Link>

        </div>

      </header>

      {/* ================= MAIN ================= */}

      <main className="relative z-10 mx-auto max-w-[1200px] px-5 py-8 sm:px-8 lg:py-10">

        {/* ================= TITLE ================= */}

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[3px] text-cyan-300/70">
              Content Administration
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Manage News
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
              View, edit and manage all news articles published on the
              Madha Dental College website.
            </p>

          </div>

          {/* ADD NEWS */}

          <Link
            to="/admin/add-news"
            className="
              group flex w-fit items-center gap-2
              rounded-xl
              border border-cyan-300/30
              bg-gradient-to-r from-blue-600 to-cyan-500
              px-5 py-3
              text-sm font-semibold text-white
              shadow-[0_0_25px_rgba(34,211,238,0.12)]
              transition-all duration-300
              hover:-translate-y-[1px]
              hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
            "
          >

            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                d="M12 5v14M5 12h14"
              />
            </svg>

            Add News

          </Link>

        </div>

        {/* ================= OVERVIEW ================= */}

        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* TOTAL */}

          <div className="rounded-2xl border border-white/[0.07] bg-[#091322]/80 p-5 backdrop-blur-xl">

            <p className="text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
              Total Articles
            </p>

            <div className="mt-2 flex items-end justify-between">

              <p className="text-3xl font-bold">
                {news.length}
              </p>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-400/[0.06] text-cyan-300">

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

          <div className="rounded-2xl border border-white/[0.07] bg-[#091322]/80 p-5 backdrop-blur-xl">

            <p className="text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
              Published
            </p>

            <div className="mt-2 flex items-end justify-between">

              <p className="text-3xl font-bold">
                {news.filter((item) => item.isActive).length}
              </p>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/10 bg-emerald-400/[0.06] text-emerald-300">

                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l4 4L19 6"
                  />
                </svg>

              </div>

            </div>

          </div>

          {/* DRAFT */}

          <div className="rounded-2xl border border-white/[0.07] bg-[#091322]/80 p-5 backdrop-blur-xl">

            <p className="text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
              Drafts
            </p>

            <div className="mt-2 flex items-end justify-between">

              <p className="text-3xl font-bold">
                {news.filter((item) => !item.isActive).length}
              </p>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-400/[0.06] text-amber-300">

                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l2.5 2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    strokeWidth="1.6"
                  />
                </svg>

              </div>

            </div>

          </div>

        </div>

        {/* ================= NEWS LIST ================= */}

        <div className="overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#091322]/80 backdrop-blur-xl">

          {/* TABLE HEADER */}

          <div className="flex flex-col gap-4 border-b border-white/[0.06] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h3 className="text-sm font-semibold text-white">
                All News
              </h3>

              <p className="mt-1 text-[10px] text-gray-500">
                Manage your website articles
              </p>

            </div>

            {/* SEARCH */}

            <div className="relative w-full sm:w-[260px]">

              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  strokeWidth="1.7"
                />

                <path
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  d="M16 16l4 4"
                />
              </svg>

              <input
                type="text"
                placeholder="Search news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  h-10 w-full rounded-xl
                  border border-white/[0.07]
                  bg-[#050c17]
                  pl-10 pr-4
                  text-xs text-white
                  outline-none
                  placeholder:text-gray-600
                  focus:border-cyan-400/30
                "
              />

            </div>

          </div>

          {/* ================= NEWS DATA ================= */}

          {loading ? (

            <div className="px-6 py-12 text-center">
              <p className="text-sm text-gray-500">
                Loading news...
              </p>
            </div>

          ) : filteredNews.length === 0 ? (

            <div className="px-6 py-12 text-center">
              <p className="text-sm text-gray-500">
                No news articles found.
              </p>
            </div>

          ) : (

            filteredNews.map((item) => (

              <div
                key={item.id}
                className="
                  group flex flex-col gap-4
                  border-b border-white/[0.06]
                  p-5
                  transition-all
                  hover:bg-white/[0.02]
                  sm:flex-row
                  sm:items-center
                "
              >

                {/* IMAGE */}

                <div className="
                  flex h-[90px] w-full shrink-0
                  items-center justify-center
                  overflow-hidden rounded-xl
                  border border-white/[0.07]
                  bg-[#050c17]
                  sm:w-[130px]
                ">

                  {item.imageUrl ? (

                    <img
                      src={`http://localhost:5232${item.imageUrl}`}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />

                  ) : (

                    <span className="text-[10px] font-bold tracking-[2px] text-cyan-200/50">
                      NEWS IMAGE
                    </span>

                  )}

                </div>

                {/* CONTENT */}

                <div className="min-w-0 flex-1">

                  <div className="mb-2 flex flex-wrap items-center gap-2">

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[9px] font-medium ${
                        item.isActive
                          ? "border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-300"
                          : "border-amber-400/15 bg-amber-400/[0.05] text-amber-300"
                      }`}
                    >
                      {item.isActive ? "Published" : "Draft"}
                    </span>

                    <span className="text-[10px] text-gray-600">
                      {new Date(
                        item.publishedDate
                      ).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>

                  </div>

                  <h4 className="truncate text-sm font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                    {item.description}
                  </p>

                </div>

                {/* ACTIONS */}

                <div className="flex items-center gap-2">

                  {/* EDIT */}

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/admin/edit-news/${item.id}`)
                    }
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      border border-blue-300/10
                      bg-blue-400/[0.05]
                      text-blue-300
                      transition-all
                      hover:border-blue-300/25
                      hover:bg-blue-400/[0.10]
                    "
                    title="Edit"
                  >

                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20h9"
                      />

                      <path
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4L16.5 3.5z"
                      />
                    </svg>

                  </button>

                  {/* DELETE */}

                  <button
                    type="button"
                    onClick={() => deleteNews(item.id)}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      border border-red-300/10
                      bg-red-400/[0.04]
                      text-red-300
                      transition-all
                      hover:border-red-300/25
                      hover:bg-red-400/[0.10]
                    "
                    title="Delete"
                  >

                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >

                      <path
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 7h16"
                      />

                      <path
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 11v6M14 11v6"
                      />

                      <path
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 7l1 13h10l1-13M9 7V4h6v3"
                      />

                    </svg>

                  </button>

                </div>

              </div>

            ))

          )}

          {/* FOOTER */}

          <div className="px-6 py-5 text-center">

            <p className="text-[10px] text-gray-600">
              Showing {filteredNews.length} news articles
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}