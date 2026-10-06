import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddNews() {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [error, setError] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setMessage("");
  setError("");

  if (!title.trim()) {
    setError("Please enter a news title.");
    return;
  }

  if (!content.trim()) {
    setError("Please enter the news content.");
    return;
  }

  if (!date) {
    setError("Please select a published date.");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();

    formData.append("Title", title);
    formData.append("Description", content);
    formData.append("PublishedDate", date);

    if (image) {
      formData.append("Image", image);
    }

    const response = await fetch("http://localhost:5232/api/News", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.message || "Failed to publish news."
      );
    }

    setMessage("News published successfully!");

    setTitle("");
    setContent("");
    setDate("");
    setImage(null);

    setTimeout(() => {
      navigate("/admin/manage-news");
    }, 1000);

  } catch (err) {
    console.error(err);

    setError(
      err instanceof Error
        ? err.message
        : "Something went wrong while publishing the news."
    );
  } finally {
    setLoading(false);
  }
};

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

            Back to Dashboard

          </Link>

        </div>

      </header>

      {/* ================= MAIN ================= */}

      <main className="relative z-10 mx-auto max-w-[1000px] px-5 py-8 sm:px-8 lg:py-10">

        {/* PAGE TITLE */}

        <div className="mb-8">

          <p className="text-[9px] font-semibold uppercase tracking-[3px] text-cyan-300/70">
            Content Management
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Create News
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Add a new announcement or article to the Madha Dental College website.
          </p>

        </div>

        {/* ================= FORM ================= */}

        <form
          onSubmit={handleSubmit}
          className="
            overflow-hidden
            rounded-[26px]
            border border-white/[0.07]
            bg-[#091322]/80
            shadow-[0_25px_80px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
          "
        >

          {/* FORM HEADER */}

          <div className="border-b border-white/[0.06] px-6 py-5 sm:px-8">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-400/[0.07] text-cyan-300">

                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    d="M12 5v14M5 12h14"
                  />
                </svg>

              </div>

              <div>

                <h3 className="text-sm font-semibold text-white">
                  News Details
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  Enter the information for your new article
                </p>

              </div>

            </div>

          </div>

          {/* FORM BODY */}

          <div className="space-y-7 px-6 py-7 sm:px-8">

            {/* TITLE */}

            <div>

              <label className="mb-2 block text-xs font-medium text-gray-300">
                News Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter news title"
                required
                className="
                  w-full rounded-xl
                  border border-white/[0.08]
                  bg-[#050c17]
                  px-4 py-3.5
                  text-sm text-white
                  outline-none
                  placeholder:text-gray-600
                  transition-all
                  focus:border-cyan-400/40
                  focus:ring-2
                  focus:ring-cyan-400/10
                "
              />

            </div>

            {/* DATE */}

            <div>

              <label className="mb-2 block text-xs font-medium text-gray-300">
                Published Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="
                  w-full rounded-xl
                  border border-white/[0.08]
                  bg-[#050c17]
                  px-4 py-3.5
                  text-sm text-white
                  outline-none
                  transition-all
                  focus:border-cyan-400/40
                  focus:ring-2
                  focus:ring-cyan-400/10
                "
              />

            </div>

            {/* CONTENT */}

            <div>

              <div className="mb-2 flex items-center justify-between">

                <label className="text-xs font-medium text-gray-300">
                  News Content
                </label>

                <span className="text-[10px] text-gray-600">
                  Write the full announcement
                </span>

              </div>

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your news content here..."
                required
                rows={9}
                className="
                  w-full resize-none rounded-xl
                  border border-white/[0.08]
                  bg-[#050c17]
                  px-4 py-3.5
                  text-sm leading-6 text-white
                  outline-none
                  placeholder:text-gray-600
                  transition-all
                  focus:border-cyan-400/40
                  focus:ring-2
                  focus:ring-cyan-400/10
                "
              />

            </div>

            {/* IMAGE */}

            <div>

              <label className="mb-2 block text-xs font-medium text-gray-300">
                News Image
              </label>

              <label
                className="
                  group flex min-h-[180px] cursor-pointer
                  flex-col items-center justify-center
                  rounded-2xl
                  border border-dashed border-cyan-300/15
                  bg-[#050c17]
                  px-5
                  transition-all duration-300
                  hover:border-cyan-300/30
                  hover:bg-cyan-400/[0.02]
                "
              >

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setImage(file);
                  }}
                />

                <div className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  border border-cyan-300/15
                  bg-cyan-400/[0.06]
                  text-cyan-300
                  transition-all
                  group-hover:bg-cyan-400/[0.10]
                ">

                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4-4a2 2 0 012.8 0L14 15l2-2a2 2 0 012.8 0L20 14"
                    />

                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="16"
                      rx="2"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="8.5"
                      cy="8.5"
                      r="1.5"
                      strokeWidth="1.5"
                    />
                  </svg>

                </div>

                <p className="mt-4 text-sm font-medium text-gray-300">
                  {image ? image.name : "Upload News Image"}
                </p>

                <p className="mt-1 text-[10px] text-gray-600">
                  PNG, JPG or WEBP • Recommended for website news
                </p>

              </label>

            </div>

          </div>
{/* STATUS MESSAGE */}

{error && (
  <div className="mx-6 mb-5 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm text-red-300 sm:mx-8">
    {error}
  </div>
)}

{message && (
  <div className="mx-6 mb-5 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-sm text-emerald-300 sm:mx-8">
    {message}
  </div>
)}
          {/* ================= FOOTER ================= */}

          <div className="flex flex-col-reverse gap-3 border-t border-white/[0.06] px-6 py-5 sm:flex-row sm:justify-end sm:px-8">

            <Link
              to="/admin/dashboard"
              className="
                flex h-12 items-center justify-center
                rounded-xl
                border border-white/[0.08]
                bg-white/[0.02]
                px-6
                text-sm font-medium text-gray-400
                transition-all
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              Cancel
            </Link>

            <button
              type="submit"
                disabled={loading}
              className="
                group relative h-12 overflow-hidden
                rounded-xl
                border border-cyan-300/30
                bg-gradient-to-r
                from-blue-600
                via-blue-500
                to-cyan-400
                px-7
                text-sm font-semibold text-white
                shadow-[0_0_25px_rgba(34,211,238,0.15)]
                transition-all duration-300
                hover:-translate-y-[1px]
                hover:border-cyan-200
                hover:shadow-[0_0_35px_rgba(34,211,238,0.30)]
              "
            >

              <span className="relative z-10 flex items-center justify-center gap-2">

          {loading ? "Publishing..." : "Publish News"}

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>

              </span>

            </button>

          </div>

        </form>

      </main>

    </div>
  );
}