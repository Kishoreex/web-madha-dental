import {
  BookOpen,
  Download,
  GraduationCap,
  FileText,
} from "lucide-react";

const bdsYears = [
  {
    title: "BDS Curriculum & Syllabus - 1st Year",
    pdf: "/pdf/curriculum/BDS_1st_Year.pdf",
  },
  {
    title: "BDS Curriculum & Syllabus - 2nd Year",
    pdf: "/pdf/curriculum/BDS_2nd_Year.pdf",
  },
  {
    title: "BDS Curriculum & Syllabus - 3rd Year",
    pdf: "/pdf/curriculum/BDS_3rd_Year.pdf",
  },
  {
    title: "BDS Curriculum & Syllabus - Final Year & Internship",
    pdf: "/pdf/curriculum/BDS_4th_Year.pdf",
  },
];

export default function AcademicCurriculum() {
  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div
          className="container-custom text-center text-white"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold mb-5">
            Academic Curriculum & Syllabus
          </h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Download the latest curriculum and syllabus
            for BDS and MDS programmes.
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
              About Curriculum
            </h2>

            <p className="text-gray-600 leading-8">
              The curriculum is designed according to the
              Dental Council of India and
              The Tamil Nadu Dr. M.G.R. Medical University
              regulations to provide students with
              comprehensive theoretical knowledge,
              pre-clinical training and clinical exposure.
            </p>

          </div>

        </div>

      </section>

      {/* BDS */}

      <section className="pb-20">

        <div className="container-custom">

          <h2 className="text-3xl font-bold mb-8">
            BDS Curriculum
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {bdsYears.map((item,index)=>(

              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index*100}
                className="rounded-2xl border shadow-md p-6 hover:shadow-xl transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">

                    <GraduationCap className="text-blue-700"/>

                  </div>

                  <div>

                    <h3 className="font-bold text-lg">

                      {item.title}

                    </h3>

                  </div>

                </div>

                <a
                  href={item.pdf}
                  target="_blank"
                  className="inline-flex mt-6 items-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-xl hover:bg-blue-800"
                >

                  <Download size={18}/>

                  Download PDF

                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

  

    </div>
  );
}