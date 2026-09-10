  import { useState, useEffect } from 'react';
  import ConservativeDentistry from "./pages/departments/ConservativeDentistry";
import { Routes, Route, Link, useLocation } from "react-router-dom";
  import { IMAGES } from "./data/images";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import CountUp from "react-countup";
  import { useInView } from "react-intersection-observer";
  import GlowCard from "./components/GlowCard";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import AddNews from "./admin/pages/AddNews";
import ManageNews from "./admin/pages/ManageNews";
  //Menu 
  import Departments from "./pages/departments/Departments";
  import OralMedicine from "./pages/departments/OralMedicine";
  import PediatricDentistry from "./pages/departments/PediatricDentistry";
import OralPathology from "./pages/departments/OralPathology";
import Periodontology from "./pages/departments/Periodontology";
import PublicHealthDentistry from "./pages/departments/PublicHealthDentistry";
import OralMaxillofacialSurgery from "./pages/departments/OralSurgery";

import BasicMedicalSciences from "./pages/departments/BasicMedicalSciences";
  import {
    Menu, X, Phone, Mail, MapPin, Clock, ChevronDown, ChevronRight,
    Award, Users, BookOpen, Stethoscope, GraduationCap, Building2, Microscope,
    Library, Bus, Utensils, Home, Trophy, ArrowRight, Play, Download,
    Heart, Target, Eye, Globe, Linkedin, Facebook, Twitter, Instagram,
    Youtube, Send, ExternalLink, CheckCircle, CircleDot, Sparkles, Activity,
    Pill, Syringe, Scan, Smile, Anchor, BadgeCheck,
    Gem,
    Leaf,
    Scissors
  } from 'lucide-react';
// Afllication 
import ISO from "./pages/affiliation/ISO";
  //About
  import AboutMDCH from "./pages/about/AboutMDCH";
  import VisionMission from "./pages/about/VisionMission";
  import Organogram from "./pages/about/Organogram";
  import Trust from "./pages/about/Trust";
  import Management from "./pages/about/ManagementTeam";
  import Principal from "./pages/about/PrincipalDesk";
//iiaq
import IQACVisionMission from "./pages/iqac/VisionMission";
  //Admission 
  import BDS from "./pages/admissions/BDS";
import MDS from "./pages/admissions/MDS";
import AdmissionProcess from "./pages/admissions/AdmissionProcess";

import EligibilityCriteria from "./pages/admissions/EligibilityCriteria";

//Acadamics
import AcademicCalendar from "./pages/academics/AcademicCalendar";
import AcademicRegulations from "./pages/academics/AcademicRegulations";
import CircularsNotices from "./pages/academics/CircularsNotices";
import AcademicCurriculum from "./pages/academics/AcademicCurriculum";
import AcademicCommittee from "./pages/academics/AcademicCommittee";
import ValueAddedCourses from "./pages/academics/ValueAddedCourses";
import AddOnPrograms from "./pages/academics/AddOnPrograms";
import ProgrammeOutcomes from "./pages/academics/ProgrammeOutcomes";
  // Hospital 

  import HospitalServices from './pages/hospital/HospitalServices';
  //Gallery 
  import Gallery from "./pages/Gallery/Gallery";
  import GalleryAlbum from "./pages/Gallery/GalleryAlbum";
  // Type definitions
  interface NewsItem {
    date: string;
    title: string;
    description: string;
    image?: string;
  }

  interface FacultyMember {
    name: string;
    position: string;
    qualification: string;
    department: string;
    image?: string;
  }

//Research
import ResearchHome from "./pages/research/ResearchHome";
import GrantsReceived from "./pages/research/GrantsReceived";
import ResearchProjects from "./pages/research/ResearchProjects";
import Publications from "./pages/research/Publications";
import Books from "./pages/research/Books";
import Seminars from "./pages/research/Seminars";
  // Navigation Component
  const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
const isHospitalPage = location.pathname === "/hospital/services";

const isGalleryPage =
  location.pathname === "/gallery" ||
  location.pathname.startsWith("/gallery/");

const isDepartmentPage =
  location.pathname === "/departments" ||
  location.pathname.startsWith("/departments/");


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
    
  useEffect(() => {
    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);

      const winScroll = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
      {
        name: 'About',
        href: '#about',
        submenu: [
          { name: 'About MDCH', href: "/about/mdch", },
          { name: 'Vision & Mission', href: '/about/vision-mission', },
          { name: 'organogram', href: "/about/organogram", },
          { name: 'Trust', href: '/about/trust', },
          { name: 'Management Team', href: '/about/management', },
          { name: 'Principal Desk', href: '/about/principal-desk', },
          { name: 'Strategic Plan',   href: "/pdf/StrategicPlan.pdf",
    target: "_blank",},
          
        
        ],
      },{
  name: "Admissions",
  href: "#",
  submenu: [
    {
      name: "Programmes Offered",
      href: "#",
      submenu: [
        {
          name: "BDS",
          href: "/admissions/bds",
        },
        {
          name: "MDS",
          href: "/admissions/mds",
        },
      
      ],
    },

    {
      name: "Eligibility Criteria",
      href: "/admissions/eligibility",
    },

    {
      name: "Admission Process",
      href: "/admissions/process",
    }, 

    {
      name: "Brochure",
      href: "/pdf/Brochure.pdf",
      target: "_blank",
    },

  {
  name: "Prospectus",
  href: "/pdf/Madha_Dental_College_Prospectus.pdf",
  target: "_blank",
},

    {
  name: "Fee Refund Policy",
  href: "/pdf/FEE-REFUND-POLICY.pdf",
  target: "_blank",
},

  

    {
      name: "Apply Now",
      href: "#admissions",
    },
  ],
},
     {
  name: "Academics",
  href: "#",
  submenu: [
    {
      name: "Academic Calendar",
      href: "/academics/calendar",
    },
    {
      name: "Academic Regulations",
      href: "/academics/regulations",
    },
 {
  name: "RTI Information",
  href: "/pdf/RTI_Information.pdf",
  target: "_blank",
},
    {
      name: "Circulars & Notices",
      href: "/academics/notices",
    },
    {
      name: "Curriculum & Syllabus",
      href: "/academics/curriculum",
    },
    {
      name: "Value Added Courses",
      href: "/academics/value-added",
    },
    {
      name: "Add On Programs",
      href: "/academics/add-on",
    },
   {
  name: "Capability Enhancement",
  href: "/pdf/capability/Capability_Enhancement_Programs.pdf",
  target: "_blank",
},
  {
  name: "Career Guidance",
  href: "/pdf/career/Career_Guidance.pdf",
  target: "_blank",
},
    {
      name: "Programme Outcomes",
      href: "/academics/programme-outcomes",
    },
    {
      name: "Academic Committee",
      href: "/academics/committee",
    },
  ],
},


    {
    name: 'Departments',
    href: '#departments',
    submenu: [
      {
    name: 'Conservative Dentistry and Endodontics',
    href: '/departments/conservative-dentistry',
  },
      {
        name: 'Prosthodontics',
        href: '#dept-prosthodontics',
      },
{
  name: 'Oral Medicine and Radiology',
  href: '/departments/oral-medicine',
 
},
      {
        name: 'Oral and Maxillofacial Surgery',
        href: '/departments/oral-surgery',
      },
{
  name: 'Oral Pathology & Microbiology',
  href: '/departments/oral-pathology',
},
      {
        name: 'Orthodontics and Dentofacial Orthopedics',
        href: '#dept-orthodontics',
      },

      // Last Item
    {
  name: 'View All Departments →',
  href: '/departments',
  isViewAll: true,
},
    ],
  },
      { name: 'Hospital', href: "/hospital/services", },
    {
  name: "Affiliation & Accreditation",
  href: "#",
  submenu: [
   {
  name: "University",
  href: "/pdf/affiliation/university.pdf",
  target: "_blank",
},
  {
  name: "DCI",
  href: "/pdf/affiliation/DCI.pdf",
  target: "_blank",
},
    {
      name: "ISO",
      href: "/affiliation/iso",
    },
    {
      name: "NIRF",
      href: "#",
      submenu: [
        {
          name: "2026",
          href: "/pdf/nrif/2026.pdf",
          target: "_blank",
        },
        {
          name: "2025",
          href: "/pdf/nrif/2025.pdf",
          target: "_blank",
        },
        {
          name: "2024",
          href: "/pdf/nrif/2024.pdf",
          target: "_blank",
        },
      ],
    },
{
  name: "IQAC",
  href: "#",
  submenu: [
    {
      name: "IIQA",
      href: "/pdf/iqac/IIQA.pdf",
      target: "_blank",
    },
    {
      name: "Vision & Mission",
      href: "/iqac/vision-mission",
    },
    {
      name: "Composition of IQAC",
      href: "/pdf/iqac/Composition_of_IQAC.pdf",
      target: "_blank",
    },
    {
      name: "IQAC Minutes",
      href: "/pdf/iqac/IQAC_Minutes.pdf",
      target: "_blank",
    },
    {
      name: "Self-Declaration",
      href: "/pdf/iqac/Self_Declaration.pdf",
      target: "_blank",
    },
    {
      name: "Undertaking",
      href: "/pdf/iqac/Undertaking.pdf",
      target: "_blank",
    },
    {
      name: "Criteria",
      href: "/iqac/criteria",
    },
    {
      name: "Self Study Report",
      href: "/pdf/iqac/Self_Study_Report.pdf",
      target: "_blank",
    },
    {
      name: "Policies",
      href: "/iqac/policies",
    },
    {
      name: "Committees",
      href: "/iqac/committees",
    },
    {
      name: "Annual Report",
      href: "/iqac/annual-report",
    },
    {
      name: "Institutional Distinctiveness",
      href: "/pdf/iqac/Institutional_Distinctiveness.pdf",
      target: "_blank",
    },
    {
      name: "Institutional Best Practices",
      href: "/pdf/iqac/Institutional_Best_Practices.pdf",
      target: "_blank",
    },
  ],
},
  ],
},
    {
    name: "More",
    href: "#",
    submenu: [
          {
  name: "Affiliation & Accreditation",
  href: "#",
  submenu: [
   {
  name: "University",
  href: "/pdf/affiliation/university.pdf",
  target: "_blank",
},
  {
  name: "DCI",
  href: "/pdf/affiliation/DCI.pdf",
  target: "_blank",
},
    {
      name: "ISO",
      href: "/affiliation/iso",
    },
    {
      name: "NIRF",
      href: "#",
      submenu: [
        {
          name: "2026",
          href: "/pdf/nrif/2026.pdf",
          target: "_blank",
        },
        {
          name: "2025",
          href: "/pdf/nrif/2025.pdf",
          target: "_blank",
        },
        {
          name: "2024",
          href: "/pdf/nrif/2024.pdf",
          target: "_blank",
        },
      ],
    },
{
  name: "IQAC",
  href: "#",
  submenu: [
    {
      name: "IIQA",
      href: "/pdf/iqac/IIQA.pdf",
      target: "_blank",
    },
    {
      name: "Vision & Mission",
      href: "/iqac/vision-mission",
    },
    {
      name: "Composition of IQAC",
      href: "/pdf/iqac/Composition_of_IQAC.pdf",
      target: "_blank",
    },
    {
      name: "IQAC Minutes",
      href: "/pdf/iqac/IQAC_Minutes.pdf",
      target: "_blank",
    },
    {
      name: "Self-Declaration",
      href: "/pdf/iqac/Self_Declaration.pdf",
      target: "_blank",
    },
    {
      name: "Undertaking",
      href: "/pdf/iqac/Undertaking.pdf",
      target: "_blank",
    },
    {
      name: "Criteria",
      href: "/iqac/criteria",
    },
    {
      name: "Self Study Report",
      href: "/pdf/iqac/Self_Study_Report.pdf",
      target: "_blank",
    },
    {
      name: "Policies",
      href: "/iqac/policies",
    },
    {
      name: "Committees",
      href: "/iqac/committees",
    },
    {
      name: "Annual Report",
      href: "/iqac/annual-report",
    },
    {
      name: "Institutional Distinctiveness",
      href: "/pdf/iqac/Institutional_Distinctiveness.pdf",
      target: "_blank",
    },
    {
      name: "Institutional Best Practices",
      href: "/pdf/iqac/Institutional_Best_Practices.pdf",
      target: "_blank",
    },
  ],
},
  ],
},
      { name: "Gallery", href: "/gallery" },
      { name: "Campus Life & Facilities"},
      { name: "Outreach & Collaboration Activities", href: "#faculty" },
     {
  name: "Research",
  href: "#",
  submenu: [
    {
      name: "Research Home",
      href: "/research/home",
    },
 {
  name: "Research Promotion Policy",
  href: "/pdf/research/Research_Promotion_Policy.pdf",
  target: "_blank",
},
{
  name: "Code of Research Ethics",
  href: "/pdf/research/Code_of_Research_Ethics.pdf",
  target: "_blank",
},
   {
  name: "Research Committee",
  href: "/pdf/research/Research_Committee.pdf",
  target: "_blank",
},
{
  name: "Institutional Ethics Committee",
  href: "/pdf/research/Institutional_Ethics_Committee.pdf",
  target: "_blank",
},
   {
  name: "Institutional Review Board",
  href: "/pdf/research/Institutional_Review_Board.pdf",
  target: "_blank",
},
    {
      name: "Research Projects",
      href: "/research/projects",
    },
    {
      name: "Publications",
      href: "/research/publications",
    },
    {
      name: "Books",
      href: "/research/books",
    },
    {
      name: "Grants Received",
      href: "/research/grants",
    },
    {
      name: "Seminars & Workshops",
      href: "/research/seminars",
    },
  ],
},
      { name: "Student Support", href: "#campus" },
      

  { name: "Alumni", href: "#contact" },
  { name: "Feedback", href: "#contact" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
    ];
const DesktopMenu = ({ items }: { items: any[] }) => (
  <>
    {items.map((item) => (
      <div
        key={item.name}
        className="relative group"
      >
      {/* Main Menu */}
{item.submenu ? (
  <button
    type="button"
    className={`flex items-center gap-1 px-2.5 py-2 text-[14px] font-semibold font-['Manrope'] tracking-tight rounded-lg transition-all duration-300 ${
      isScrolled || isHospitalPage || isGalleryPage || isDepartmentPage
        ? "text-black hover:text-blue-700"
        : "text-white hover:text-cyan-300"
    }`}
  >
    {item.name}
    <ChevronDown className="w-4 h-4" />
  </button>
) : item.target ? (
  <a
    href={item.href}
    target={item.target}
    rel="noopener noreferrer"
    className={`flex items-center gap-1 px-2.5 py-2 text-[14px] font-semibold font-['Manrope'] tracking-tight rounded-lg transition-all duration-300 ${
      isScrolled || isHospitalPage || isGalleryPage || isDepartmentPage
        ? "text-black hover:text-blue-700"
        : "text-white hover:text-cyan-300"
    }`}
  >
    {item.name}
  </a>
) : (
  <Link
    to={item.href}
    className={`flex items-center gap-1 px-2.5 py-2 text-[14px] font-semibold font-['Manrope'] tracking-tight rounded-lg transition-all duration-300 ${
      isScrolled || isHospitalPage || isGalleryPage || isDepartmentPage
        ? "text-black hover:text-blue-700"
        : "text-white hover:text-cyan-300"
    }`}
  >
    {item.name}
  </Link>
)}

        {/* Dropdown */}
        {item.submenu && (
          <div className="absolute left-0 top-full hidden group-hover:block bg-white rounded-xl shadow-xl min-w-[180px] py-1.5 z-50">
            {item.submenu.map((sub: any) => (
<div
  key={sub.name}
    className="relative group/sub"
>
                {sub.target ? (
                  <a
                    href={sub.href}
                    target={sub.target}
                    rel="noopener noreferrer"
className="flex justify-between items-center px-2.5 py-1.5 text-[13px] font-medium font-['Manrope'] tracking-tight hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 text-gray-700 whitespace-nowrap"
                  >
                    {sub.name}
                    {sub.submenu && <ChevronRight className="w-3.5 h-3.5" />}
                  </a>
                ) : (
  <a
    href={sub.href}
    onClick={(e) => {
      e.stopPropagation();
    }}
    className="block w-full px-3 py-2 text-[13px] font-medium font-['Manrope'] text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 whitespace-nowrap cursor-pointer"
  >
    {sub.name}
  </a>
)}
                {/* Third Level */}
               {sub.submenu && (
  <div className="absolute right-full top-0 mr-1 hidden group-hover/sub:block bg-white rounded-xl shadow-xl min-w-[220px] py-1.5 border border-gray-100 z-[999]">
                    {sub.submenu.map((child: any) =>
                      child.target ? (
                        <a
                          key={child.name}
                          href={child.href}
                          target={child.target}
                          rel="noopener noreferrer"
                  className="block px-2.5 py-1.5 text-[13px] font-medium font-['Manrope'] tracking-tight hover:bg-blue-50 text-gray-700"
                        >
                          {child.name}
                        </a>
                      ) : (
                        <Link
                          key={child.name}
                          to={child.href}
className="block px-2.5 py-1.5 text-[13px] font-medium font-['Manrope'] tracking-tight hover:bg-blue-50 text-gray-700"
                        >
                          {child.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </>
);
    return (
      <>
      <div
    className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 z-[9999] transition-all duration-150"
    style={{
      width: `${scrollProgress}%`,
    }}
  />
        {/* Top Bar */}
       <div
className={`hidden lg:block
bg-gradient-to-r from-medical-navy to-medical-blue
text-white
transition-all duration-500
overflow-hidden
${
isScrolled
? "-translate-y-full opacity-0 h-0"
: "translate-y-0 opacity-100 py-2"
}`}
>
 <div className="container-custom flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+917273901234" className="flex items-center gap-2 hover:text-medical-sky transition-colors">
                <Phone className="w-4 h-4" />
                +91 72739 01234 / 72749 01234
              </a>
              <a href="mailto:info@mdch.in" className="flex items-center gap-2 hover:text-medical-sky transition-colors">
                <Mail className="w-4 h-4" />
                info@mdch.in
              </a>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Mon - Sat: 9:00 AM - 5:00 PM
              </span>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-medical-sky transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-medical-sky transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="hover:text-medical-sky transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-medical-sky transition-colors"><Youtube className="w-4 h-4" /></a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
<nav
  className={`fixed left-1/2 -translate-x-1/2 z-50
  transition-all duration-500
  ${
  isScrolled
    ? "top-4 w-[90%] max-w-[1600px] rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.12)] border border-white/30"
    : "top-9 w-[90%] max-w-[1600px] bg-transparent shadow-none border-0"
}`}
>
<div
  className={`max-w-[1600px] mx-auto px-6 transition-all duration-500 ${
    isScrolled
      ? "rounded-2xl"
      : ""
  }`}
>
<div
className={`transition-all duration-500 ${
isScrolled ? "py-1" : "py-2"
}`}
>
      
{/* Desktop Navigation */}
<div className="hidden xl:flex items-center justify-between w-full -ml-6">

  {/* Left Logo */}
  <Link
    to="/"
    className="flex items-center gap-4 shrink-0"
  >
    <img
      src={IMAGES.logo}
      alt="MDCH Logo"
className={`object-contain rounded-full transition-all duration-500 ${
  isScrolled ? "w-16 h-16" : "w-24 h-24"
}`}
style={{
  filter: `
    drop-shadow(0 0 8px rgba(255,255,255,.95))
    drop-shadow(0 0 18px rgb(255, 255, 255))
    drop-shadow(0 0 30px rgb(255, 255, 255))
  `,
}}
    />
<div className="flex flex-col -ml-2">
<h1
  className={`uppercase transition-all duration-500 ${
isScrolled || isHospitalPage || isGalleryPage || isDepartmentPage
  ? "text-black text-[23px]"
  : "text-white text-[23px]"
  }`}
  style={{
    fontFamily: "'Cinzel', serif",
    fontWeight: 700,
    letterSpacing: "0.08em",
    lineHeight: "1",
    textShadow: isScrolled
      ? "none"
      : "0 3px 15px rgba(0,0,0,.45)",
  }}
>
  MADHA DENTAL COLLEGE
</h1>

  {/* Premium Gold Divider */}
<div className="flex justify-center mt-1 mb-1">
    <div className="premium-divider"></div>
</div>
<p
  className={`uppercase transition-all duration-500 ${
isScrolled || isHospitalPage || isGalleryPage || isDepartmentPage
  ? "text-black text-[12px]"
  : "text-white text-[12px]"
  }`}
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 900,
    letterSpacing: "0.85em",
    lineHeight: 1,
    marginTop: "8px",      // was -8px
    textAlign: "center",
  }}
>
  HOSPITAL
</p>
</div>
  </Link>

  {/* Right Menu */}
<div className="flex items-center gap-1 ml-6">
  <DesktopMenu items={navItems} />

  <Link
    to="/admissions/process"
  className="ml-6 px-5 py-2.5 whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[14px] font-semibold hover:scale-105 transition"
  >
    Apply Now
  </Link>
</div>

</div>
              {/* Mobile Menu Button */}
          {/* Mobile Header */}
<div className="xl:hidden flex items-center justify-between w-full">

  {/* Logo */}
  <Link
    to="/"
    onClick={() => setIsMobileMenuOpen(false)}
    className="flex items-center gap-2"
  >
    <img
      src={IMAGES.logo}
      alt="Madha Dental College"
      className="w-12 h-12 object-contain"
    />

    <div className="flex flex-col">
      <span
        className="text-[13px] font-bold leading-none text-[#163B72]"
        style={{
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.04em",
        }}
      >
        MADHA DENTAL
      </span>

      <span
        className="text-[9px] font-black tracking-[0.28em] text-gray-500 mt-1"
      >
        COLLEGE & HOSPITAL
      </span>
    </div>
  </Link>

  {/* Right Side */}
  <div className="flex items-center gap-2">

    {/* Apply */}
    <Link
      to="/admissions/process"
      className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-bold"
    >
      Apply
    </Link>

    {/* Menu */}
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            </div>
          </div>

          {/* Mobile Menu */}
        {/* MOBILE MENU */}
{isMobileMenuOpen && (
  <div className="xl:hidden fixed inset-x-0 top-[68px] bottom-0 z-[9998] bg-white">

    <div className="h-full overflow-y-auto px-4 py-5 pb-10">

      {/* Mobile Menu Header */}
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
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>


      {/* Home */}
      <Link
        to="/"
        onClick={() => setIsMobileMenuOpen(false)}
        className="flex items-center justify-between px-4 py-4 mb-2 rounded-xl bg-blue-50 text-[#163B72] font-semibold"
      >
        <span>Home</span>
        <ChevronRight className="w-4 h-4" />
      </Link>


      {/* Menu Items */}
      <div className="space-y-2">

        {navItems
          .filter((item) => item.name !== "Home")
          .map((item) => {

            const isOpen = activeDropdown === item.name;

            return (
              <div
                key={item.name}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >

                {/* Main Item */}
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setActiveDropdown(
                        isOpen ? null : item.name
                      );
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="w-full flex items-center justify-between px-4 py-4 text-left"
                >

                  <span className="text-[14px] font-semibold text-gray-800">
                    {item.name}
                  </span>

                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}

                </button>


                {/* First Level */}
                {isOpen && item.submenu && (
                  <div className="bg-gray-50 border-t border-gray-100 px-3 py-2">

                    {item.submenu.map((sub: any) => {

                      const hasChildren = !!sub.submenu;

                      const subOpen =
                        activeSubDropdown ===
                        `${item.name}-${sub.name}`;

                      return (
                        <div key={sub.name}>

                          {/* Submenu Item */}
                          {hasChildren ? (

                            <button
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

                          ) : (

                            sub.target ? (

                              <a
                                href={sub.href}
                                target={sub.target}
                                rel="noopener noreferrer"
                                onClick={() =>
                                  setIsMobileMenuOpen(false)
                                }
                                className="block px-3 py-3 text-[13px] text-gray-700"
                              >
                                {sub.name}
                              </a>

                            ) : (

                              <Link
                                to={sub.href}
                                onClick={() =>
                                  setIsMobileMenuOpen(false)
                                }
                                className="block px-3 py-3 text-[13px] text-gray-700"
                              >
                                {sub.name}
                              </Link>

                            )

                          )}


                          {/* Third Level */}
                          {hasChildren && subOpen && (
                            <div className="ml-3 mb-2 border-l-2 border-blue-100">

                              {sub.submenu.map((child: any) => (

                                child.target ? (

                                  <a
                                    key={child.name}
                                    href={child.href}
                                    target={child.target}
                                    rel="noopener noreferrer"
                                    onClick={() =>
                                      setIsMobileMenuOpen(false)
                                    }
                                    className="block px-4 py-2 text-[12px] text-gray-600"
                                  >
                                    {child.name}
                                  </a>

                                ) : (

                                  <Link
                                    key={child.name}
                                    to={child.href}
                                    onClick={() =>
                                      setIsMobileMenuOpen(false)
                                    }
                                    className="block px-4 py-2 text-[12px] text-gray-600"
                                  >
                                    {child.name}
                                  </Link>

                                )

                              ))}

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
        onClick={() => setIsMobileMenuOpen(false)}
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
        </nav>
      </>
    );
  };

  // Hero Section
  const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const slides = [IMAGES.heroBanner, IMAGES.banner1, IMAGES.banner2, IMAGES.banner3];
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [slides.length]);

    const stats = [
      { value: '17+', label: 'Years of Excellence' },
      { value: '100+', label: 'BDS Intake' },
      { value: '9+', label: 'MDS Specializations' },
      { value: '40,000+', label: 'Patients Served Annually' },
      { value: '100+', label: 'Expert Faculty' },
      { value: '300+', label: 'Dental Chairs' },
    ];

    return (
<section
id="home"
className="relative min-h-screen flex items-center overflow-hidden pt-28"
>
        {/* Background Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
    src={slide}
    alt={`MDCH Campus ${index + 1}`}
    className="w-full h-full object-cover"
    style={{
      transform: `translateY(${scrollY * 0.35}px) scale(1.08)`,
      transition: "transform 0.1s linear",
    }}
  />
              <div className="absolute inset-0 bg-gradient-to-r from-medical-navy/80 via-medical-navy/50 to-medical-blue/30" />
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-medical-sky/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-medical-blue/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl animate-float-slower" />
        </div>

        {/* Content */}
<div
className="container-custom relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-20"
    style={{
      transform: `translateY(${scrollY * 0.2}px)`,
      opacity: Math.max(1 - scrollY / 600, 0),
    }}
  >
<div className="max-w-5xl lg:-ml-32 xl:-ml-40 2xl:-ml-48">
            {/* Badge */}<div className="hero-reveal inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-xs mb-4"><Sparkles className="w-4 h-4 text-accent-gold" />
              <span>DCI Recognized | TN Dr.M.G.R Medical University Affiliated</span>
            </div>

            {/* Headline */}
<h1
className="
hero-reveal
delay-1
font-bold
text-white
leading-tight
tracking-tight
mb-4
text-3xl
md:text-4xl
xl:text-[48px]
2xl:text-[52px]
max-w-3xl
"
>
              Shaping the Future of{' '}
              <span className="text-medical-sky">Dental Excellence</span>
            </h1>

            {/* Subheadline */}
          <p className="hero-reveal delay-2 text-base lg:text-lg text-white/90 mb-6 max-w-xl">
              Delivering world-class dental education, advanced clinical training, innovative research,
              and compassionate healthcare since 2006. Join Tamil Nadu's premier dental institution.
            </p>

       

            {/* Stats */}
          <div
    ref={ref}
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 animate-slide-up animate-delay-500"
  >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-2.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-xl lg:text-2xl font-bold text-white mb-1">

    {stat.value === "17+" && (
      <>
        {inView && <CountUp end={17} duration={2} />}+
      </>
    )}

    {stat.value === "100+" && (
      <>
        {inView && <CountUp end={100} duration={2} />}+
      </>
    )}

    {stat.value === "9+" && (
      <>
        {inView && <CountUp end={9} duration={2} />}+
      </>
    )}

    {stat.value === "40,000+" && (
      <>
        {inView && <CountUp end={40000} separator="," duration={3} />}+
      </>
    )}

    {stat.value === "300+" && (
      <>
        {inView && <CountUp end={300} duration={2} />}+
      </>
    )}

  </div>
                  <div className="text-[11px] text-white/70 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/70 animate-bounce-subtle">
          <span className="text-xs font-medium rotate-90 origin-center">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>
      

    );
  };

  // About Section
  const AboutSection = () => {
    const timelineData = [
      { year: '2006', title: 'Foundation', description: 'Madha Dental College & Hospital established by Soosaiya Peter Educational Trust' },
      { year: '2008', title: 'DCI Recognition', description: 'Received recognition from Dental Council of India' },
      { year: '2012', title: 'MDS Programs', description: 'Launched postgraduate programs across multiple specializations' },
      { year: '2018', title: 'NAAC Accreditation', description: 'Achieved NAAC accreditation with high standards' },
      { year: '2023', title: 'Excellence Award', description: 'University Gold Medals and statewide recognition' },
      { year: 'Present', title: 'Growing Strong', description: 'Over 300 dental chairs, 100+ faculty, serving 40,000+ patients annually' },
    ];

    return (
     <section id="about" className="pt-24 pb-8 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
          {/* Section Header */}
         <div
  className="text-center mb-14"
  data-aos="fade-up"
>
  <p className="mb-3 font-['Montserrat'] text-[17px] font-semibold uppercase tracking-[0.28em] text-blue-700">
    About MDCH
  </p>

  <h2 className="font-['Cormorant_Garamond'] text-[32px] font-semibold leading-tight tracking-[-0.01em] text-neutral-900 sm:text-[52px] lg:text-[45px]">
    A Legacy of Dental Excellence
  </h2>

  <div className="mx-auto mt-5 mb-6 h-[2px] w-14 bg-blue-700" />

  <p className="mx-auto max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[20px]">
    Madha Dental College &amp; Hospital is a premier dental institution
    affiliated to The Tamil Nadu Dr.M.G.R. Medical University and
    recognized by the Dental Council of India.
  </p>
</div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Side */}
          <div
    className="relative"
    data-aos="fade-right"
    data-aos-duration="1200"
  >
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img
                  src={IMAGES.homeAbout}
                  alt="MDCH Campus"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/50 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 lg:right-6 glass-card p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-medical-blue to-medical-sky flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                  <div className="text-3xl font-bold text-neutral-900">
    <CountUp
      end={17}
      duration={2.5}
      enableScrollSpy
      scrollSpyOnce
    />
    +
  </div>
                    <div className="text-sm text-neutral-600">Years of Educational Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div
    className="space-y-6"
    data-aos="fade-left"
    data-aos-duration="1200"
  >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-medical-blue/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-medical-blue" />
                </div>
                <div>
                  <h3 className="heading-4 text-neutral-900 mb-2">Our Vision</h3>
                <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                    Madha Dental College and Hospital is committed to foster students with an updated
                    knowledge of recent technological advances and state-of-art dental skills to provide
                    comprehensive quality oral healthcare to all patients including the underprivileged
                    community and a commitment towards quality dental research.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-medical-sky/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-medical-sky" />
                </div>
                <div>
                  <h3 className="heading-4 text-neutral-900 mb-2">Our Mission</h3>
                    <p className="text-neutral-600 leading-relaxed">
                    To produce competent dental professionals who demonstrate the highest quality of
                    clinical care, ethical conduct, and professional behavior. We aim to serve the
                    community with compassion while advancing dental science through research and innovation.
                  </p>
                </div>
              </div>

            <div
    className="grid grid-cols-2 gap-4 pt-4"
    data-aos="zoom-in"
    data-aos-delay="200"
  >
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-2xl font-bold text-medical-blue">DCI</div>
                  <div className="text-sm text-neutral-600">Recognized Institution</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-2xl font-bold text-medical-blue">NAAC</div>
                  <div className="text-sm text-neutral-600">Accredited</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-2xl font-bold text-medical-blue">Dr.M.G.R</div>
                  <div className="text-sm text-neutral-600">University Affiliated</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-2xl font-bold text-medical-blue">ISO</div>
                  <div className="text-sm text-neutral-600">Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative py-2">
<h3
  className="text-center mb-12 text-black font-['Montserrat'] font-extrabold text-[34px] tracking-[0.01em]"
>
  Our Journey Through Time
</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-medical-blue via-medical-sky to-medical-blue hidden md:block" />

              <div className="space-y-8 md:space-y-0">
                {timelineData.map((item, index) => (
                  <div
    key={index}
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    data-aos-delay={index * 100}
    className={`relative flex items-center md:justify-center ${
      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    }`}
  >
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <div className="glass-card p-6 card-hover">
                        <div className="text-medical-blue font-bold text-lg mb-1">{item.year}</div>
                        <div className="heading-4 text-neutral-900 mb-2">{item.title}</div>
                        <p className="text-sm text-neutral-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-medical-blue rounded-full z-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>

       
        </div>
        <div className="overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 120"
className="w-full h-6 lg:h-8 fill-neutral-50"
      preserveAspectRatio="none"
    >
      <path d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,120L0,120Z" />
    </svg>
  </div>
      </section>
      
    );
  };

  // Programs Section
  const ProgramsSection = () => {
    const programs = [
      {
        id: 'bds',
        title: 'Bachelor of Dental Surgery (BDS)',
        duration: '4 Years + 1 Year Internship',
        intake: '100 Seats',
        description: 'Comprehensive undergraduate program covering all aspects of dental sciences with extensive clinical exposure.',
        features: ['Pre-clinical Training', 'Clinical Rotations', 'Community Dentistry', 'Research Projects', 'Internship Program'],
        icon: <GraduationCap className="w-8 h-8" />,
        color: 'from-medical-blue to-medical-sky',
      },
      {
        id: 'mds',
        title: 'Master of Dental Surgery (MDS)',
        duration: '3 Years',
        intake: 'Multiple Specializations',
        description: 'Advanced postgraduate programs in 9+ dental specializations with state-of-the-art facilities.',
        features: ['Specialty Training', 'Advanced Procedures', 'Research Thesis', 'Publications', 'Clinical Expertise'],
        icon: <Award className="w-8 h-8" />,
        color: 'from-medical-navy to-medical-blue',
      },
      {
        id: 'certificates',
        title: 'Certificate Courses',
        duration: '6 Months - 1 Year',
        intake: 'Various',
        description: 'Specialized certificate programs for dental professionals seeking to enhance their skills.',
        features: ['Focused Training', 'Hands-on Practice', 'Industry Expert Faculty', 'Certification'],
        icon: <BadgeCheck className="w-8 h-8" />,
        color: 'from-accent-gold to-medical-blue',
      },
    ];

    const mdsSpecializations = [
      'Conservative Dentistry & Endodontics',
      'Prosthodontics & Crown Bridge',
      'Orthodontics & Dentofacial Orthopedics',
      'Periodontology',
      'Oral & Maxillofacial Surgery',
      'Oral Medicine & Radiology',
      'Pediatric & Preventive Dentistry',
      'Oral Pathology & Microbiology',
      'Public Health Dentistry',
    ];

    return (
<section id="programs" className="pt-6 pb-10 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div   className="mb-3 font-['Montserrat'] text-[17px] font-semibold uppercase tracking-[0.28em] text-blue-700">Academic Programs</div>
            <h2 className="heading-2 text-neutral-900 mb-4">
              World-Class <span className="gradient-text">Dental Education</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Choose from our comprehensive range of undergraduate, postgraduate, and certificate
              programs designed to shape tomorrow's dental professionals.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
    <div
      key={program.id}
      data-aos="zoom-in-up"
      data-aos-delay={index * 150}
    >
            <GlowCard key={program.id}>
    <div className="group glass-card p-8 card-hover relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-bl-[100px] transform group-hover:scale-150 transition-transform duration-500`} />

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>

                <h3 className="heading-4 text-neutral-900 mb-2">{program.title}</h3>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{program.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" />{program.intake}</span>
                </div>
                <p className="text-neutral-600 mb-6">{program.description}</p>

                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-medical-green flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a href="#admissions" className="inline-flex items-center gap-2 text-medical-blue font-medium hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </GlowCard>
  </div>
            ))}
          </div>

          {/* MDS Specializations */}
          <div className="bg-gradient-to-br from-medical-blue to-medical-navy rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-4">
                  <Trophy className="w-4 h-4 text-accent-gold" />
                  MDS Specializations
                </div>
                <h3 className="heading-3 mb-4">9+ Specializations to Choose From</h3>
                <p className="text-white/80 mb-6">
                  Our postgraduate programs offer deep specialization in every major field of dentistry,
                  preparing you for leadership roles in clinical practice, academics, and research.
                </p>
                <a href="#admissions" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-medical-navy rounded-xl font-semibold hover:bg-medical-sky hover:text-white transition-all">
                  Explore All MDS Programs <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {mdsSpecializations.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <CircleDot className="w-4 h-4 text-medical-sky flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Departments Section
  const DepartmentsSection = () => {
    const departments = [
      { name: 'Conservative Dentistry & Endodontics', icon: <Pill className="w-6 h-6" />, description: 'Advanced restorative procedures and root canal treatments' },
      { name: 'Prosthodontics & Crown Bridge', icon: <Gem className="w-6 h-6" />, description: 'Complete and partial dentures, implants, and aesthetic dentistry' },
      { name: 'Orthodontics & Dentofacial Orthopedics', icon: <Anchor className="w-6 h-6" />, description: 'Teeth alignment and facial growth modification' },
      { name: 'Periodontology', icon: <Leaf className="w-6 h-6" />, description: 'Gum disease treatment and implant placement' },
      { name: 'Oral & Maxillofacial Surgery', icon: <Scissors className="w-6 h-6" />, description: 'Surgical procedures for oral diseases and trauma' },
      { name: 'Oral Medicine & Radiology', icon: <Scan className="w-6 h-6" />, description: 'Diagnosis and imaging of oral diseases' },
      { name: 'Pediatric & Preventive Dentistry', icon: <Smile className="w-6 h-6" />, description: 'Comprehensive dental care for children' },
      { name: 'Oral Pathology & Microbiology', icon: <Microscope className="w-6 h-6" />, description: 'Laboratory diagnosis of oral diseases' },
      { name: 'Public Health Dentistry', icon: <Globe className="w-6 h-6" />, description: 'Community oral health and preventive programs' },
      {
    name: 'Basic Medical Sciences',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Foundation sciences supporting dental education'
  },
    ];
    const [showAll, setShowAll] = useState(false);

  const visibleDepartments = showAll
    ? departments
    : departments.slice(0, 9);

    return (
<section id="departments" className="pt-10 pb-4 bg-neutral-50">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-3 font-['Montserrat'] text-[17px] font-semibold uppercase tracking-[0.28em] text-blue-700">Departments</div>
            <h2 className="heading-2 text-neutral-900 mb-4">
              Academic <span className="gradient-text">Departments</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              State-of-the-art facilities across all dental specializations ensuring comprehensive
              education and patient care.
            </p>
          </div>

          {/* Departments Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleDepartments.map((dept, idx) => (
      <div
        data-aos="fade-up"
        data-aos-delay={idx * 100} key={idx} className="group bg-white rounded-2xl p-6 shadow-card card-hover cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-medical-blue/10 to-medical-sky/10 flex items-center justify-center text-medical-blue group-hover:bg-medical-blue group-hover:text-white transition-all duration-300">
                    {dept.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-medical-blue transition-colors">{dept.name}</h3>
                    <p className="text-sm text-neutral-600">{dept.description}</p>
                  </div>
                </div>
             <div className="mt-4 pt-4 border-t border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity">
<Link
  to={
    dept.name === "Oral Pathology & Microbiology"
      ? "/departments/oral-pathology"
: dept.name === "Oral & Maxillofacial Surgery"
  ? "/departments/oral-surgery"
      
   : dept.name === "Public Health Dentistry"
      ? "/departments/public-health-dentistry"
      : dept.name === "Oral Medicine & Radiology"
      ? "/departments/oral-medicine"
      : dept.name === "Periodontology"
      ? "/departments/periodontology"
      : dept.name === "Pediatric & Preventive Dentistry"
      ? "/departments/pediatric-dentistry"
        : dept.name === "Basic Medical Sciences"
  ? "/departments/basic-medical-sciences"
      : "#"
  }
  className="text-sm text-medical-blue font-medium flex items-center gap-2 hover:gap-3 transition-all"
>
  Explore Department <ArrowRight className="w-4 h-4" />
</Link>
</div>
              </div>
            ))}
          </div>
        </div>
       <div className="mt-6 text-center">
    {!showAll && (
      <button
        onClick={() => setShowAll(true)}
        className="premium-button"
      >
        View All Departments →
      </button>
    )}
  </div>
      </section>
    );
  };

  // Hospital Section


  // Admissions Section
  const AdmissionsSection = () => {
    const [selectedCourse, setSelectedCourse] = useState('BDS');

    const admissionSteps = [
      { step: 1, title: 'NEET Qualification', description: 'Valid NEET-UG/NEET-MDS score required' },
      { step: 2, title: 'State Registration', description: 'Register at tnmedicalselection.net' },
      { step: 3, title: 'Choice Filling', description: 'Select Madha Dental College as preference' },
      { step: 4, title: 'Document Verification', description: 'Submit originals for verification' },
      { step: 5, title: 'Fee Payment', description: 'Pay tuition and security deposit' },
      { step: 6, title: 'Admission Confirmation', description: 'Complete college formalities' },
    ];

    const requiredDocs = [
      'NEET Score Card',
      'Allotment Order',
      '10th & 12th Mark Sheets',
      'Transfer Certificate',
      'Community Certificate',
      'Aadhar Card',
      'Passport Photos',
      'Conduct Certificate',
    ];

    return (
<section id="admissions" className="pt-8 pb-6 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          {/* Section Header */}
         <div className="text-center mb-10">
            <div   className="mb-3 font-['Montserrat'] text-[17px] font-semibold uppercase tracking-[0.28em] text-blue-700">Admissions 2026</div>
            <h2 className="heading-2 text-neutral-900 mb-4">
              Begin Your <span className="gradient-text">Dental Journey</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Join Tamil Nadu's premier dental institution. Follow our streamlined admission process
              to secure your seat.
            </p>
          </div>

          {/* Course Selection */}
          <div className="flex justify-center gap-4 mb-12">
            {['BDS', 'MDS'].map((course) => (
              <button
                key={course}
                onClick={() => setSelectedCourse(course)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                  selectedCourse === course
                    ? 'bg-gradient-to-r from-medical-blue to-medical-sky text-white shadow-card'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:border-medical-blue'
                }`}
              >
                {course} Admission
              </button>
            ))}
          </div>

          {/* Admission Steps */}
          <div className="mb-16">
            <h3 className="heading-4 text-center mb-8">Admission Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionSteps.map((step, idx) => (
      <div
        data-aos="fade-up"
        data-aos-delay={idx * 100} key={idx} className="relative glass-card p-6 card-hover">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-medical-blue to-medical-sky flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-neutral-900 mt-2 mb-2">{step.title}</h4>
                  <p className="text-sm text-neutral-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Structure & Documents */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fee Structure */}
            <div className="bg-gradient-to-br from-medical-navy to-medical-blue rounded-2xl p-8 text-white">
              <h3 className="heading-4 mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-accent-gold" />
                Fee Structure {selectedCourse}
              </h3>
              <div className="space-y-4">
                {selectedCourse === 'BDS' ? (
                  <>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                      <span>Government Quota</span>
                      <span className="font-semibold">Rs. 2.5 Lakh/year</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                      <span>Management Quota</span>
                      <span className="font-semibold">Rs. 6 Lakh/year</span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                    <span>MDS (All Specializations)</span>
                    <span className="font-semibold">Rs. 8.5 Lakh/year</span>
                  </div>
                )}
                <p className="text-sm text-white/70 mt-4">
                  *Fees subject to university regulations. Contact admissions office for current fee structure.
                </p>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-card">
              <h3 className="heading-4 text-neutral-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-medical-blue" />
                Required Documents
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {requiredDocs.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-medical-green flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="https://tnmedicalselection.net" target="_blank" rel="noopener noreferrer" className="premium-button">
              <span className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Apply via State Portal
              </span>
            </a>
            <a href="mailto:info@mdch.in" className="secondary-button">
              <span className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Admissions
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  };



  // News & Events Section


  // Campus Life Section
  const CampusLifeSection = () => {
    const facilities = [
      { icon: <Home className="w-6 h-6" />, title: 'Hostels', description: 'Separate hostels for boys and girls with modern amenities' },
      { icon: <Library className="w-6 h-6" />, title: 'Central Library', description: 'Extensive collection of dental literature and digital resources' },
      { icon: <Utensils className="w-6 h-6" />, title: 'Cafeteria', description: 'Hygienic food services for students and staff' },
      { icon: <Bus className="w-6 h-6" />, title: 'Transport', description: 'Fleet of buses covering major routes in Chennai' },
      { icon: <Trophy className="w-6 h-6" />, title: 'Sports Complex', description: 'Indoor and outdoor sports facilities' },
      { icon: <Users className="w-6 h-6" />, title: 'Auditorium', description: 'State-of-the-art auditorium for events' },
    ];

    return (
 <section id="campus" className="pt-8 pb-6 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div   className="mb-3 font-['Montserrat'] text-[17px] font-semibold uppercase tracking-[0.28em] text-blue-700">Campus Life</div>
            <h2 className="heading-2 text-neutral-900 mb-4">
              Life at <span className="gradient-text">MDCH</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Experience a vibrant campus life with world-class facilities that support both
              academic excellence and personal growth.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, idx) => (
      <div
        data-aos="zoom-in"
        data-aos-delay={idx * 120} key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-medical-blue/5 to-medical-sky/5 border border-medical-blue/10 card-hover">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-medical-blue to-medical-sky flex items-center justify-center text-white flex-shrink-0">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{facility.title}</h3>
                  <p className="text-sm text-neutral-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery Preview */}
         <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[IMAGES.banner1, IMAGES.banner2, IMAGES.banner3, IMAGES.heroBanner].map((img, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden group cursor-pointer aspect-video">
                <img src={img} alt={`Campus ${idx + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-medical-navy/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Section
  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      course: 'BDS',
      message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission
    };

    return (
    <section id="contact" className="pt-8 pb-16 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div  className="mb-3 font-['Montserrat'] text-[17px] font-semibold uppercase tracking-[0.28em] text-blue-700">Contact Us</div>
            <h2 className="heading-2 text-neutral-900 mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Have questions? Our admissions team is here to help you take the first step
              towards your dental career.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
    <div
    className="glass-card p-8"
    data-aos="fade-right"
  >
              <h3 className="heading-4 text-neutral-900 mb-6">Admission Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="input-field"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Course</label>
                    <select
                      className="input-field"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    >
                      <option value="BDS">BDS</option>
                      <option value="MDS">MDS</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                  <textarea
                    className="textarea-field"
                    rows={4}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="w-full premium-button">
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Enquiry
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
          <div
    className="space-y-8"
    data-aos="fade-left"
  >
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medical-blue to-medical-sky flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Campus Address</h4>
                    <p className="text-neutral-600">
                      Madha Nagar, Kundrathur<br />
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medical-blue to-medical-sky flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Phone Numbers</h4>
                    <p className="text-neutral-600">
                      <a href="tel:+917273901234" className="hover:text-medical-blue transition-colors">+91 72739 01234</a><br />
                      <a href="tel:+917274901234" className="hover:text-medical-blue transition-colors">+91 72749 01234</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medical-blue to-medical-sky flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Email</h4>
                    <p className="text-neutral-600">
                      <a href="mailto:info@mdch.in" className="hover:text-medical-blue transition-colors">info@mdch.in</a><br />
                      <a href="mailto:madhadentalcollege@gmail.com" className="hover:text-medical-blue transition-colors">madhadentalcollege@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="glass-card overflow-hidden h-64">
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.698111163057!2d80.08383301106683!3d12.991150587273124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528ab1c6803f5b%3A0x2d1ec24ba6bf360e!2sMadha%20Dental%20College%20%26%20Hospital!5e0!3m2!1sen!2sin!4v1784702547632!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  title="Madha Dental College & Hospital"
/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Footer
  const Footer = () => {
    const quickLinks = [
      { name: 'About Us', href: '#about' },
      { name: 'Admissions', href: '#admissions' },
      { name: 'Programs', href: '#programs' },
      { name: 'Departments', href: '#departments' },
      { name: 'Hospital', href: '#hospital' },
      { name: 'Gallery', href: '#gallery' },
    ];

    const departments = [
      'Conservative Dentistry',
      'Prosthodontics',
      'Orthodontics',
      'Periodontology',
      'Oral Surgery',
      'Pedodontics',
    ];

    return (
      <footer className="bg-gradient-to-b from-medical-navy to-neutral-900 text-white">
        {/* Main Footer */}
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>

              <p className="text-white/70 mb-6">
                Madha Dental College & Hospital - Premier dental institution offering world-class
                dental education since 2006.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-medical-blue transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-medical-blue transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-medical-blue transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-medical-blue transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-white/70 hover:text-medical-sky transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departments */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Departments</h4>
              <ul className="space-y-3">
                {departments.map((dept, idx) => (
                  <li key={idx}>
                    <a href="#departments" className="text-white/70 hover:text-medical-sky transition-colors">
                      {dept}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-medical-sky flex-shrink-0 mt-1" />
                  <span className="text-white/70">Madha Nagar, Kundrathur, Chennai, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-medical-sky" />
                  <a href="tel:+917273901234" className="text-white/70 hover:text-medical-sky transition-colors">
                    +91 72739 01234
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-medical-sky" />
                  <a href="mailto:info@mdch.in" className="text-white/70 hover:text-medical-sky transition-colors">
                    info@mdch.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              &copy; 2026 Madha Dental College & Hospital. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  // Main App Component
  function HomePage() {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <DepartmentsSection />

        <AdmissionsSection />
      
        <CampusLifeSection />
      
        <ContactSection />
      </>
    );
  }

  function App() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });

    AOS.refresh();
  setTimeout(() => {
    setLoading(false);
  }, 2000);
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);
  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };
  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[99999]">

        <img
          src={IMAGES.logo}
          alt="MDCH Logo"
          className="w-28 mb-6 animate-pulse"
        />

        <div className="text-2xl font-bold text-blue-700">
          Madha Dental College & Hospital
        </div>

        <div className="text-gray-500 mt-2">
          Loading...
        </div>

        <div className="mt-8 w-56 h-2 rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full bg-blue-600 animate-[loading_2s_linear_forwards]" />
        </div>

      </div>
    );
  }
    return (
      <div className="min-h-screen bg-white">
      {!window.location.pathname.startsWith("/admin") && <Navigation />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          //iiaq
          <Route
  path="/iqac/vision-mission"
  element={<IQACVisionMission />}
/>
  // About
  <Route
    path="/about/mdch"
    element={<AboutMDCH />}
  />
  <Route
    path="/about/vision-mission"
    element={<VisionMission />}
  />
  <Route
    path="/about/organogram"
    element={<Organogram />}
  />
  <Route
    path="/about/trust"
    element={<Trust />}
  />
  <Route
    path="/about/management"
    element={<Management />}
  />
  <Route
    path="/about/principal-desk"
    element={<Principal />}
  />
  // Hospital
  <Route
      path="/hospital/services"
      element={<HospitalServices />}
  />

//research 
<Route
  path="/research/publications"
  element={<Publications />}
/>
<Route
  path="/research/home"
  element={<ResearchHome />}
/>
<Route
  path="/research/grants"
  element={<GrantsReceived />}
/>
<Route
  path="/research/projects"
  element={<ResearchProjects />}
/>
//acadamics 
<Route
  path="/academics/calendar"
  element={<AcademicCalendar />}
/>
<Route path="/research/seminars" element={<Seminars />} />
<Route
  path="/academics/regulations"
  element={<AcademicRegulations />}
/>
<Route
  path="/academics/notices"
  element={<CircularsNotices />}
/>
  // admission 
  <Route
    path="/admissions/bds"
    element={<BDS />}

    
/>
<Route
  path="/departments/oral-surgery"
  element={<OralMaxillofacialSurgery />}
/>
<Route
  path="/departments/basic-medical-sciences"
  element={<BasicMedicalSciences />}
/>
<Route
  path="/affiliation/iso"
  element={<ISO />}
/>
<Route path="/research/books" element={<Books />} />
<Route
  path="/academics/committee"
  element={<AcademicCommittee />}
/>
<Route
  path="/academics/curriculum"
  element={<AcademicCurriculum />}
/>
<Route
  path="/admissions/eligibility"
  element={<EligibilityCriteria />}
/>
<Route
  path="/academics/value-added"
  element={<ValueAddedCourses />}
/>
<Route
  path="/admissions/mds"
  element={<MDS />}
/>
<Route
  path="/academics/programme-outcomes"
  element={<ProgrammeOutcomes />}
/>
<Route
  path="/academics/add-on"
  element={<AddOnPrograms />}
/>
<Route path="/admin" element={<Login />} />

<Route path="/admin/dashboard" element={<Dashboard />} />
<Route path="/admin/add-news" element={<AddNews />} />
<Route path="/departments" element={<Departments />} />

<Route
  path="/departments/oral-pathology"
  element={<OralPathology />}
/>

<Route
  path="/departments/periodontology"
  element={<Periodontology />}
/>
<Route
  path="/departments/public-health-dentistry"
  element={<PublicHealthDentistry />}
/>
<Route
  path="/departments/oral-medicine"
  element={<OralMedicine />}
/>
<Route
  path="/departments/pediatric-dentistry"
  element={<PediatricDentistry />}
/>

<Route path="/admin/manage-news" element={<ManageNews />} />
<Route
  path="/admissions/process"
  element={<AdmissionProcess />}
/>
  //Gallery
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/gallery/:folder" element={<GalleryAlbum />} />
   </Routes>

{!window.location.pathname.startsWith("/admin") && <Footer />}

{!window.location.pathname.startsWith("/admin") &&
showTopButton && (

    <button
      onClick={scrollToTop}
      className="
        fixed
        bottom-8
        right-8
        z-50
        w-14
        h-14
        rounded-full
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        text-white
        shadow-2xl
        hover:scale-110
        transition-all
        duration-300
      "
    >
      ↑
    </button>

  )}
      </div>
    );
  }

  export default App;
