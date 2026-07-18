import { CalendarDays, Download, Star } from "lucide-react";

const calendars = [
  {
    year: "2025 - 2026",
    file: "/pdf/academic-calendar/2025-2026.pdf",
    latest: true,
  },
  {
    year: "2024 - 2025",
    file: "/pdf/academic-calendar/2024-2025.pdf",
  },
  {
    year: "2023 - 2024",
    file: "/pdf/academic-calendar/2023-2024.pdf",
  },
  {
    year: "2022 - 2023",
    file: "/pdf/academic-calendar/2022-2023.pdf",
  },

  {
    year: "2020 - 2021",
    file: "/pdf/academic-calendar/2020-2021.pdf",
  },
  {
    year: "2019 - 2020",
    file: "/pdf/academic-calendar/2019-2020.pdf",
  },
  {
    year: "2018 - 2019",
    file: "/pdf/academic-calendar/2018-2019.pdf",
  },
];

const AcademicCalendar = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}

      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">

        <div
          className="container-custom text-center"
          data-aos="fade-up"
        >

          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 mb-6">
            <CalendarDays className="w-5 h-5" />
            Academic Calendar
          </div>

          <h1 className="text-5xl font-bold mb-5">
            Academic Calendar
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/90">
            Academic schedules and important dates for undergraduate
            and postgraduate programmes.
          </p>

        </div>

      </section>

      {/* Latest Calendar */}

      <section className="py-20">

        <div className="container-custom">

          <h2
            className="heading-2 text-center mb-12"
            data-aos="fade-up"
          >
            Latest Academic Calendar
          </h2>

          {calendars
            .filter((item) => item.latest)
            .map((item) => (
              <div
                key={item.year}
                className="glass-card p-8 bg-gradient-to-r from-blue-900 to-cyan-700 text-white rounded-3xl mb-14"
                data-aos="zoom-in"
              >

                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

                  <div>

                    <div className="flex items-center gap-2 mb-3">

                      <Star className="text-yellow-300" />

                      <span className="uppercase text-sm tracking-wider">
                        Latest
                      </span>

                    </div>

                    <h3 className="text-3xl font-bold">
                      Academic Calendar {item.year}
                    </h3>

                  </div>

                  <a
                    href={item.file}
                    target="_blank"
                    className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>

                </div>

              </div>
            ))}

          {/* Previous Calendars */}

          <h2
            className="heading-2 text-center mb-12"
            data-aos="fade-up"
          >
           Academic Calendars
          </h2>

   <div className="grid md:grid-cols-2 gap-5">

  {calendars.map((item, index) => (

    <div
      key={item.year}
      className={`glass-card p-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${
        item.latest
          ? "border-2 border-blue-600 bg-blue-50"
          : ""
      }`}
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >

      {item.latest && (
        <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-3">
          <Star className="w-4 h-4" />
          Latest
        </span>
      )}

     <CalendarDays className="text-blue-700 w-8 h-8 mb-3" />

      <h3 className="text-lg font-semibold mb-3">
        Academic Calendar {item.year}
      </h3>

      <a
        href={item.file}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
      >
      <Download className="w-4 h-4" />
Download
      </a>

    </div>

  ))}

</div> </div>

      </section>

    </div>
  );
};

export default AcademicCalendar;