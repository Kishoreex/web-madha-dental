import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import arunImage from "../../assets/images/departments/pediatric-dentistry/arun.png";
import madhanImage from "../../assets/images/departments/pediatric-dentistry/madhan.png";
import rameshImage from "../../assets/images/departments/pediatric-dentistry/ramesh.png";
import dhivyaImage from "../../assets/images/departments/pediatric-dentistry/dhivya.png";
import dhariniImage from "../../assets/images/departments/pediatric-dentistry/dharini.png";
import bilalSheriffImage from "../../assets/images/departments/pediatric-dentistry/bilal-sheriff.png";
import harishImage from "../../assets/images/departments/pediatric-dentistry/harish.png";
import areefImage from "../../assets/images/departments/pediatric-dentistry/areef.png";
import maryGraceImage from "../../assets/images/departments/pediatric-dentistry/mary-grace.png";
import sinthujaImage from "../../assets/images/departments/pediatric-dentistry/sinthuja.png";
import {
  Baby,
  ShieldCheck,
  Brain,
  Sparkles,
  HeartPulse,
  Users,
  Microscope,
  School,
  HeartHandshake,
  Smile,
} from "lucide-react";

const focusAreas = [
  {
    title: "Preventive Care",
    description:
      "Routine cleanings, fluoride applications, dental sealants, and personalized oral hygiene instructions to prevent early childhood caries (ECC).",
    icon: ShieldCheck,
  },
  {
    title: "Behavior Guidance",
    description:
      "Utilization of age-appropriate communication techniques, nitrous oxide inhalation sedation, and comprehensive treatment under general anesthesia (GA) for anxious or uncooperative patients.",
    icon: Brain,
  },
  {
    title: "Interceptive Orthodontics",
    description:
      "Early diagnosis and management of developing malocclusions, space maintainers, and correction of deleterious oral habits such as thumb-sucking and mouth breathing.",
    icon: Sparkles,
  },
  {
    title: "Specialized Care",
    description:
      "Tailored restorative, endodontic (pulp therapy), and surgical treatments for pediatric patients, as well as specialized care for children with medical complexities and developmental disabilities.",
    icon: HeartPulse,
  },
  {
    title: "Managing Special Health Care Needs",
    description:
      "Dedicated, highly customized dental interventions designed for infants, children, and adolescents with physical, developmental, sensory, behavioral, cognitive, or emotional impairments. This includes adaptive operatory environments, desensitization protocols, and multidisciplinary coordination to ensure safe, compassionate, and stress-free oral healthcare access for vulnerable young patients.",
    icon: HeartHandshake,
  },
];

const pillars = [
  {
    title: "Child-Friendly Environment",
    description:
      "Creating a welcoming, anxiety-free clinic atmosphere designed to alleviate dental fear and foster positive lifelong oral health attitudes.",
    icon: Baby,
  },
  {
    title: "Patient Service & Safety",
    description:
      "Delivering high-quality, compassionate public care under stringent pediatric infection control protocols and child safety guidelines.",
    icon: ShieldCheck,
  },
  {
    title: "Research-Oriented",
    description:
      "Promoting evidence-based pediatric dentistry research among faculty and postgraduates to advance preventive strategies, behavior management techniques, and minimally invasive treatments.",
    icon: Microscope,
  },
];

const faculty = [
{
  name: "Dr. E. Arun, M.D.S",
  designation: "Professor and Head",
  image: arunImage,
    description:
      "Dr. E. Arun has completed his MDS from Ragas Dental College, Tamil Nadu Dr. MGR Medical University. He was the University topper and has a 14-year career dedicated to clinical excellence, teaching, and academic leadership. He has over 30 publications in indexed journals with high impact factors and holds one patent. He is a renowned and frequently invited guest speaker at various dental colleges across the region. His primary fields of clinical and research interest include Cariology—focused on the prevention, diagnosis, and treatment of dental caries—and Pharmacological Behaviour Management.",
  },
{
  name: "Dr. C.G. Madhan, M.D.S",
  designation: "Professor",
  image: madhanImage,
    description:
      "Dr. C. G. Madhan pursued his masters from Ragas Dental College and Hospital, Chennai. He has over 10 years of experience in dental education, clinical practice, and academic administration. He has authored and co-authored more than 15 national and international research publications, including articles published in indexed journals. His research interests include pediatric oral health, preventive dentistry, dental materials, behavior management, and contemporary approaches to pediatric dental care. He has received Best Scientific Paper Presentation Awards at national conferences of the Indian Society of Pedodontics and Preventive Dentistry. He is also a co-inventor of a pediatric syringe design patent registered with the Government of India.",
  },
{
  name: "Dr. V. Ramesh, M.D.S",
  designation: "Reader",
  image: rameshImage,
    description:
      "Dr. V. Ramesh pursued his masters from Rajah Muthiah Dental College and Hospital, Chidambaram. He has over 6 years of experience in dental education, clinical practice, and academic administration. His academic interests include teaching, research, innovation, and evidence-based clinical practice. He has authored 12 publications in reputed high-impact journals, holds 3 copyrights, and has been granted 1 registered design, relating to an innovative disposable biodegradable mouth mirror.",
  },
{
  name: "Dr. S. Dhivya, M.D.S",
  designation: "Reader",
  image: dhivyaImage,
    description:
      "Dr. S. DHIVYA, M.D.S., pursued her post graduation from Vivekanandha Dental College and Hospital. She has over 5 years and 2 of experience in dental education, clinical practice, and academic administration. She has authored 12 publications in reputed high-impact journals and credited with 1 copyright, one patent and has one published book. Her primary fields of clinical and research interest include non-pharmacological behaviour management.",
  },
{
  name: "Dr. V. Dharini, M.D.S",
  designation: "Reader",
  image: dhariniImage,
    description:
      "Dr. V. Dharini has completed her Post Graduation in Pediatric and Preventive Dentistry from Ragas Dental College and Hospital with 4 years of academic and clinical experience. She is actively involved in research, with publications in multiple national and international journals. Her academic interest is oriented towards Pediatric Endodontics and Behaviour management. Dr. Dharini is committed to advancing pediatric dental care while contributing to student education and professional development.",
  },
{
  name: "Dr. Bilal Sheriff, M.D.S",
  designation: "Senior Lecturer",
  image: bilalSheriffImage,
    description:
      "Dr. Bilal Sheriff completed his undergraduate studies (BDS) at SRM Kattankulathur Dental College and Hospital in 2017, followed by his post-graduation (MDS) in Pediatric Dentistry from Madha Dental College and Hospital in 2024. Driven by strong leadership qualities and a deep commitment to social service, Dr. Sheriff actively leads community outreach initiatives to improve accessible dental care alongside his clinical work. As a highly respected clinician and academician, he has built a formidable reputation in pediatric care—successfully performing one of the highest volumes of complex General Anesthesia cases with an unwavering focus on patient safety.",
  },
{
  name: "Dr. S.S. Harish, M.D.S",
  designation: "Senior Lecturer",
  image: harishImage,
    description:
      "Dr. Harish S. S. completed his undergraduate studies (BDS) at Karpaga Vinayaka Dental College and Hospital in 2019, followed by his post-graduation (MDS) in Pediatric Dentistry from Chettinad Dental College and Research Institute in 2020. With a keen interest in comprehensive pediatric dental care, he brings his clinical experience into teaching and mentoring students. He has actively participated in scientific conferences and continuing professional development programs, keeping abreast of advancements in pediatric dentistry. As a clinician and academician, Dr. Harish is committed to delivering quality patient care while contributing to dental education and the professional development of future dental practitioners.",
  },
{
  name: "Dr. Areef Farah Shehani, M.D.S",
  designation: "Senior Lecturer",
  image: areefImage,
    description:
      "Dr. Areef Farah Shehani completed her undergraduate studies (BDS) at K.S.R. Institute of Dental Science and Research, Tiruchengode in 2019, followed by her post-graduation (MDS) in Pediatric and Preventive Dentistry from SRM Kattankulathur Dental College and Hospital in 2024. She is currently pursuing her PhD at Saveetha Dental College and Hospitals, with a research focus on innovative non-pharmacological approaches for pain, anxiety, and behaviour management in children. Her research has been published in international peer-reviewed journals, and she remains actively involved in scientific research, conferences, and academic activities. Her key areas of interest include brainwave entrainment, pediatric dental anxiety and pain management, behaviour management, and evidence-based pediatric dentistry.",
  },
{
  name: "Dr. Mary Grace, M.D.S",
  designation: "Senior Lecturer",
  image: maryGraceImage,
    description:
      "Dr. Mary Grace completed her undergraduate dental education at SRM Dental College, Ramapuram, and obtained her Master’s degree in Pediatric and Preventive Dentistry from Madha Dental College and Hospital in 2024. Her areas of interest include pediatric oral healthcare, preventive dentistry, behaviour management, and comprehensive dental rehabilitation. She has contributed to national and international journals and actively participates in scientific conferences and professional conventions.",
  },
{
  name: "Dr. Sinthuja, M.D.S",
  designation: "Senior Lecturer",
  image: sinthujaImage,
    description:
      "Dr. Sinthuja completed her B.D.S from Indira Gandhi Institute of Dental Sciences (IGIDS), Pondicherry and obtained her MDS in Pediatric and Preventive Dentistry from Mahe Institute of Dental Sciences and Hospital (MINDS), Mahe, Pondicherry. She has one scientific publication and actively participates in pediatric national conferences and conventions. She has clinical experience of handling special health care patients. Her areas of interest include preventive dentistry, special care dentistry and trauma management.",
  },
];

const outreach = [
  {
    title: "School Dental Screening & Health Camps",
    description:
      "Conducted regularly across local primary schools to provide free dental check-ups, oral hygiene education, and distribution of dental kits to underprivileged children.",
    icon: School,
  },
  {
    title: "National Children's Dental Health Month Outreach",
    description:
      "Annual community awareness drives and interactive dental health education programs organized in collaboration with local municipal bodies to promote early oral hygiene awareness among parents and teachers.",
    icon: Smile,
  },
];

export default function PediatricDentistry() {
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
              Pediatric & Preventive Dentistry
            </h1>

            <p className="mt-6 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-neutral-700 sm:text-[17px]">
              A specialized branch dedicated to comprehensive oral health
              care for infants, children, adolescents, and individuals with
              special health care needs, emphasizing early prevention and
              positive dental experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="relative overflow-hidden bg-white py-12">
        {/* Premium Background Watermark */}
        <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none">
          <span className="font-['Cormorant_Garamond'] text-[180px] font-semibold leading-none text-blue-50/70 sm:text-[220px]">
            PPD
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
                Pediatric & Preventive Care
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
                  Pediatric and Preventive Dentistry is a specialized branch
                  dedicated to providing comprehensive oral health care for
                  infants, children, adolescents, and individuals with special
                  health care needs, emphasizing early prevention and positive
                  dental experiences.
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

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Heading */}
                    <h3 className="font-['Cormorant_Garamond'] text-[25px] font-semibold leading-tight text-neutral-900">
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

                  {/* Temporary Faculty Profile */}
           <div className="h-40 w-32 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
  <img
    src={member.image}
    alt={member.name}
    className="h-full w-full object-cover object-top"
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

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Heading */}
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