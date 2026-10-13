import {
  Briefcase,
  Building2,
  GraduationCap,
  Users,
  ArrowUpRight,
} from "lucide-react";
import "aos/dist/aos.css";

const jobs = [
  {
    sno: 1,
    posting: "Junior Assistant",
    category: "Administration",
    role: "Admin",
    qualification: "B.Com, B.Sc, BCA, BBA, B.E, B.Tech",
    experience: "Fresher / Junior Assistant / Senior Assistant",
  },
  {
    sno: 2,
    posting: "Girls Hostel Warden",
    category: "Non-Teaching",
    role: "Hostel",
    qualification: "B.Com, B.Sc, BBA",
    experience: "–",
  },
  {
    sno: 3,
    posting: "Assistant Manager",
    category: "Maintenance",
    role: "Maintenance",
    qualification: "B.Com, B.Sc, BCA, BBA",
    experience: "–",
  },
  {
    sno: 4,
    posting: "Biostatistician",
    category: "Research",
    role: "Research",
    qualification: "B.Sc, PG – M.Sc",
    experience: "–",
  },
  {
    sno: 5,
    posting: "Histopathology Lab Technician",
    category: "Research",
    role: "Lab Work",
    qualification: "DMLT",
    experience: "–",
  },
];

const categories = [...new Set(jobs.map((job) => job.category))];

export default function CareersAtMDCH() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50/50 pb-14">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-medical-navy via-medical-blue to-blue-700 pt-36 pb-12 sm:pt-40 sm:pb-14">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div
          className="container-custom relative z-10 px-4 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          

          <h1 className="font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Careers at MDCH
          </h1>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-300 to-white" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            Discover career opportunities at Madha Dental College &amp;
            Hospital. Bring your skills, grow professionally and contribute
            to an institution committed to education and healthcare.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-50"
            >
              Explore Openings
              <ArrowUpRight size={17} />
            </a>

            <span className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur-md">
              <Building2 size={17} className="text-cyan-200" />
              Join Our Team
            </span>
          </div>
        </div>
      </section>



      {/* ================= INTRODUCTION ================= */}
      <section className="container-custom px-4 pt-12 sm:pt-14">
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.06)] sm:p-8"
          data-aos="fade-up"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Build Your Future
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-slate-900 sm:text-4xl">
            Explore Career Opportunities
          </h2>

          <div className="mt-3 h-0.5 w-14 bg-blue-700" />

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore the positions listed below to review the available
            categories, roles, qualifications and experience requirements.
            Find an opportunity that matches your educational background
            and professional skills.
          </p>
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}
      <section
        id="openings"
        className="container-custom scroll-mt-28 px-4 pt-12 sm:pt-14"
      >
        <div
          className="mb-8"
          data-aos="fade-up"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Opportunities
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-slate-900 sm:text-4xl">
            Current Job Openings
          </h2>

          <div className="mt-4 h-0.5 w-14 bg-blue-700" />

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            Position details and qualification requirements.
          </p>
        </div>

        {/* Desktop table */}
        <div
          className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.07)] transition duration-300 hover:shadow-lg md:block"
          data-aos="fade-up"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] table-fixed border-collapse text-left">
              <thead>
                <tr className="bg-[#10365d] text-white">
                  <th className="w-[7%] px-4 py-5 text-xs font-bold uppercase tracking-wider">
                    S No
                  </th>

                  <th className="w-[19%] px-4 py-5 text-xs font-bold uppercase tracking-wider">
                    Posting
                  </th>

                  <th className="w-[16%] px-4 py-5 text-xs font-bold uppercase tracking-wider">
                    Category
                  </th>

                  <th className="w-[13%] px-4 py-5 text-xs font-bold uppercase tracking-wider">
                    Role
                  </th>

                  <th className="w-[23%] px-4 py-5 text-xs font-bold uppercase tracking-wider">
                    Qualification
                  </th>

                  <th className="w-[22%] px-4 py-5 text-xs font-bold uppercase tracking-wider">
                    Experience
                  </th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job, index) => (
                  <tr
                    key={job.sno}
                    className={`border-b border-slate-100 align-top transition-colors duration-200 last:border-0 hover:bg-blue-50/80 ${
                      index % 2 === 0
                        ? "bg-slate-50/70"
                        : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-900">
                        {String(job.sno).padStart(2, "0")}
                      </span>
                    </td>

                    <td className="break-words px-4 py-5 text-sm font-bold leading-6 text-slate-900">
                      {job.posting}
                    </td>

                    <td className="break-words px-4 py-5">
                      <span className="inline-block rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold leading-5 text-blue-800">
                        {job.category}
                      </span>
                    </td>

                    <td className="break-words px-4 py-5 text-sm leading-6 text-slate-600">
                      {job.role}
                    </td>

                    <td className="break-words px-4 py-5 text-sm leading-7 text-slate-600">
                      {job.qualification}
                    </td>

                    <td className="break-words px-4 py-5 text-sm leading-7 text-slate-600">
                      {job.experience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile job cards */}
        <div className="grid grid-cols-1 gap-5 md:hidden">
          {jobs.map((job, index) => (
            <article
              key={job.sno}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 60, 240)}
            >
              <div className="h-1 bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400" />

              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                    {String(job.sno).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold leading-6 text-blue-950">
                      {job.posting}
                    </h3>

                    <span className="mt-2 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                      {job.category}
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-4 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Role
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {job.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Qualification
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {job.qualification}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Experience
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {job.experience}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Important note */}
        <div
          className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-5"
          data-aos="fade-up"
        >
          <p className="text-sm leading-7 text-slate-600">
            <span className="font-bold text-blue-900">
              Important Note:
            </span>{" "}
            The vacancy details above are based on the supplied information.
            Please contact the college to confirm current vacancies,
            application procedures and eligibility before applying.
          </p>
        </div>
      </section>

    </main>
  );
}
