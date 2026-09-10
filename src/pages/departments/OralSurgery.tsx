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
  Bone,
} from "lucide-react";

import deepakImage from "../../assets/images/departments/oral-maxillofacial-surgery/deepak.jpg";
import satheeshImage from "../../assets/images/departments/oral-maxillofacial-surgery/satheesh.jpg";
import deenadayalanImage from "../../assets/images/departments/oral-maxillofacial-surgery/deenadayalan.jpg";
import karthikImage from "../../assets/images/departments/oral-maxillofacial-surgery/karthik.jpg";
import tharaImage from "../../assets/images/departments/oral-maxillofacial-surgery/thara.jpg";
import georgeImage from "../../assets/images/departments/oral-maxillofacial-surgery/george.jpg";
import abhiramiImage from "../../assets/images/departments/oral-maxillofacial-surgery/abhirami.jpg";
import padmaImage from "../../assets/images/departments/oral-maxillofacial-surgery/padma.jpg";
import mohanaImage from "../../assets/images/departments/oral-maxillofacial-surgery/mohana.jpg";
import shashtiImage from "../../assets/images/departments/oral-maxillofacial-surgery/shashti.jpg";

const focusAreas = [
  {
    title: "Dentoalveolar Surgery & Care",
    description:
      "Comprehensive management of impacted teeth, complicated extractions, odontogenic infections, cysts, benign lesions, and other conditions requiring surgical intervention.",
    icon: Stethoscope,
  },
  {
    title: "Maxillofacial Trauma",
    description:
      "Evaluation and surgical management of facial injuries, including fractures of the mandible, maxilla, zygomatic complex, and other facial bones, with emphasis on restoring function and facial form.",
    icon: Bone,
  },
  {
    title: "Advanced Surgical Care",
    description:
      "Management of complex oral and maxillofacial conditions through modern surgical techniques, including minor and major oral surgical procedures, soft-tissue surgery, and appropriate reconstructive approaches.",
    icon: Scan,
  },
  {
    title: "Oral Pathology & Oncologic Surgery",
    description:
      "Surgical diagnosis and management of potentially malignant and malignant lesions of the oral and maxillofacial region, with appropriate multidisciplinary referral and coordinated care.",
    icon: Microscope,
  },
  {
    title: "Implant & Pre-Prosthetic Surgery",
    description:
      "Surgical procedures supporting implant rehabilitation and restoration of oral function, including appropriate hard- and soft-tissue preparation.",
    icon: HeartPulse,
  },
  {
    title: "Specialized Patient Care",
    description:
      "Tailored surgical management for medically compromised, geriatric, and special-care patients through comprehensive evaluation, risk assessment, and multidisciplinary coordination.",
    icon: ShieldCheck,
  },
];

const pillars = [
  {
    title: "Student-Centric",
    description:
      "Translating theoretical knowledge into practical surgical skills through structured clinical training, case assessment, treatment planning, surgical procedures, and exposure to contemporary maxillofacial surgical techniques.",
    icon: Users,
  },
  {
    title: "Patient Service & Safety",
    description:
      "Delivering quality surgical care with strict adherence to infection-control protocols, patient-safety standards, appropriate surgical planning, and evidence-based clinical practice.",
    icon: ShieldCheck,
  },
  {
    title: "Research-Oriented",
    description:
      "To foster a robust research culture among faculty and students that advances surgical knowledge, improves clinical decision-making, evaluates emerging techniques, and contributes to better outcomes in oral and maxillofacial healthcare.",
    icon: Microscope,
  },
];

const faculty = [
  {
    name: "Dr. Deepak Abraham Pandyan, MDS",
    designation: "Professor & HOD",
    image: deepakImage,
    description:
      "Dr. Deepak Abraham Pandyan has completed his MDS from Ragas Dental College and Hospital and pursued his fellowship in Temporomandibular Disorders and Sleep Apnea. He has specialized in maxillofacial trauma, orthognathic surgery and pathology. His field of interest is disorders of TMJ. He has publications in International PubMed and Scopus indexed journals and holds two patents.",
  },
  {
    name: "Dr. Satheesh C, MDS",
    designation: "Professor",
    image: satheeshImage,
    description:
      "Dr. Satheesh C, MDS, has completed his MDS from Annamalai University and specializes in orthognathic surgery, maxillofacial trauma, benign cysts and tumors, and dental implants. His field of interest is maxillofacial trauma and benign lesions. He has various publications in PubMed and Scopus indexed International and National journals and has one patent.",
  },
  {
    name: "Dr. Deenadayalan N, MDS",
    designation: "Professor",
    image: deenadayalanImage,
    description:
      "Dr. Deenadayalan has completed his MDS from Ragas Dental College and Hospital and pursued his MS in Implantology from Stenberg University and M.Dent from Vienna University, Austria. He specializes in oncology, implantology, laser and facial aesthetics. He has various publications in high impact journals and has two patents.",
  },
  {
    name: "Dr. Karthik K P, MDS",
    designation: "Reader",
    image: karthikImage,
    description:
      "Dr. Karthik KP completed his MDS from Meenatchi Ammal Dental College in 2019. He has pursued fellowship in Craniomaxillofacial Trauma at PGIMS, Rohtak, Fellowship in Hair Transplant and Post Graduate Diploma in Facial Aesthetics. He specializes in maxillofacial trauma, pathology and implants, facial aesthetics and hair transplant. He has done various international and national publications in PubMed and Scopus indexed journals with high impact factor and holds a patent.",
  },
  {
    name: "Dr. Thara Chandra S, MDS",
    designation: "Reader",
    image: tharaImage,
    description:
      "Dr. Thara Chandra S completed her Master of Dental Surgery (MDS) from MES Dental College and Hospital in 2019. She has also completed a diploma in facial aesthetics and minimally invasive facial procedures. Her areas of interest include facial aesthetics and hair transplantation. She has various publications in national and international journals.",
  },
  {
    name: "Dr. George Samyo Stephenson, MDS",
    designation: "Senior Lecturer",
    image: georgeImage,
    description:
      "Dr. George Samyo Stephenson has completed his post graduation from Madha Dental College and Hospital in 2023. His field of interest includes Orthognathic Surgery, Maxillofacial Trauma, Minor Oral Surgical Procedures and Dental Implantology. He has publications in PubMed and Scopus indexed international journals and holds a patent.",
  },
  {
    name: "Dr. Abhirami Srikanth, MDS",
    designation: "Senior Lecturer",
    image: abhiramiImage,
    description:
      "Dr. Abhirami Srikanth has completed her MDS from SRM Institute of Science and Technology in 2023, following which she pursued a fellowship in Oral Oncology in Sri Ramachandra Institute of Higher Education and Research. Her interests include oral cancer, benign pathologies and facial trauma. She has published various research articles in both indexed National and International journals and has also published a book on Treatment Options in Head and Neck Cancer.",
  },
  {
    name: "Dr. Padma Spandhana, MDS",
    designation: "Senior Lecturer",
    image: padmaImage,
    description:
      "Dr. Padma Spandana completed her BDS from Government Dental College & Hospital, Vijayawada and MDS from Ragas Dental College and Hospital. Her field of interests is Trauma, Cleft lip and palate. She has various publications in national and international journals.",
  },
  {
    name: "Dr. Mohana Priya U, MDS",
    designation: "Senior Lecturer",
    image: mohanaImage,
    description:
      "Dr. Mohana Priya U has completed her MDS from Madha Dental College & Hospital, following which she pursued International Fellowship in Aesthetic and Anti Aging Medicine. Her interests include Maxillofacial Trauma, Orthognathic Surgery, Temporomandibular Disorders, Aesthetic Procedures, Dental Implantology and Oral Oncology. She has published various research articles in both indexed National and International journals.",
  },
  {
    name: "Dr. Shashti Balaji S G",
    designation: "Faculty",
    image: shashtiImage,
    description:
      "Dr. Shashti Balaji S G completed his BDS from Sree Balaji Dental Colleges and Hospital, Chennai and MDS from Madha Dental College and Hospital. His field of interests is Implantology and Minor Oral Surgical Procedures. He has various publications in national and international journals.",
  },
];

export default function OralMaxillofacialSurgery() {
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
              Oral & Maxillofacial Surgery
            </h1>

            <p className="mt-6 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-700 sm:text-[17px]">
              A specialized surgical discipline of dentistry dedicated to the
              diagnosis and comprehensive surgical management of diseases,
              injuries, and congenital or acquired conditions affecting the
              oral cavity, jaws, face, and associated structures.
            </p>

          </div>
        </div>
      </section>

      {/* ================= DEPARTMENT OVERVIEW ================= */}
      <section className="relative overflow-hidden bg-white py-12">

        {/* Premium Background Watermark */}
        <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none">
          <span className="font-['Cormorant_Garamond'] text-[220px] font-semibold leading-none text-blue-50/70">
            OMFS
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
                Surgical Care, Trauma &
                <br />
                Maxillofacial Excellence
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
                  Oral & Maxillofacial Surgery (OMFS) is a specialized surgical
                  discipline of dentistry dedicated to the diagnosis and
                  comprehensive surgical management of diseases, injuries, and
                  congenital or acquired conditions affecting the oral cavity,
                  jaws, face, and associated structures. The department provides
                  evidence-based surgical care ranging from routine dentoalveolar
                  procedures to complex maxillofacial interventions, with a
                  strong emphasis on patient safety, functional rehabilitation,
                  and facial aesthetics.
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
              Areas of Clinical Focus
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

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Heading */}
                    <h3 className="font-['Cormorant_Garamond'] text-[27px] font-semibold leading-tight text-neutral-900">
                      {item.title}
                    </h3>

                  </div>

                  {/* Description */}
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
              Our Academic & Clinical Approach
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

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Heading + Description */}
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

      {/* ================= COMMUNITY OUTREACH ================= */}
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

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-neutral-200 p-7">

              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Oral & Maxillofacial Health Awareness
              </h3>

              <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                Conducting awareness initiatives to educate the community
                about oral diseases, facial trauma prevention, early
                recognition of suspicious oral lesions, and the importance of
                timely surgical consultation.
              </p>

            </div>

            <div className="rounded-2xl border border-neutral-200 p-7">

              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Trauma Prevention & Awareness
              </h3>

              <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                Promoting awareness regarding the prevention of facial injuries
                and the importance of immediate and appropriate management of
                maxillofacial trauma.
              </p>

            </div>

            <div className="rounded-2xl border border-neutral-200 p-7">

              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                National OMFS Day
              </h3>

              <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                Marked with dedicated academic, clinical, and awareness
                activities highlighting the vital role of Oral & Maxillofacial
                Surgery in restoring oral function, facial form, and overall
                quality of life.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}