import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Microscope,
  Users,
  BookOpen,
  GraduationCap,
  Wrench,
  Brain,
  Activity,
  Award,
} from "lucide-react";

import sainathImage from "../../assets/images/departments/orthodontics/sainath.jpg";
import shrinivaasanImage from "../../assets/images/departments/orthodontics/shrinivaasan.jpg";
import catherineImage from "../../assets/images/departments/orthodontics/catherine.jpg";
import anbuImage from "../../assets/images/departments/orthodontics/anbu.jpg";
import naveenImage from "../../assets/images/departments/orthodontics/naveen.jpg";
import ajithkumarImage from "../../assets/images/departments/orthodontics/ajithkumar.jpg";
import ilanchezhianImage from "../../assets/images/departments/orthodontics/ilanchezhian.jpg";
import elamvaluthiImage from "../../assets/images/departments/orthodontics/elamvaluthi.jpg";
import lasingtonImage from "../../assets/images/departments/orthodontics/lasington.jpg";
import premilaImage from "../../assets/images/departments/orthodontics/premila.jpg";
import parvathiImage from "../../assets/images/departments/orthodontics/parvathi.jpg";

const faculty = [
  {
    name: "Dr. M. C. Sainath, M.D.S., M.B.A.",
    designation: "Professor Emeritus",
    image: sainathImage,
    description:
      "Dr. M. C. Sainath, M.D.S., M.B.A., is a distinguished academician, clinician, researcher, and healthcare administrator with over 35 years of professional experience in dentistry, orthodontics, education, and institutional administration. He completed his B.D.S. and M.D.S. from Government Dental College, Madras, and served the institution in various academic and clinical capacities following selection through the Tamil Nadu Public Service Commission. He later joined Madha Dental College & Hospital, where he served as Head of the Department and Principal, and currently serves as Dean and Professor in the Department of Orthodontics and Dentofacial Orthopaedics. He holds an M.B.A. in Hospital Management and a Postgraduate Diploma in Health Science from Annamalai University and has contributed extensively to dental research with over 100 national and international publications. As an academic and institutional leader, his professional focus encompasses academic excellence, clinical competency, research, ethical practice, patient-centred care, and holistic student development.",
  },
  {
    name: "Dr. N R Shrinivaasan, MDS",
    designation: "Professor and Head",
    image: shrinivaasanImage,
    description:
      "Dr. N. R. Shrinivaasan, M.D.S., is a distinguished academician and clinician with over 15 years of teaching experience in Orthodontics and Dentofacial Orthopaedics. He completed his postgraduate training at Sri Ramachandra Dental College, Chennai, and is a certified Lingual Orthodontist with expertise in contemporary aesthetic orthodontic treatment. He has authored and co-authored more than 10 publications in indexed national and international journals, including high-impact journals, and has presented his research at numerous national and international conferences. An invited speaker at scientific forums, his areas of special interest include clear aligner therapy, skeletal anchorage systems, and orthodontic research. He is committed to academic excellence, evidence-based clinical practice, research, and the professional development of students and clinicians.",
  },
  {
    name: "Dr. Catherine Sunitha F, MDS",
    designation: "Professor",
    image: catherineImage,
    description:
      "Dr. Catherine Sunitha F, M.D.S., is an accomplished academician and clinician with 11 years of teaching experience and over a decade of specialized experience in the multidisciplinary management of cleft lip and palate cases. She completed her postgraduate training at Sri Ramachandra Dental College, Chennai, and has contributed to orthodontic education, clinical practice, and research through more than 10 publications in reputed national and international journals. She has delivered guest lectures at various dental institutions and presented scientific papers at national conferences. Her areas of clinical and academic interest include clear aligner therapy, temporomandibular joint disorders, and orthognathic surgery, with a strong commitment to contemporary orthodontic care, evidence-based practice, and the training of students and young professionals.",
  },
  {
    name: "Dr. Anbu V, MDS",
    designation: "Reader",
    image: anbuImage,
    description:
      "Dr. Anbu V, M.D.S., is an accomplished academician. She completed her postgraduate training at Thai Moogambigai Dental College and Hospital and has been actively involved in undergraduate and postgraduate teaching, clinical training, and academic activities. Her primary areas of interest include clear aligner therapy and contemporary orthodontic practice. She has contributed to several national and international journal publications and is currently pursuing a Ph.D. in Dentistry, further strengthening her research and academic expertise. She remains committed to excellence in teaching, clinical practice, research, and the advancement of contemporary orthodontic education and patient care.",
  },
  {
    name: "Dr. Naveen Kumar M, MDS",
    designation: "Reader",
    image: naveenImage,
    description:
      "Dr. Naveen Kumar M, M.D.S., completed his postgraduate training at Saveetha Dental College and is actively involved in undergraduate and postgraduate teaching, clinical training, and academic activities. His areas of interest include orthodontic biomechanics, clear aligner therapy, surgical orthodontics, growth modification appliance therapy, and sports dentistry, with a focus on efficient orthodontic treatment and prevention of sports-related orofacial injuries. He has contributed to several national and international journal publications and remains committed to teaching, clinical excellence, research, and the professional development of students.",
  },
  {
    name: "Dr. Ajithkumar M, MDS",
    designation: "Reader",
    image: ajithkumarImage,
    description:
      "Dr. Ajithkumar M, M.D.S., completed his postgraduate training at K.S.R. Institute of Dental Science and Research and is actively involved in undergraduate and postgraduate teaching, clinical training, and academic activities. His areas of interest include orthodontic biomechanics and functional appliance therapy, with a focus on growth modification and evidence-based orthodontic treatment. He has contributed to several national and international journal publications and remains committed to teaching, clinical excellence, research, and the academic development of students.",
  },
  {
    name: "Dr. Ilanchezhian J, MDS",
    designation: "Senior Lecturer",
    image: ilanchezhianImage,
    description:
      "Dr. Ilanchezhian J, M.D.S., completed his postgraduate training at the same institution and is actively involved in undergraduate teaching, clinical training, and academic activities. His areas of interest include surgical orthodontics and clear aligner therapy, and he is currently pursuing an M.B.A. to further enhance his academic and professional expertise. He remains committed to teaching, clinical excellence, research, and the advancement of contemporary orthodontic care.",
  },
  {
    name: "Dr. Elamvaluthi M, MDS",
    designation: "Senior Lecturer",
    image: elamvaluthiImage,
    description:
      "Dr. Elamvaluthi M, a MDS graduate from SRM Kattankulathur Dental College, Chennai. Currently, he is working as a Senior Lecturer at Madha Dental College and Hospital. He is particularly passionate about research and evidence-based dentistry, and continuously strives to expand his knowledge. He believes in combining clinical excellence, academic teaching, and innovative research to contribute to dentistry. His goal is to grow as a dedicated clinician, educator, and research enthusiast while delivering the highest standard of patient care.",
  },
  {
    name: "Dr. Lasington P Rayen T, MDS",
    designation: "Senior Lecturer",
    image: lasingtonImage,
    description:
      "Dr. Lasington P Rayen T, an MDS graduate in Orthodontics and Dentofacial Orthopaedics, completed both BDS and MDS from Sathyabama Dental College and Hospital, Chennai. Currently, working as an Assistant Professor at Madha Dental College and Hospital. His clinical expertise includes clear aligners, fixed appliances, functional appliances, TAD-assisted procedures, and orthognathic treatment planning. He has a strong interest in orthodontic research, aligners and self-ligation. His goal is to grow as a clinician, educator, and researcher while contributing to quality patient care and orthodontic education.",
  },
  {
    name: "Dr. Premila D, MDS",
    designation: "Senior Lecturer",
    image: premilaImage,
    description:
      "Dr. Premila D, an MDS graduate in Orthodontics and Dentofacial Orthopaedics, completed MDS from Thai Moogambigai Dental College & Hospital, Chennai. Currently, working as an Assistant Professor at Madha Dental College and Hospital with more than two years of experience. Her clinical expertise includes clear aligners, fixed functional appliances, TAD-assisted procedures, and self-ligation. Her goal is to grow as a clinician, educator, researcher, and a good mentor for students.",
  },
  {
    name: "Dr. Parvathi K, MDS",
    designation: "Senior Lecturer",
    image: parvathiImage,
    description:
      "Dr. Parvathi K, an MDS graduate in Orthodontics and Dentofacial Orthopaedics, completed MDS from Madha Dental College and Hospital, Chennai. Currently, working as an Assistant Professor at Madha Dental College and Hospital. Her clinical expertise includes myofunctional appliances, frictionless mechanism, TAD-assisted procedures, and self-ligation. Her goal is to grow as a clinician, educator, researcher, and a good mentor for students.",
  },
];

const focusAreas = [
  {
    title: "Clinical Excellence",
    description:
      "Delivering comprehensive, evidence-based orthodontic and dentofacial orthopaedic care with a focus on optimal function, aesthetics, and long-term stability.",
    icon: Stethoscope,
  },
  {
    title: "Patient-Centred Care",
    description:
      "Providing individualized treatment plans, effective communication, patient education, and a comfortable treatment experience.",
    icon: HeartPulse,
  },
  {
    title: "Early Diagnosis & Interception",
    description:
      "Identifying developing malocclusions and skeletal discrepancies at an early stage and implementing timely preventive and interceptive interventions.",
    icon: ShieldCheck,
  },
  {
    title: "Research & Innovation",
    description:
      "Promoting scientific research, evidence-based practice, technological advancement, and innovation in contemporary orthodontic treatment.",
    icon: Microscope,
  },
  {
    title: "Multidisciplinary Collaboration",
    description:
      "Working collaboratively with other dental and medical specialties to manage complex orthodontic, dentofacial, and craniofacial conditions.",
    icon: Users,
  },
  {
    title: "Community & Preventive Oral Health",
    description:
      "Promoting awareness of malocclusion, oral health, orthodontic needs, and the importance of early consultation within the community.",
    icon: HeartPulse,
  },
];

const pillars = [
  {
    title: "Structured Academic Teaching",
    description:
      "Regular lectures, seminars, case discussions, tutorials, journal clubs, and interactive learning sessions.",
    icon: BookOpen,
  },
  {
    title: "Case-Based Learning",
    description:
      "Comprehensive case discussions to develop clinical reasoning, decision-making, and treatment-planning skills.",
    icon: Brain,
  },
  {
    title: "Research Guidance",
    description:
      "Support for PG dissertations, UG research projects, scientific presentations, publications, and participation in conferences.",
    icon: Microscope,
  },
  {
    title: "Hands-on Training",
    description:
      "Opportunities to develop practical skills in orthodontic procedures, appliance fabrication, wire bending, and contemporary treatment techniques.",
    icon: Wrench,
  },
  {
    title: "Individual Mentoring",
    description:
      "Faculty mentorship to identify academic and clinical needs and provide personalized support for student development.",
    icon: Users,
  },
  {
    title: "Examination Support",
    description:
      "Revision sessions, mock examinations, question discussions, and guidance for university and competency-based assessments.",
    icon: GraduationCap,
  },
  {
    title: "Digital & Learning Resources",
    description:
      "Access to textbooks, journals, clinical guidelines, online resources, and other educational materials to facilitate self-directed learning.",
    icon: BookOpen,
  },
];

export default function Orthodontics() {
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
              Orthodontics & Dentofacial Orthopaedics
            </h1>

            <p className="mt-6 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-700 sm:text-[17px]">
              A specialized dental department dedicated to the diagnosis,
              prevention, interception, and correction of malocclusion,
              dentofacial deformities, and irregularities in the growth and
              development of the teeth, jaws, and facial structures.
            </p>

          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="relative overflow-hidden bg-white py-12">

        {/* Premium Background Watermark */}
        <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none">
          <span className="font-['Cormorant_Garamond'] text-[220px] font-semibold leading-none text-blue-50/70">
            ORTHO
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
                Orthodontic Care for Function, Aesthetics & Harmony
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
                  The Department of Orthodontics and Dentofacial Orthopaedics
                  is a specialized dental department dedicated to the
                  diagnosis, prevention, interception, and correction of
                  malocclusion, dentofacial deformities, and irregularities
                  in the growth and development of the teeth, jaws, and
                  facial structures.
                </p>

                <p className="mt-5 font-['Montserrat'] text-[14px] leading-8 text-neutral-700 sm:text-[17px]">
                  The department provides comprehensive orthodontic care for
                  children, adolescents, and adults, with an emphasis on
                  achieving functional occlusion, facial harmony, dental
                  aesthetics, and long-term oral health.
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

      {/* Student Support */}
      <section className="bg-white py-16">
        <div className="container-custom">

          <div className="mb-12 text-center">

            <p className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Student Support
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold text-neutral-900 sm:text-[46px]">
              Academic & Clinical Development
            </h2>

            <div className="mx-auto mt-4 h-[2px] w-12 bg-blue-700" />

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
                  data-aos="fade-up"
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

      {/* Workshops */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">

          <div
            className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-card sm:p-12"
            data-aos="fade-up"
          >

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-50" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-50" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Award className="h-10 w-10" />
              </div>

              <div>
                <p className="mb-3 font-['Montserrat'] text-[14px] font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Workshops & Continuing Education
                </p>

                <h2 className="font-['Cormorant_Garamond'] text-[36px] font-semibold leading-tight text-neutral-900 sm:text-[44px]">
                  Continuous Learning & Clinical Advancement
                </h2>

                <p className="mt-5 max-w-4xl font-['Montserrat'] text-[14px] leading-7 text-neutral-600 sm:text-[16px]">
                  The Department of Orthodontics and Dentofacial Orthopaedics
                  regularly organizes annual workshops, hands-on training
                  programmes, guest lectures, and continuing dental education
                  (CDE) programmes to promote academic excellence and enhance
                  the clinical skills of undergraduate and postgraduate students.
                </p>

                <p className="mt-4 max-w-4xl font-['Montserrat'] text-[14px] leading-7 text-neutral-600 sm:text-[16px]">
                  These programmes provide participants with opportunities to
                  gain hands-on experience in contemporary orthodontic techniques,
                  interact with renowned experts, and stay updated with the latest
                  advancements in orthodontic diagnosis, treatment planning, and
                  clinical practice.
                </p>

                <p className="mt-4 max-w-4xl font-['Montserrat'] text-[14px] leading-7 text-neutral-600 sm:text-[16px]">
                  The department is committed to creating a dynamic learning
                  environment that encourages continuous professional development,
                  clinical innovation, and evidence-based orthodontic practice.
                </p>
              </div>

            </div>
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

    </main>
  );
}