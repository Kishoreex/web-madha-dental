import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BookOpen,
  Microscope,
  FlaskConical,
  HeartPulse,
  Brain,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

import abilashaImage from "../../assets/images/departments/basic-medical-sciences/abilasha.jpg";
import deepaImage from "../../assets/images/departments/basic-medical-sciences/deepa.jpg";
import lakshmiImage from "../../assets/images/departments/basic-medical-sciences/lakshmi-priya.jpg";
import iswaryaImage from "../../assets/images/departments/basic-medical-sciences/iswarya.jpg";
import nikidaImage from "../../assets/images/departments/basic-medical-sciences/nikida.jpg";
import vidyalakshmiImage from "../../assets/images/departments/basic-medical-sciences/vidyalakshmi.jpg";
import valarmathiImage from "../../assets/images/departments/basic-medical-sciences/valarmathi.jpg";

const focusAreas = [
  {
    title: "Anatomical Sciences",
    description:
      "Building a strong foundation in human anatomy and structural relationships essential for understanding dental diagnosis, clinical procedures, and comprehensive patient care.",
    icon: Brain,
  },
  {
    title: "Biochemistry & Molecular Sciences",
    description:
      "Understanding biochemical processes, metabolism, molecular mechanisms, antioxidants, diabetes-related pathways, cancer biology, and their relevance to health and disease.",
    icon: FlaskConical,
  },
  {
    title: "Medical Microbiology",
    description:
      "Developing knowledge of microorganisms, bacterial infections, antimicrobial resistance, clinical microbiology, laboratory techniques, and emerging infectious challenges.",
    icon: Microscope,
  },
  {
    title: "Pharmacological Sciences",
    description:
      "Understanding the actions and applications of drugs, including analgesic and anti-inflammatory therapies, with emphasis on translating pharmacological knowledge into clinically relevant applications.",
    icon: HeartPulse,
  },
  {
    title: "Physiology",
    description:
      "Understanding normal human body functions and physiological processes, providing students with the scientific foundation required for interpreting disease and clinical conditions.",
    icon: Stethoscope,
  },
  {
    title: "Scientific Research",
    description:
      "Encouraging students and faculty to engage in scientific research, academic publications, laboratory investigations, and evidence-based learning across basic medical sciences.",
    icon: Microscope,
  },
];

const pillars = [
  {
    title: "Student-Centric",
    description:
      "Providing students with a strong foundation in basic medical sciences through structured teaching, practical learning, scientific discussions, and clinically relevant academic training.",
    icon: GraduationCap,
  },
  {
    title: "Research-Oriented",
    description:
      "Promoting research activities across anatomy, biochemistry, microbiology, pharmacology, and physiology while encouraging scientific publications and academic development.",
    icon: Microscope,
  },
  {
    title: "Clinically Relevant",
    description:
      "Connecting fundamental scientific concepts with their clinical significance so that students can apply basic medical knowledge effectively throughout their dental education.",
    icon: Stethoscope,
  },
];

const faculty = [
  {
    department: "Department of Anatomy",
    name: "Dr. S. Abilasha, MSc., PhD., M.B.A",
    designation: "Associate Professor",
    image: abilashaImage,
    description:
      "Dr. S. Abilasha holds an M.Sc. in Medical Anatomy from Meenakshi Medical College, a Ph.D. in Medical Anatomy from Saveetha Medical College, and an MBA in Hospital Management from Alagappa University. She has 12 years and 2 months of teaching experience in Anatomy. She has 18 publications in indexed journals, along with one book publication and one book chapter. She has received around eight Best Paper Awards at national and international conferences and was awarded as Fellow of Basic Medical Sciences (FABMS). She has been invited as a guest speaker, chairperson, and resource person at various conferences. Her area of expertise includes Molecular Experimental Diabetology, with a specific focus on the protective effects of stevioside against high-fat diet-induced insulin resistance in skeletal muscle.",
  },
  {
    department: "Department of Biochemistry",
    name: "Dr. Deepa R, M.Sc., M.Phil., Ph.D., MBA, FBMS",
    designation: "Professor",
    image: deepaImage,
    description:
      "Dr. Deepa R. has 18 years of academic and teaching experience at the institution. She completed her post-graduation in Medical Biochemistry at the Dr. A.L.M. PG Institute of Basic Medical Sciences, University of Madras, and was awarded her Ph.D. by Bharathiar University. She also holds an MBA in Health Service Management from Anna University and qualified the Tamil Nadu State Eligibility Test (TNSET) for Lectureship in Life Sciences in 2016. Her scholarly contributions include 27 research and review articles published in peer-reviewed national and international journals, along with 15 book chapters. She has successfully supervised an ICMR-STS-funded student research project. Her professional contributions include serving as the Editor of the textbook 'Current Advances in Biosciences' and as a peer reviewer for Elsevier's 'Nutrition for Nurses'. She has also completed training in Laboratory Management Systems and Internal Audit in accordance with ISO 15189:2022, with a focus on NABL accreditation. Her key areas of research interest include diabetes mellitus, antioxidants, and phytomedicine.",
  },
  {
    department: "Department of Biochemistry",
    name: "Mrs. Lakshmi Priya K, M.Sc",
    designation: "Lecturer",
    image: lakshmiImage,
    description:
      "Mrs. Lakshmi Priya K. has 1 year and 6 months of teaching experience. She completed her postgraduate degree in Medical Biochemistry in 2023 from the Dr. A. L. M. Post Graduate Institute of Basic Medical Sciences, University of Madras, Taramani. Her postgraduate research project focused on oral cancer, contributing to her research interests in cancer biology and scientific research. Her areas of academic and research interest include oral cancer, biochemistry laboratory techniques, and molecular biology techniques.",
  },
  {
    department: "Department of Microbiology",
    name: "Ms. A. Iswarya M.Sc.,",
    designation: "Lecturer",
    image: iswaryaImage,
    description:
      "Ms. A. Iswarya has 5 years and 4 months of teaching experience. She completed her postgraduate degree in Medical Microbiology in 2020 from the Dr. A.L.M PG Institute of Basic Medical Sciences, Taramani. She is actively involved in teaching Microbiology to undergraduate and Postgraduate students, with an emphasis on developing their theoretical knowledge, practical skills and scientific understanding. Her areas of research include antimicrobial resistance, bacterial infections and emerging challenges in Clinical Microbiology. She has contributed to the field through six research publications in peer-reviewed journals, reflecting her active involvement in scientific research and academic advancement. She strives to contribute meaningfully to teaching, research, student development and the academic growth of the institution.",
  },
  {
    department: "Department of Microbiology",
    name: "Ms. Nikida R, M.Sc.,",
    designation: "Lecturer",
    image: nikidaImage,
    description:
      "Ms. Nikida R. is a Lecturer in the Department of Microbiology at Madha Dental College and Hospital. She completed her M.Sc. in Medical Microbiology in 2026 from the Dr. A. L. M. Post Graduate Institute of Basic Medical Sciences, University of Madras, Taramani. She has been actively involved in teaching and academic activities. Her areas of interest include Clinical Microbiology, academic teaching, and research. She is particularly interested in developing her research skills and contributing to evidence-based academic and scientific work in microbiology.",
  },
  {
    department: "Department of Pharmacology",
    name: "Dr. Vidyalakshmi K. M.Sc., Ph.D",
    designation: "Professor of Pharmacology",
    image: vidyalakshmiImage,
    description:
      "Dr. Vidyalakshmi K. is an accomplished academician and Professor of Pharmacology with 27 years of teaching experience, including 14 years of dedicated association with Madha Dental College. She completed her postgraduate degree in Pharmacology in 1996 from the Dr. A. L. M. Post Graduate Institute of Basic Medical Sciences, University of Madras, Taramani, Chennai and was awarded a Doctoral Degree from MAHER (Meenakshi Academy of Higher Education and Research) in 2012. Her research interests particularly focus on Herbal analgesics and anti-inflammatory drugs and she published eight research publications in high-impact-factor journals and also contributed three book chapters. She has been a resource person for colleges, with a special interest in translating pharmacological knowledge into clinically relevant applications.",
  },
  {
    department: "Department of Physiology",
    name: "Dr. C. Valarmathi BPT., M.Sc",
    designation: "Lecturer",
    image: valarmathiImage,
    description:
      "Dr. C. Valarmathi completed her postgraduate degree in Physiology from Chettinad Academy of Research and Education, Chennai, and has 5 years and 1 month of teaching experience. She has published research articles in national and international journals. Her academic and research interests include Physiology, neurological disorders, and body mass index (BMI) in relation to pulmonary diseases. She is currently pursuing her Ph.D. in Physiology at Saveetha Institute of Medical and Technical Sciences (SIMATS), Chennai. She is actively involved in teaching and research and contributes to guiding students in scientific sessions and conference presentations.",
  },
];

export default function BasicMedicalSciences() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <main className="bg-white">

      {/* ================= HEADER ================= */}
      <section className="bg-neutral-50 pt-32 pb-8">
        <div className="container-custom">
          <div className="max-w-4xl">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              Department
            </p>

            <h1 className="font-['Cormorant_Garamond'] text-[42px] font-semibold leading-tight text-neutral-900 sm:text-[58px]">
              Basic Medical Sciences
            </h1>

            <p className="mt-6 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-700 sm:text-[17px]">
              Providing a strong scientific foundation in anatomy, biochemistry,
              microbiology, pharmacology, and physiology to support comprehensive
              dental education, clinical understanding, and research.
            </p>

          </div>
        </div>
      </section>

      {/* ================= DEPARTMENT OVERVIEW ================= */}
      <section className="relative overflow-hidden bg-white py-12">

        {/* Premium Background Watermark */}
        <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none">
          <span className="font-['Cormorant_Garamond'] text-[190px] font-semibold leading-none text-blue-50/70">
            BMS
          </span>
        </div>

        <div
          className="container-custom relative z-10"
          data-aos="fade-up"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">

            {/* Left */}
            <div>

              <p className="mb-4 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
                Department Overview
              </p>

              <h2 className="font-['Cormorant_Garamond'] text-[38px] font-semibold leading-tight text-neutral-900 sm:text-[48px]">
                Scientific Foundations for
                <br />
                Dental Excellence
              </h2>

              <div className="mt-6 flex items-center gap-2">
                <div className="h-[2px] w-16 bg-blue-700" />
                <div className="h-[2px] w-6 bg-amber-400" />
              </div>

            </div>

            {/* Right */}
            <div className="relative">

              <div className="border-l-2 border-blue-100 pl-7">

                <p className="font-['Montserrat'] text-[14px] leading-8 text-neutral-700 sm:text-[17px]">
                  The Basic Medical Sciences curriculum provides the scientific
                  foundation required for dental education and clinical practice.
                  Through Anatomy, Biochemistry, Microbiology, Pharmacology, and
                  Physiology, students develop a comprehensive understanding of
                  the structure, function, biochemical processes, microorganisms,
                  pharmacological principles, and physiological mechanisms of
                  the human body.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE FOCUS AREAS ================= */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">

          <div className="mb-12">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Core Focus Areas
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Areas of Academic Focus
            </h2>

          </div>

          <div
            className="grid gap-6 md:grid-cols-2"
            data-aos="fade-up"
          >

            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 shadow-card"
                  data-aos="fade-up"
                >

                  <div className="mb-5 flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-['Cormorant_Garamond'] text-[27px] font-semibold leading-tight text-neutral-900">
                      {item.title}
                    </h3>

                  </div>

                  <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="bg-white py-16">
        <div className="container-custom">

          <div className="mb-12 text-center">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Core Pillars
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Our Academic Approach
            </h2>

            <div className="mx-auto mt-4 h-[2px] w-12 bg-blue-700" />

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
                >

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1">

                      <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold leading-tight text-neutral-900">
                        {item.title}
                      </h3>

                      <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= FACULTY ================= */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">

          <div className="mb-12">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Faculty
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Department Faculty
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {faculty.map((member) => (

              <div
                key={member.name}
                className="rounded-2xl bg-white p-7 shadow-card"
                data-aos="fade-up"
              >

                <div className="flex flex-col gap-6 sm:flex-row">

                  {/* Faculty Image */}
                  <div className="shrink-0">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-40 w-32 rounded-xl object-cover"
                    />

                  </div>

                  {/* Faculty Details */}
                  <div className="flex-1">

                    <div className="mb-4">

                      <p className="mb-2 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                        {member.department}
                      </p>

                      <h3 className="font-['Cormorant_Garamond'] text-[28px] font-semibold leading-tight text-neutral-900">
                        {member.name}
                      </h3>

                      <p className="mt-1 font-['Montserrat'] text-[12px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                        {member.designation}
                      </p>

                    </div>

                    <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                      {member.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= ACADEMIC & STUDENT DEVELOPMENT ================= */}
      <section className="bg-white py-16">
        <div className="container-custom">

          <div className="mb-12">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Academic Development
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Building Strong Scientific Foundations
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-neutral-200 p-7">
              <BookOpen className="mb-5 h-7 w-7 text-blue-700" />

              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Fundamental Knowledge
              </h3>

              <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                Strengthening students' understanding of fundamental medical
                sciences that support subsequent clinical and dental learning.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-7">
              <Microscope className="mb-5 h-7 w-7 text-blue-700" />

              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Research & Innovation
              </h3>

              <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                Encouraging scientific curiosity, laboratory-based learning,
                research participation, publications, and academic development.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-7">
              <Stethoscope className="mb-5 h-7 w-7 text-blue-700" />

              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Clinical Integration
              </h3>

              <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                Connecting basic scientific principles with clinical concepts
                to help students develop a deeper understanding of patient care.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}