import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";
import { IMAGES } from "../data/images";

export default function MobileLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);


  const mobileNavItems = [
  { name: "Home", href: "/" },

  {
    name: "About",
    submenu: [
      { name: "About MDCH", href: "/about/mdch" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "Management Team", href: "/about/management" },
      { name: "Principal's Desk", href: "/about/principal-desk" },
    ],
  },

  {
    name: "Admissions",
    submenu: [
      { name: "BDS", href: "/admissions/bds" },
      { name: "MDS", href: "/admissions/mds" },
      { name: "Admission Process", href: "/admissions/process" },
      { name: "Eligibility Criteria", href: "/admissions/eligibility" },
      { name: "Prospectus", href: "/admissions/prospectus" },
    ],
  },

  {
    name: "Academics",
    submenu: [
      { name: "Academic Calendar", href: "/academics/calendar" },
      { name: "Academic Regulations", href: "/academics/regulations" },
      { name: "Circulars & Notices", href: "/academics/notices" },
      { name: "Curriculum & Syllabus", href: "/academics/curriculum" },
    ],
  },

  {
    name: "Departments",
    submenu: [
      { name: "Conservative Dentistry", href: "/departments/conservative-dentistry" },
      { name: "Prosthodontics", href: "/departments/prosthodontics" },
      { name: "Orthodontics", href: "/departments/orthodontics" },
      { name: "Periodontology", href: "/departments/periodontology" },
      { name: "Oral Surgery", href: "/departments/oral-surgery" },
      { name: "Oral Medicine", href: "/departments/oral-medicine" },
      { name: "Pediatric Dentistry", href: "/departments/pediatric-dentistry" },
      { name: "View All Departments", href: "/departments" },
    ],
  },

  { name: "Hospital", href: "/hospital/services" },
  { name: "Gallery", href: "/gallery" },

  {
    name: "Research",
    submenu: [
      { name: "Research Home", href: "/research/home" },
      { name: "Publications", href: "/research/publications" },
    ],
  },

  { name: "Contact Us", href: "#contact" },
];  
  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMenu(null);
  };

  return (
    <div className="md:hidden w-full min-h-screen bg-white overflow-x-hidden">

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-md">

        <div className="h-[64px] px-3 flex items-center justify-between">

          {/* LOGO + COLLEGE NAME */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center min-w-0"
          >

            <div className="w-[48px] h-[48px] shrink-0">
              <img
                src={IMAGES.logo}
                alt="Madha Dental College"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="ml-2 min-w-0">

              <h1
                className="text-[12px] leading-[1.05] font-extrabold text-blue-950 whitespace-nowrap"
                style={{
                  fontFamily: "'Cinzel', serif",
                }}
              >
                MADHA DENTAL COLLEGE
              </h1>

              <div className="flex items-center gap-1.5 mt-[3px]">

                <div className="h-[2px] w-7 bg-gradient-to-r from-blue-600 to-cyan-400" />

                <span className="text-[7px] font-bold tracking-[0.16em] text-blue-700">
                  & HOSPITAL
                </span>

              </div>

            </div>

          </Link>

          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white flex items-center justify-center shadow-md"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

        </div>
      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {menuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm">

          <div className="absolute top-[70px] left-3 right-3 bottom-3 bg-white rounded-2xl shadow-2xl overflow-hidden">

            <div className="h-full overflow-y-auto p-4">
{mobileNavItems.map((item) => (

                <div
                  key={item.name}
                  className="border-b border-gray-100"
                >

                  {item.submenu ? (

                    <>
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className="w-full flex items-center justify-between py-3.5 text-left"
                      >

                        <span className="text-[14px] font-semibold text-gray-800">
                          {item.name}
                        </span>

                        <ChevronDown
                          className={`w-4 h-4 text-blue-600 transition-transform ${
                            openMenu === item.name
                              ? "rotate-180"
                              : ""
                          }`}
                        />

                      </button>

                      {openMenu === item.name && (

                        <div className="pb-2 pl-3">

                          {item.submenu.map((sub: any) => (

                            <div key={sub.name}>

                              {sub.submenu ? (

                                <details className="py-1">

                                  <summary className="flex items-center justify-between py-2.5 text-[13px] text-gray-700 cursor-pointer list-none">

                                    {sub.name}

                                    <ChevronRight className="w-4 h-4 text-blue-500" />

                                  </summary>

                                  <div className="ml-3 border-l border-blue-100 pl-3">

                                    {sub.submenu.map((child: any) =>
                                      child.target ? (
                                        <a
                                          key={child.name}
                                          href={child.href}
                                          target={child.target}
                                          rel="noopener noreferrer"
                                          onClick={closeMenu}
                                          className="block py-2 text-[12px] text-gray-600"
                                        >
                                          {child.name}
                                        </a>
                                      ) : (
                                        <Link
                                          key={child.name}
                                          to={child.href}
                                          onClick={closeMenu}
                                          className="block py-2 text-[12px] text-gray-600"
                                        >
                                          {child.name}
                                        </Link>
                                      )
                                    )}

                                  </div>

                                </details>

                              ) : sub.target ? (

                                <a
                                  href={sub.href}
                                  target={sub.target}
                                  rel="noopener noreferrer"
                                  onClick={closeMenu}
                                  className="block py-2.5 text-[13px] text-gray-700"
                                >
                                  {sub.name}
                                </a>

                              ) : (

                                <Link
                                  to={sub.href}
                                  onClick={closeMenu}
                                  className="block py-2.5 text-[13px] text-gray-700"
                                >
                                  {sub.name}
                                </Link>

                              )}

                            </div>

                          ))}

                        </div>

                      )}

                    </>

                  ) : (

                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className="block py-3.5 text-[14px] font-semibold text-gray-800"
                    >
                      {item.name}
                    </Link>

                  )}

                </div>

              ))}

              <Link
                to="/admissions/process"
                onClick={closeMenu}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white text-sm font-semibold shadow-lg"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-5 rounded-xl bg-blue-50 p-4">

                <a
                  href="tel:+917273901234"
                  className="flex items-center gap-3 text-sm text-blue-900"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  +91 72739 01234
                </a>

                <a
                  href="mailto:info@mdch.in"
                  className="mt-3 flex items-center gap-3 text-sm text-blue-900"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  info@mdch.in
                </a>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          MOBILE HOME
      ===================================================== */}

      <main className="pt-[64px]">


        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative min-h-[620px] overflow-hidden">

          <img
            src={IMAGES.heroBanner}
            alt="Madha Dental College"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/75 via-blue-950/50 to-blue-950/90" />


          <div className="relative z-10 min-h-[620px] flex flex-col justify-end px-4 pb-8">


            {/* INSTITUTION RIBBON */}
            <div className="mb-4 self-start">

              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1.5">

                <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />

                <span className="text-[9px] font-semibold text-white whitespace-nowrap">
                  DCI RECOGNIZED
                </span>

                <span className="text-white/50">
                  |
                </span>

                <span className="text-[9px] font-semibold text-white whitespace-nowrap">
                  TN DR.M.G.R. UNIVERSITY AFFILIATED
                </span>

              </div>

            </div>


            {/* COLLEGE NAME */}
            <div className="mb-3">

              <p
                className="text-[12px] font-semibold tracking-[0.12em] text-white/90 uppercase"
              >
                MADHA DENTAL COLLEGE & HOSPITAL
              </p>

            </div>


            {/* MAIN TITLE */}
            <h2 className="text-[29px] leading-[1.08] font-extrabold tracking-tight text-white">

              Shaping the Future of

              <span className="block text-cyan-300 mt-1">
                Dental Excellence
              </span>

            </h2>


            {/* DESCRIPTION */}
            <p className="mt-4 text-[13px] leading-[1.6] text-white/85 max-w-[390px]">

              Delivering world-class dental education,
              advanced clinical training, innovative research,
              and compassionate healthcare since 2006.

            </p>


            {/* BUTTONS */}
            <div className="mt-5 flex gap-2.5">

              <Link
                to="/admissions/process"
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-white py-3 text-[12px] font-bold text-blue-900 shadow-lg"
              >
                Apply Now
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="#about"
                className="flex-1 flex items-center justify-center rounded-xl border border-white/40 bg-white/10 backdrop-blur-md py-3 text-[12px] font-semibold text-white"
              >
                Explore
              </a>

            </div>


            {/* SLIDER DOTS */}
            <div className="flex justify-center gap-1.5 mt-6">

              <span className="w-6 h-1.5 rounded-full bg-white" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />

            </div>

          </div>

        </section>


        {/* =================================================
            STATS
        ================================================= */}

        <section className="px-3 py-5 bg-white">

          <div className="grid grid-cols-2 gap-2.5">

            {[
              ["19+", "Years of Excellence"],
              ["100+", "BDS Intake"],
              ["9+", "MDS Specializations"],
              ["1,50,000+", "Patients Annually"],
              ["100+", "Expert Faculty"],
              ["300+", "Dental Chairs"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="rounded-xl border border-blue-100 bg-white px-2 py-3.5 text-center shadow-sm"
              >

                <div className="text-[20px] leading-none font-extrabold text-blue-700">
                  {value}
                </div>

                <div className="mt-1.5 text-[9px] leading-tight text-gray-500">
                  {label}
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="px-4 py-12 bg-gradient-to-b from-white to-slate-50"
        >

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
            About MDCH
          </p>

          <h2 className="mt-2 text-[27px] leading-tight font-bold text-gray-900">
            A Legacy of Dental Excellence
          </h2>

          <div className="mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

          <p className="mt-4 text-[13px] leading-6 text-gray-600">
            Madha Dental College & Hospital is a premier dental institution
            affiliated to The Tamil Nadu Dr.M.G.R. Medical University and
            recognized by the Dental Council of India.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl shadow-md">
            <img
              src={IMAGES.homeAbout}
              alt="Madha Dental College"
              className="w-full h-[220px] object-cover"
            />
          </div>

        </section>


      </main>

    </div>
  );
}