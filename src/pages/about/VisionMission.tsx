import { IMAGES } from "../../data/images";
import { CheckCircle } from "lucide-react";

export default function VisionMission() {
  const missionPoints = [
    "Embody the values of compassion & excellence which is reflected in empathy, care, social outreach, passion & quality.",
    "Weave together an ensemble of dental graduates and post graduates whose qualities of integrity and leadership help to administer the highest quality of dental care.",
    "Deploy latest student-centric teaching methodologies and clinical practices at par with global standards so as to churn out competent and confident professionals and thereby achieve excellence in dental education.",
    "Promote state-of-the-art research facilities to enable discovery, inventions and innovations among staff and students.",
    "Ensure oral health education, preventive strategies, affordable and quality healthcare to the community and disability limitation specifically targeting the underprivileged population.",
  ];

  const values = [
    "Striving for excellence in dental education.",
    "Ensuring affordable patient-centered oral health care.",
    "Embracing societal and public health responsibilities.",
    "Integrating technology into education and health care.",
    "Promoting research and fostering innovations in dentistry.",
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative h-[300px]">
        <img
          src={IMAGES.aboutMdch}
          alt="Vision & Mission"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-medical-navy/75 flex items-center justify-center">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-5xl font-bold">
              Vision, Mission & Institutional Values
            </h1>

            <p className="mt-4 text-lg">
              Home / About / Vision, Mission & Institutional Values
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}

          <div className="text-center mb-16" data-aos="fade-up">

            <span className="badge mb-4">
              Vision & Mission
            </span>

            <h2 className="heading-2 mb-6">
              Creating
              <span className="gradient-text">
                {" "}Future Dental Professionals
              </span>
            </h2>

            <p className="body-large max-w-3xl mx-auto text-neutral-600">
              Madha Dental College & Hospital is committed to academic
              excellence, innovation, ethical values and compassionate oral
              healthcare for society.
            </p>

          </div>

          {/* Vision */}

          <div
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-10"
            data-aos="fade-up"
          >
            <h3 className="text-4xl font-bold text-medical-navy mb-6">
              Vision
            </h3>

            <p className="text-[17px] leading-8 text-slate-600 text-justify">
              Madha Dental College and Hospital is committed to foster students
              with an updated knowledge of recent technological advances and
              state-of-art dental skills to provide comprehensive quality oral
              healthcare to all patients including the underprivileged community
              and a commitment towards quality dental research.
            </p>
          </div>

          {/* Mission */}

          <div
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-10"
            data-aos="fade-up"
          >
            <h3 className="text-4xl font-bold text-medical-navy mb-8">
              Mission
            </h3>

            <div className="space-y-6">

              {missionPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-medical-blue mt-1 flex-shrink-0" />

                  <p className="text-[17px] leading-8 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Institutional Values */}

          <div
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10"
            data-aos="fade-up"
          >
            <h3 className="text-4xl font-bold text-medical-navy mb-8">
              Institutional Values
            </h3>

            <div className="space-y-5">

              {values.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-medical-blue mt-1 flex-shrink-0" />

                  <p className="text-[17px] leading-8 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Bottom Cards */}

         

        </div>
      </section>

    </div>
  );
}