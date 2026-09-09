import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Stethoscope,
  Scan,
  HeartPulse,
  ShieldCheck,
  Microscope,
  Users,
  BookOpen,
  Sparkles,
  Activity,
} from "lucide-react";
import selvakumarImage from "../../assets/images/departments/periodontology/selvakumar.jpg";
import menakaImage from "../../assets/images/departments/periodontology/menaka.jpg";
import rajaPriyaImage from "../../assets/images/departments/periodontology/raja-priya.jpg";
import nikitaRaviImage from "../../assets/images/departments/periodontology/nikita-ravi.jpg";
import violaEstherImage from "../../assets/images/departments/periodontology/viola-esther.jpg";
import savithriImage from "../../assets/images/departments/periodontology/savithri.jpg";
import vinithaNairImage from "../../assets/images/departments/periodontology/vinitha-nair.jpg";
import navinKumarImage from "../../assets/images/departments/periodontology/navin-kumar.jpg";
import surthiImage from "../../assets/images/departments/periodontology/surthi.jpg";
import pooraniBalaramanImage from "../../assets/images/departments/periodontology/poorani-balaraman.jpg";
import arunImage from "../../assets/images/departments/periodontology/arun.jpg";
const focusAreas = [
  {
    title: "Diagnostics & Care",
    description:
      "Non-surgical and surgical management of gingival and periodontal diseases through scaling, root planing, and periodontal flap surgery, using advanced modalities like Laser and Piezosurgery.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Implantology",
    description:
      "Surgical placement of dental implants, guided bone regeneration, and sinus lift procedures using modern technologies, including CBCT-guided implant planning.",
    icon: Scan,
  },
  {
    title: "Specialized Care",
    description:
      "Management of the periodontal–systemic disease link (diabetes, cardiovascular disease), regenerative periodontal therapy, and tailored care for medically compromised patients.",
    icon: HeartPulse,
  },
  {
    title: "Prevention & Early Detection",
    description:
      "Oral hygiene education, periodontal risk screening, and early detection of gingival and periodontal disease.",
    icon: ShieldCheck,
  },
];

const pillars = [
  {
    title: "Student-Centric",
    description:
      "Translating theoretical knowledge into practical periodontal surgical and implant-placement skills using CBCT-guided software.",
    icon: Users,
  },
  {
    title: "Patient Service & Safety",
    description:
      "Quality public care adhering to strict infection control methods.",
    icon: ShieldCheck,
  },
  {
    title: "Research-Oriented",
    description:
      "To foster a robust research culture among faculty and students that expands knowledge in periodontal regeneration and implant dentistry, enhances problem-solving capabilities, and advances surgical and non-surgical treatment approaches in periodontal healthcare.",
    icon: Microscope,
  },
];

const faculty = [
  {
    name: "Dr. J. Selvakumar, MDS",
    designation: "Professor and Head",
    image: selvakumarImage,
    description:
      "Dr. J. Selvakumar, M.D.S., completed BDS and MDS in Periodontics from Meenakshi Ammal Dental College. He holds fellowships in Implantology, Laser Dentistry, Orofacial Pain/TMJ/Sleep Apnoea from Rutgers University, USA and Dental Sleep Medicine. He has 50+ publications, two patents, presented 200+ papers and has authored chapters in reputed textbooks. He is a reviewer for IJDR, JISP, JIDAM, WJPR, and WJASR, and Editor of the International Journal of Dental Implants and Research. His awards include Best IDA President (State & National), ISDR Young Researcher, Best Academician, Best Young Periodontal Researcher, and the Global Outreach Healthcare Award (2021).",
  },
  {
    name: "Dr. V. Menaka, MDS",
    designation: "Professor",
    image: menakaImage,
    description:
      "Dr. V. Menaka, M.D.S., completed her BDS and MDS from the Tamil Nadu Dr. M.G.R Medical University and has over 15 years of teaching experience. She has contributed to several scientific publications and has actively participated in national conferences, workshops, and continuing dental education programmes. She is a member of the Indian Society of Periodontology, Indian Dental Association, and Indian Association of Oral Implantologists. Her areas of clinical expertise include advanced periodontal flap surgeries, regenerative periodontal procedures, mucogingival surgeries, gingival recession management, and implant-related periodontal therapy.",
  },
  {
    name: "Dr. P. Raja Priya, MDS",
    designation: "Reader",
    image: rajaPriyaImage,
    description:
      "Dr. P. Raja Priya, MDS, completed her M.D.S. in Periodontics and Oral Implantology from Meenakshi Ammal Dental College & Hospitals, Chennai. She has over eight years of teaching experience in the field of Periodontology. She has several scientific publications in national and international dental journals, contributed to numerous national and international conferences, CDE programmes, and professional academic activities. She has presented scientific papers and posters at various professional forums in the areas of Periodontology and Implantology. Her research interests include periodontal inflammation, biomarkers, regenerative periodontal therapy, and periodontal diagnosis.",
  },
  {
    name: "Dr. Nikita Ravi, MDS",
    designation: "Reader",
    image: nikitaRaviImage,
    description:
      "Dr. Nikita Ravi, MDS, completed her MDS from Meenakshi Ammal Dental College with seven years of experience in dental education, clinical practice, and research. She has contributed to 18 scientific publications, 8 published patents and actively participates in national and international conferences. Her expertise includes periodontal and implant therapy, surgical procedures, patient management, treatment planning, and digital dental imaging.",
  },
  {
    name: "Dr. P.S. Viola Esther, MDS",
    designation: "Reader",
    image: violaEstherImage,
    description:
      "Dr. P. S. Viola Esther, MDS, completed her under graduation at Government Dental College, Chennai and pursued her postgraduation in Periodontology at Vivekanandha Dental College for Women, Tiruchengode. She has a teaching experience of 5 years 10 months. She has been awarded fellowship from the International Congress of Oral Implantologists. She has authored 2 books, holds one patent and has published 15 scientific publications in peer reviewed journals. Her primary clinical interest lies in implantology and contemporary implant related research, with a particular focus on integrating evidence-based advances and emerging technologies into clinical practice and dental education.",
  },
  {
    name: "Dr. N.K. Savithri, MDS",
    designation: "Reader",
    image: savithriImage,
    description:
      "Dr. N. K. Savithri, earned her MDS from SRM Dental College, Ramapuram, Chennai, and her BDS from Manipal College of Dental Sciences, Manipal. She has 4 years and 7 months of teaching experience at Madha Dental College and Hospital. She has contributed to scientific literature through publications in PubMed, Scopus, and Web of Science indexed journals and holds a patent. She has participated in numerous national and international conferences and has presented scientific papers and posters at various national and professional forums in the fields of Periodontology and Implantology. Her primary areas of academic and research interest include periodontal regeneration, the pathogenesis of periodontal diseases, and periodontal plastic surgery.",
  },
  {
    name: "Dr. Vinitha Nair, MDS",
    designation: "Senior Lecturer",
    image: vinithaNairImage,
    description:
      "Dr. Vinitha Nair, MDS, completed her MDS from Sri Ramachandra Dental College. Her areas of professional and academic interest include periodontal regenerative procedures, and contemporary approaches to regenerative periodontal surgery. She has three research publications to her credit and is interested in further developing her research and academic pursuits in the field of Periodontics. She is passionate about fostering a student-centered learning environment and encouraging students to develop a strong foundation in periodontal diagnosis and evidence-based clinical practice.",
  },
  {
    name: "Dr. D. Navin Kumar, MDS",
    designation: "Senior Lecturer",
    image: navinKumarImage,
    description:
      "Dr. D. Navin Kumar, M.D.S., completed his post-graduation in Periodontics from Ragas Dental College and Hospital. He has 15 publications to his credit in indexed journals with a high impact factor and 8 patents reflecting a strong record of innovation within the specialty. He has authored one book, contributing to the academic literature. His areas of academic and clinical interest include periodontal regeneration and tissue-engineering-based approaches to periodontal repair. He has a particular focus on periodontal plastic and aesthetic surgery, dental implantology, peri-implant disease management and practices laser-assisted periodontal therapy, incorporating advanced technology into non-surgical and surgical periodontal care.",
  },
  {
    name: "Dr. Surthi. S, MDS",
    designation: "Senior Lecturer",
    image: surthiImage,
    description:
      "Dr. Surthi. S, MDS, completed her postgraduate degree from Meenakshi Ammal Dental College and Hospital, Chennai. She has 10 scientific publications in both national and international journals and she has 2 patents. Her areas of include Periodontal plastic surgery, Periodontal regeneration and Implantology.",
  },
  {
    name: "Dr. A.E. Poorani Balaraman, MDS",
    designation: "Senior Lecturer",
    image: pooraniBalaramanImage,
    description:
      "Dr. A. E. Poorani Balaraman, MDS, pursued her post graduation in SRM Dental College, Ramapuram, Chennai with 3 months of teaching experience in Madha Dental College & Hospital. She has contributed to 5 publications and has actively participated in national and international conferences. Her areas of expertise include hard and soft tissue surgeries, implant dentistry, periodontal procedures, and laser-assisted surgical techniques.",
  },
  {
    name: "Dr. P. Arun, MDS",
    designation: "Senior Lecturer",
    image: arunImage,
    description:
      "Dr. P. Arun, M.D.S., completed his post-graduation in Periodontics from K.S.R. Institute of Dental Science & Research, Tiruchengode, Namakkal District. He has over 5 years of clinical experience in the field of Periodontology & Implantology. He has authored one scientific publication in an indexed journal. His areas of academic and clinical interest include Laser Dentistry, Implantology, Periodontal Regeneration, Clinical Diagnosis, and Flap Surgery.",
  },
];

const outreach = [
  {
    title: "Oral Hygiene & Gum Care Awareness Program",
    description:
      "Yearly awareness camps and free periodontal screening drives conducted to promote gum health and encourage early detection of periodontal disease among the public.",
    icon: HeartPulse,
  },
  {
    title: "National Periodontist Day",
    description:
      "February 23. Marked with dedicated activities that highlight the importance of periodontal and implant health. However, we consider every single day as Periodontist Day through dedicated patient care.",
    icon: Stethoscope,
  },
  {
    title: "Oral Hygiene Day",
    description:
      "August 1. Observed to mark the birth anniversary of Dr. G. B. Shankwalkar, founder of the Indian Society of Periodontology, with awareness camps highlighting the link between oral hygiene and periodontal health.",
    icon: Sparkles,
  },
  {
    title: "World Diabetes Day",
    description:
      "November 14. Observed with awareness camps highlighting the bidirectional relationship between diabetes and periodontal disease, encouraging integrated screening and management of both conditions.",
    icon: Activity,
  },
];

export default function Periodontology() {
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

      {/* Header */}
      <section className="bg-neutral-50 pt-32 pb-8">
        <div className="container-custom">
          <div className="max-w-4xl">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              Department
            </p>

            <h1 className="font-['Cormorant_Garamond'] text-[42px] font-semibold leading-tight text-neutral-900 sm:text-[58px]">
              Periodontology & Implantology
            </h1>

            <p className="mt-6 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-700 sm:text-[17px]">
              Dentistry’s specialty dedicated to the diagnosis, prevention,
              and treatment of diseases affecting the supporting structures
              of the teeth — the gums, periodontal ligament, and alveolar bone
              — together with the surgical placement and restoration of dental
              implants for the replacement of missing teeth.
            </p>

          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none">
          <span className="font-['Cormorant_Garamond'] text-[150px] font-semibold leading-none text-blue-50/70 sm:text-[200px]">
            PI
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
                Periodontal Health &
                <br />
                Implant Excellence
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
                  Periodontology & Implantology is dentistry’s specialty
                  dedicated to the diagnosis, prevention, and treatment of
                  diseases affecting the supporting structures of the teeth —
                  the gums, periodontal ligament, and alveolar bone — together
                  with the surgical placement and restoration of dental
                  implants for the replacement of missing teeth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">

          <div className="mb-12">
            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Core Focus Areas
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Areas of Clinical Focus
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="rounded-2xl bg-white p-7 shadow-card"
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

      {/* Core Pillars */}
      <section className="bg-white py-16">
        <div className="container-custom">

          <div className="mb-12 text-center">
            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Core Pillars
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Our Academic & Clinical Approach
            </h2>

            <div className="mx-auto mt-4 h-[2px] w-12 bg-blue-700" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
                >
                  <div className="mb-5 flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-['Cormorant_Garamond'] text-[25px] font-semibold leading-tight text-neutral-900">
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

      {/* Faculty */}
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
            {faculty.map((member, index) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 120}
                className="rounded-2xl bg-white p-7 shadow-card"
              >
                <div className="flex flex-col gap-6 sm:flex-row">

                  {/* Faculty Image */}
                  <div className="h-40 w-32 shrink-0 overflow-hidden rounded-xl bg-blue-50">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-blue-700">
                        <Users className="h-12 w-12" />
                      </div>
                    )}
                  </div>

                  {/* Faculty Details */}
                  <div className="flex-1">

                    <div className="mb-4">
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

      {/* Community Outreach */}
      <section className="bg-white py-16">
        <div className="container-custom">

          <div className="mb-12">
            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Community Outreach
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Serving the Community
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {outreach.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
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

    </main>
  );
}