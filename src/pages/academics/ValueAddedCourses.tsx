import { FileText, CalendarDays } from "lucide-react";
const valueAddedCourses = [
  {
    year: "2018-19",
    courses: [
      {
        title: "Case Report - Article Writing",
        pdf: "/pdf/value-added/2018-19/case-report-article-writing.pdf",
      },
      {
        title: "Biomedical Waste Management",
        pdf: "/pdf/value-added/2018-19/biomedical-waste-management.pdf",
      },
      {
        title: "Infection control in Dental clinics",
        pdf: "/pdf/value-added/2018-19/infection-control.pdf",
      },
      {
        title: "Presentations made easy - PowerPoint tools",
        pdf: "/pdf/value-added/2018-19/powerpoint-tools.pdf",
      },
      {
        title: "Dental Records Management in clinics",
        pdf: "/pdf/value-added/2018-19/dental-records-management.pdf",
      },
      {
        title: "Abroad opportunities after BDS",
        pdf: "/pdf/value-added/2018-19/abroad-opportunities.pdf",
      },
      {
        title: "Inner Engineering",
        pdf: "/pdf/value-added/2018-19/inner-engineering.pdf",
      },
    ],
  },

  {
    year: "2019-20",
    courses: [
      {
        title: "Ergonomics in dentistry",
        pdf: "/pdf/value-added/2019-20/ergonomics.pdf",
      },
      {
        title: "Managing Finance in Clinical Practice",
        pdf: "/pdf/value-added/2019-20/managing-finance.pdf",
      },
      {
        title: "Poster presentation using Adobe photoshop",
        pdf: "/pdf/value-added/2019-20/poster-presentation.pdf",
      },
      {
        title: "MDP - Mobile Dental Photography",
        pdf: "/pdf/value-added/2019-20/mobile-dental-photography.pdf",
      },
      {
        title: "Designing a dental office",
        pdf: "/pdf/value-added/2019-20/designing-dental-office.pdf",
      },
      {
        title: "Review - Article writing",
        pdf: "/pdf/value-added/2019-20/review-article-writing.pdf",
      },
      {
        title: "Basic Life Support",
        pdf: "/pdf/value-added/2019-20/basic-life-support.pdf",
      },
    ],
  },

  {
    year: "2020-21",
    courses: [
      {
        title: "Sign Languages in Clinical Practice",
        pdf: "/pdf/value-added/2020-21/sign-languages.pdf",
      },
      {
        title: "Original Article writing",
        pdf: "/pdf/value-added/2020-21/original-article-writing.pdf",
      },
      {
        title: "Biomedical Waste management",
        pdf: "/pdf/value-added/2020-21/biomedical-waste-management.pdf",
      },
      {
        title: "Ethics & Values in Clinical Practice",
        pdf: "/pdf/value-added/2020-21/ethics-values.pdf",
      },
      {
        title: "Dental Chair mechanics",
        pdf: "/pdf/value-added/2020-21/dental-chair-mechanics.pdf",
      },
    ],
  },

  {
    year: "2021-22",
    courses: [
      {
        title: "AEROSOLS in Dental clinics",
        pdf: "/pdf/value-added/2021-22/aerosols.pdf",
      },
      {
        title: "DSLR – Dental Photography",
        pdf: "/pdf/value-added/2021-22/dslr-photography.pdf",
      },
      {
        title: "SOPs in clinics during COVID Times",
        pdf: "/pdf/value-added/2021-22/sops-covid.pdf",
      },
      {
        title: "ONLINE - Professional Upgradation",
        pdf: "/pdf/value-added/2021-22/professional-upgradation.pdf",
      },
      {
        title: "Mental health in student life",
        pdf: "/pdf/value-added/2021-22/mental-health.pdf",
      },
      {
        title: "Cleanliness in Clinics",
        pdf: "/pdf/value-added/2021-22/cleanliness.pdf",
      },
    ],
  },

  {
    year: "2022-23",
    courses: [
      {
        title: "Inner Engineering",
        pdf: "/pdf/value-added/2022-23/inner-engineering.pdf",
      },
      {
        title: "Basic Life support",
        pdf: "/pdf/value-added/2022-23/basic-life-support.pdf",
      },
      {
        title: "Digitalising Patient records",
        pdf: "/pdf/value-added/2022-23/digitalising-patient-records.pdf",
      },
      {
        title: "Post-graduation outside india",
        pdf: "/pdf/value-added/2022-23/post-graduation.pdf",
      },
      {
        title: "Say 'NO' – To Drugs",
        pdf: "/pdf/value-added/2022-23/no-to-drugs.pdf",
      },
      {
        title: "Research in Dentistry – The Future Aspects",
        pdf: "/pdf/value-added/2022-23/research-dentistry.pdf",
      },
      {
        title: "Self – motivation in everyday practice",
        pdf: "/pdf/value-added/2022-23/self-motivation.pdf",
      },
      {
        title: "Forensic Dental Evidence",
        pdf: "/pdf/value-added/2022-23/forensic-dental-evidence.pdf",
      },
      {
        title: "Nutrition in Dental health",
        pdf: "/pdf/value-added/2022-23/nutrition-dental-health.pdf",
      },
    ],
  },

  {
    year: "2023-24",
    courses: [
      {
        title: "3D Visualisation in Dentistry",
        pdf: "/pdf/value-added/2023-24/3d-visualisation.pdf",
      },
      {
        title: "Basic Life Support",
        pdf: "/pdf/value-added/2023-24/basic-life-support.pdf",
      },
      {
        title: "Effective Time Management",
        pdf: "/pdf/value-added/2023-24/effective-time-management.pdf",
      },
      {
        title: "Discipline in Dental Profession",
        pdf: "/pdf/value-added/2023-24/discipline.pdf",
      },
      {
        title: "Artificial Intelligence in Periodontal Research",
        pdf: "/pdf/value-added/2023-24/artificial-intelligence.pdf",
      },
      {
        title: "Budding Professional Relationships",
        pdf: "/pdf/value-added/2023-24/budding-professional-relationships.pdf",
      },
      {
        title: "Finance management in dental clinics",
        pdf: "/pdf/value-added/2023-24/finance-management.pdf",
      },
      {
        title: "Designing Dental clinics",
        pdf: "/pdf/value-added/2023-24/designing-dental-clinics.pdf",
      },
      {
        title: "Dental Ergonomics",
        pdf: "/pdf/value-added/2023-24/dental-ergonomics.pdf",
      },
    ],
  },
];

export default function ValueAddedCourses() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Value Added Courses
          </h1>

          <p className="mt-4 text-blue-100">
            Academic Year Wise Value Added Courses Conducted
          </p>

        </div>
      </section>
<section className="container mx-auto px-6 py-16">

  <div className="space-y-10">

    {valueAddedCourses.map((year) => (

   <div
  key={year.year}
  data-aos="fade-up"
  data-aos-duration="700"
  className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-5 py-3 flex items-center gap-3">

          <CalendarDays size={24} />

       <h2 className="text-xl font-semibold tracking-wide">
            {year.year}
          </h2>

        </div>

        <div className="divide-y">

          {year.courses.map((course, index) => (

            <div
              key={index}
             className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-4 hover:bg-blue-50 transition-all duration-300"
            >

            <div className="flex items-start gap-4">

  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
    {index + 1}
  </div>

  <div>

    <h3 className="font-semibold text-base text-slate-800">
      {course.title}
    </h3>

    <p className="text-sm text-gray-500 mt-1">
      Value Added Course
    </p>

  </div>

</div>

              <a
                href={course.pdf}
                target="_blank"
                rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-700 to-cyan-600 px-4 py-2 text-sm font-medium text-white hover:scale-105 transition-all duration-300"
              >

                <FileText size={18} />

                View PDF

              </a>

            </div>

          ))}

        </div>

      </div>

    ))}

  </div>

</section>

    </div>
  );
}