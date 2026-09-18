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

               <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
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
            <h3 className="text-4xl font-bold text-medical-navy mb-5">
              About the Trust
            </h3>

            <div className="space-y-6 text-[17px] leading-8 text-slate-600 text-justify">

                 <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
               Founded on 3 October 1996 in Chennai by philanthropist and entrepreneur Dr. S. Peter, the Soosaiya Peter Educational Trust is a registered self-financing Christian Minority Trust dedicated to advancing higher education with a strong commitment to social responsibility.
              </p>

                 <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
          Under the visionary leadership of its Founder and Chairman, the Trust has grown into the Madha Group of Institutions, establishing a distinguished presence across Engineering, Management, Medicine, Dentistry, Nursing, Physiotherapy, Paramedical Sciences, Education, and Arts & Science.
              </p>

           <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
             Institutions including Madha Dental College & Hospital, Madha College of Nursing, Madha College of Physiotherapy, and Madha Institute of Engineering & Technology have enabled generations of students to pursue quality professional education and build meaningful careers.
              </p>

                <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
              In recognition of his contribution to education, Dr. S. Peter was honoured with the Mother Teresa Excellence Award in 2006.
              </p>

                <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
The Trust's journey reflects an enduring commitment to educational excellence, innovation, opportunity, and social advancement, with education serving as a catalyst for individual and societal progress.
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