import {
  GraduationCap,
  Clock,
  Users,
  BadgeCheck,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const BDS = () => {
  const highlights = [
    {
      title: "Duration",
      value: "4 Years + 1 Year Internship",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Intake",
      value: "100 Students",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Recognition",
      value: "Dental Council of India (DCI)",
      icon: <BadgeCheck className="w-8 h-8" />,
    },
    {
      title: "Eligibility",
      value: "NEET Qualified",
      icon: <BookOpen className="w-8 h-8" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
        <div className="container-custom">
<div
  className="text-center"
  data-aos="fade-up"
>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur mb-5">
              <GraduationCap className="w-5 h-5" />
              Bachelor of Dental Surgery
            </div>

            <h1 className="text-5xl font-bold mb-6">
              BDS Programme
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-white/90">
              Build your career in dentistry through world-class
              education, advanced clinical training, research and
              one-year compulsory internship at Madha Dental College
              & Hospital.
            </p>
<div className="flex justify-center gap-6 mt-8 flex-wrap text-white/90">

  <div className="flex items-center gap-2">
    <Clock className="w-5 h-5" />
    <span>5 Years Programme</span>
  </div>

  <div className="flex items-center gap-2">
    <Users className="w-5 h-5" />
    <span>100 Seats</span>
  </div>

  <div className="flex items-center gap-2">
    <BadgeCheck className="w-5 h-5" />
    <span>DCI Approved</span>
  </div>

</div>

          </div>

        </div>
      </section>

      {/* Main Content */}

      <section className="py-16">

        <div className="container-custom">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left */}

            <div className="lg:col-span-2">

             <div
  className="glass-card p-8 mb-8"
  data-aos="fade-right"
>

                <h2 className="heading-3 mb-6">
                  About BDS
                </h2>

                <p className="text-neutral-600 leading-8">
                  The Bachelor of Dental Surgery (BDS) is a
                  comprehensive undergraduate dental programme
                  consisting of four academic years followed by
                  one year of compulsory rotatory internship.
                  The programme is approved by the Dental Council
                  of India (DCI) and affiliated with The Tamil Nadu
                  Dr. M.G.R. Medical University.

                  Students receive extensive theoretical knowledge,
                  laboratory training and clinical exposure that
                  prepares them for professional dental practice
                  and higher education.
                </p>

              </div>

              {/* Highlights */}
<div
  className="grid md:grid-cols-2 gap-4"
  data-aos="fade-up"
>

             {highlights.map((item, index) => (

  <div
    key={index}
    className="glass-card p-5 hover:shadow-xl transition"
    data-aos="zoom-in"
    data-aos-delay={index * 100}
  >

               <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                      {item.icon}
                    </div>

                  <h3 className="font-bold text-lg mb-1">
                      {item.title}
                    </h3>

                 <p className="text-sm text-neutral-600">
                      {item.value}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Right */}

            <div>

              <div
  className="glass-card p-8 sticky top-28"
  data-aos="fade-left"
>

                <h2 className="heading-4 mb-6">
                  Contact Admissions
                </h2>

                <div className="space-y-6">

                  <div className="flex gap-4">

                    <MapPin className="text-blue-600 mt-1" />

                    <div>

                      <h4 className="font-semibold">
                        Address
                      </h4>

                      <p className="text-neutral-600 text-sm">
                        Madha Nagar,
                        Kundrathur,
                        Chennai,
                        Tamil Nadu
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <Phone className="text-blue-600 mt-1" />

                    <div>

                      <h4 className="font-semibold">
                        Phone
                      </h4>

                      <p className="text-neutral-600">
                        +91 72739 01234
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <Mail className="text-blue-600 mt-1" />

                    <div>

                      <h4 className="font-semibold">
                        Email
                      </h4>

                      <p className="text-neutral-600">
                        info@mdch.in
                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-100">

  <h4 className="font-semibold text-blue-700 mb-2">
    Admissions Enquiry
  </h4>

  <p className="text-sm text-neutral-600">
    For admission-related queries, please contact the admissions office using the phone number or email above.
  </p>

</div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default BDS;