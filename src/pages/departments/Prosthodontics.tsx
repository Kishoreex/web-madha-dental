import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Smile,
  Scan,
  Microscope,
  GraduationCap,
  Stethoscope,
  Users,
  HeartHandshake,
  Sparkles,
  BookOpen,
} from "lucide-react";

// Faculty Images
import anandKumarImage from "../../assets/images/departments/prosthodontics/anand-kumar.jpg";
import sharmilaImage from "../../assets/images/departments/prosthodontics/sharmila-hussain.jpg";
import anandSelvarajImage from "../../assets/images/departments/prosthodontics/anand-selvaraj.jpg";
import sonalImage from "../../assets/images/departments/prosthodontics/sonal-jain.jpg";
import pujaImage from "../../assets/images/departments/prosthodontics/puja-harie-priya.jpg";
import lakshmiPrasannaImage from "../../assets/images/departments/prosthodontics/lakshmi-prasanna.jpg";
import hemalathaImage from "../../assets/images/departments/prosthodontics/hemalatha.jpg";
import suganthiImage from "../../assets/images/departments/prosthodontics/suganthi.jpg";
import pamilaImage from "../../assets/images/departments/prosthodontics/pamila-mary-sabatini.jpg";
import vinithaImage from "../../assets/images/departments/prosthodontics/vinitha.jpg";
import vigneshImage from "../../assets/images/departments/prosthodontics/vignesh-manickam.jpg";
import backerImage from "../../assets/images/departments/prosthodontics/backer-abu-tariq.jpg";
import sandhiaImage from "../../assets/images/departments/prosthodontics/sandhia-sundaram.jpg";
import rathikaImage from "../../assets/images/departments/prosthodontics/rathika.jpg";

const focusAreas = [
  {
    title: "Fixed Prosthodontics",
    description:
      "Comprehensive prosthodontic rehabilitation using crowns, bridges, veneers, and other fixed restorations with emphasis on functional and aesthetic outcomes.",
    icon: Smile,
  },
  {
    title: "Removable Prosthodontics",
    description:
      "Complete and partial denture rehabilitation designed to restore oral function, aesthetics, comfort, and quality of life.",
    icon: HeartHandshake,
  },
  {
    title: "Dental Implantology",
    description:
      "Advanced implant-supported rehabilitation and contemporary implant dentistry with emphasis on treatment planning and long-term functional outcomes.",
    icon: Stethoscope,
  },
  {
    title: "Digital Dentistry",
    description:
      "Integration of digital workflows, digital complete dentures, CAD/CAM technologies, and emerging digital approaches in contemporary prosthodontic treatment.",
    icon: Scan,
  },
  {
    title: "Full Mouth Rehabilitation",
    description:
      "Comprehensive treatment planning and rehabilitation for patients requiring restoration of multiple teeth and overall oral function.",
    icon: Sparkles,
  },
  {
    title: "Maxillofacial Rehabilitation",
    description:
      "Prosthodontic rehabilitation focused on restoring oral and facial function for patients requiring advanced prosthetic care.",
    icon: Stethoscope,
  },
];

const pillars = [
  {
    title: "Clinical Excellence",
    description:
      "Providing comprehensive prosthodontic care with emphasis on precision, aesthetics, function, patient-centred treatment, and contemporary clinical techniques.",
    icon: Stethoscope,
  },
  {
    title: "Research-Oriented",
    description:
      "Promoting research in regenerative medicine, biomaterials, implantology, digital dentistry, and emerging technologies in prosthodontics.",
    icon: Microscope,
  },
  {
    title: "Student-Centric",
    description:
      "Supporting undergraduate and postgraduate students through structured teaching, mentorship, hands-on training, research activities, and skill-based learning.",
    icon: GraduationCap,
  },
];

const faculty = [
  {
    name: "Dr. V. Anand Kumar",
    qualifications: "Professor / Principal",
    image: anandKumarImage,
    description:
      "Dr. V. Anand Kumar is currently serving as Principal and Professor in the Department of Prosthodontics at Madha Dental College & Hospital, Chennai, with 28 years of teaching experience. He is a Fellow of the International College of Oral Implantologists (ICOI) and has an impressive academic record comprising 90 publications, one authored book, five published patents, one granted patent, and one copyright. He has guided/co-guided 70 postgraduate students, served as a PhD guide and external PhD expert, and delivered numerous invited lectures and hands-on programmes at national and state levels. A distinguished professional leader, he currently serves as President of the Indian Prosthodontic Society (2026–present) and has previously held several key positions in the IPS, its Tamil Nadu & Puducherry Branch, the Asian Academy of Prosthodontics, and the Indian Dental Association, including President of the IPS Tamil Nadu & Puducherry Branch and Regional Country Counsellor of the Asian Academy of Prosthodontics." },
  {
    name: "Dr. Sharmila Hussain",
    qualifications: "Professor and Head",
    image: sharmilaImage,
    description:
    "Dr. Sharmila Hussain is a distinguished Prosthodontist and academician with over 23 years of teaching experience. She completed her B.D.S. from Saveetha Dental College in 1995, securing first rank throughout and receiving the Gold Medal as Best Outgoing Student, followed by her M.D.S. from Government Dental College, Chennai, in 2000, where she secured First Rank. She obtained her Ph.D. in Prosthodontics from Bharath University in 2017, specializing in Regenerative Medicine and bone mesenchymal stem cells. She has served as Professor and Head of the Department of Prosthodontics at Madha Dental College and Hospital and as a Specialist at King Fahad Hospital, Saudi Arabia. Her academic contributions include two books, multiple book chapters, over 50 indexed publications, 40+ conference presentations, and numerous invited lectures and hands-on workshops. Her accolades include Best Paper Awards, the Best Research Paper Award, and the Pioneer in Prosthodontics Award from the Indian Dental Association in 2024. She has undergone advanced training at the University of Osaka, Japan, and has developed three patented prosthodontic devices. She is also a Ph.D. guide affiliated with five universities and serves on doctoral committees, with research interests in stem cell technology, dental materials, and geriatric dentistry." },
  {
    name: "Dr. S. Anand Selvaraj",
    qualifications: "Professor",
    image: anandSelvarajImage,
    description:
     "Dr. S. Anand has completed his Bachelor of Dental Surgery (BDS) from SRM Dental College in 2008 and his Master of Dental Surgery (MDS) in Prosthodontics and Crown & Bridge from Saveetha University in 2011. His clinical and academic areas of interest include Full Mouth Rehabilitation, Dental Implants, and Digital Prosthodontics, with a focus on comprehensive treatment planning and contemporary restorative approaches. Dr. Anand has authored a textbook and has various publications in indexed national and international journals."  },
  {
    name: "Dr. Sonal Jain",
    qualifications: "Reader",
    image: sonalImage,
    description:
     "Dr. Sonal Jain is a highly accomplished and dedicated Prosthodontist with an excellent academic record. She completed her Bachelor of Dental Surgery (BDS) from Sharad Pawar Dental College, Wardha. She further pursued her Master of Dental Surgery (MDS) in Prosthodontics from Rungta Dental College and Hospital, Bhilai (Chhattisgarh) in 2018, where she was honored as the University Gold Medallist. She has a keen and passionate interest in Implantology and Full Mouth Rehabilitation. She is highly skilled and detail-oriented, with specialization in veneers, crowns and bridges, known for her precision, patient-centric approach, and commitment to clinical excellence, she continuously strives to deliver high-quality, esthetic, and functional dental care."  },
  {
    name: "Dr. Puja Harie Priya",
    qualifications: "Reader",
    image: pujaImage,
    description:
     "Dr. Puja Harie Priya completed her Bachelor of Dental Surgery from Ragas Dental college and hospital in and MDS from SRM Dental College. Throughout her academic career, she actively participated in numerous national and international conferences, presenting her research and contributing to scientific discussion. She has published multiple research articles in reputed journals and has attended several continuing education programs to further enhance her clinical expertise. She is currently pursuing her PhD." },
  {
    name: "Dr. S. Lakshmi Prasanna",
    qualifications: "Reader",
    image: lakshmiPrasannaImage,
    description:
     "Dr. S.Lakshmi Prasanna, MDS, is a Prosthodontist and Associate Professor at Madha Dental College and Hospital, Chennai. She completed her Bachelor of Dental Surgery (BDS) from Meghana Institute of Dental Sciences, Nizambad, and her Master of Dental Surgery (MDS) in Department of Prosthodontics, Crown and Bridge, from  Sree Balaji Dental College and Hospital. She has one patent, and has authored more than 11 publications in various national and International journals. She also has presented her research work at national and International conferences. Her academic and clinical interests include Implantology, Full mouth Rehabilitation , and Digital dentistry with particular interest in advancing contemporary prosthodontic treatment and patient-centred care." },
  {
    name: "Dr. R. Hemalatha",
    qualifications: "Senior Lecturer",
    image: hemalathaImage,
    description:
    "Dr. Hemalatha MDS, is a Prosthodontist and Associate Professor at Madha Dental College and Hospital, Chennai. She completed her Bachelor of Dental Surgery (BDS) and her Master of Dental Surgery (MDS) in Department of Prosthodontics, Crown and Bridge, from  Saveetha Dental College and Hospital. She has a keen and passionate interest in Implantology and Full Mouth Rehabilitation. She is highly skilled and detail-oriented, with specialization in veneers, crowns and bridges, known for her precision, patient-centric approach, and commitment to clinical excellence, she continuously strives to deliver high-quality, esthetic, and functional dental care."  },
  {
    name: "Dr. R. Suganthi",
    qualifications: "Senior Lecturer",
    image: suganthiImage,
    description:
      "Dr. Suganthi R, MDS (Prosthodontics), completed her BDS from Tamil Nadu Government Dental College in 2010 and MDS from KLE’s Institute of Dental Sciences in 2018 and is currently pursuing a part-time PhD at Saveetha Dental College, Chennai. She has completed NPTEL and SWAYAM courses in scientific research and attended several faculty development programmes and advanced workshops in prosthodontics and dental technology. She has seven indexed national and international publications, presented four scientific papers at national IPS conferences, and served as a co-mentor and chairperson at the 26th IPS PG Convention. She has completed two research projects and is currently involved in two projects in implant dentistry, with academic interests in prosthodontic rehabilitation, implant-supported prostheses, dental materials, nano-biomedicine, and emerging technologies in dentistry." },
  {
    name: "Dr. M. Pamila Mary Sabatini",
    qualifications: "Senior Lecturer",
    image: pamilaImage,
    description:
    "Dr.Pamila Mary Sabatini M, MDS,DFA. completed her studies from Sri Ramachandra Institute of higher Education and Research. She has published articles in both international and national journals. She also has presented her research work at national and International conferences. Extremely interested and passionate in Prosthodontics and implantology . "  },
  {
    name: "Dr. A. Vinitha",
    qualifications: "Senior Lecturer",
    image: vinithaImage,
    description:
     "Dr. Vinitha.A , MDS, completed her postgraduate training in Prosthodontics and Crown & Bridge from Ragas Dental College and Hospital. She has published articles in both international and national journals. She also has presented her research work at national and International conferences. Her academic and clinical interests include Implantology, Fixed Partial Dentures, and Complete Dentures with particular interest in advancing contemporary prosthodontic treatment and patient-centred care."  },
  {
    name: "Dr. B. Vignesh Manickam",
    qualifications: "Senior Lecturer",
    image: vigneshImage,
    description:
    "Dr. Vignesh Manickam.B, MDS, completed his postgraduate training in Prosthodontics and Crown & Bridge from Madha Dental College and Hospital. His academic interests are focused on Prosthodontics and Crown & Bridge, with a keen interest in clinical dentistry and academic research, and implantology."  },
  {
    name: "Dr. Backer Abu Tariq",
    qualifications: "Senior Lecturer",
    image: backerImage,
    description:
      "Dr. Backer Abu Tariq, MDS, completed his postgraduate training in Prosthodontics and Crown & Bridge from Meenakshi Ammal Dental College and Hospital. He is currently working as a Senior Lecturer at Madha Dental College and Hospital. He has published one research article in an indexed journal and is credited with one patent. His academic and professional interests are focused on Prosthodontics and Crown & Bridge, with a keen interest in clinical dentistry, academic teaching, and research. "  },
  {
    name: "Dr. Sandhia Sundaram",
    qualifications: "Senior Lecturer",
    image: sandhiaImage,
    description:
     "Dr. Sandhia Sundaram.,MDS, completed her postgraduation from AB SHETTY MEMORIAL INSTITUTE OF DENTAL SCIENCES, Mangalore and UG from ANNAMALAI UNIVERSITY. She has published articles in both international and national journals. Her academic and clinical interests include Smile designing,Digital dentistry, Implantology, Fixed Partial Dentures, and Complete Dentures with particular interest in advancing contemporary prosthodontic treatment and patient-centred care."  },
  {
    name: "Dr. Rathika J",
    qualifications: "Senior Lecturer",
    image: rathikaImage,
    description:
     "Dr. Rathika J, MDS, completed her postgraduate training in Prosthodontics and Crown & Bridge from Madha Dental College and Hospital. She has published one article in an indexed journal and is credited with one patent. Her academic interests are focused on Prosthodontics and Crown & Bridge, with a keen interest in clinical dentistry and academic research. "  },
];

const outreach = [
  {
    title: "Geriatric Dental Camps",
    description:
      "The department has conducted geriatric dental camps for the past 10 years, where postgraduate and undergraduate students visit and rehabilitate complete and partial denture patients.",
    icon: HeartHandshake,
  },
  {
    title: "Prosthodontic Awareness Programs",
    description:
      "The department conducts prosthodontic rallies and awareness programs on oral health and prosthodontic rehabilitation on World Prosthodontist Day every year.",
    icon: Users,
  },
];

const academicPrograms = [
  {
    title: "Undergraduate & Postgraduate Training",
    description:
      "Structured teaching for undergraduate and postgraduate students in Prosthodontics with emphasis on clinical excellence, research methodology, and interdisciplinary collaboration.",
    icon: GraduationCap,
  },
  {
    title: "Advanced Certificate Training",
    description:
      "Short-term certificate courses for postgraduates in advanced prosthodontic techniques including implantology, digital dentistry, and regenerative medicine.",
    icon: BookOpen,
  },
  {
    title: "Digital Dentistry Training",
    description:
      "Special training in digital dentistry, digital workflow in implantology, and digital complete dentures.",
    icon: Scan,
  },
];

export default function Prosthodontics() {
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
              Prosthodontics
            </h1>

            <p className="mt-6 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-700 sm:text-[17px]">
              Restoring function, aesthetics, and confidence through advanced
              prosthodontic care, implantology, digital dentistry, and
              comprehensive oral rehabilitation.
            </p>

          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="relative overflow-hidden bg-white py-12">

        <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none">
          <span className="font-['Cormorant_Garamond'] text-[180px] font-semibold leading-none text-blue-50/70 sm:text-[220px]">
            PROS
          </span>
        </div>

        <div
          className="container-custom relative z-10"
          data-aos="fade-up"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">

            <div>
              <p className="mb-4 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
                Department Overview
              </p>

              <h2 className="font-['Cormorant_Garamond'] text-[38px] font-semibold leading-tight text-neutral-900 sm:text-[48px]">
                Restoring Function,
                <br />
                Form & Confidence
              </h2>

              <div className="mt-6 flex items-center gap-2">
                <div className="h-[2px] w-16 bg-blue-700" />
                <div className="h-[2px] w-6 bg-amber-400" />
              </div>
            </div>

            <div className="relative">
              <div className="border-l-2 border-blue-100 pl-7">
                <p className="font-['Montserrat'] text-[14px] leading-8 text-neutral-700 sm:text-[17px]">
                  The Department of Prosthodontics provides comprehensive
                  prosthodontic education, clinical services, research,
                  postgraduate training, and advanced skill development. The
                  department focuses on fixed and removable prostheses, dental
                  implants, full mouth rehabilitation, digital dentistry,
                  geriatric dentistry, and maxillofacial rehabilitation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE FOCUS ================= */}
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

      {/* ================= ACADEMIC PROGRAMS ================= */}
      <section className="bg-white py-16">
        <div className="container-custom">

          <div className="mb-12">
            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Academic Programs
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Education & Skill Development
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {academicPrograms.map((item, index) => {
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

      {/* ================= CORE PILLARS ================= */}
      <section className="bg-neutral-50 py-16">
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

      {/* ================= FACULTY ================= */}
      <section className="bg-white py-16">
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
                className="rounded-2xl bg-neutral-50 p-7 shadow-card"
              >

                <div className="flex flex-col gap-6 sm:flex-row">

                  <div className="h-40 w-32 shrink-0 overflow-hidden rounded-xl bg-neutral-100">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                    />

                  </div>

                  <div className="flex-1">

                    <div className="mb-4">

                      <h3 className="font-['Cormorant_Garamond'] text-[28px] font-semibold leading-tight text-neutral-900">
                        {member.name}
                      </h3>

                      <p className="mt-1 font-['Montserrat'] text-[12px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                        {member.qualifications}
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

      {/* ================= RESEARCH ================= */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">

          <div className="mb-12">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Research & Innovation
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Advancing Prosthodontic Research
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div
              data-aos="fade-up"
              className="rounded-2xl bg-white p-7 shadow-card"
            >
              <Microscope className="mb-5 h-7 w-7 text-blue-700" />

              <h3 className="mb-4 font-['Cormorant_Garamond'] text-[28px] font-semibold text-neutral-900">
                Research Initiatives
              </h3>

              <ul className="space-y-3 font-['Montserrat'] text-[14px] leading-6 text-neutral-600 sm:text-[15px]">
                <li>• Postgraduate-led projects in regenerative medicine, biomaterials, and implantology.</li>
                <li>• Collaborative research with VIT Vellore, Vel’s Chennai and White Lab Saveetha University.</li>
                <li>• Five patents in the department, with two granted on innovation in prosthodontic devices.</li>
                <li>• More than 30 publications of high-impact articles in indexed journals.</li>
                <li>• MOU with implant companies.</li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="rounded-2xl bg-white p-7 shadow-card"
            >
              <BookOpen className="mb-5 h-7 w-7 text-blue-700" />

              <h3 className="mb-4 font-['Cormorant_Garamond'] text-[28px] font-semibold text-neutral-900">
                Workshops & Conferences
              </h3>

              <ul className="space-y-3 font-['Montserrat'] text-[14px] leading-6 text-neutral-600 sm:text-[15px]">
                <li>• Hands-on workshops designed specifically for postgraduate training.</li>
                <li>• Guest lectures and keynote sessions by eminent faculty.</li>
                <li>• Active participation in IPS, ISDR, and TNIPS conferences.</li>
                <li>• Faculty and postgraduate paper presentations at national and international platforms.</li>
              </ul>
            </div>

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

      {/* ================= STUDENT ENRICHMENT ================= */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">

          <div className="mb-12">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Student Enrichment
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Developing Future Prosthodontists
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-7 shadow-card">
              <GraduationCap className="mb-5 h-7 w-7 text-blue-700" />

              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Mentorship
              </h3>

              <p className="font-['Montserrat'] text-[14px] leading-6 text-neutral-600">
                Mentorship programs for postgraduate students with academic and clinical guidance.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-card">
              <Microscope className="mb-5 h-7 w-7 text-blue-700" />

              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Research Clubs
              </h3>

              <p className="font-['Montserrat'] text-[14px] leading-6 text-neutral-600">
                Research clubs and journal review sessions to encourage scientific learning and critical thinking.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-card">
              <Scan className="mb-5 h-7 w-7 text-blue-700" />

              <h3 className="mb-3 font-['Cormorant_Garamond'] text-[27px] font-semibold text-neutral-900">
                Skill-Based Training
              </h3>

              <p className="font-['Montserrat'] text-[14px] leading-6 text-neutral-600">
                Skill-based training in implantology, CAD/CAM, and digital dentistry, with recognition of student achievements.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}