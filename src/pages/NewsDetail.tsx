
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  publishedDate: string;
  isActive: boolean;
};

const API = "http://localhost:5232";

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [allNews, setAllNews] = useState<NewsItem[]>([]);

  
useEffect(() => {
  const loadAllNews = async () => {
    try {
      const response = await fetch(`${API}/api/News`);

      if (!response.ok) return;

      const data: NewsItem[] = await response.json();

      setAllNews(
        data
          .filter((item) => item.isActive)
          .sort(
            (a, b) =>
              new Date(b.publishedDate).getTime() -
              new Date(a.publishedDate).getTime()
          )
      );
    } catch (err) {
      console.error("Could not load other news:", err);
    }
  };

  loadAllNews();
}, []);


  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetch(`${API}/api/News/${id}`);

        if (!response.ok) {
          throw new Error("News article could not be found.");
        }

        const data: NewsItem = await response.json();

        if (!data.isActive) {
          throw new Error("This news article is not available.");
        }

        setNews(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Unable to load news."
        );
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [id]);

  const imageSrc = news?.imageUrl
    ? news.imageUrl.startsWith("http")
      ? news.imageUrl
      : `${API}${news.imageUrl.startsWith("/") ? "" : "/"}${news.imageUrl}`
    : "";

  return (
    <main className="min-h-screen bg-slate-50">
     
<div className="mx-auto max-w-4xl px-5 pt-28 pb-10 sm:pt-32 sm:pb-16">
        {loading ? (
          <p className="py-20 text-center text-slate-500">
            Loading news article...
          </p>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-white p-8 text-center">
            <h1 className="text-2xl font-bold text-slate-900">
              News unavailable
            </h1>
            <p className="mt-3 text-slate-600">{error}</p>
            <Link
              to="/"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white"
            >
              Return Home
            </Link>
          </div>
      ) : news ? (
  <>
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-900/5">

{imageSrc && (
  <div className="flex max-h-[320px] w-full items-center justify-center overflow-hidden bg-slate-50 sm:max-h-[400px]">
    <img
      src={imageSrc}
      alt={news.title}
      className="max-h-[320px] w-full object-contain sm:max-h-[400px]"
    />
  </div>
)}


            <div className="p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[3px] text-blue-700">
                College News & Announcements
              </p>

              <p className="mt-4 text-sm text-slate-500">
                {new Date(news.publishedDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                {news.title}
              </h1>

<div className="mt-6 whitespace-pre-wrap break-words text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
                {news.description}
              </div>

              <div className="mt-10 border-t border-slate-200 pt-6">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-cyan-600"
                >
                  ← Back to Homepage
                </Link>
              </div>
            </div>
          </article>

          
{/* MORE COLLEGE NEWS */}
{allNews.filter((item) => item.id !== news?.id).length > 0 && (
  <section className="mt-10">
    <div className="mb-6">
      <p className="text-xs font-bold uppercase tracking-[3px] text-blue-700">
        Explore More
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
        More College News
      </h2>

      <p className="mt-2 text-sm text-slate-600">
        Read the latest updates from Madha Dental College.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2">
      {allNews
        .filter((item) => item.id !== news?.id)
        .map((item) => {
          const itemImage = item.imageUrl
            ? item.imageUrl.startsWith("http")
              ? item.imageUrl
              : `${API}${item.imageUrl.startsWith("/") ? "" : "/"}${item.imageUrl}`
            : "";

          return (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {itemImage ? (
                <img
                  src={itemImage}
                  alt={item.title}
                  className="h-44 w-full bg-slate-50 object-contain transition duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-44 items-center justify-center bg-slate-100 text-sm text-slate-500">
                  Madha Dental College
                </div>
              )}

              <div className="p-5">
                <p className="text-xs text-slate-500">
                  {new Date(item.publishedDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>

                <h3 className="mt-2 line-clamp-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                  {item.title}
                </h3>

                <p className="mt-2 line-clamp-3 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-700">
                  Read Full Story <span>→</span>
                </span>
              </div>
            </Link>
          );
        })}
    </div>
  </section>
)}
          </>
) : null}
      </div>
    </main>
  );
}