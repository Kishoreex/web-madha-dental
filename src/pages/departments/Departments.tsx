import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Gem,
  Leaf,
  Microscope,
  Scan,
  Scissors,
  Smile,
  Anchor,
  Pill,
  Globe,
} from "lucide-react";

const departments = [
  {
    name: "Conservative Dentistry & Endodontics",
    description: "Advanced restorative procedures and root canal treatments",
    icon: <Pill className="w-6 h-6" />,
    path: "/departments/conservative-dentistry",
  },
  {
    name: "Prosthodontics & Crown Bridge",
    description:
      "Complete and partial dentures, implants, and aesthetic dentistry",
    icon: <Gem className="w-6 h-6" />,
    path: "/departments/prosthodontics",
  },
  {
    name: "Orthodontics & Dentofacial Orthopedics",
    description: "Teeth alignment and facial growth modification",
    icon: <Anchor className="w-6 h-6" />,
    path: "/departments/orthodontics",
  },
  {
    name: "Periodontology",
    description: "Gum disease treatment and implant placement",
    icon: <Leaf className="w-6 h-6" />,
    path: "/departments/periodontology",
  },
  {
    name: "Oral & Maxillofacial Surgery",
    description: "Surgical procedures for oral diseases and trauma",
    icon: <Scissors className="w-6 h-6" />,
    path: "/departments/oral-surgery",
  },
  {
    name: "Oral Medicine & Radiology",
    description: "Diagnosis and imaging of oral diseases",
    icon: <Scan className="w-6 h-6" />,
    path: "/departments/oral-medicine",
  },
  {
    name: "Pediatric & Preventive Dentistry",
    description: "Comprehensive dental care for children",
    icon: <Smile className="w-6 h-6" />,
    path: "/departments/pediatric-dentistry",
  },
  {
    name: "Oral Pathology & Microbiology",
    description: "Laboratory diagnosis of oral diseases",
    icon: <Microscope className="w-6 h-6" />,
    path: "/departments/oral-pathology",
  },
  {
    name: "Public Health Dentistry",
    description: "Community oral health and preventive programs",
    icon: <Globe className="w-6 h-6" />,
    path: "/departments/public-health-dentistry",
  },
  {
    name: "Basic Medical Sciences",
    description: "Foundation sciences supporting dental education",
    icon: <BookOpen className="w-6 h-6" />,
    path: "/departments/basic-medical-sciences",
  },
];

export default function Departments() {
  return (
<section id="departments" className="pt-24 pb-10 bg-neutral-50">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-3 font-['Montserrat'] text-[17px] font-semibold uppercase tracking-[0.28em] text-blue-700">
            Departments
          </div>

          <h2 className="heading-2 text-neutral-900 mb-4">
            Academic <span className="gradient-text">Departments</span>
          </h2>

          <p className="body-large max-w-2xl mx-auto">
            State-of-the-art facilities across all dental specializations
            ensuring comprehensive education and patient care.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group bg-white rounded-2xl p-6 shadow-card card-hover cursor-pointer"
            >
              <div className="flex items-start gap-4">

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-medical-blue/10 to-medical-sky/10 flex items-center justify-center text-medical-blue group-hover:bg-medical-blue group-hover:text-white transition-all duration-300">
                  {dept.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-medical-blue transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-sm text-neutral-600">
                    {dept.description}
                  </p>
                </div>

              </div>

              {/* Explore */}
              <div className="mt-4 pt-4 border-t border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  to={dept.path}
                  className="text-sm text-medical-blue font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Explore Department
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}