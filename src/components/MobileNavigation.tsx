import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  Phone,
  GraduationCap,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { IMAGES } from "../data/images";

interface MobileNavigationProps {
  items: any[];
}

export default function MobileNavigation({
  items,
}: MobileNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] =
    useState<string | null>(null);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <>
      {/* ================= MOBILE HEADER ================= */}
      <div className="xl:hidden flex items-center justify-between w-full">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 min-w-0"
        >
          <img
            src={IMAGES.logo}
            alt="Madha Dental College"
            className="w-11 h-11 object-contain shrink-0"
          />

          <div className="flex flex-col min-w-0">
            <span
              className="text-[12px] font-bold leading-none text-[#163B72] whitespace-nowrap"
              style={{
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.04em",
              }}
            >
              MADHA DENTAL
            </span>

            <span className="text-[8px] font-black tracking-[0.25em] text-gray-500 mt-1 whitespace-nowrap">
              COLLEGE & HOSPITAL
            </span>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-2 shrink-0">

          {/* Apply */}
          <Link
            to="/admissions/process"
            onClick={closeMenu}
            className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-bold"
          >
            Apply
          </Link>

          {/* Menu */}
          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((prev) => !prev)
            }
            className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#163B72]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[68px] bottom-0 z-[9998] bg-white">

          <div className="h-full overflow-y-auto px-4 py-5 pb-10">

            {/* Menu Header */}
            <div className="flex items-center justify-between mb-5">

              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Explore MDCH
                </p>

                <h2 className="text-xl font-bold text-[#163B72]">
                  Menu
                </h2>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

            </div>

            {/* Home */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center justify-between px-4 py-4 mb-2 rounded-xl bg-blue-50 text-[#163B72] font-semibold"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            {/* Menu Items */}
            <div className="space-y-2">

              {items
                .filter((item) => item.name !== "Home")
                .map((item) => {

                  const isOpen =
                    activeDropdown === item.name;

                  return (
                    <div
                      key={item.name}
                      className="border border-gray-100 rounded-xl overflow-hidden"
                    >

                      {/* Main Item */}
                      {item.submenu ? (
                        <button
                          type="button"
                          onClick={() => {
                            setActiveDropdown(
                              isOpen ? null : item.name
                            );

                            setActiveSubDropdown(null);
                          }}
                          className="w-full flex items-center justify-between px-4 py-4 text-left"
                        >
                          <span className="text-[14px] font-semibold text-gray-800">
                            {item.name}
                          </span>

                          <ChevronDown
                            className={`w-4 h-4 text-gray-500 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={closeMenu}
                          className="w-full flex items-center justify-between px-4 py-4 text-left"
                        >
                          <span className="text-[14px] font-semibold text-gray-800">
                            {item.name}
                          </span>

                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        </Link>
                      )}

                      {/* First Level */}
                      {isOpen && item.submenu && (
                        <div className="bg-gray-50 border-t border-gray-100 px-3 py-2">

                          {item.submenu.map((sub: any) => {

                            const hasChildren =
                              !!sub.submenu;

                            const subOpen =
                              activeSubDropdown ===
                              `${item.name}-${sub.name}`;

                            return (
                              <div key={sub.name}>

                                {hasChildren ? (

                                  <button
                                    type="button"
                                    onClick={() =>
                                      setActiveSubDropdown(
                                        subOpen
                                          ? null
                                          : `${item.name}-${sub.name}`
                                      )
                                    }
                                    className="w-full flex items-center justify-between px-3 py-3 text-left"
                                  >
                                    <span className="text-[13px] font-medium text-gray-700">
                                      {sub.name}
                                    </span>

                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform ${
                                        subOpen
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                ) : sub.target ? (

                                  <a
                                    href={sub.href}
                                    target={sub.target}
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                    className="block px-3 py-3 text-[13px] text-gray-700"
                                  >
                                    {sub.name}
                                  </a>

                                ) : (

                                  <Link
                                    to={sub.href}
                                    onClick={closeMenu}
                                    className="block px-3 py-3 text-[13px] text-gray-700"
                                  >
                                    {sub.name}
                                  </Link>

                                )}

                                {/* Third Level */}
                                {hasChildren &&
                                  subOpen && (
                                    <div className="ml-3 mb-2 border-l-2 border-blue-100">

                                      {sub.submenu.map(
                                        (child: any) => (
                                          child.target ? (

                                            <a
                                              key={child.name}
                                              href={child.href}
                                              target={child.target}
                                              rel="noopener noreferrer"
                                              onClick={closeMenu}
                                              className="block px-4 py-2 text-[12px] text-gray-600"
                                            >
                                              {child.name}
                                            </a>

                                          ) : (

                                            <Link
                                              key={child.name}
                                              to={child.href}
                                              onClick={closeMenu}
                                              className="block px-4 py-2 text-[12px] text-gray-600"
                                            >
                                              {child.name}
                                            </Link>

                                          )
                                        )
                                      )}

                                    </div>
                                  )}

                              </div>
                            );
                          })}

                        </div>
                      )}

                    </div>
                  );
                })}

            </div>

            {/* Apply Now */}
            <Link
              to="/admissions/process"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold"
            >
              <GraduationCap className="w-5 h-5" />
              Apply Now
            </Link>

            {/* Contact */}
            <div className="mt-5 p-4 rounded-xl bg-[#163B72] text-white">

              <p className="text-xs text-white/60 mb-2">
                CONTACT
              </p>

              <a
                href="tel:+917273901234"
                className="flex items-center gap-2 text-sm mb-2"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                +91 72739 01234
              </a>

              <a
                href="tel:+917274901234"
                className="flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                +91 72749 01234
              </a>

            </div>

          </div>
        </div>
      )}
    </>
  );
}