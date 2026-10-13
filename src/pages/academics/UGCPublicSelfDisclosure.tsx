
import {
  BookOpen,
  GraduationCap,
  Building2,
  Microscope,
  Users,
  ShieldCheck,
  Newspaper,
  Image,
  Phone,
  FileText,
  ChevronRight,
  Landmark,
  ClipboardList,
} from "lucide-react";

import { Link } from "react-router-dom";

type DisclosureItem = {
  name: string;
  href?: string;
};

type DisclosureSection = {
  title: string;
  subtitle?: string;
  icon: typeof FileText;
  items: DisclosureItem[];
};

const sections: DisclosureSection[] = [
  {
    title: "About HEI",
    icon: Landmark,
    items: [
      { name: "About Us: Overview", href: "/about/mdch" },
      { name: "Act and Statutes or MoA" },
      { name: "Institutional Development Plan" },
      { name: "Constituent Units / Affiliated Colleges / Affiliating University" },
      { name: "Accreditation / Ranking Status (NAAC, NBA, NIRF)" },
      { name: "Recognition / Approval (2(f), 12B, etc.)" },
      { name: "Annual Reports" },
      { name: "Annual Accounts including Balance Sheet, Income & Expenditure Account, Receipts & Payments Account, Audit Report" },
      { name: "Sponsoring Body Details (if any)" },
    ],
  },
  {
    title: "Administration",
    subtitle: "Profiles with photographs and contact details",
    icon: Building2,
    items: [
      { name: "Chancellor" },
      { name: "Pro Chancellor" },
      { name: "Vice-Chancellor" },
      { name: "Pro-Vice-Chancellor" },
      { name: "Registrar" },
      { name: "Principal", href: "/about/principal-desk" },
      { name: "Finance Officer" },
      { name: "Controller of Examination" },
      { name: "Chief Vigilance Officer" },
      { name: "Ombudsperson" },
      { name: "Executive Council / Board of Governors / Board of Management / Academic Council / Board of Studies / Finance Committee – Composition & Members" },
      { name: "Internal Complaint Committee" },
      { name: "Academic Leadership (Dean / HoD of Schools / Departments / Centres)" },
    ],
  },
  {
    title: "Academics",
    icon: GraduationCap,
    items: [
      { name: "Details of Academic Programs" },
      { name: "BDS | Madha Dental College & Hospital", href: "/admissions/bds" },
      { name: "MDS | Madha Dental College & Hospital", href: "/admissions/mds" },
      { name: "Academic Calendar", href: "/academics/calendar" },
      { name: "Statutes / Ordinances pertaining to Academics / Examinations" },
      { name: "List of UGC-recognized ODL / Online Programs (if any)" },
      { name: "Internal Quality Assurance Cell (IQAC)" },
      { name: "Library", href: "/library" },
      { name: "Academic Collaborations" },
      { name: "Schools" },
      { name: "Centers" },
      { name: "Department / School / Centre-wise Faculty & Staff Details with Photographs" },
      { name: "Department of Conservative Dentistry and Endodontics", href: "/departments/conservative-dentistry" },
      { name: "Department of Prosthodontics", href: "/departments/prosthodontics" },
      { name: "Department of Oral Medicine and Radiology", href: "/departments/oral-medicine" },
      { name: "Department of Oral and Maxillofacial Surgery", href: "/departments/oral-surgery" },
      { name: "Oral and Maxillofacial Pathology and Oral Microbiology", href: "/departments/oral-pathology" },
      { name: "Department of Orthodontics and Dentofacial Orthopedics", href: "/departments/orthodontics" },
      { name: "Department of Periodontology and Oral Implantology", href: "/departments/periodontology" },
      { name: "Department of Pediatric and Preventive Dentistry", href: "/departments/pediatric-dentistry" },
      { name: "Department of Public Health Dentistry", href: "/departments/public-health-dentistry" },
      { name: "Department of Basic Medical Sciences", href: "/departments/basic-medical-sciences" },
    ],
  },
  {
    title: "Admissions & Fee",
    icon: ClipboardList,
    items: [
      { name: "Prospectus (including Fee Structure for Various Programs)", href: "/admissions/prospectus" },
      { name: "Admission Process and Guidelines", href: "/admissions/process" },
      { name: "Fee Refund Policy", href: "/admissions/fee-refund-policy" },
    ],
  },
  {
    title: "Research",
    icon: Microscope,
    items: [
      { name: "Research and Development Cell (including Research & Consultancy Projects, Foreign Collaborations and Industry Collaborations)" },
      { name: "Incubation Centre / Start-ups / Entrepreneurship Cell" },
      { name: "Central Facilities" },
    ],
  },
  {
    title: "Student Life",
    icon: Users,
    items: [
      { name: "Sports Facilities" },
      { name: "NCC / NSS – Details", href: "/nss" },
      { name: "Hostel Details" },
      { name: "Placement Cell and its Activities" },
      { name: "Student Grievance Redressal Committee (SGRC) & Ombudsperson", href: "/student-support/grievance-redressal-form" },
      { name: "Health Facilities" },
      { name: "Internal Complaint Committee" },
      { name: "Anti-Ragging Cell" },
      { name: "Equal Opportunity Cell" },
      { name: "Socio-Economically Disadvantaged Groups (SEDG) Cell" },
      { name: "Facilities for Differently-Abled (Barrier-Free Environment)" },
    ],
  },
  {
    title: "Alumni",
    icon: GraduationCap,
    items: [
      { name: "Alumni Association with Details", href: "/alumni" },
    ],
  },
  {
    title: "Information Corner",
    icon: Newspaper,
    items: [
      { name: "RTI: Details of Central Public Information Officer (CPIO) & Appellate Authority", href: "/pdf/RTI_Information.pdf" },
      { name: "Circulars and Notices", href: "/academics/notices" },
      { name: "Announcements" },
      { name: "News, Recent Events & Achievements", href: "/#news" },
      { name: "Job Openings" },
      { name: "Reservation Roster", href: "/pdf/Reservation_Roster.pdf" },
      { name: "Study in India" },
      { name: "Admission Procedure and Facilities Provided to International Students" },
    ],
  },
  {
    title: "Picture Gallery",
    icon: Image,
    items: [
      { name: "Gallery | Madha Dental College & Hospital", href: "/gallery" },
    ],
  },
  {
    title: "Contact Us",
    icon: Phone,
    items: [
      { name: "Details with Phone Number, Official Email ID, Address & Location Map", href: "/#contact" },
      { name: "Telephone Directory" },
    ],
  },
];

export default function UGCPublicSelfDisclosure() {
  return (
    <main className="min-h-screen bg-slate-50 pb-12">
      {/* Premium Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-700 py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-blue-400 blur-3xl" />
        </div>

        <div
          className="container-custom mx-auto px-4 text-center text-white sm:px-6"
          data-aos="fade-up"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10 shadow-xl backdrop-blur-md sm:h-16 sm:w-16">
            <ShieldCheck className="h-7 w-7 text-cyan-200 sm:h-8 sm:w-8" />
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200 sm:text-sm">
            Transparency · Accountability · Excellence
          </p>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            UGC – Public Self-Disclosure
          </h1>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-300 to-white" />

          <p className="mx-auto max-w-2xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
            Institutional information, academic programmes, governance,
            student facilities and public information of Madha Dental College
            & Hospital.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="container-custom mx-auto flex items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 sm:text-sm">
          <Link to="/" className="transition hover:text-blue-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-blue-800">
            UGC Public Self-Disclosure
          </span>
        </div>
      </div>

      {/* Intro */}
      <section className="container-custom mx-auto px-4 pt-7 sm:px-6 sm:pt-10">
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 sm:flex">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
                Institutional Disclosure
              </h2>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Explore the institutional information and disclosure
                categories below. Available website pages can be opened
                directly. Documents and detailed information should be added
                to the relevant categories as they become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure Sections */}
      <section className="container-custom mx-auto px-4 pt-6 sm:px-6 sm:pt-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                data-aos="fade-up"
                data-aos-delay={Math.min((index % 2) * 100, 100)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-center gap-3 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4 sm:px-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-cyan-600 text-white shadow-md shadow-blue-900/15">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-lg font-bold text-blue-950 sm:text-xl">
                      {section.title}
                    </h2>

                    {section.subtitle && (
                      <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="grid gap-x-6 px-5 py-4 sm:grid-cols-2 sm:px-6 sm:py-5">
                  {section.items.map((item) => (
                    <li key={item.name} className="min-w-0">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.toLowerCase().endsWith(".pdf")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.href.toLowerCase().endsWith(".pdf")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group/link flex items-start gap-2 rounded-lg py-2 text-sm leading-6 text-slate-700 transition-colors hover:text-blue-700"
                        >
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-cyan-600 transition-transform group-hover/link:translate-x-1" />
                          <span className="font-medium">{item.name}</span>
                        </a>
                      ) : (
                        <div className="flex items-start gap-2 py-2 text-sm leading-6 text-slate-600">
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                          <span>{item.name}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-custom mx-auto px-4 pt-7 sm:px-6 sm:pt-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-700 p-6 text-white shadow-xl sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="relative z-10">
            <div className="mb-2 flex items-center gap-2 text-cyan-200">
              <FileText className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Public Information
              </span>
            </div>

            <h2 className="text-xl font-bold sm:text-2xl">
              Need institutional information?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100">
              Contact Madha Dental College & Hospital for enquiries about
              institutional information and available public documents.
            </p>
          </div>

          <a
            href="/#contact"
            className="relative z-10 mt-5 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-50 lg:mt-0"
          >
            Contact College
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
