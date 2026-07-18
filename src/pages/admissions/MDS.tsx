import {
  GraduationCap,
  Clock,
  Users,
  BadgeCheck,
  BookOpen,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const MDS = () => {
  const highlights = [
    {
      title: "Duration",
      value: "3 Years",
      icon: <Clock className="w-7 h-7" />,
    },
    {
      title: "Specializations",
      value: "9 Departments",
      icon: <GraduationCap className="w-7 h-7" />,
    },
    {
      title: "Recognition",
      value: "DCI Approved",
      icon: <BadgeCheck className="w-7 h-7" />,
    },
    {
      title: "Eligibility",
      value: "NEET MDS Qualified",
      icon: <BookOpen className="w-7 h-7" />,
    },
  ];

  const specializations = [
    { name: "Conservative Dentistry & Endodontics", seats: 3 },
    { name: "Oral & Maxillofacial Surgery", seats: 3 },
    { name: "Orthodontics & Dentofacial Orthopaedics", seats: 3 },
    { name: "Prosthodontics & Crown Bridge", seats: 3 },
    { name: "Pedodontics & Preventive Dentistry", seats: 3 },
    { name: "Periodontics", seats: 3 },
    { name: "Public Health Dentistry", seats: 2 },
    { name: "Oral Medicine & Radiology", seats: 2 },
    { name: "Oral Pathology & Microbiology", seats: 2 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">

      <div
  className="container-custom text-center"
  data-aos="fade-up"
>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 mb-5">
            <GraduationCap className="w-5 h-5" />
            Master of Dental Surgery
          </div>

          <h1 className="text-5xl font-bold mb-5">
            MDS Programme
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/90">
            Advanced postgraduate education with world-class clinical
            exposure, experienced faculty, research opportunities and
            specialized training.
          </p>

        </div>

      </section>

      <section className="py-16">

        <div className="container-custom">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left */}

            <div className="lg:col-span-2">
<div
  className="glass-card p-8 mb-8"
  data-aos="fade-right"
>

                <h2 className="heading-3 mb-5">
                  About MDS
                </h2>

                <p className="text-neutral-600 leading-8">
                  Madha Dental College & Hospital offers postgraduate
                  Master of Dental Surgery (MDS) programmes in
                  various specializations approved by the Dental
                  Council of India and affiliated with The Tamil Nadu
                  Dr. M.G.R. Medical University.
                </p>

              </div>

              {/* Highlights */}

        <div
  className="grid md:grid-cols-2 gap-4 mb-8"
  data-aos="fade-up"
>

              {highlights.map((item, index) => (

  <div
    key={index}
    className="glass-card p-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
    data-aos="zoom-in"
    data-aos-delay={index * 100}
  >

                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                      {item.icon}
                    </div>

                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-neutral-600 mt-1">
                      {item.value}
                    </p>

                  </div>

                ))}

              </div>

              {/* Specializations */}
<div
  className="glass-card p-8"
  data-aos="fade-up"
>

                <h2 className="heading-3 mb-6">
                  MDS Specializations
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  {specializations.map((item, index) => (

                 <div
  key={index}
  className="rounded-xl border border-gray-200 p-5 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
  data-aos="zoom-in"
  data-aos-delay={index * 100}
>

                      <div className="text-3xl mb-3">
                        🦷
                      </div>

                      <h3 className="font-semibold mb-3">
                        {item.name}
                      </h3>

                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                        {item.seats} Seats
                      </span>

                    </div>

                  ))}

                </div>

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

                  <div className="flex gap-3">
                    <MapPin className="text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-sm text-neutral-600">
                        Madha Nagar, Kundrathur,
                        Chennai, Tamil Nadu
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-sm text-neutral-600">
                        +91 72739 01234
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm text-neutral-600">
                        info@mdch.in
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default MDS;