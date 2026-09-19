import { useState } from "react";

import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Globe,
  GraduationCap,
  Lightbulb,
  Microscope,
  Stethoscope,
  Target,
} from "lucide-react";

const careerOptions = [
  {
    title: "Pursuing Specialization through MDS",
    icon: GraduationCap,
    description:
      "BDS graduates can pursue specialization in fields such as Prosthodontics, Pedodontics, Endodontics, Orthodontics, Public Health Dentistry, Oral Medicine Diagnosis and Radiology, Oral Pathology, Oral Surgery and Periodontics.",
  },
  {
    title: "Fellowship / Post Graduate Certificate Programs",
    icon: Award,
    description:
      "Fellowship and postgraduate certificate programs allow graduates to develop expertise in sub-specializations such as Cosmetic Dentistry and Endodontic Dentistry.",
  },
  {
    title: "MSc. in Dental Materials",
    icon: Microscope,
    description:
      "This postgraduate option enables graduates to develop expertise in dental materials and pursue careers in dental materials manufacturing industries or research.",
  },
  {
    title: "MBA – Hospital Administration",
    icon: Building2,
    description:
      "An MBA in Hospital Administration provides an opportunity to pursue a career in hospital administration.",
  },
];

const jobOptions = [
  {
    title: "Working as a Dental Practitioner",
    icon: Stethoscope,
    description:
      "Graduates can provide oral healthcare by establishing their own clinic or working in government and private hospital settings.",
  },
  {
    title: "Entrepreneurship",
    icon: Briefcase,
    description:
      "Dental graduates can establish corporate clinics and create employment opportunities for fellow dental graduates.",
  },
  {
    title: "Dental Materials / Prosthetics Industry",
    icon: Microscope,
    description:
      "Graduates can work in areas such as research, development and marketing within dental materials manufacturing and prosthetics industries.",
  },
  {
    title: "Healthcare Administration",
    icon: Building2,
    description:
      "Healthcare administration offers roles related to hospital management and healthcare policies.",
  },
];

const alternateCareers = [
  "Academics – Faculty roles in teaching institutions",
  "Medical Writing – Creating medical content",
  "Medical Coding & Health Insurance Analyst",
  "Healthcare Consulting – Oral health consulting for organizations",
];

const researchAreas = [
  "Clinical research",
  "Stem cell research",
  "IT-based dental research",
];

const abroadOptions = [
  {
    exam: "NHS",
    country: "United Kingdom",
    description: "For dental practice in the UK.",
  },
  {
    exam: "ADC",
    country: "Australia",
    description: "For pursuing dental practice opportunities in Australia.",
  },
  {
    exam: "DDS",
    country: "United States",
    description: "For pursuing dental education and career opportunities in the US.",
  },
  {
    exam: "MOH",
    country: "Gulf Countries",
    description:
      "Graduates have to clear the MOH examination of the respective country.",
  },
];

const neetTopics = [
  {
    number: "01",
    title: "Introduction to NEET PG Exam Preparation",
    duration: "30 MIN",
    points: [
      "Recognize the significance of effective exam preparation strategies.",
      "Learn how to balance study hours with focused concentration for optimal results.",
      "Emphasize the importance of quality learning over prolonged study hours.",
      "Apply strategic thinking in answering MCQs.",
    ],
  },
  {
    number: "02",
    title: "Online Conduct of NEET MDS by NBE",
    duration: "30 MIN",
    points: [
      "Explore the mode of examination for NEET MDS as conducted by the National Board of Examinations (NBE).",
      "Understand the benefits and challenges of an online examination format.",
    ],
  },
  {
    number: "03",
    title: "Duration and Structure of NEET MDS",
    duration: "30 MIN",
    points: [
      "Learn about the duration of the NEET MDS exam.",
      "Understand the allocation of time for different sections within the exam.",
      "Grasp the concept of 240 objective-type questions and their distribution.",
      "Familiarize yourself with the exam answer templates.",
    ],
  },
  {
    number: "04",
    title: "Validity of NEET MDS Results",
    duration: "30 MIN",
    points: [
      "Discover the timeframe within which the NEET MDS result remains valid.",
      "Understand the limitations of using the result for admissions in subsequent academic years.",
    ],
  },
  {
    number: "05",
    title: "Key Considerations for NEET MDS Preparation",
    duration: "30 MIN",
    points: [
      "Familiarize yourself with the essential aspects of NEET MDS preparation.",
      "Gain insights into the marking scheme and its impact on the approach to answering questions.",
      "Understand the exam pattern and the significance of subject-wise weightage.",
      "Understand the marking scheme of the NEET exam.",
    ],
  },
  {
    number: "06",
    title: "Planning for Effective NEET MDS Study",
    duration: "30 MIN",
    points: [
      "Develop a personalized study plan considering the exam duration and the vast syllabus.",
      "Explore techniques to optimize concentration and retain information effectively.",
      "Understand the importance of mock tests and time management during the exam.",
    ],
  },
];

function OptionCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-100">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-3 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
        <CheckCircle2 className="h-4 w-4" />
        Career pathway
      </div>
    </div>
  );
}

export default function CareerGuidance() {
  const [openSection, setOpenSection] = useState<"bds" | "mds" | null>("bds");

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071b3a] via-[#103c73] to-[#0e7490] pt-36 pb-24 text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              <Target className="h-4 w-4 text-cyan-300" />
              Academic Support & Student Development
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Career Guidance
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
              Supporting BDS students with structured guidance on career
              opportunities, higher studies, research, professional practice
              and competitive examination preparation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                <span className="block text-xs uppercase tracking-wider text-white/60">
                  Program
                </span>
                <span className="font-bold">Career Opportunities After BDS</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                <span className="block text-xs uppercase tracking-wider text-white/60">
                  Duration
                </span>
                <span className="font-bold">3 Hours</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                <span className="block text-xs uppercase tracking-wider text-white/60">
                  Stakeholders
                </span>
                <span className="font-bold">CRI Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* CAREER GUIDANCE ACCORDION */}
<section className="bg-slate-50 py-16">
  <div className="container-custom">

    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
        Career Guidance
      </p>

      <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
        Explore Your Career Path
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        Select a programme below to explore the career opportunities,
        higher studies and competitive examination guidance available
        for dental graduates.
      </p>
    </div>

    <div className="mx-auto max-w-5xl space-y-5">

      {/* ================= BDS ================= */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">

        <button
          type="button"
          onClick={() =>
            setOpenSection(openSection === "bds" ? null : "bds")
          }
          className="flex w-full items-center justify-between gap-6 bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-6 text-left text-white transition-all hover:from-blue-800 hover:to-blue-600 md:px-8"
        >
          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <GraduationCap className="h-7 w-7" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                Bachelor of Dental Surgery
              </p>

              <h3 className="mt-1 text-2xl font-black md:text-3xl">
                BDS Career Guidance
              </h3>

              <p className="mt-1 text-sm text-blue-100">
                Higher studies, jobs, research, entrepreneurship & careers abroad
              </p>
            </div>

          </div>

          <ChevronDown
            className={`h-7 w-7 shrink-0 transition-transform duration-300 ${
              openSection === "bds" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSection === "bds" && (
          <div className="p-6 md:p-8">

            {/* INTRODUCTION */}
            <div className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Lightbulb className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Career Opportunities After BDS
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    This programme provides graduating students with
                    guidance on the various career opportunities available
                    after completion of the BDS programme.
                  </p>

                  <p className="mt-3 text-sm font-semibold text-blue-700">
                    Programme Duration: 3 Hours
                  </p>
                </div>

              </div>
            </div>

            {/* HIGHER STUDIES */}
            <div className="mb-10">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <h4 className="text-2xl font-black text-slate-900">
                  Higher Studies
                </h4>
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                {careerOptions.map((item) => (
                  <OptionCard
                    key={item.title}
                    {...item}
                  />
                ))}

              </div>
            </div>

            {/* JOB OPPORTUNITIES */}
            <div className="mb-10">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Briefcase className="h-5 w-5" />
                </div>

                <h4 className="text-2xl font-black text-slate-900">
                  Job Opportunities
                </h4>
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                {jobOptions.map((item) => (
                  <OptionCard
                    key={item.title}
                    {...item}
                  />
                ))}

              </div>
            </div>

            {/* OTHER CAREERS */}
            <div className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <h4 className="text-2xl font-black text-slate-900">
                Other Alternate Career Options
              </h4>

              <div className="mt-5 grid gap-3 md:grid-cols-2">

                {alternateCareers.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />

                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* RESEARCH */}
            <div className="mb-10 rounded-2xl bg-gradient-to-br from-[#0b2345] to-[#164e63] p-6 text-white md:p-8">

              <div className="flex items-center gap-3">
                <Microscope className="h-6 w-6 text-cyan-300" />

                <h4 className="text-2xl font-black">
                  Research Related Careers
                </h4>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">

                {researchAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />

                    <span className="text-sm">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* CAREER ABROAD */}
            <div>

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Globe className="h-5 w-5" />
                </div>

                <h4 className="text-2xl font-black text-slate-900">
                  Career Opportunities Abroad
                </h4>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {abroadOptions.map((item) => (
                  <div
                    key={item.exam}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Globe className="h-5 w-5" />
                    </div>

                    <h5 className="mt-4 text-xl font-black text-slate-900">
                      {item.exam}
                    </h5>

                    <p className="mt-1 font-semibold text-blue-600">
                      {item.country}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        )}

      </div>


      {/* ================= MDS ================= */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">

        <button
          type="button"
          onClick={() =>
            setOpenSection(openSection === "mds" ? null : "mds")
          }
          className="flex w-full items-center justify-between gap-6 bg-gradient-to-r from-[#0b2345] to-[#164e63] px-6 py-6 text-left text-white transition-all hover:from-[#102f59] hover:to-[#17627a] md:px-8"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Target className="h-7 w-7" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Master of Dental Surgery
              </p>

              <h3 className="mt-1 text-2xl font-black md:text-3xl">
                MDS / NEET Preparation Guidance
              </h3>

              <p className="mt-1 text-sm text-cyan-100">
                NEET MDS preparation, exam structure & study strategy
              </p>
            </div>

          </div>

          <ChevronDown
            className={`h-7 w-7 shrink-0 transition-transform duration-300 ${
              openSection === "mds" ? "rotate-180" : ""
            }`}
          />

        </button>

        {openSection === "mds" && (
          <div className="p-6 md:p-8">

            <div className="mb-8 rounded-2xl border border-cyan-100 bg-cyan-50 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-600 text-white">
                  <Target className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    NEET Preparation Orientation
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    An orientation programme for BDS students covering
                    preparation strategies and execution for the NEET MDS
                    entrance examination.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
                      Duration: 3 Hours
                    </span>

                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
                      Final Year BDS & CRI Students
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* NEET TOPICS */}
            <div className="space-y-4">

              {neetTopics.map((topic) => (
                <div
                  key={topic.number}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg md:p-6"
                >

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                      {topic.number}
                    </div>

                    <div className="flex-1">

                      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">

                        <h4 className="text-lg font-bold text-slate-900">
                          {topic.title}
                        </h4>

                        <span className="w-fit shrink-0 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                          {topic.duration}
                        </span>

                      </div>

                      <div className="mt-4 space-y-2">

                        {topic.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />

                            <p className="text-sm leading-6 text-slate-600">
                              {point}
                            </p>
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

      </div>

    </div>

  </div>
</section>
      {/* NEET MDS */}
      <section className="py-20">
        <div className="container-custom">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="sticky top-28">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                    <Target className="h-4 w-4" />
                    Competitive Examinations Training
                  </div>

                  <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
                    NEET Preparation Orientation
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    An orientation program for BDS students covering
                    preparation strategies and execution for the NEET MDS
                    entrance examination.
                  </p>

                  <div className="mt-8 rounded-2xl bg-[#0b2345] p-6 text-white">
                    <p className="text-sm text-white/60">
                      PROGRAM DURATION
                    </p>
                    <p className="mt-1 text-2xl font-black">3 Hours</p>

                    <div className="mt-5 h-px bg-white/10" />

                    <p className="mt-5 text-sm text-white/60">
                      STAKEHOLDERS
                    </p>
                    <p className="mt-1 font-semibold">
                      Final Year BDS & CRI Students
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {neetTopics.map((topic) => (
                  <div
                    key={topic.number}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                        {topic.number}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                          <h3 className="text-lg font-bold text-slate-900">
                            {topic.title}
                          </h3>

                          <span className="shrink-0 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                            {topic.duration}
                          </span>
                        </div>

                        <div className="mt-5 space-y-3">
                          {topic.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                              <p className="text-sm leading-6 text-slate-600">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}