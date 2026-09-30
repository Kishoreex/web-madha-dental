import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { IMAGES } from "../data/images";

interface MobileLayoutProps {
  navItems: any[];
}

export default function MobileLayout({ navItems }: MobileLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
    setOpenSubMenu(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  return (
    <div className="xl:hidden">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-[9998] bg-white/95 backdrop-blur-xl shadow-md">
        <div className="flex items-center justify-between px-4 py-2.5">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 min-w-0"
          >
            <img
              src={IMAGES.logo}
              alt="MDCH Logo"
              className="w-12 h-12 object-contain rounded-full shrink-0"
              style={{
                filter: `
                  drop-shadow(0 0 5px rgba(37,99,235,.35))
                  drop-shadow(0 0 12px rgba(34,211,238,.25))
                `,
              }}
            />

            <div className="min-w-0">
              <h1
                className="text-[13px] leading-tight font-bold tracking-[0.04em] text-blue-950 truncate"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                MADHA DENTAL COLLEGE
              </h1>

              <div className="h-[2px] w-16 my-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />

              <p className="text-[8px] font-bold tracking-[0.35em] text-blue-700">
                HOSPITAL
              </p>
            </div>
          </Link>

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shrink-0"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[9997] bg-black/30 backdrop-blur-sm">
          <div className="absolute top-[68px] left-3 right-3 max-h-[calc(100vh-80px)] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-gray-100">

            <div className="p-3">

              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0">

                  {/* Item with submenu */}
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMenu(item.name)}
                        className="w-full flex items-center justify-between px-3 py-3.5 text-left"
                      >
                        <span className="text-[15px] font-semibold text-gray-800">
                          {item.name}
                        </span>

                        <ChevronDown
                          className={`w-4 h-4 text-blue-600 transition-transform ${
                            openMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openMenu === item.name && (
                        <div className="pb-2 pl-2">

                          {item.submenu.map((sub: any) => (
                            <div key={sub.name}>

                              {sub.submenu ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenSubMenu(
                                        openSubMenu === sub.name
                                          ? null
                                          : sub.name
                                      )
                                    }
                                    className="w-full flex items-center justify-between px-3 py-3 text-left rounded-lg"
                                  >
                                    <span className="text-[14px] text-gray-700">
                                      {sub.name}
                                    </span>

                                    <ChevronRight
                                      className={`w-4 h-4 text-blue-500 transition-transform ${
                                        openSubMenu === sub.name
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                  {openSubMenu === sub.name && (
                                    <div className="ml-3 mb-2 border-l-2 border-blue-100 pl-2">
                                      {sub.submenu.map((child: any) =>
                                        child.target ? (
                                          <a
                                            key={child.name}
                                            href={child.href}
                                            target={child.target}
                                            rel="noopener noreferrer"
                                            onClick={closeMenu}
                                            className="block px-3 py-2.5 text-[13px] text-gray-600"
                                          >
                                            {child.name}
                                          </a>
                                        ) : (
                                          <Link
                                            key={child.name}
                                            to={child.href}
                                            onClick={closeMenu}
                                            className="block px-3 py-2.5 text-[13px] text-gray-600"
                                          >
                                            {child.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                                </>
                              ) : sub.target ? (
                                <a
                                  href={sub.href}
                                  target={sub.target}
                                  rel="noopener noreferrer"
                                  onClick={closeMenu}
                                  className="block px-3 py-3 text-[14px] text-gray-700"
                                >
                                  {sub.name}
                                </a>
                              ) : (
                                <Link
                                  to={sub.href}
                                  onClick={closeMenu}
                                  className="block px-3 py-3 text-[14px] text-gray-700"
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
                      className="block px-3 py-3.5 text-[15px] font-semibold text-gray-800"
                    >
                      {item.name}
                    </Link>
                  )}

                </div>
              ))}

              {/* Apply Now */}
              <Link
                to="/admissions/process"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3.5 text-white font-semibold shadow-lg"
              >
                Apply Now
              </Link>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}