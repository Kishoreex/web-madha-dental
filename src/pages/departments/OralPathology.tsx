import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sivakumarImage from "../../assets/images/departments/oral-pathology/sivakumar.jpg";
import mSivakumarImage from "../../assets/images/departments/oral-pathology/m-sivakumar.jpg";
import raghiniImage from "../../assets/images/departments/oral-pathology/raghini.jpg";
import hamsiniImage from "../../assets/images/departments/oral-pathology/hamsini.png";
import rajashreeImage from "../../assets/images/departments/oral-pathology/rajashree.jpg";
import aayishaImage from "../../assets/images/departments/oral-pathology/aayisha.jpg";
import {
  Microscope,
  ShieldCheck,
  ScanSearch,
  FlaskConical,
  Link2,
  Users,
  Stethoscope,
  BookOpen,
  HeartPulse,
} from "lucide-react";

const focusAreas = [
  {
    title: "Diagnostic Histopathology",
    description:
      "Microscopic evaluation and definitive diagnosis of biopsied oral and maxillofacial lesions, including inflammatory, reactive, cystic, and neoplastic conditions.",
    icon: Microscope,
  },
  {
    title: "Oral Cancer & Potentially Malignant Disorders",
    description:
      "Early identification and pathological assessment of potentially malignant disorders and oral cancers, with emphasis on accurate grading, staging support, and clinicopathological correlation.",
    icon: ScanSearch,
  },
  {
    title: "Advanced Diagnostic Techniques",
    description:
      "Utilization of special stains, immunohistochemistry, cytology, and other ancillary techniques to enhance diagnostic accuracy and characterize challenging lesions.",
    icon: FlaskConical,
  },
  {
    title: "Clinicopathological Correlation",
    description:
      "Integration of clinical, radiographic, and microscopic findings to establish comprehensive diagnoses and support appropriate treatment planning and specialist referral.",
    icon: Link2,
  },
  {
    title: "Research & Precision Diagnostics",
    description:
      "Focus on emerging biomarkers, molecular pathology, and translational research for improved early detection, prognostication, and personalized management of oral and maxillofacial diseases.",
    icon: BookOpen,
  },
];

const pillars = [
  {
    title: "Student-Centric",
    description:
      "Developing strong diagnostic skills through hands-on training in biopsy techniques, specimen processing, histopathological interpretation, microscopic diagnosis, and clinicopathological correlation.",
    icon: Users,
  },
  {
    title: "Patient Service & Diagnostic Excellence",
    description:
      "Providing accurate, timely, and reliable diagnosis of oral and maxillofacial diseases through standardized laboratory procedures, quality assurance, biosafety, and multidisciplinary collaboration to support optimal patient care.",
    icon: ShieldCheck,
  },
  {
    title: "Research-Oriented",
    description:
      "Fostering a research-driven environment among faculty and students to advance knowledge in oral and maxillofacial pathology through emerging biomarkers, immunohistochemistry, molecular diagnostics, and translational research for early detection and improved disease management.",
    icon: Microscope,
  },
];

const faculty = [
  {
    name: "Dr. G. Sivakumar, MDS",
    designation: "Professor and Head",
    image: sivakumarImage,
    description:
      "Dr. G. Sivakumar MDS, MBA (Hospital Management), PhD, MSW had completed his post-graduation from the Ragas Dental college, Chennai. With over of 28 years of experience in academics, clinical practice, research and administration. He has 67 publications in indexed journals with a high impact factor. Dr. Sivakumar is the recipient of several prestigious awards and fellowships, including the ISDR Dr. J.G. Kannappan Award for Best Paper Published in the Indian Journal of Dental Research and the Research Excellence Award in recognition of his contributions to Oral Pathology and dental research. His field of interest are Oral Cancers, OPMDs, Skin Lesions and Forensic Odontology.",
  },
   {
    name: "Dr. M. Sivakumar, MDS",
    designation: "Professor / Reader",
    image: mSivakumarImage,
    description:
      "Dr. M. Sivakumar, MDS, has completed his post graduation from Rajah Muthaiah Dental College and Hospital with 13 years of teaching experience. He has over 30 publications in various national and International journals. He has also delivered guest lectures in various colleges and presented papers at national conferences. His academic interest is oriented towards Oral Oncology and Forensic Odontology.",
  },
  {
     name: "Dr. R. Raghini, MDS",
    designation: "Reader",
    image: raghiniImage,
    description:
      "Dr. R. Raghini, MDS, has completed her postgraduation from Saveetha Dental College & Hospital. With 9 years of teaching experience she has contributed in academics and oral cancer research. Her academic interest focuses on Oral Cancer Genetics and Forensic Odontology research. She has over 30 publications in national and international journals. She holds the lifetime membership of Indian Association Of Oral and Maxillofacial Pathology.",
  },
  {
    name: "Dr. V. Hamsini, MDS",
    designation: "Senior Lecturer",
    image: hamsiniImage,
    description:
      "Dr. Pavithra Dhandapani, MDS, pursued her post graduation from Ragas Dental College and Hospital. She has 4 years of teaching experience in Madha Dental College & Hospital. She has 10 publications in National and International Journals. Dr. Hamsini’s academic interest is focused on Oral Oncology and Forensic Odontology.",
  },
  {
    name: "Dr. R. Rajashree Ravindran, MDS",
    designation: "Senior Lecturer",
    image: rajashreeImage,
    description:
      "Dr. A. I. Samu Fathima M.D.S,MBA, had completed her post-graduation from Madha Dental College and Hospital and has total teaching experience of 4 years. She has 10 publications in indexed journals. She holds lifetime membership in both IAFO (Indian association of forensic Odontology) and IDA (Indian Dental Association). Her core areas of research interests and academic pursuit focus on the evolving frontiers of forensic odontology and cancer genetics, combining clinical expertise with advanced diagnostic science to contribute to dental education.",
  },
  {
     name: "Dr. Aayisha Neloufar M.H, MDS",
    designation: "Senior Lecturer",
    image: aayishaImage,
    description:
      "Dr. Aayisha Neloufar .M.H, MDS, has completed her postgraduation from Madha Dental College and Hospital. She was honored with Gold Medal by The Tamil Nadu Dr. M.G.R. Medical University for topping her post graduation. Her areas of professional interest include Oral Cancer, Oral Potentially Malignant Disorders (OPMDs), Forensic Dentistry, and Dental Laboratory Techniques.",
  },
];

const outreach = [
  {
    title: "Rehabilitation Centre Postings",
    description:
      "PGs actively participate in regular rehabilitation-centre postings, providing oral screening, identifying pathological conditions, and assessing oral health needs of residents.",
    icon: HeartPulse,
  },
  {
    title: "Adyar Cancer Institute Postings",
    description:
      "Post graduates gain clinical exposure to oral and maxillofacial oncology, including screening, diagnosis, and evaluation of oral potentially malignant disorders and malignancies.",
    icon: Stethoscope,
  },
  {
    title: "National Oral Maxillofacial Pathology Day",
    description:
      "Marked with specific activities that highlights the importance of oral health and overall health. However, we consider every single day as OM&R day through dedicated patient care.",
    icon: BookOpen,
  },
];

export default function OralPathology() {
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
              Oral & Maxillofacial Pathology
            </h1>

            <p className="mt-6 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-700 sm:text-[17px]">
              Dentistry’s diagnostic specialty for the microscopic and
              laboratory-based evaluation of diseases affecting the oral
              cavity and maxillofacial region, providing comprehensive tissue
              diagnosis, clinicopathological correlation, and identification
              of benign, malignant, and inflammatory disorders to guide
              appropriate treatment and specialized care.
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none">
          <span className="font-['Cormorant_Garamond'] text-[150px] font-semibold leading-none text-blue-50/70 sm:text-[200px]">
            OMP
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
                Microscopic Diagnosis &
                <br />
                Precision Care
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
                  Oral & Maxillofacial Pathology is dentistry’s diagnostic
                  specialty for the microscopic and laboratory-based
                  evaluation of diseases affecting the oral cavity and
                  maxillofacial region, providing comprehensive tissue
                  diagnosis, clinicopathological correlation, and
                  identification of benign, malignant, and inflammatory
                  disorders to guide appropriate treatment and specialized
                  care.
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
                  data-aos-delay={index * 150}
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