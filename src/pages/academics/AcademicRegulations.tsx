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
   <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Academic Regulations
          </h1>

   <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto">
            Rules, curriculum regulations and examination guidelines
            for BDS & MDS programmes.
          </p>
        </div>
      </section>

      {/* About */}
<section className="py-6 md:py-8">
        <div className="container-custom">

      <div
className="bg-blue-50 rounded-2xl p-5 md:p-6 shadow-md"
  data-aos="fade-up"
>

         <h2 className="text-2xl md:text-3xl font-bold mb-2">
              About Academic Regulations
            </h2>

<p className="font-['Montserrat'] text-[14px] leading-6 text-black sm:text-[16px]">
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
     <section className="pb-6 md:pb-8">
   <div className="container-custom grid lg:grid-cols-2 gap-4 md:gap-5">

          {/* BDS */}
    <div
className="rounded-2xl border shadow-sm p-5 hover:shadow-lg transition-all duration-300"
  data-aos="fade-right"
>
     <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="text-blue-700" size={28} />
           <h3 className="text-lg md:text-xl font-bold">
                BDS Academic Regulations
              </h3>
            </div>

      <ul className="space-y-1.5 text-gray-700 mb-5 text-sm">
              <li>• Duration : 4 Years + 1 Year Internship</li>
              <li>• Attendance Requirements</li>
              <li>• Internal Assessment</li>
              <li>• University Examination</li>
              <li>• Clinical Training</li>
            </ul>

            <a
              href="/pdf/regulations/BDS_Academic_Regulations.pdf"
              target="_blank"
className="inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition"
            >
              <Download size={18}/>
              Download PDF
            </a>

          </div>

          {/* MDS */}

      <div
className="rounded-2xl border shadow-sm p-5 hover:shadow-lg transition-all duration-300"
  data-aos="fade-left"
>

         <div className="flex items-center gap-3 mb-3">
           <BookOpen className="text-blue-700" size={28} />
       <h3 className="text-lg md:text-xl font-bold">
                MDS Academic Regulations
              </h3>
            </div>

   <ul className="space-y-1 text-gray-700 mb-4 text-sm">
              <li>• Duration : 3 Years</li>
              <li>• Dissertation</li>
              <li>• Clinical Work</li>
              <li>• Attendance Requirements</li>
              <li>• University Examination</li>
            </ul>

            <a
              href="/pdf/regulations/MDS_Academic_Regulations.pdf"
              target="_blank"
           className="inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition"
            >
              <Download size={18}/>
              Download PDF
            </a>

          </div>

        </div>
      </section>

  

      {/* Contact */}

<section className="pt-1 pb-5">
        <div className="container-custom">

        <div
className="rounded-2xl bg-blue-900 text-white p-5 md:p-6 shadow-lg"
data-aos="fade-up">

<h2 className="text-2xl md:text-3xl font-bold mb-3">
              Academic Office
            </h2>

       <div className="space-y-3">

              <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
                <span>info@mdch.in</span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}