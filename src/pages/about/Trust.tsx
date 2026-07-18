import { IMAGES } from "../../data/images";
import { CheckCircle, Users, Award, GraduationCap } from "lucide-react";

export default function Trust() {
  const objectives = [
    "To provide quality education to all sections of the society.",
    "To provide multidimensional growth in the personality of the students.",
    "To inculcate discipline and value.",
    "To inculcate patriotism towards the nation.",
  ];

  const members = [
    {
      name: "Dr. S. Peter",
      role: "Founder & Chairman",
    },
    {
      name: "Mrs. Kasthuri Bai P",
      role: "Trust Member",
    },
    {
      name: "Mrs. Sandanamary P",
      role: "Trust Member",
    },
  ];

 

  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="relative h-[300px]">
        <img
          src={IMAGES.aboutMdch}
          alt="Trust"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-medical-navy/75 flex items-center justify-center">
          <div
            className="text-center text-white"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-bold">
              Trust
            </h1>

            <p className="mt-4 text-lg">
              Home / About / Trust
            </p>
          </div>
        </div>
      </section>

      {/* Content */}

      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}

          <div
            className="text-center mb-14"
            data-aos="fade-up"
          >
            <span className="badge mb-4">
              Soosaiya Peter Educational Trust
            </span>

            <h2 className="heading-2 mb-6">
              Building
              <span className="gradient-text">
                {" "}Lives Through Education
              </span>
            </h2>

            <p className="body-large text-neutral-600 max-w-3xl mx-auto">
              The Trust has been transforming lives through quality
              education, social commitment and academic excellence
              since 1996.
            </p>
          </div>

          {/* About Trust */}

          <div
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10"
            data-aos="fade-up"
          >
            <h3 className="text-4xl font-bold text-medical-navy mb-6">
              About the Trust
            </h3>

            <div className="space-y-6 text-[17px] leading-8 text-slate-600 text-justify">

              <p>
                Soosaiya Peter Educational Trust was founded by the
                philanthropist and business tycoon Dr. S. Peter on
                October 3, 1996 in Chennai. This is a registered
                self-financing Christian Minority Trust.
              </p>

              <p>
                The Soosaiya Peter Educational Trust under the inspiring
                leadership of Dr. S. Peter, Founder and Chairman of
                Madha Group of Institutions, has made remarkable strides
                over the decades to promote higher education with a deep
                sense of social commitment.
              </p>

              <p>
                Over the years, the Madha Group has extended its wings
                in Engineering, Management, Medicine, Dentistry,
                Paramedicine, Education and Arts & Science.
              </p>

              <p>
                Today the Trust proudly manages a cluster of
                institutions offering courses in Engineering,
                Management, Medical, Dental, Paramedical and Education.
              </p>

              <p>
                Madha Dental College, Madha College of Nursing, Madha
                College of Physiotherapy and Madha Institute of
                Engineering & Technology have been rendering excellent
                service to students helping them achieve their dreams.
              </p>

              <p>
                Recognizing the notable service rendered in education,
                the Mother Teresa Excellence Award for the year 2006 was
                awarded to Founder Chairman Dr. S. Peter.
              </p>

              <p>
                The phenomenal growth of the Trust reflects its
                unwavering commitment towards educational excellence,
                innovation and social responsibility.
              </p>

            </div>
          </div>

          {/* Objectives */}

          <div className="mt-16" data-aos="fade-up">

            <h3 className="text-4xl font-bold text-medical-navy mb-8">
              Objectives of the Trust
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {objectives.map((item, index) => (

                <div
                  key={index}
                  className="glass-card p-6 flex gap-4 items-start"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >

                  <CheckCircle className="w-6 h-6 text-medical-blue mt-1" />

                  <p className="text-slate-600">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Members */}

          <div className="mt-16">

            <h3
              className="text-4xl font-bold text-medical-navy mb-8"
              data-aos="fade-up"
            >
              Members of the Trust
            </h3>

            <div className="grid md:grid-cols-3 gap-8">

              {members.map((member, index) => (

                <div
                  key={index}
                  className="glass-card p-8 text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >

                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-medical-blue to-medical-sky flex items-center justify-center mx-auto mb-5">

                    <Users className="text-white w-10 h-10" />

                  </div>

                  <h4 className="text-2xl font-bold text-medical-navy mb-2">
                    {member.name}
                  </h4>

                  <p className="text-slate-600">
                    {member.role}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Stats */}

          <div
            className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10"
            data-aos="zoom-in"
          >

         

          </div>

        </div>

      </section>

    </div>
  );
}