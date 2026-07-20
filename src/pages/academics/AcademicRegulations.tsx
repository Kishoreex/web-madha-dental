import { BookOpen, Download, GraduationCap, FileText, Phone, Mail } from "lucide-react";
import "aos/dist/aos.css";
export default function AcademicRegulations() {
  return (
    <div className="bg-white">

      {/* Hero */}
     <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
      <div
  className="container-custom text-center text-white"
  data-aos="fade-up"
  data-aos-duration="1200"
>
          <h1 className="text-5xl font-bold mb-4">
            Academic Regulations
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Rules, curriculum regulations and examination guidelines
            for BDS & MDS programmes.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container-custom">

      <div
  className="bg-blue-50 rounded-2xl p-8 shadow-lg"
  data-aos="fade-up"
>

            <h2 className="text-3xl font-bold mb-6">
              About Academic Regulations
            </h2>

            <p className="text-gray-700 leading-8">
              Academic Regulations provide the framework for the conduct of
              BDS and MDS programmes at Madha Dental College & Hospital.
              These regulations include eligibility, attendance requirements,
              examinations, internal assessment, university regulations,
              internship and graduation requirements.
            </p>

          </div>

        </div>
      </section>

      {/* Regulations */}
      <section className="pb-20">
        <div className="container-custom grid lg:grid-cols-2 gap-8">

          {/* BDS */}
    <div
  className="rounded-2xl border shadow-md p-6 hover:shadow-xl transition-all duration-300"
  data-aos="fade-right"
>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-700"size={32}/>
              <h3 className="text-xl font-bold">
                BDS Academic Regulations
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 mb-6 text-sm">
              <li>• Duration : 4 Years + 1 Year Internship</li>
              <li>• Attendance Requirements</li>
              <li>• Internal Assessment</li>
              <li>• University Examination</li>
              <li>• Clinical Training</li>
            </ul>

            <a
              href="/pdf/regulations/BDS_Academic_Regulations.pdf"
              target="_blank"
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-xl hover:bg-blue-800 transition"
            >
              <Download size={18}/>
              Download PDF
            </a>

          </div>

          {/* MDS */}

      <div
  className="rounded-2xl border shadow-md p-6 hover:shadow-xl transition-all duration-300"
  data-aos="fade-left"
>

            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-blue-700" size={32}/>
              <h3 className="text-2xl font-bold">
                MDS Academic Regulations
              </h3>
            </div>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Duration : 3 Years</li>
              <li>• Dissertation</li>
              <li>• Clinical Work</li>
              <li>• Attendance Requirements</li>
              <li>• University Examination</li>
            </ul>

            <a
              href="/pdf/regulations/MDS_Academic_Regulations.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
            >
              <Download size={18}/>
              Download PDF
            </a>

          </div>

        </div>
      </section>

      {/* Guidelines */}

      <section className="bg-gray-50 py-20">

        <div className="container-custom">

          <h2 className="text-3xl font-bold text-center mb-12">
            Important Guidelines
          </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {[
              "Minimum Attendance",
              "Internal Assessment",
              "University Examination",
              "Clinical Requirements",
              "Internship Rules",
              "Promotion Criteria",
            ].map((item) => (

              <div
                key={item}
               className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all duration-300"
data-aos="zoom-in"
              >
                <FileText className="text-blue-700 mb-4"/>

                <h3 className="font-bold mb-2">
                  {item}
                </h3>

                <p className="text-gray-600">
                  Refer to the official academic regulations
                  for complete information.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="py-20">

        <div className="container-custom">

          <div className="rounded-2xl bg-blue-900 text-white p-8 shadow-xl"
data-aos="fade-up">

            <h2 className="text-3xl font-bold mb-6">
              Academic Office
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Phone />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail />
                <span>info@mdch.in</span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}