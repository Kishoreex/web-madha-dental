import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Microscope,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Users,
  GraduationCap,
  Scan,
  Activity,
  Droplets,
  Zap,
  Camera,
  HeartHandshake,
  School,
  BookOpen,
} from "lucide-react";

// Faculty Images
import susilaAnandImage from "../../assets/images/departments/conservative-dentistry/susila-anand.jpg";
import veronicaImage from "../../assets/images/departments/conservative-dentistry/veronica-arunakumari.jpg";
import preethiImage from "../../assets/images/departments/conservative-dentistry/preethi-o-k.jpg";
import arvindImage from "../../assets/images/departments/conservative-dentistry/arvind-kumar.jpg";
import ragaviImage from "../../assets/images/departments/conservative-dentistry/ragavi.jpg";
import kingstonImage from "../../assets/images/departments/conservative-dentistry/kingston.jpg";
import jayanthiImage from "../../assets/images/departments/conservative-dentistry/jayanthi.jpg";
import nikithaImage from "../../assets/images/departments/conservative-dentistry/nikitha-khalla.jpg";
import joyShobaImage from "../../assets/images/departments/conservative-dentistry/joy-shoba.jpg";
import preethaImage from "../../assets/images/departments/conservative-dentistry/preetha.jpg";
import joshilImage from "../../assets/images/departments/conservative-dentistry/joshil-adolf-ebiraj.jpg";
import vivekkananImage from "../../assets/images/departments/conservative-dentistry/vivekkanan.jpg";
import sahilImage from "../../assets/images/departments/conservative-dentistry/sahil-choudhari.jpg";
import praveenImage from "../../assets/images/departments/conservative-dentistry/praveen.jpg";
import shaliniImage from "../../assets/images/departments/conservative-dentistry/shalini-maria-sebastian.jpg";

const focusAreas = [
  {
    title: "Advanced Endodontic Care",
    description:
      "Diagnosis and management of pulpal and periapical diseases using contemporary endodontic protocols, rotary and reciprocating instrumentation, advanced irrigation strategies, magnification, and three-dimensional obturation techniques.",
    icon: Activity,
  },
  {
    title: "Advanced & Complex Endodontic Management",
    description:
      "Comprehensive management of complex endodontic conditions, endodontic microsurgery, conventional periapical surgical procedures, non-surgical lesion management, regenerative endodontic therapies, and advanced tooth-preservation strategies, integrating contemporary techniques and technology for enhanced treatment predictability and long-term retention of natural teeth.",
    icon: Microscope,
  },
  {
    title: "Aesthetic & Minimally Invasive Dentistry",
    description:
      "Aesthetic rehabilitation through direct and indirect adhesive procedures, anterior restorations, diastema closure, tooth reshaping, bleaching, and minimally invasive treatment approaches with emphasis on conservation of natural tooth structure.",
    icon: Sparkles,
  },
];

const technology = [
  {
    title: "Operating Microscopes",
    description:
      "Operating microscopes and dental magnification for enhanced visualization and precision during clinical procedures.",
    icon: Scan,
  },
  {
    title: "Rotary & Reciprocating Systems",
    description:
      "Contemporary rotary and reciprocating endodontic systems for advanced root canal preparation.",
    icon: Activity,
  },
  {
    title: "Electronic Apex Locators",
    description:
      "Electronic apex locator technology supporting accurate working-length determination during endodontic treatment.",
    icon: Zap,
  },
  {
    title: "Advanced Irrigation",
    description:
      "Advanced irrigation and activation systems together with ultrasonic instrumentation for effective canal cleaning.",
    icon: Droplets,
  },
  {
    title: "Thermoplasticized Obturation",
    description:
      "Thermoplasticized obturation techniques supporting three-dimensional filling of prepared root canals.",
    icon: Stethoscope,
  },
  {
    title: "Digital Imaging & CBCT",
    description:
      "Digital radiography and Cone Beam Computed Tomography (CBCT) for detailed two-dimensional and three-dimensional assessment.",
    icon: Camera,
  },
  {
    title: "Adhesive & Aesthetic Systems",
    description:
      "Contemporary adhesive and aesthetic restorative systems supporting minimally invasive restorative dentistry.",
    icon: Sparkles,
  },
  {
    title: "Laser-Assisted Treatment",
    description:
      "Laser-assisted and technology-supported treatment modalities incorporated into contemporary clinical care.",
    icon: Zap,
  },
];

const pillars = [
  {
    title: "Student-Centric Learning",
    description:
      "To transform theoretical knowledge into clinical competence through supervised hands-on training, case-based learning, advanced clinical demonstrations, seminars, journal clubs, and exposure to contemporary technologies and treatment protocols.",
    icon: GraduationCap,
  },
  {
    title: "Research & Innovation",
    description:
      "To cultivate a robust research ecosystem that encourages faculty and postgraduate students to explore emerging restorative materials, minimally invasive dentistry, regenerative endodontics, advanced endodontic technologies, biomaterials, and evidence-based treatment strategies.",
    icon: Microscope,
  },
  {
    title: "Patient Safety & Quality Care",
    description:
      "To uphold the highest standards of infection control, clinical safety, ethical practice, pain management, and patient-centred care while maintaining a commitment to continuous quality improvement.",
    icon: ShieldCheck,
  },
  {
    title: "Interdisciplinary Collaboration",
    description:
      "To promote collaborative management of complex cases through interaction with allied dental and medical specialties, ensuring comprehensive diagnosis and integrated treatment planning.",
    icon: Users,
  },
];

const faculty = [
  {
    name: "Dr. Susila Anand",
    qualification: "MDS, PhD",
    designation: "Professor and Head",
    image: susilaAnandImage,
    description:
      "Dr. V. Susila Anand completed her BDS and MDS from Government Dental College, Chennai, and earned her Ph.D. from IIT Madras. With over 30 years of academic and clinical experience across premier dental institutions in Chennai and an international stint, she has more than 45 publications, 4 patents and textbook chapters. She has guided over 70 postgraduate students and delivered numerous guest lectures at national and international forums. Her research interests include dental materials, endodontic irrigation, natural products, and minimally invasive dentistry. Passionate about indigenous innovation and making India self-reliant in dental technology, she has developed a shrink-free composite with a granted patent and a bioactive cement for which the patent has been published and is currently under grant processing.",
  },
  {
    name: "Dr. Veronica Arunakumari",
    qualification: "MDS",
    designation: "Professor",
    image: veronicaImage,
    description:
      "Dr. Veronica Aruna Kumari completed her BDS at Ambedkar Dental College, Bangalore, and her MDS at Sri Ramachandra Dental College, Chennai, and is currently pursuing her Ph.D. at Bharath University with over 15 years of clinical, academic, and research experience. She has published 45+ papers in journals such as the Journal of Endodontics and Clinical Oral Investigations, among others, and holds a patent for a bioactive dental cement based on mineral trioxide aggregate. Her research focuses on bioceramics, biocompatibility, and in vivo evaluation of dental biomaterials. Dr. Kumari has mentored postgraduate students, held faculty and consultant roles at Saveetha Dental College, Apollo, and Appaswamy Hospitals, and presented at conferences including the 12th IFEA World Endodontic Conference, ISDT, and ConsAsia.",
  },
  {
    name: "Dr. Preethi O K",
    qualification: "MDS",
    designation: "Reader",
    image: preethiImage,
    description:
      "Dr. Preethi, BDS, MDS, completed her undergraduate and postgraduate studies from SRM Dental College, Ramapuram, Chennai. She has presented scientific papers at various national and international conferences, contributing to academic and professional development in the field of Conservative Dentistry and Endodontics. Her field of interest is contemporary clinical and academic advancements in Conservative Dentistry and Endodontics.",
  },
  {
    name: "Dr. Arvind Kumar D",
    qualification: "MDS",
    designation: "Reader",
    image: arvindImage,
    description:
      "Dr. D. Aravind Kumar, BDS, MDS, completed his postgraduate studies from Ragas Dental College & Hospital under Dr. M.G.R. Medical University. With 6 years and 6 months of teaching experience, he is actively involved in academic teaching, clinical training, and student mentoring. He has 6 publications in indexed journals, contributing to the field of Conservative Dentistry and Endodontics. His field of interest is Aesthetic Dentistry and Geriatric Endodontics, with a focus on contemporary clinical approaches and specialized endodontic care for elderly patients.",
  },
  {
    name: "Dr. Ragavi P",
    qualification: "MDS",
    designation: "Reader",
    image: ragaviImage,
    description:
      "Dr. Ragavi, BDS, MDS, completed her BDS from Saveetha Dental College in 2007 and postgraduate studies from SRM Dental College, Ramapuram. She has several national and international publications and has presented at national and international conferences, receiving Best Paper Awards at national conferences. Her field of interest is recent advancements in Conservative Dentistry and Endodontics.",
  },
  {
    name: "Dr. Kingston C",
    qualification: "MDS",
    designation: "Reader",
    image: kingstonImage,
    description:
      "Dr. Kingston C, MDS, completed his postgraduate studies from Rajas Dental College and Hospital, Tirunelveli, under Dr. MGR Medical University. He has over 8 years of teaching experience, with 16 publications, 2 patents, and 4 book chapters to his credit. He is an invited speaker at various national and international scientific forums and has presented research papers at several national and international conferences. His field of interest includes Esthetic Dentistry and Endodontics.",
  },
  {
    name: "Dr. Jayanthi G",
    qualification: "MDS",
    designation: "Senior Lecturer",
    image: jayanthiImage,
    description:
      "Dr. Jayanthi G, M.D.S, completed her postgraduate studies from Adhiparasakthi Dental College and Hospital and has 3.5 years of academic and clinical experience and currently pursuing Ph.D. She has 8 publications in indexed journals. She was awarded with Best Paper in CEATALENT 2020, in 36th IACDE National Conference 2021 and also got best poster in World dental and oral health congress in 2021. Her field of interest is Clinical Endodontics, Endodontic Retreatment and Regenerative Endodontics.",
  },
  {
    name: "Dr. Nikitha Khalla",
    qualification: "MDS",
    designation: "Senior Lecturer",
    image: nikithaImage,
    description:
      "Dr. Nikhita Kalla, BDS, MDS, completed her BDS and postgraduate studies from G. Pulla Reddy Dental College & Hospital, Vijayawada and Kurnool, respectively. She has 2 years and 5 months of academic and clinical experience and has 5 publications in the field of Endodontics. Her field of interest include Minimally Invasive Endodontics, with a focus on contemporary advancements in endodontic treatment and research.",
  },
  {
    name: "Dr. Joy Shoba",
    qualification: "BDS, MDS",
    designation: "Senior Lecturer",
    image: joyShobaImage,
    description:
      "Dr. Joy Shoba, BDS, MDS, completed her BDS from Ragas Dental College, Chennai, and her MDS in Conservative Dentistry and Endodontics from Sri Ramakrishna Dental College, Coimbatore. She has presented scientific papers at several national and international conferences and has received multiple accolades, including First Prize at the 8th CEAT PG Colloquium and Second Prizes at the 22nd and 23rd IACDE National PG Conventions. She has published research papers in both indexed and non-indexed journals. Her areas of interest are Management of complex Endodontic cases, with a focus on contemporary clinical approaches and advanced endodontic treatment.",
  },
  {
    name: "Dr. Preetha G",
    qualification: "BDS, MDS",
    designation: "Senior Lecturer",
    image: preethaImage,
    description:
      "Dr. G. Preetha, BDS, MDS, completed her BDS from Vinayaka Missions Sankarachariyar Dental College & Hospital, securing the University Third Rank, and her postgraduate studies from Sri Ramachandra Dental College & Hospital, Chennai. She was a Gold Medalist and Best Outgoing Student during her MDS. She has published research articles in international journals and has presented papers at national and posters at international conferences. Her field of interest include Regenerative Endodontics, with a focus on revitalization of immature teeth with necrotic pulps using stem cells and scaffolds.",
  },
  {
    name: "Dr. Joshil Adolf Ebiraj S",
    qualification: "MDS",
    designation: "Senior Lecturer",
    image: joshilImage,
    description:
      "Dr. Joshil Adolf, BDS, MDS, completed his undergraduate studies from Sree Balaji Dental College & Hospital, Chennai, and postgraduate studies from Madha Dental College & Hospital, Chennai. He has presented at national and international conferences. His professional interests include Minimally Invasive Endodontics, Aesthetic Dentistry, and contemporary advancements in Conservative Dentistry and Endodontics. His field of Interest include Minimally Invasive Endodontics, Aesthetic Dentistry, and Contemporary Endodontics.",
  },
  {
    name: "Dr. Vivekkanan C",
    qualification: "BDS, MDS",
    designation: "Senior Lecturer",
    image: vivekkananImage,
    description:
      "Dr. Vivekkanan C, BDS, MDS, completed his undergraduate studies from JKKN Dental College & Hospital and his postgraduate studies from Madha Dental College & Hospital, Chennai, specializing in Conservative Dentistry and Endodontics. He is actively involved in academic teaching and clinical practice, with an interest in contemporary approaches to restorative and endodontic treatment. His area of interest are Conservative Dentistry and Endodontics, with a focus on contemporary restorative techniques, aesthetic dentistry, and advancements in endodontic treatment.",
  },
  {
    name: "Dr. Sahil Choudhari",
    qualification: "BDS, MDS",
    designation: "Senior Lecturer",
    image: sahilImage,
    description:
      "Dr. Sahil, BDS, MDS, is a specialist in Conservative Dentistry and Endodontics and a Gold Medalist in his postgraduate studies from Saveetha Dental College and Hospital, Chennai. He has received several accolades, including a prestigious national research award, and has over 50 publications in indexed journals. He is a Fellow of the Pierre Fauchard Academy, USA, and is currently pursuing his Ph.D. He is also recognized for his expertise in dental photography and conducts workshops on dental photography, rubber dam isolation, and teeth whitening across India. His field of interest are Conservative Dentistry and Endodontics, with a focus on dental photography, minimally invasive clinical practice, rubber dam isolation, and aesthetic dentistry.",
  },
  {
    name: "Dr. Praveen R",
    qualification: "BDS, MDS",
    designation: "Senior Lecturer",
    image: praveenImage,
    description:
      "Dr. Praveen BDS, MDS, completed his undergraduate studies from Saveetha Dental College and postgraduate studies from Meenakshi Ammal Dental College, Chennai. He has presented at national and international conferences and has delivered CDE lectures through the Indian Dental Association (IDA). His area of interest is Minimally Invasive Endodontics.",
  },
  {
    name: "Dr. Shalini Maria Sebastian",
    qualification: "BDS",
    designation: "Lecturer",
    image: shaliniImage,
    description:
      "Dr. Shalini Maria Sebastian, BDS, is a dedicated academician and educator committed to excellence in teaching, clinical training, student mentoring, and academic development. She completed her undergraduate studies from Ragas Dental College, Chennai, and has been actively involved in nurturing and mentoring students at Madha Dental College since 2022. Her approach to dental education emphasizes evidence-based learning, ethical clinical practice, and the development of competent and compassionate dental professionals. Her field of interest include Dental Education, Clinical Training, Student Mentoring, and Evidence-Based Dentistry.",
  },
];

const outreach = [
  {
    title: "Community Oral Health Programs",
    description:
      "The department participates in oral health awareness and screening initiatives aimed at promoting prevention of dental caries, early diagnosis of dental diseases, preservation of natural teeth, and timely access to dental care.",
    icon: HeartHandshake,
  },
  {
    title: "School Oral Health Initiatives",
    description:
      "Interactive educational and screening programmes are conducted to promote oral hygiene, dietary awareness, caries prevention, and early identification of dental problems among children.",
    icon: School,
  },
  {
    title: "Dental Trauma Awareness",
    description:
      "Community education is provided regarding prevention of dental trauma and the importance of immediate professional intervention following traumatic dental injuries.",
    icon: ShieldCheck,
  },
  {
    title: "Preventive & Tooth-Preservation Awareness",
    description:
      "Public awareness activities emphasize the importance of preserving natural teeth through preventive care, early diagnosis, minimally invasive treatment, and appropriate endodontic intervention.",
    icon: Stethoscope,
  },
];

export default function ConservativeDentistry() {
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

            <h1 className="font-['Cormorant_Garamond'] text-[40px] font-semibold leading-tight text-neutral-900 sm:text-[56px]">
              Conservative Dentistry
              <br />
              & Endodontics
            </h1>

            <p className="mt-6 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-700 sm:text-[17px]">
              Preserving natural dentition through comprehensive diagnosis,
              minimally invasive treatment, aesthetic rehabilitation, pain
              management, and advanced endodontic care.
            </p>

          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="relative overflow-hidden bg-white py-12">

        <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none">
          <span className="font-['Cormorant_Garamond'] text-[150px] font-semibold leading-none text-blue-50/70 sm:text-[210px]">
            CDE
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
                Preserving Natural Teeth
                <br />
                Through Excellence
              </h2>

              <div className="mt-6 flex items-center gap-2">
                <div className="h-[2px] w-16 bg-blue-700" />
                <div className="h-[2px] w-6 bg-amber-400" />
              </div>

            </div>

            <div className="border-l-2 border-blue-100 pl-7">

              <p className="font-['Montserrat'] text-[14px] leading-8 text-neutral-700 sm:text-[17px]">
                The Department of Conservative Dentistry & Endodontics is
                committed to the preservation of natural dentition through
                comprehensive diagnosis, minimally invasive treatment,
                aesthetic rehabilitation, alleviation of dental pain and
                advanced endodontic care. The department integrates
                evidence-based clinical practice, contemporary technology,
                academic excellence, and research-driven innovation to provide
                predictable, patient-centred, state-of-the-art dental care.
              </p>

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
              Clinical Areas of Focus
            </h2>

          </div>

          <div className="grid gap-6 lg:grid-cols-3">

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

      {/* ================= TECHNOLOGY ================= */}
      <section className="bg-white py-16">
        <div className="container-custom">

          <div className="mb-12">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Advanced Technology & Infrastructure
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Contemporary Technology
            </h2>

            <p className="mt-5 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-600 sm:text-[16px]">
              The department integrates contemporary technology into clinical
              training and patient care.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {technology.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
                  className="rounded-2xl border border-neutral-200 bg-white p-6"
                >

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-3 font-['Cormorant_Garamond'] text-[24px] font-semibold leading-tight text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="font-['Montserrat'] text-[13px] leading-6 text-neutral-600">
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

          <div className="grid gap-6 md:grid-cols-2">

            {pillars.map((item, index) => {
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
                data-aos-delay={(index % 2) * 100}
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

                    <h3 className="font-['Cormorant_Garamond'] text-[28px] font-semibold leading-tight text-neutral-900">
                      {member.name}
                    </h3>

                    <p className="mt-1 font-['Montserrat'] text-[12px] font-semibold uppercase tracking-[0.14em] text-blue-700">
                      {member.qualification}
                    </p>

                    <p className="mt-1 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      {member.designation}
                    </p>

                    <p className="mt-5 font-['Montserrat'] text-[13px] leading-6 text-neutral-600 sm:text-[14px]">
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
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">

          <div className="mb-12">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Community Outreach & Extension Activities
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Preserving Natural Teeth Beyond the Clinic
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

          {/* National Day */}
          <div
            data-aos="fade-up"
            className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/50 p-8"
          >

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700">
                <BookOpen className="h-6 w-6" />
              </div>

              <div>

                <h3 className="font-['Cormorant_Garamond'] text-[29px] font-semibold text-neutral-900">
                  National Conservative Dentistry & Endodontics Day
                </h3>

                <p className="mt-3 font-['Montserrat'] text-[13px] leading-7 text-neutral-700 sm:text-[15px]">
                  The department observes relevant awareness activities to
                  highlight the importance of preserving natural teeth,
                  preventing tooth loss, and promoting modern conservative and
                  endodontic treatment approaches.
                </p>

                <p className="mt-3 font-['Montserrat'] text-[13px] italic leading-7 text-neutral-600 sm:text-[15px]">
                  Every day is a day dedicated to preserving natural teeth
                  through compassionate, evidence-based patient care.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}