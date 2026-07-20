import { Microscope, BookOpen, FlaskConical } from "lucide-react";

const researchAreas = [
  {
    no: "01",
    title: "Oral Biology and Pathology",
    description:
      "Exploring the underlying mechanisms of oral diseases such as dental caries, periodontal diseases and oral cancer.",
  },
  {
    no: "02",
    title: "Dental Materials Science",
    description:
      "Investigating dental materials to improve durability, aesthetics and biocompatibility.",
  },
  {
    no: "03",
    title: "Oral Health Promotion",
    description:
      "Developing preventive strategies and oral health awareness programmes.",
  },
  {
    no: "04",
    title: "Orthodontics & Craniofacial Biology",
    description:
      "Research on malocclusion, craniofacial anomalies and TMJ disorders.",
  },
  {
    no: "05",
    title: "Implant Dentistry & Prosthodontics",
    description:
      "Advancing implant rehabilitation and prosthetic treatment techniques.",
  },
  {
    no: "06",
    title: "Endodontics & Microscopic Dentistry",
    description:
      "Diagnosis and management of pulp and periapical diseases using advanced technologies.",
  },
  {
    no: "07",
    title: "Periodontology & Oral Implantology",
    description:
      "Research on periodontal diseases and long-term implant success.",
  },
  {
    no: "08",
    title: "Oral Cancer Diagnosis",
    description:
      "Developing innovative diagnostic methods and imaging techniques for early detection.",
  },
  {
    no: "09",
    title: "Early Childhood Caries Prevention",
    description:
      "Preventive research involving fluoride, sealants and behavioural interventions.",
  },
];

export default function ResearchHome() {
  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">

        <div className="container-custom text-center">

          <span className="badge bg-white/20 text-white border-white/30 mb-5">
            Research
          </span>

          <h1 className="heading-1">
            Research at MDCH
          </h1>

          <p className="body-large text-blue-100 max-w-4xl mx-auto mt-6">
            Advancing Dental Science through Innovation, Ethics,
            Collaboration and Quality Research.
          </p>

        </div>

      </section>

      {/* Introduction */}

      <section className="py-20">

        <div className="container-custom max-w-6xl">

          <div
            className="grid lg:grid-cols-2 gap-14 items-center"
            data-aos="fade-up"
          >

            <div>

              <h2 className="heading-3 text-medical-navy mb-6">
                Research Home
              </h2>

              <p className="text-gray-700 leading-8">
                At Madha Dental College, we are committed to fostering a
                culture of quality research in the field of dentistry.
                Our faculty members and students engage in a wide range
                of research activities aimed at preventing disease,
                promoting oral health, advancing dental science,
                improving patient care and addressing oral health
                challenges facing our communities.
              </p>

            </div>

            <div>

              <img
                src="/research/research-home.jpg"
                alt="Research"
                className="rounded-2xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Research Areas */}

      <section className="pb-24">

        <div className="container-custom">

          <div className="text-center mb-12">

            <h2 className="heading-2">
              Key Research Areas
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {researchAreas.map((item, index) => (

              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-xl p-7 border border-blue-100 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold mb-5">
                  {item.no}
                </div>

                <h3 className="text-xl font-bold text-medical-navy mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Publications */}

      <section className="bg-gray-50 py-20">

        <div className="container-custom">

          <div
            className="grid lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <Microscope className="w-10 h-10 text-blue-700 mb-5" />

              <h3 className="text-xl font-bold mb-4">
                Research
              </h3>

              <p className="text-gray-600">
                Encouraging innovative dental research through
                faculty and student collaboration.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <BookOpen className="w-10 h-10 text-blue-700 mb-5" />

              <h3 className="text-xl font-bold mb-4">
                Publications
              </h3>

              <p className="text-gray-600">
                Faculty members regularly publish in national
                and international peer-reviewed journals.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <FlaskConical className="w-10 h-10 text-blue-700 mb-5" />

              <h3 className="text-xl font-bold mb-4">
                Collaborations
              </h3>

              <p className="text-gray-600">
                Promoting collaborative research with academic
                institutions and healthcare organisations.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}