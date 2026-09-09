import {
  HeartPulse,
  Users,
  ShieldCheck,
  BookOpen,
  Microscope,
  Stethoscope,
  GraduationCap,
  MapPin,
  Megaphone,
} from "lucide-react";
import nandaBalanImage from "../../assets/images/departments/public-health-dentistry/nanda-balan.jpg";
import sugavaneshImage from "../../assets/images/departments/public-health-dentistry/sugavanesh.jpg";
import zohaAbdullahImage from "../../assets/images/departments/public-health-dentistry/zoha-abdullah.jpg";
import rajkumarImage from "../../assets/images/departments/public-health-dentistry/rajkumar.jpg";
import kumareshImage from "../../assets/images/departments/public-health-dentistry/kumaresh.jpg";
import keerthanasreeImage from "../../assets/images/departments/public-health-dentistry/keerthanasree.jpg";
import jerishaImage from "../../assets/images/departments/public-health-dentistry/jerisha.jpg";
const faculty = [
  {
    name: "Dr. Nanda Balan I",
    designation: "Professor & HOD",
    image: nandaBalanImage,
    description:
      "Dr. Nanda Balan I completed his postgraduation from Ragas Dental College, Chennai and has a teaching experience of 12 years 10 months. He has more than 20 publications in PubMed and Scopus indexed National and International Journals and has one patent. Under his leadership, the Department has spearheaded impactful community outreach programmes, fostered a strong culture of research and innovation, successfully securing research grants, pursuing patents and copyrights for innovative academic and research contributions. His fields of interest include Tobacco Cessation, Indices for Oral diseases and Community outreach.",
  },
  {
    name: "Dr. Sugavanesh P, MDS",
    designation: "Reader",
    image: sugavaneshImage,
    description:
      "Dr Sugavanesh P, M.D.S., has completed his post-graduation in Public Health Dentistry from M. S. Ramaiah Dental College and Hospital and has 11 years of teaching experience. He has publications in PubMed and Scopus indexed national and international journals. His key areas of interest are Epidemiology, Research Methodology, and Health Promotion.",
  },
  {
    name: "Dr. Zoha Abdullah, MDS",
    designation: "Reader",
    image: zohaAbdullahImage,
    description:
      "Dr. Zoha Abdullah completed her postgraduation from Saveetha Dental College, Chennai and has a teaching experience of 8 years 10 months. She has 20 publications in PubMed and Scopus indexed National and International Journals, one patent and has authored two book chapters. She has won the Best Paper award at a National level Conference (IAPHD). Her fields of interest include Minimally invasive dentistry, Preventive Dentistry and Epidemiology of Oral diseases.",
  },
  {
    name: "Dr. C. Rajkumar, MDS",
    designation: "Senior Lecturer",
    image: rajkumarImage,
    description:
      "Dr. C. Rajkumar, M.D.S., is a Public Health Dentist, Academician, Researcher, and Clinician with 3 years and 4 months of teaching experience. He completed his postgraduate degree in Public Health Dentistry from Ragas Dental College and Hospital, Chennai. He has publications in PubMed and Scopus-indexed national and international journals and holds patents and copyrights for AI-based dental models. He possesses excellent clinical expertise and is actively involved in guiding postgraduate students. His areas of interest include Epidemiology, Research Methodology, Health Promotion, and AI in Dentistry.",
  },
  {
     name: "Dr. P. Kumaresh, M.D.S.",
    designation: "Senior Lecturer",
    image: kumareshImage,
    description:
      "Dr. P. Kumaresh, M.D.S., completed his postgraduate degree in Public Health Dentistry from Madha Dental College and Hospital and has one year of teaching experience. He has published research articles in indexed national and international journals. His professional interests include conducting dental camps, Epidemiology, Research Methodology, Health Promotion, and Clinical Practice. He is committed to promoting community oral health through clinical practice, academic teaching, and public health initiatives.",
  },
  {
    name: "Dr. Keerthanasree V, MDS",
    designation: "Senior Lecturer",
    image: keerthanasreeImage,

    description:
      "Dr. Keerthanasree V, MDS, completed post-graduation in Public Health Dentistry from Ragas Dental College and Hospital with 3 months of teaching experience. Her academic and research interests focus on preventive dentistry, community-based oral healthcare, and the application of Artificial Intelligence in dentistry. She has publications in national and international journals and has received awards at various conferences and conventions. Her research interests particularly include innovative and technology-driven approaches for early detection and prevention of oral diseases, with a focus on improving accessibility to oral healthcare.",
  },
  {
    name: "Dr. Jerisha G. R, BDS",
    designation: "Lecturer",
    image: jerishaImage,
    description:
      "Dr. Jerisha G. R, BDS is a lecturer in Department of Public Health Dentistry, she is Academician, and Clinician with 9 years of teaching experience. She completed her undergraduate degree from Rajas Dental College and Hospital, Tirunelveli. She has publications in national journals. She possesses excellent clinical expertise, and she is actively involved in guiding undergraduate students.",
  },
 
];

const focusAreas = [
  {
    title: "Community-Based Dental Care",
    description:
      "Delivering comprehensive oral healthcare through community dental camps, outreach programmes, satellite clinics, and mobile dental services for underserved populations. The department emphasizes improving access to preventive and therapeutic dental care while reducing oral health disparities.",
    icon: Users,
  },
  {
    title: "Preventive Dentistry",
    description:
      "Promoting disease prevention through oral health screening, preventive interventions, fluoride-based strategies, sealant programmes, and early identification of dental diseases.",
    icon: ShieldCheck,
  },
  {
    title: "Oral Health Education & Promotion",
    description:
      "Creating awareness about oral hygiene, healthy behaviours, and the relationship between oral health and overall well-being through educational campaigns, workshops, and community programmes.",
    icon: Megaphone,
  },
];

const pillars = [
  {
    title: "Education & Training",
    description:
      "Providing comprehensive undergraduate and postgraduate education in Public Health Dentistry with emphasis on preventive care, field surveys, scientific assessment, and professional ethics.",
    icon: GraduationCap,
  },
  {
    title: "Research Excellence",
    description:
      "Encouraging multidisciplinary research, scientific publications, and evidence-based approaches to address contemporary oral health challenges. Faculty and postgraduate students actively engage in diverse research projects spanning epidemiology, tobacco, preventive dentistry, and public health.",
    icon: Microscope,
  },
  {
    title: "Service to Society",
    description:
      "Serving communities through outreach initiatives, school programmes, special population care, tobacco cessation counselling, and collaborative public health activities.",
    icon: HeartPulse,
  },
];

const outreach = [
  {
    title: "Satellite Clinics & Mobile Dental Services",
    description:
      "Fully operational satellite clinics at Nandambakkam and Anakaputhur provide accessible clinical services and practical training opportunities within the community. The mobile dental clinic extends oral health screening and awareness services to rural and urban populations, especially in areas with limited access to dental care.",
    icon: MapPin,
  },
  {
    title: "School Oral Health Programmes",
    description:
      "The department actively promotes oral health among children through school screening, health education, and periodic treatment services under institutional collaborations. Padma Subramaniam Bala Bhavan School was formally adopted to provide sustained oral healthcare and educational support for students.",
    icon: BookOpen,
  },
  {
    title: "Tobacco & Anti-Drug Awareness Initiatives",
    description:
      "The department organizes public awareness campaigns addressing tobacco use and substance abuse through rallies, educational programmes, oral health screening, and counselling services. Special initiatives such as the Drugs Awareness Rally and World No Tobacco Day programmes reinforce the department's commitment to promoting healthier lifestyles within the community.",
    icon: Stethoscope,
  },
];

export default function PublicHealthDentistry() {
  return (
    <div className="bg-white text-neutral-900">

      {/* HEADER */}
      <section className="bg-neutral-50 pt-28 pb-14">
        <div className="container-custom">
          <div data-aos="fade-up">

            <div className="mb-4 font-['Montserrat'] text-[16px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              Department
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-neutral-900">
              Public Health Dentistry
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-700">
              Advancing oral health through preventive dentistry, research,
              health promotion, and comprehensive community-based care.
            </p>

          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="container-custom">

          <div
            className="grid lg:grid-cols-2 gap-12 items-center"
            data-aos="fade-up"
          >

            <div>
              <div className="mb-4 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.28em] text-blue-700">
                Department Overview
              </div>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-neutral-900">
                Preventive Care, Community Health & Research
              </h2>

              <div className="mt-5 flex gap-2">
                <div className="h-[2px] w-16 bg-blue-600" />
                <div className="h-[2px] w-8 bg-yellow-500" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-2 top-0 text-[120px] font-serif leading-none text-blue-50 select-none">
                PHD
              </div>

              <p className="relative text-[16px] leading-8 text-neutral-700">
                The Department of Public Health Dentistry is dedicated to
                improving oral health through preventive dentistry, research,
                and community-based care. With satellite clinics, mobile dental
                services, and extensive outreach programmes benefiting over
                15,000 patients annually, the department strives to deliver
                equitable and accessible oral healthcare.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CORE FOCUS AREAS */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">

          <div className="mb-10" data-aos="fade-up">
            <div className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              Core Focus Areas
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
              Areas of Community & Clinical Focus
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="rounded-2xl bg-white p-7 shadow-card"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-serif text-2xl text-neutral-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[15px] leading-7 text-neutral-700">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-16 bg-white">
        <div className="container-custom">

          <div className="text-center mb-12" data-aos="fade-up">

            <div className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              Core Pillars
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
              Our Academic & Community Approach
            </h2>

            <div className="mt-5 flex justify-center gap-2">
              <div className="h-[2px] w-16 bg-blue-600" />
              <div className="h-[2px] w-8 bg-yellow-500" />
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-serif text-2xl text-neutral-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-7 text-neutral-700">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* FACULTY */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">

          <div className="mb-10" data-aos="fade-up">

            <div className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              Faculty
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
              Our Faculty
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {faculty.map((member, index) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="rounded-2xl bg-white border border-neutral-200 p-7"
              >

                <div className="flex items-center gap-5 mb-6">

      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-blue-100 bg-white">
  <img
    src={member.image}
    alt={member.name}
    className="h-full w-full object-cover object-top"
  />
</div>

                  <div>
                    <h3 className="font-serif text-2xl text-neutral-900">
                      {member.name}
                    </h3>

                    <p className="mt-1 font-['Montserrat'] text-sm font-semibold uppercase tracking-wider text-blue-700">
                      {member.designation}
                    </p>
                  </div>

                </div>

                <p className="text-[15px] leading-7 text-neutral-700">
                  {member.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* COMMUNITY OUTREACH */}
      <section className="py-16 bg-white">
        <div className="container-custom">

          <div className="text-center mb-12" data-aos="fade-up">

            <div className="mb-3 font-['Montserrat'] text-[15px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              Community Outreach
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">
              Serving the Community
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-neutral-700 leading-7">
              Extending preventive oral healthcare, education, screening, and
              awareness beyond the clinical setting.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {outreach.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="rounded-2xl border border-neutral-200 p-7"
                >

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-serif text-2xl text-neutral-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-7 text-neutral-700">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

    </div>
  );
}