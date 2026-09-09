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
} from "lucide-react";
import kavithaImage from "../../assets/images/departments/oral-medicine/kavitha.jpg";
import nivedithaImage from "../../assets/images/departments/oral-medicine/niveditha.jpg";
import arivuselviImage from "../../assets/images/departments/oral-medicine/arivuselvi.jpg";
import pavithraImage from "../../assets/images/departments/oral-medicine/pavithra.jpg";
import samuFathimaImage from "../../assets/images/departments/oral-medicine/samu-fathima.jpg";
import deviImage from "../../assets/images/departments/oral-medicine/devi.jpg";

const faculty = [
 {
  name: "Dr. M. Kavitha, MDS",
  designation: "Professor and Head",
  image: kavithaImage,
  description:
      "Dr. M. Kavitha M.D.S., has completed her post-graduation from the Government Dental College & Research Institute, Karnataka and has total teaching experience of 12 years and 5 months. She has 40 publications in indexed journals with a high impact factor, reviewer of various national and international journals, has 2 patents and 2 book chapters. She is a renowned invited speaker at various national scientific deliberations and has presented scientific papers at national conferences. Her field of interest are Salivary gland diseases and Radiographic differential diagnosis.",
  },
{
  name: "Dr. Niveditha.B, MDS",
  designation: "Reader",
  image: nivedithaImage,
  description:
      "Dr. Niveditha.B MDS, has completed her post graduation in Oral Medicine and Radiology from Ragas Dental College and Hospital with 8 years of teaching experience. She has 4 book chapters to her credit. She has one patent, over 30 publications and reviewer of various national and International journals. She has also delivered guest lectures in various colleges and presented papers at national conferences. Her academic interest is oriented towards Orofacial pain and TMJ disorders.",
  },
  {
  name: "Dr. M. Arivuselvi, MDS",
  designation: "Reader",
  image: arivuselviImage,
  description:
      "Dr. M. Arivuselvi, is an MDS graduate from Raja Muthiah Dental College & Hospital, Annamalai University with 5 years teaching experience in Madha Dental College & Hospital. Her academic interest focuses on Temporomandibular Joint Disorders. She has authored several publications in national and international journals, contributing to evidence-based practice in oral medicine and radiology.",
  },
 {
  name: "Dr. Pavithra Dhandapani, MDS",
  designation: "Senior Lecturer",
  image: pavithraImage,
  description:
      "Dr. Pavithra Dhandapani, MDS, pursued her post graduation in Oral Medicine and Radiology from Vivekanandha Dental College and Hospital with 3 years 3 months of teaching experience in Madha Dental College & Hospital. She has authored 12 publications in indexed journals with high impact factor and is credited with 1 patent. Dr. Pavithra’s academic interest is focused on Oral Potentially Malignant Disorders.",
  },
 {
  name: "Dr. A. I. Samu Fathima, MDS",
  designation: "Senior Lecturer",
  image: samuFathimaImage,
  description:
      "Dr. A. I. Samu Fathima M.D.S, had completed her post-graduation from the Tamil Nadu Government Dental College and Hospital and has total teaching experience of 3 years. She has 10 publications in indexed journals. Her areas of interest include the early non-surgical intervention of Oral Potentially Malignant Disorders and Head & Neck Diagnostic Radiology (CT & MRI).",
  },
 {
  name: "Dr. Devi S, MDS",
  designation: "Senior Lecturer",
  image: deviImage,
  description:
      "Dr. Devi S, MDS, completed her postgraduate degree from The TN Dr. MGR Medical University, Chennai. She has published research articles in both national and international journals and she has 1 book chapter and 1 patent. Her academic interests include oral mucosal lesions, diagnostic imaging and advancements in CBCT.",
  },
];

const focusAreas = [
  {
    title: "Diagnostics & Care",
    description:
      "Non-surgical management of mucosal lesions, oral cancer, TMJ/salivary disorders, and orofacial pain using advanced modalities like Laser and TENS.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Radiology",
    description:
      "Diagnostic imaging using modern technologies, including Cone Beam Computed Tomography (CBCT).",
    icon: Scan,
  },
  {
    title: "Specialized Care",
    description:
      "Oral diagnosis of systemic conditions, tailored care for medically compromised and geriatric patients.",
    icon: HeartPulse,
  },
  {
    title: "Prevention & Early Detection",
    description:
      "Tobacco Cessation Counseling (TCC) and early genetic/biomarker screening via non-invasive salivary swabbing.",
    icon: ShieldCheck,
  },
];

const pillars = [
  {
    title: "Student-Centric",
    description:
      "Translating theoretical knowledge into practical diagnostic and radiologic clinical skills by software in CBCT.",
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
      "To foster a robust research culture among faculty and students that expands diagnostic knowledge, enhances problem-solving capabilities, and advances non-surgical treatment approaches in oral healthcare.",
    icon: Microscope,
  },
];

export default function OralMedicine() {
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
              Oral Medicine & Radiology
            </h1>

           

            <p className="mt-6 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-700 sm:text-[17px]">
              Dentistry's primary diagnostic specialty providing comprehensive
              clinical evaluation, advanced imaging, and non-surgical
              management of oral and maxillofacial disorders prior to
              specialized referral.
            </p>
          </div>
        </div>
      </section>

   {/* Department Overview */}
<section className="relative overflow-hidden bg-white py-12">
  
  {/* Premium Background Watermark */}
  <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none">
    <span className="font-['Cormorant_Garamond'] text-[220px] font-semibold leading-none text-blue-50/70">
      OM&R
    </span>
  </div>

<div
  className="container-custom relative z-10"
  data-aos="fade-up"
>
    <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">

      {/* Left Content */}
      <div>
        <p className="mb-4 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
          Department Overview
        </p>

        <h2 className="font-['Cormorant_Garamond'] text-[38px] font-semibold leading-tight text-neutral-900 sm:text-[48px]">
          Diagnosis, Imaging & Comprehensive Care
        </h2>

        {/* Premium Accent */}
        <div className="mt-6 flex items-center gap-2">
          <div className="h-[2px] w-16 bg-blue-700" />
          <div className="h-[2px] w-6 bg-amber-400" />
        </div>
      </div>

      {/* Right Content */}
      <div className="relative">
        <div className="border-l-2 border-blue-100 pl-7">
          <p className="font-['Montserrat'] text-[14px] leading-8 text-neutral-700 sm:text-[17px]">
            Oral Medicine & Radiology is dentistry’s primary diagnostic
            specialty, providing comprehensive clinical evaluation,
            advanced imaging, and non-surgical management of oral and
            maxillofacial disorders prior to specialized referral.
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
<div
  className="grid gap-6 md:grid-cols-2"
  data-aos="fade-up"
>
 {focusAreas.map((item, index) => {
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

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-neutral-200 p-7">
              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Blood Donation Camp
              </h3>

              <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                Organized yearly in collaboration with The Tamil Nadu Dr.
                M.G.R. Medical University (Department of Transfusion Medicine)
                to promote voluntary blood donation and support lifesaving
                healthcare.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-7">
              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Drug Awareness Program
              </h3>

              <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                Yearly substance abuse prevention education and drug awareness
                rally in coordination with Tambaram Commissionarate police to
                achieve Madha Dental College and Hospital a “drug free
                campus”.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-7">
              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                National OM&R Day
              </h3>

              <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[15px]">
                National OM&R Day is marked on April 24 with specific
                activities highlighting the importance of oral and overall
                health. The department considers every single day as OM&R day
                through dedicated patient care.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}