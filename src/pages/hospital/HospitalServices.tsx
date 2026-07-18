import { FaChair, FaUserMd, FaHospital, FaHeartbeat } from "react-icons/fa";

export default function HospitalServices() {
  return (
    <div className="bg-white">

      {/* Header */}

      <section className="pt-12 pb-8">

        <div className="max-w-5xl mx-auto px-6">

          <div
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <span className="badge mb-4">
              Hospital Services
            </span>

            <h2 className="heading-2">
              Advanced
              <span className="gradient-text">
                {" "}Dental Care
              </span>
            </h2>

            <p className="body-large text-neutral-600 max-w-4xl mx-auto mt-6">
              Madha Dental College & Hospital stands as a contemporary
              multi-specialty dental institution offering comprehensive oral
              healthcare services. Boasting over 300 ergonomic and
              state-of-the-art dental chairs, the hospital caters to various
              dental specialties. Alongside, it features essential facilities
              like a day care center, feeding room and outpatient services.
              With a team of over 100 experienced doctors, patients can always
              expect expert care and specialized treatment on-site.
            </p>

          </div>

                 {/* Statistics */}

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            {/* Card */}

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:-translate-y-2 transition">

              <FaChair className="text-5xl text-medical-blue mx-auto mb-5" />

              <h3 className="text-3xl font-bold text-medical-navy">
                300+
              </h3>

              <p className="mt-2 text-gray-600 font-medium">
                Dental Chairs
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:-translate-y-2 transition">

              <FaUserMd className="text-5xl text-medical-blue mx-auto mb-5" />

              <h3 className="text-4xl font-bold text-medical-navy">
                100+
              </h3>

              <p className="mt-2 text-gray-600 font-medium">
                Experienced Doctors
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:-translate-y-2 transition">

              <FaHospital className="text-5xl text-medical-blue mx-auto mb-5" />

              <h3 className="text-4xl font-bold text-medical-navy">
                9+
              </h3>

              <p className="mt-2 text-gray-600 font-medium">
                Dental Specialties
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:-translate-y-2 transition">

              <FaHeartbeat className="text-5xl text-medical-blue mx-auto mb-5" />

              <h3 className="text-4xl font-bold text-medical-navy">
                24/7
              </h3>

              <p className="mt-2 text-gray-600 font-medium">
                Patient Care
              </p>

            </div>

          </div>
          {/* Dental Specialties & Services */}

          <div
            className="grid lg:grid-cols-2 gap-8 mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            {/* Dental Specialties */}

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

              <h3 className="text-2xl font-bold text-medical-navy mb-8">
                Dental Specialties
              </h3>

              <ul className="space-y-4">

                {[
                  "Oral Medicine & Radiology",
                  "Oral Maxillofacial Surgery",
                  "Conservative Dentistry & Endodontics",
                  "Prosthodontics and Crown & Bridge",
                  "Oral Pathology & Microbiology",
                  "Orthodontics & Dentofacial Orthopedics",
                  "Periodontology",
                  "Pedodontics & Preventive Dentistry",
                  "Public Health Dentistry",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-medical-blue mt-2"></div>

                    <span className="text-slate-700 text-base">
                      {item}
                    </span>

                  </li>
                ))}

              </ul>

            </div>

            {/* Services Offered */}

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">

              <h3 className="text-3xl font-bold text-medical-navy mb-8">
                Services Offered
              </h3>

              <ul className="space-y-4">

                {[
                  "Diagnosis of Oral Diseases",
                  "Management of Pre-malignant Disorders",
                  "TMJ Disorder Management",
                  "Orofacial Pain Management",
                  "Partial Dentures",
                  "Complete Dentures",
                  "Crowns & Bridges",
                  "Full Mouth Rehabilitation",
                  "Dental Implants",
                  "Facial Surgeries",
                  "Tooth Extractions",
                  "Wisdom Tooth Removal",
                  "Cosmetic Dentistry",
                  "Tooth Restorations",
                  "Root Canal Treatment",
                  "Smile Makeover",
                  "Orthodontic Braces",
                  "Jaw Surgeries",
                  "Professional Tooth Cleaning",
                  "Gum Surgeries",
                  "Pediatric Dentistry",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-medical-blue mt-2"></div>

                    <span className="text-slate-700 text-base">
                      {item}
                    </span>

                  </li>
                ))}

              </ul>

            </div>

          </div>
          {/* Diagnostic Services */}

<div
  className="mt-16"
  data-aos="fade-up"
>

  <div className="text-center mb-10">

    <span className="badge mb-4">
      Diagnostic Facilities
    </span>

    <h2 className="heading-2">
      Advanced
      <span className="gradient-text">
        {" "}Diagnostic Services
      </span>
    </h2>

    <p className="body-large text-neutral-600 max-w-3xl mx-auto mt-5">
      Our hospital is equipped with modern diagnostic equipment and
      laboratory facilities to ensure accurate diagnosis and effective
      treatment planning.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      "Digital Radiography",
      "RVG Imaging",
      "OPG",
      "Cephalogram",
      "CBCT",
      "Clinical Laboratory",
      "Biopsy Services",
      "Histopathology",
    ].map((item) => (

      <div
        key={item}
        className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >

        <div className="w-12 h-12 rounded-full bg-medical-blue/10 flex items-center justify-center mx-auto mb-5">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-medical-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2a4 4 0 014-4h4"
            />
          </svg>

        </div>

        <h3 className="font-semibold text-base text-medical-navy">
          {item}
        </h3>

      </div>

    ))}

  </div>

</div>

{/* Other Facilities */}

<div
  className="mt-10"
  data-aos="fade-up"
>

  <div className="text-center mb-10">

    <span className="badge mb-4">
      Patient Facilities
    </span>

    <h2 className="heading-2">
      Hospital
      <span className="gradient-text">
        {" "}Support Services
      </span>
    </h2>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      "Day Care Centre",
      "Feeding Room",
      "Patient Waiting Lounge",
      "Reception & Registration",
      "Emergency Care",
      "Pharmacy",
      "Sterilization Centre",
      "Counselling Services",
      "Wheelchair Assistance",
    ].map((facility) => (

      <div
        key={facility}
        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg hover:shadow-xl transition-all"
      >

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-medical-blue text-white flex items-center justify-center font-bold">

            ✓

          </div>

          <h3 className="text-base font-semibold text-medical-navy">

            {facility}

          </h3>

        </div>

      </div>

    ))}

  </div>

</div>

{/* CTA */}

<div
  className="mt-20 rounded-3xl overflow-hidden bg-gradient-to-r from-medical-blue to-medical-navy text-white p-8 text-center"
  data-aos="zoom-in"
>

  <h2 className="text-3xl font-bold mb-5">

    Need Expert Dental Care?

  </h2>

  <p className="text-base text-white/90 max-w-3xl mx-auto">

    Our team of experienced dental specialists is committed to providing
    exceptional patient care using modern technology and internationally
    accepted treatment protocols.

  </p>

  <div className="flex flex-wrap justify-center gap-5 mt-10">

    <button className="px-8 py-4 bg-white text-medical-blue rounded-xl font-semibold hover:scale-105 transition">

      Book Appointment

    </button>

    <button className="px-8 py-4 border border-white rounded-xl font-semibold hover:bg-white hover:text-medical-blue transition">

      Contact Hospital

    </button>

  </div>

</div>
   

        </div>

      </section>

    </div>
  );
}