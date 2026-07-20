import {
  Bell,
  Calendar,
  Download,
  FileText,
  Search,
} from "lucide-react";

const notices = [
  {
    title: "BDS University Examination Schedule",
    date: "23 January 2026",
    category: "Academic Circular",
    pdf: "/pdf/notices/BDS_Exam.pdf",
    icon: <FileText className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Republic Day Celebration",
    date: "21 January 2026",
    category: "Campus Event",
    pdf: "/pdf/notices/RepublicDay.pdf",
    icon: <Bell className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Pongal Holidays",
    date: "12 January 2026",
    category: "Holiday Notice",
    pdf: "/pdf/notices/Pongal.pdf",
    icon: <Calendar className="w-8 h-8 text-orange-500" />,
  },
];

export default function CircularsNotices() {
  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div
          className="container-custom text-center text-white"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold mb-5">
            Circulars, Notices & Announcements
          </h1>

          <p className="max-w-3xl mx-auto text-blue-100 text-lg">
            Stay updated with the latest academic circulars,
            examination schedules, holiday notices and important
            announcements from Madha Dental College & Hospital.
          </p>
        </div>
      </section>

      {/* About */}

      <section className="py-16">

        <div
          className="container-custom"
          data-aos="fade-up"
        >

          <div className="rounded-3xl bg-blue-50 p-8">

            <h2 className="text-3xl font-bold mb-4">
              About
            </h2>

            <p className="text-gray-600 leading-8">
              This section provides important academic circulars,
              examination schedules, holiday notices, institutional
              announcements and other official communications issued
              by Madha Dental College & Hospital.
            </p>

          </div>

        </div>

      </section>

      {/* Search */}

      <section className="pb-12">

        <div className="container-custom">

          <div className="relative max-w-xl mx-auto">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              placeholder="Search Circulars..."
              className="w-full border rounded-xl py-3 pl-12 pr-4"
            />

          </div>

        </div>

      </section>

      {/* Cards */}

      <section className="pb-20">

        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {notices.map((item, index) => (

              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="rounded-2xl border bg-white shadow-md p-6 hover:shadow-xl transition-all"
              >

                <div className="flex justify-between">

                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">

                    {item.icon}

                  </div>

                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full h-fit">

                    {item.category}

                  </span>

                </div>

                <h3 className="font-bold text-xl mt-6">

                  {item.title}

                </h3>

                <p className="text-gray-500 mt-3">

                  {item.date}

                </p>

                <a
                  href={item.pdf}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-xl hover:bg-blue-800 transition"
                >

                  <Download size={18} />

                  View Notice

                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}