
import { useEffect, useMemo, useState } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  Search,
  ArrowUpRight,
  Files,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const committees = [
  { name: "Academic and Curriculum Committee", pdf: "/pdf/committees/Academic_and_Curriculum_Committee.pdf" },
  { name: "Administration Committee", pdf: "/pdf/committees/Administration_Committee.pdf" },
  { name: "Admission Committee", pdf: "/pdf/committees/Admission_Committee.pdf" },
  { name: "Alumni Association", pdf: "/pdf/committees/Alumni_Association.pdf" },
  { name: "Anti Ragging", pdf: "/pdf/committees/Anti_Ragging.pdf" },
  { name: "Calendar Committee", pdf: "/pdf/committees/Calendar_Committee.pdf" },
  { name: "Central Education Unit", pdf: "/pdf/committees/Central_Education_Unit.pdf" },
  { name: "Disciplinary Committee", pdf: "/pdf/committees/Disciplinary_Committee.pdf" },
  { name: "Examination Committee", pdf: "/pdf/committees/Examination_Committee.pdf" },
  { name: "Examination and University Affairs Committee", pdf: "/pdf/committees/Examination_and_University_Affairs_Committee.pdf" },
  { name: "Feedback Committee", pdf: "/pdf/committees/Feedback_Committee.pdf" },
  { name: "Finance Committee", pdf: "/pdf/committees/Finance_Committee.pdf" },
  { name: "Grievance Redressal Committee (Students)", pdf: "/pdf/committees/Grievance_Redressal_Committee.pdf" },
  { name: "Hospital Infection Control Committee", pdf: "/pdf/committees/Hospital_Infection_Control_Committee.pdf" },
  { name: "Institutional Ethics Committee", pdf: "/pdf/committees/Institutional_Ethics_Committee.pdf" },
  { name: "Institutional Review Board", pdf: "/pdf/committees/Institutional_Review_Board.pdf" },
  { name: "Internal Complaints Committee", pdf: "/pdf/committees/Internal_Complaints_Committee.pdf" },
  { name: "Internal Quality Assurance Cell", pdf: "/pdf/committees/Internal_Quality_Assurance_Cell.pdf" },
  { name: "International Student Cell", pdf: "/pdf/committees/International_Student_Cell.pdf" },
  { name: "Library Committee", pdf: "/pdf/committees/Library_Committee.pdf" },
  { name: "Maintenance Committee", pdf: "/pdf/committees/Maintenance_Committee.pdf" },
  { name: "Placement and Career Guidance Committee", pdf: "/pdf/committees/Placement_and_Career_Guidance_Committee.pdf" },
  { name: "Research Committee", pdf: "/pdf/committees/Research_Committee.pdf" },
  { name: "SC/ST Cell", pdf: "/pdf/committees/SC_ST_Cell.pdf" },
  { name: "Student Council", pdf: "/pdf/committees/Student_Council.pdf" },
  { name: "Women Empowerment", pdf: "/pdf/committees/Women_Empowerment.pdf" },
];

export default function AcademicCommittee() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
      offset: 40,
    });
  }, []);

  const filteredCommittees = useMemo(
    () =>
      committees.filter((committee) =>
        committee.name.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [search]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8fc] text-slate-800">

      {/* Premium Hero */}
      <section className="relative isolate overflow-hidden bg-[#071b36]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071b36] via-[#103d70] to-[#075e9b]" />
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div
          className="container-custom relative mx-auto px-5 pb-14 pt-12 text-center sm:px-8 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16"
          data-aos="fade-up"
        >
      

          <h1 className="font-['Cormorant_Garamond'] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Committees
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-300 to-white" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base lg:text-lg">
            Explore the institutional committees, governance bodies and official
            documents of Madha Dental College & Hospital.
          </p>

        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      </section>

      {/* Main Content */}
      <section className="container-custom mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:py-16">

        {/* Section Introduction */}
        <div
          className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          data-aos="fade-up"
        >
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Resources & Documentation
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Committee Directory
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Find a committee and access its official PDF document.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
            <CheckCircle2 size={15} />
            Official Resources
          </div>
        </div>

        {/* Search */}
        <div
          className="mb-7 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-4"
          data-aos="fade-up"
        >
          <label htmlFor="committee-search" className="sr-only">
            Search committees
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition-all duration-200 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10">
            <Search className="h-5 w-5 shrink-0 text-slate-400" />
            <input
              id="committee-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search committees by name..."
              className="h-12 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 px-2 pt-3 text-xs text-slate-500 sm:text-sm">
            <span>
              Showing{" "}
              <strong className="text-slate-800">
                {filteredCommittees.length}
              </strong>{" "}
              of {committees.length} committees
            </span>
            <span className="hidden sm:inline">
              Select a document to view
            </span>
          </div>
        </div>

        {/* Committee Cards */}
        {filteredCommittees.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCommittees.map((committee, index) => (
              <article
                key={committee.name}
                data-aos="fade-up"
                data-aos-delay={Math.min((index % 6) * 60, 300)}
                className="group relative flex min-h-[150px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_3px_14px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_36px_rgba(15,48,91,0.10)] sm:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-700 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white">
                    <FileText size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Committee {String(committees.indexOf(committee) + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold leading-6 text-slate-800 transition-colors group-hover:text-blue-700 sm:text-base">
                      {committee.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 mt-5">
                  <span className="text-xs text-slate-400">
                    PDF Document
                  </span>

                  <a
                    href={committee.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open PDF for ${committee.name}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition-all duration-200 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  >
                    View PDF
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <Search className="mx-auto h-10 w-10 text-slate-300" />
            <h3 className="mt-4 text-lg font-semibold text-slate-800">
              No committees found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try a different committee name or clear your search.
            </p>
            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Show all committees
            </button>
          </div>
        )}

      </section>
    </main>
  );
}
