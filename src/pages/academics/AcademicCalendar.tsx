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
 /* {
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
  },*/
];

const AcademicCalendar = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}

    <section className="pt-24 pb-12 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">

        <div
          className="container-custom text-center"
          data-aos="fade-up"
        >

       

         <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Academic Calendar
          </h1>

     <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90">
            Academic schedules and important dates for undergraduate
            and postgraduate programmes.
          </p>

        </div>

      </section>

      {/* Latest Calendar */}

  <section className="py-12">

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
        className="glass-card p-6 md:p-7 bg-gradient-to-r from-blue-900 to-cyan-700 text-white rounded-2xl mb-10 shadow-lg"
                data-aos="zoom-in"
              >

             <div className="flex flex-col sm:flex-row justify-between items-center gap-5">

                  <div>

                  <div className="flex items-center gap-2 mb-2">

                     <Star className="w-4 h-4 text-yellow-300" />

                    <span className="uppercase text-xs tracking-wider">
                        Latest
                      </span>

                    </div>

                  <h3 className="text-xl md:text-2xl font-bold">
                      Academic Calendar {item.year}
                    </h3>

                  </div>

                  <a
                    href={item.file}
                    target="_blank"
className="bg-white text-blue-900 px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:scale-105 transition"
                  >
                  <Download className="w-4 h-4" />
                    Download PDF
                  </a>

                </div>

              </div>
            ))}

          {/* Previous Calendars */}

       <h2
  className="heading-2 text-center mb-7 text-2xl md:text-3xl"
  data-aos="fade-up"
>
  Academic Calendars
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

  {calendars.map((item, index) => (

    <div
      key={item.year}
      className={`glass-card p-5 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
        item.latest
          ? "border-2 border-blue-600 bg-blue-50"
          : ""
      }`}
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >

      {item.latest && (
<span className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-2.5 py-1 rounded-full text-xs mb-3">
         <Star className="w-3.5 h-3.5" />
          Latest
        </span>
      )}

   <CalendarDays className="text-blue-700 w-7 h-7 mb-3" />

     <h3 className="text-base font-semibold mb-3">
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