import React from "react";
import {
  GraduationCap,
  Users,
  Award,
  Quote,
  Globe,
  Stethoscope,
  Sparkles,
  FileText,
  ExternalLink,
} from "lucide-react";
import "aos/dist/aos.css";

const prominentAlumni = [
  {
    name: "Dr. Rose Varghese., BDS",
    batch: "2010 Batch",
    role: "Dental Assistant",
    place: "Naaenae Dental Clinic, Wellington, New Zealand",
    image: "/images/alumni/rose-varghese.jpg",
  },
  {
    name: "Dr. Mohammed Shajid., BDS",
    batch: "2011 Batch",
    role: "Dental Surgeon",
    place: "Al Salam Medical Center, Doha, Qatar",
    image: "/images/alumni/mohammed-shajid.jpg",
  },
  {
    name: "Dr. Shubitha Venkataiah., BDS",
    batch: "2011 Batch",
    role: "Dental Surgeon",
    place: "Northern Beaches Dental Practice, Sydney, Australia",
    image: "/images/alumni/shubitha-venkataiah.jpg",
  },
  {
    name: "Dr. Uma Maheshwari., BDS, FCS",
    batch: "2011 Batch",
    role: "Proprietor",
    place: "Smile Confident Dental Clinic (Chain of Clinics), Chennai",
    image: "/images/alumni/uma-maheshwari.jpg",
  },
  {
    name: "Dr. Guru Prakash., BDS",
    batch: "2013 Batch",
    role: "Managing Director",
    place: "Signature Smilezz Dental Clinic (Chain of Clinics), Chennai",
    image: "/images/alumni/guru-prakash.jpg",
  },
  {
    name: "Dr. Zahra Zangoie., BDS",
    batch: "2013 Batch",
    role: "Dental Surgeon & Proprietor",
    place: "Dela Dent Dental Clinic, Azimiye, Iran",
    image: "/images/alumni/zahra-zangoie.jpg",
  },
  {
    name: "Dr. Kumaresh P., BDS, MDS",
    batch: "2013 Batch",
    role: "Partner",
    place: "Signature Smilezz Dental Clinic, Chennai",
    image: "/images/alumni/kumaresh.jpg",
  },
  {
    name: "Dr. Ilakiya",
    batch: "2013 Batch",
    role: "Secured a Postgraduate Seat in Department of Oral Medicine",
    place: "Government Dental College, Cuddalore",
    image: "/images/alumni/ilakiya.jpg",
  },
  {
    name: "Dr. Nandini Devi",
    batch: "2013 Batch",
    role: "Secured a Postgraduate Seat in Department of Periodontics",
    place: "Government Dental College, Cuddalore",
    image: "/images/alumni/nandini-devi.jpg",
  },
  {
    name: "Dr. Akshara Balaji., BDS",
    batch: "2014 Batch",
    role: "PGDHM (Post Graduate Diploma in Health Management)",
    place: "Cape Breton University, Nova Scotia, Canada",
    image: "/images/alumni/akshara-balaji.jpg",
  },
  {
    name: "Dr. Danial Moradi., BDS",
    batch: "2014 Batch",
    role: "Dental Surgeon",
    place: "Tehran, Iran",
    image: "/images/alumni/danial-moradi.jpg",
  },
  {
    name: "Dr. Amir Jafarzadeegan., BDS",
    batch: "2014 Batch",
    role: "Dental Surgeon",
    place: "Tehran, Iran",
    image: "/images/alumni/amir-jafarzadeegan.jpg",
  },
  {
    name: "Dr. Bhavana Jawahar., BDS",
    batch: "2016 Batch",
    role: "Currently working as Graduate Professional Assistant",
    place:
      "Mason & Partners Clinic, Pursuing Master in Health Administration, George Mason University, USA",
    image: "/images/alumni/bhavana-jawahar.jpg",
  },
];

const testimonials = [
  {
    name: "Dr S.Nancy",
    qualification: "BDS, 2011 Batch",
    role: "Currently working as Senior lecturer, Department of Pedodontics, SRM Dental College",
    text: "Attending Madha Dental College for my under graduation has been an incredibly enriching experience for me. Dedicated faculty in the clinical departments and diverse student community have provided me with not just academic knowledge, but also invaluable life skills and personal growth opportunities. From engaging classroom discussions to hands-on learning experiences and freedom to participate in inter-college scientific presentations, this college has equipped me with confidence to pursue my passions and excel in my practice. I am grateful for the supportive environment that truly fosters a culture of excellence and innovation, and making me fundamentally strong.",
    image: "/images/alumni/nancy.jpg",
  },
  {
    name: "Dr. Sujitha",
    qualification: "MDS, Oral Pathology, 2020 Batch",
    role: "Working as a consultant in Apollo Dental Clinic",
    text: "It was full of learning and grooming oneself. The entire faculty and department helped us enhance our academic and interpersonal skills. Huge respect, love and devotion for entire faculty members and department. It's their efforts that make me to count myself into better professionals. It was my wonderful 3 years of experience at Madha college and hospital.",
    image: "/images/alumni/sujitha.jpg",
  },
];

const Alumni: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
        <div
          className="container-custom text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex justify-center mb-3">
            <GraduationCap size={42} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Alumni
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90">
            Celebrating the achievements, professional journeys and
            contributions of the distinguished alumni of Madha Dental College
            & Hospital.
          </p>
        </div>
      </section>

{/* ================= ALUMNI ASSOCIATION ================= */}
<section className="pt-8 md:pt-10">
  <div className="container-custom">

    <div
      className="bg-white rounded-2xl border shadow-sm p-5 md:p-7 hover:shadow-lg transition-all duration-300"
      data-aos="fade-up"
    >

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
          <FileText
            className="text-blue-700"
            size={28}
          />
        </div>

        <div className="flex-1">

          <h2 className="text-xl md:text-2xl font-bold text-blue-900">
            Alumni Association
          </h2>

          <p className="text-sm md:text-base text-gray-600 mt-1">
            View the Alumni Association details and information.
          </p>

        </div>

        <a
          href="/documents/alumni-association.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300"
        >
          Open PDF
          <ExternalLink size={17} />
        </a>

      </div>

    </div>

  </div>
</section>
      {/* ================= INTRO ================= */}
      <section className="py-8 md:py-10">
        <div className="container-custom">

          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7 shadow-md"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-3">
              <Users
                className="text-blue-700"
                size={30}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Our Alumni
              </h2>
            </div>

            <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[16px]">
              The alumni of Madha Dental College & Hospital continue to make
              meaningful contributions to the field of dentistry and healthcare
              across India and around the world. Their professional
              achievements reflect the knowledge, skills and experiences gained
              during their time at the institution.
            </p>
          </div>

        </div>
      </section>


      {/* ================= PROMINENT ALUMNI ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="flex items-center gap-3 mb-6"
            data-aos="fade-up"
          >
            <Award
              className="text-blue-700"
              size={30}
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Prominent Alumni
            </h2>
          </div>


          <div className="grid md:grid-cols-2 gap-5">

            {prominentAlumni.map((alumni, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >

                <div className="flex flex-col sm:flex-row">

                  {/* Image */}
                  <div className="sm:w-[190px] h-[230px] sm:h-[245px] flex-shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>


                  {/* Content */}
                  <div className="p-5 flex flex-col justify-center">

                    <h3 className="text-lg md:text-xl font-bold text-blue-900 leading-tight">
                      {alumni.name}
                    </h3>

                    <div className="inline-flex w-fit mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {alumni.batch}
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <Stethoscope
                        className="text-blue-700 mt-0.5 flex-shrink-0"
                        size={18}
                      />

                      <p className="text-sm font-semibold text-gray-800 leading-6">
                        {alumni.role}
                      </p>
                    </div>

                    <div className="flex items-start gap-2 mt-2">
                      <Globe
                        className="text-cyan-600 mt-0.5 flex-shrink-0"
                        size={18}
                      />

                      <p className="text-sm text-gray-600 leading-6">
                        {alumni.place}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= ALUMNI JOURNEY ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7 shadow-md"
            data-aos="fade-up"
          >

            <div className="flex items-center gap-3 mb-3">

              <Sparkles
                className="text-blue-700"
                size={30}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Continuing the Journey
              </h2>

            </div>

            <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[16px]">
              From clinical practice and postgraduate education to healthcare
              management and professional opportunities overseas, our alumni
              continue to build successful careers in diverse areas of
              dentistry and healthcare.
            </p>

          </div>

        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="pb-12 md:pb-14">
        <div className="container-custom">

          <div
            className="flex items-center gap-3 mb-6"
            data-aos="fade-up"
          >

            <Quote
              className="text-blue-700"
              size={30}
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Alumni Testimonials
            </h2>

          </div>


          <div className="grid lg:grid-cols-2 gap-5">

            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >

                {/* Image */}
                <div className="h-[260px] overflow-hidden bg-gray-100">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />

                </div>


                {/* Content */}
                <div className="p-5 md:p-6">

                  <div className="flex items-center gap-3 mb-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Quote
                        className="text-blue-700"
                        size={20}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-900">
                        {testimonial.name}
                      </h3>

                      <span className="text-xs font-semibold text-blue-700">
                        {testimonial.qualification}
                      </span>
                    </div>

                  </div>


                  <p className="text-sm font-semibold italic text-gray-800 leading-6 mb-3">
                    {testimonial.role}
                  </p>


                  <p className="font-['Montserrat'] text-sm md:text-[15px] leading-7 text-gray-600 text-justify">
                    “{testimonial.text}”
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Alumni;