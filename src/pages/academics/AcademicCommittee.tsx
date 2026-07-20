import {
  Users,
  Download,
  CalendarDays,
  FileText,
} from "lucide-react";

const minutes = [
  {
    year: "2023",
    file: "/pdf/committee/2023.pdf",
  },
  {
    year: "2022",
    file: "/pdf/committee/2022.pdf",
  },
  {
    year: "2021",
    file: "/pdf/committee/2021.pdf",
  },
  {
    year: "2020",
    file: "/pdf/committee/2020.pdf",
  },
  {
    year: "2019",
    file: "/pdf/committee/2019.pdf",
  },
  {
    year: "2018",
    file: "/pdf/committee/2018.pdf",
  },
];

export default function AcademicCommittee() {
  return (
    <div className="bg-white">

      {/* Hero */}

      <section
        className="bg-gradient-to-r from-blue-900 to-blue-700 py-24"
        data-aos="fade"
      >
        <div className="container-custom text-center text-white">

          <h1 className="text-5xl font-bold mb-4">
            Academic Committee
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Academic Committee Meeting Minutes and Institutional
            Academic Governance.
          </p>

        </div>
      </section>

      {/* About */}

      <section className="py-16">

        <div
          className="container-custom"
          data-aos="fade-up"
        >

          <div className="bg-blue-50 rounded-3xl p-8 shadow">

            <div className="flex items-center gap-4 mb-5">

              <Users
                className="text-blue-700"
                size={42}
              />

              <h2 className="text-3xl font-bold">
                About Academic Committee
              </h2>

            </div>

            <p className="text-gray-700 leading-8">

              The Academic Committee monitors academic planning,
              curriculum implementation, student progression,
              quality assurance, examination policies and continuous
              improvement of teaching-learning activities.

            </p>

          </div>

        </div>

      </section>

      {/* Responsibilities */}

      <section className="pb-16">

        <div className="container-custom">

          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Committee Responsibilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Curriculum Planning",
              "Academic Monitoring",
              "Quality Assurance",
              "Examination Review",
            ].map((item, index) => (

              <div
                key={item}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white border rounded-2xl shadow p-6 hover:shadow-xl transition"
              >

                <FileText
                  className="text-blue-700 mb-4"
                  size={32}
                />

                <h3 className="font-bold mb-2">
                  {item}
                </h3>

                <p className="text-gray-600 text-sm">
                  Academic committee oversees this activity
                  to maintain institutional quality.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Meeting Minutes */}

      <section className="bg-gray-50 py-20">

        <div className="container-custom">

          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Meeting Minutes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {minutes.map((item, index) => (

              <div
                key={item.year}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition"
              >

                <CalendarDays
                  className="text-blue-700 mb-4"
                  size={34}
                />

                <h3 className="text-2xl font-bold mb-2">
                  {item.year}
                </h3>

                <p className="text-gray-600 mb-6">
                  Academic Committee Meeting Minutes
                </p>

                <a
                  href={item.file}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-xl hover:bg-blue-800"
                >
                  <Download size={18} />
                  View PDF
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}