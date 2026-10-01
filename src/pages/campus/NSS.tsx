import { FileText, Download, HeartHandshake } from "lucide-react";
import "aos/dist/aos.css";

const nssDocuments = [
  {
    title: "NSS Annual Report 2018 - 2023",
    description:
      "Explore the annual reports highlighting NSS activities, community service initiatives and student participation from 2018 to 2023.",
    file: "/pdf/nss/NSS_Annual_Report_2018_2023.pdf",
  },
  {
    title: "NSS - CAMPS",
    description:
      "Discover the NSS camps organized to promote social responsibility, community engagement and volunteer service among students.",
    file: "/pdf/nss/NSS_CAMPS.pdf",
  },
];

export default function NSS() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
        <div
          className="container-custom text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            National Service Scheme (NSS)
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90">
            Encouraging community service, social responsibility,
            leadership and holistic development through NSS activities.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-8 md:py-10">
        <div className="container-custom">
          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7 shadow-md"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-3">
              <HeartHandshake
                className="text-blue-700"
                size={28}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                NSS Activities
              </h2>
            </div>

            <p className="font-['Montserrat'] text-[14px] leading-6 text-black sm:text-[16px]">
              The National Service Scheme (NSS) encourages students
              to actively participate in community service and
              social development activities. Through various
              initiatives, awareness programs and special camps,
              students develop leadership qualities, teamwork,
              social responsibility and a commitment to serving
              society.
            </p>
          </div>
        </div>
      </section>

      {/* ================= NSS DOCUMENTS ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          {/* Section Heading */}
          <div
            className="flex items-center gap-3 mb-6"
            data-aos="fade-up"
          >
            <FileText
              className="text-blue-700"
              size={28}
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              NSS Reports & Camps
            </h2>
          </div>

          {/* PDF Cards */}
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">

            {nssDocuments.map((document, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >

                <div className="p-5 md:p-7">

                  {/* PDF Icon */}
                  <div className="flex items-center justify-between mb-5">

                    <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center">
                      <FileText
                        className="text-red-600"
                        size={30}
                      />
                    </div>

                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      PDF Document
                    </span>

                  </div>

                  {/* Document Title */}
                  <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3">
                    {document.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Montserrat'] text-[14px] leading-6 text-gray-600 mb-6">
                    {document.description}
                  </p>

                  {/* Download Button */}
                  <a
                    href={document.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-sm font-semibold rounded-xl hover:from-blue-800 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                  >
                    <Download size={18} />
                    View PDF
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}