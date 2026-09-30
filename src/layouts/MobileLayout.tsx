// MobileLayout.tsx

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
} from "lucide-react";
import { IMAGES } from "../data/images";

interface MobileLayoutProps {
  navItems: any[];
}

export default function MobileLayout({
  navItems,
}: MobileLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMenu(null);
  };

  return (
    <div className="block md:hidden w-full bg-white">

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-sm">

        <div className="h-[68px] px-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                filter:
                  "drop-shadow(0 0 7px rgba(34,211,238,.45))",
              }}
            >
              <img
                src={IMAGES.logo}
                alt="Madha Dental College"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1
                className="text-[11px] font-bold text-blue-950 leading-tight"
                style={{
                  fontFamily: "'Cinzel', serif",
                }}
              >
                MADHA DENTAL
              </h1>

              <div className="h-[2px] w-12 bg-gradient-to-r from-blue-600 to-cyan-400 my-1" />

              <p className="text-[7px] font-bold tracking-[0.3em] text-blue-700">
                HOSPITAL
              </p>
            </div>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white flex items-center justify-center shadow-lg"
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

          <div className="absolute top-[76px] left-3 right-3 bottom-3 bg-white rounded-2xl shadow-2xl overflow-hidden">

            <div className="h-full overflow-y-auto p-4">

              {navItems.map((item) => (

                <div
                  key={item.name}
                  className="border-b border-gray-100"
                >

                  {item.submenu ? (

                    <>
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className="w-full flex items-center justify-between py-4 text-left"
                      >
                        <span className="text-[15px] font-semibold text-gray-800">
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
                                  <summary className="flex items-center justify-between py-3 text-[14px] text-gray-700 cursor-pointer list-none">
                                    {sub.name}
                                    <ChevronRight className="w-4 h-4 text-blue-500" />
                                  </summary>

                                  <div className="ml-3 border-l border-blue-100 pl-3">

                                    {sub.submenu.map(
                                      (child: any) =>
                                        child.target ? (
                                          <a
                                            key={child.name}
                                            href={child.href}
                                            target={child.target}
                                            rel="noopener noreferrer"
                                            onClick={closeMenu}
                                            className="block py-2.5 text-[13px] text-gray-600"
                                          >
                                            {child.name}
                                          </a>
                                        ) : (
                                          <Link
                                            key={child.name}
                                            to={child.href}
                                            onClick={closeMenu}
                                            className="block py-2.5 text-[13px] text-gray-600"
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
                                  className="block py-3 text-[14px] text-gray-700"
                                >
                                  {sub.name}
                                </a>

                              ) : (

                                <Link
                                  to={sub.href}
                                  onClick={closeMenu}
                                  className="block py-3 text-[14px] text-gray-700"
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
                      className="block py-4 text-[15px] font-semibold text-gray-800"
                    >
                      {item.name}
                    </Link>

                  )}

                </div>
              ))}

              <Link
                to="/admissions/process"
                onClick={closeMenu}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 text-white font-semibold shadow-lg"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Contact */}
              <div className="mt-6 rounded-xl bg-blue-50 p-4">

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
          MOBILE HOME CONTENT
          WE WILL BUILD THIS SECTION BY SECTION
      ===================================================== */}

      <main className="pt-[68px]">

        {/* MOBILE HERO */}
        <section className="relative min-h-[680px] overflow-hidden">

          <img
            src={IMAGES.heroBanner}
            alt="Madha Dental College Campus"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-950/55 to-blue-950/90" />

          <div className="relative z-10 min-h-[680px] flex flex-col justify-end px-5 pb-12">

            <div className="mb-4 inline-flex self-start items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5">
              <span className="text-[10px] text-white">
                DCI Recognized • TN Dr.M.G.R University
              </span>
            </div>

            <h1 className="text-[36px] leading-[1.08] font-bold text-white">
              Shaping the Future of
              <span className="block text-cyan-300">
                Dental Excellence
              </span>
            </h1>

            <p className="mt-5 text-[14px] leading-6 text-white/85">
              Delivering world-class dental education,
              advanced clinical training, innovative
              research, and compassionate healthcare
              since 2006.
            </p>

            <div className="mt-6 flex gap-3">

              <Link
                to="/admissions/process"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-blue-900 shadow-lg"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#about"
                className="flex-1 flex items-center justify-center rounded-xl border border-white/40 bg-white/10 backdrop-blur-md py-3.5 text-sm font-semibold text-white"
              >
                Explore
              </a>

            </div>

          </div>
        </section>

        {/* MOBILE STATS */}
        <section className="relative -mt-6 z-20 px-4">

          <div className="grid grid-cols-2 gap-3">

            {[
              ["19+", "Years Excellence"],
              ["100+", "BDS Intake"],
              ["9+", "MDS Specializations"],
              ["300+", "Dental Chairs"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="rounded-2xl bg-white p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,.10)] border border-blue-50"
              >
                <div className="text-2xl font-bold text-blue-700">
                  {value}
                </div>

                <div className="mt-1 text-[11px] text-gray-500">
                  {label}
                </div>
              </div>

            ))}

          </div>

        </section>

        {/* MOBILE CONTENT PLACEHOLDER */}
        <section
          id="about"
          className="px-5 py-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            About MDCH
          </p>

          <h2 className="mt-3 text-[30px] leading-tight font-bold text-gray-900">
            A Legacy of Dental Excellence
          </h2>

          <div className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

          <p className="mt-5 text-[14px] leading-7 text-gray-600">
            Madha Dental College & Hospital is a premier
            dental institution affiliated to The Tamil Nadu
            Dr.M.G.R. Medical University and recognized by
            the Dental Council of India.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl">
            <img
              src={IMAGES.homeAbout}
              alt="MDCH Campus"
              className="w-full h-[260px] object-cover"
            />
          </div>
        </section>

      </main>
    </div>
  );
}