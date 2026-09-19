import {
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  IndianRupee,
  Building2,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Download,
  Stethoscope,
} from "lucide-react";

const Prospectus = () => {
  const specializations = [
    "Conservative Dentistry & Endodontics",
    "Oral & Maxillofacial Surgery",
    "Orthodontics & Dentofacial Orthopaedics",
    "Pedodontics & Preventive Dentistry",
    "Prosthodontics & Crown and Bridge",
    "Periodontics",
    "Oral Medicine & Radiology",
    "Oral Pathology & Microbiology",
    "Public Health Dentistry",
  ];

  const eligibility = [
    {
      title: "BDS",
      text: "Passed 10+2 with Physics, Chemistry, Biology and English as per DCI norms. NEET-UG qualification is mandatory. Minimum age is 17 years as on 31st December of the admission year.",
    },
    {
      title: "MDS",
      text: "BDS degree from a DCI-recognized institution with completed internship. Permanent or provisional registration with the State Dental Council / DCI is required. NEET-MDS qualification is mandatory.",
    },
  ];

  const whyChoose = [
    "DCI recognized UG & PG programs",
    "Experienced and dedicated faculty",
    "Excellent clinical exposure",
    "Strong research and academic culture",
    "Ethical and professional training",
    "Consistent academic results",
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc]">

      {/* ================= INTRO ================= */}
      <section className="relative pt-20 pb-14 sm:pt-24 sm:pb-16">
        <div className="container-custom">

          <div
            className="mx-auto mb-12 max-w-4xl text-center"
            data-aos="fade-up"
          >
            <p className="mb-3 font-['Montserrat'] text-[13px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Admissions
            </p>

            <h1 className="font-['Cormorant_Garamond'] text-5xl font-bold text-[#163b72] sm:text-6xl">
              Prospectus
            </h1>

            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400" />

            <p className="mx-auto mt-5 max-w-3xl font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
              Madha Dental College &amp; Hospital — BDS &amp; MDS Programs
            </p>

      
          </div>

          {/* ================= ABOUT MDCH ================= */}
          <div
            className="mx-auto max-w-5xl"
            data-aos="fade-up"
          >
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">

              <div className="h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />

              <div className="p-7 sm:p-9">

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg">
                    <Building2 className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                      About the Institution
                    </p>

                    <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#163b72] sm:text-4xl">
                      Madha Dental College &amp; Hospital
                    </h2>
                  </div>
                </div>

                <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                  Madha Dental College &amp; Hospital (MDCH), established in
                  2006 by the Soosaiya Peter Educational Trust, is affiliated
                  with The Tamil Nadu Dr. M.G.R. Medical University, Chennai
                  and recognized by the Dental Council of India (DCI). The
                  institution is committed to excellence in dental education,
                  clinical training, research, and community service.
                </p>

              </div>
            </div>
          </div>

          {/* ================= COURSES ================= */}
          <div className="mx-auto mt-10 max-w-5xl">

            <div
              className="mb-7 text-center"
              data-aos="fade-up"
            >
              <p className="mb-2 font-['Montserrat'] text-[12px] font-semibold uppercase tracking-[0.22em] text-blue-700">
                Academic Programs
              </p>

              <h2 className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#163b72] sm:text-5xl">
                Courses Offered
              </h2>

              <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {/* BDS */}
              <div
                className="group rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]"
                data-aos="fade-right"
              >
                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg">
                    <GraduationCap className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
                      Undergraduate Program
                    </p>

                    <h3 className="mt-1 font-['Montserrat'] text-[20px] font-bold text-[#163b72]">
                      Bachelor of Dental Surgery (BDS)
                    </h3>
                  </div>

                </div>

                <div className="mt-6 rounded-xl bg-blue-50 p-4">
                  <p className="font-['Montserrat'] text-[12px] font-semibold uppercase tracking-wide text-blue-700">
                    Duration
                  </p>

                  <p className="mt-1 font-['Montserrat'] text-[15px] font-semibold text-black">
                    4 Years + 1 Year Compulsory Rotatory Internship
                  </p>
                </div>
              </div>

              {/* MDS */}
              <div
                className="group rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_45px_rgba(8,145,178,0.12)]"
                data-aos="fade-left"
              >
                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg">
                    <Stethoscope className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                      Postgraduate Program
                    </p>

                    <h3 className="mt-1 font-['Montserrat'] text-[20px] font-bold text-[#163b72]">
                      Master of Dental Surgery (MDS)
                    </h3>
                  </div>

                </div>

                <div className="mt-6 rounded-xl bg-cyan-50 p-4">
                  <p className="font-['Montserrat'] text-[12px] font-semibold uppercase tracking-wide text-cyan-700">
                    Duration
                  </p>

                  <p className="mt-1 font-['Montserrat'] text-[15px] font-semibold text-black">
                    3 Years
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= SPECIALIZATIONS ================= */}
          <div
            className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#102f69] to-[#087d91] p-[1px] shadow-xl"
            data-aos="fade-up"
          >
            <div className="rounded-2xl bg-white p-7 sm:p-9">

              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg">
                  <BookOpen className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                    Postgraduate Programs
                  </p>

                  <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#163b72] sm:text-4xl">
                    MDS Specializations
                  </h2>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {specializations.map((specialization, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                    <span className="font-['Montserrat'] text-[13px] font-medium leading-6 text-black sm:text-[14px]">
                      {specialization}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* ================= ELIGIBILITY ================= */}
          <div className="mx-auto mt-10 max-w-5xl">

            <div
              className="mb-7 text-center"
              data-aos="fade-up"
            >
              <p className="mb-2 font-['Montserrat'] text-[12px] font-semibold uppercase tracking-[0.22em] text-blue-700">
                Admission Requirements
              </p>

              <h2 className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#163b72] sm:text-5xl">
                Eligibility Criteria
              </h2>

              <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {eligibility.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)]"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-5 flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <ClipboardCheck className="h-6 w-6" />
                    </div>

                    <h3 className="font-['Montserrat'] text-[20px] font-bold text-[#163b72]">
                      {item.title}
                    </h3>

                  </div>

                  <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[16px]">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* ================= ADMISSION PROCEDURE ================= */}
          <div
            className="mx-auto mt-10 max-w-5xl"
            data-aos="fade-up"
          >
            <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-9">

              <div className="mb-6 flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg">
                  <ClipboardCheck className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                    How to Apply
                  </p>

                  <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#163b72] sm:text-4xl">
                    Admission Procedure
                  </h2>
                </div>

              </div>

              <div className="space-y-4">

                {[
                  "Admissions are conducted through Tamil Nadu State Government Counselling based on NEET merit.",
                  "Candidates must register at tnmedicalselection.net.",
                  "Candidates should participate in counselling and select Madha Dental College & Hospital during choice filling.",
                  "Candidates must report to the college upon allotment with the required documents and fees.",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl bg-[#f7f9fc] p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-cyan-500 font-['Montserrat'] text-[12px] font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[16px]">
                      {step}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* ================= FEE STRUCTURE ================= */}
          <div className="mx-auto mt-10 max-w-5xl">

            <div
              className="mb-7 text-center"
              data-aos="fade-up"
            >
              <p className="mb-2 font-['Montserrat'] text-[12px] font-semibold uppercase tracking-[0.22em] text-blue-700">
                Annual Fees
              </p>

              <h2 className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#163b72] sm:text-5xl">
                Fee Structure
              </h2>

              <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400" />
            </div>

            <div
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)]"
              data-aos="fade-up"
            >

              <div className="grid md:grid-cols-2">

                {/* BDS */}
                <div className="border-b border-neutral-200 p-7 md:border-b-0 md:border-r">

                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <IndianRupee className="h-5 w-5" />
                    </div>

                    <h3 className="font-['Montserrat'] text-[20px] font-bold text-[#163b72]">
                      BDS
                    </h3>
                  </div>

                  <div className="space-y-3">

                    <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">
                      <span className="font-['Montserrat'] text-[13px] text-black">
                        Government Quota
                      </span>

                      <span className="font-['Montserrat'] text-[15px] font-bold text-blue-700">
                        ₹2.5 Lakhs / year
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-cyan-50 p-4">
                      <span className="font-['Montserrat'] text-[13px] text-black">
                        Management Quota
                      </span>

                      <span className="font-['Montserrat'] text-[15px] font-bold text-cyan-700">
                        ₹6 Lakhs / year
                      </span>
                    </div>

                  </div>

                </div>

                {/* MDS */}
                <div className="p-7">

                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      <Stethoscope className="h-5 w-5" />
                    </div>

                    <h3 className="font-['Montserrat'] text-[20px] font-bold text-[#163b72]">
                      MDS
                    </h3>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-neutral-200">

                    <div className="grid grid-cols-3 bg-[#163b72] px-4 py-3 font-['Montserrat'] text-[11px] font-semibold text-white sm:text-[12px]">
                      <span>Category</span>
                      <span className="text-center">Government</span>
                      <span className="text-right">Management</span>
                    </div>

                    <div className="grid grid-cols-3 border-t border-neutral-100 px-4 py-4 font-['Montserrat'] text-[12px] text-black sm:text-[13px]">
                      <span className="font-semibold">Clinical</span>
                      <span className="text-center">₹2.5 L</span>
                      <span className="text-right">₹8.5 L</span>
                    </div>

                    <div className="grid grid-cols-3 border-t border-neutral-100 bg-neutral-50 px-4 py-4 font-['Montserrat'] text-[12px] text-black sm:text-[13px]">
                      <span className="font-semibold">Para Clinical</span>
                      <span className="text-center">₹2.25 L</span>
                      <span className="text-right">₹3.25 L</span>
                    </div>

                  </div>

                </div>

              </div>

              <div className="border-t border-neutral-200 bg-blue-50/60 p-6">

                <div className="space-y-2">
                  <p className="font-['Montserrat'] text-[13px] leading-6 text-black">
                    • The MDS fee is an all-inclusive annual fee covering admission,
                    tuition, special, laboratory/computer/maintenance and amenities,
                    extra-curricular activities and other recurring expenditure.
                  </p>

                  <p className="font-['Montserrat'] text-[13px] leading-6 text-black">
                    • A development fee of ₹50,000 per student shall be collected
                    in addition to the aforementioned fees.
                  </p>

                  <p className="font-['Montserrat'] text-[13px] leading-6 text-black">
                    • Hostel, transport and mess charges are not included in the
                    above fee.
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* ================= INFRASTRUCTURE ================= */}
          <div
            className="mx-auto mt-10 max-w-5xl"
            data-aos="fade-up"
          >

            <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-9">

              <div className="mb-6 flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg">
                  <Building2 className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                    Campus &amp; Clinical Training
                  </p>

                  <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#163b72] sm:text-4xl">
                    Infrastructure &amp; Clinical Exposure
                  </h2>
                </div>

              </div>

              <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                The college offers modern dental clinics, advanced laboratories,
                digital radiology facilities, central library, hostels,
                transport, and extensive hands-on clinical training. Over
                40,000 community members benefit annually through outreach
                and dental camps.
              </p>

            </div>
          </div>

          {/* ================= WHY CHOOSE MDCH ================= */}
          <div
            className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#102f69] to-[#087d91] p-[1px] shadow-xl"
            data-aos="fade-up"
          >

            <div className="rounded-2xl bg-white p-7 sm:p-9">

              <div className="mb-7 flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg">
                  <Award className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                    MDCH Advantage
                  </p>

                  <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#163b72] sm:text-4xl">
                    Why Choose Madha Dental College &amp; Hospital?
                  </h2>
                </div>

              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {whyChoose.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                    <span className="font-['Montserrat'] text-[13px] font-medium leading-6 text-black sm:text-[14px]">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div
            className="mx-auto mt-10 max-w-5xl"
            data-aos="fade-up"
          >

            <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-9">

              <div className="mb-7 text-center">

                <p className="mb-2 font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Get in Touch
                </p>

                <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#163b72] sm:text-4xl">
                  Contact Details
                </h2>

                <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400" />

              </div>

              <div className="grid gap-4 md:grid-cols-3">

                <div className="rounded-xl bg-blue-50 p-5">
                  <MapPin className="mb-3 h-6 w-6 text-blue-700" />

                  <h3 className="font-['Montserrat'] text-[14px] font-bold text-[#163b72]">
                    Address
                  </h3>

                  <p className="mt-2 font-['Montserrat'] text-[13px] leading-6 text-black">
                    Somangalam Main Road, Madha Nagar,
                    Kundrathur, Chennai – 600069,
                    Tamil Nadu
                  </p>
                </div>

                <div className="rounded-xl bg-cyan-50 p-5">
                  <Phone className="mb-3 h-6 w-6 text-cyan-700" />

                  <h3 className="font-['Montserrat'] text-[14px] font-bold text-[#163b72]">
                    Phone
                  </h3>

                  <p className="mt-2 font-['Montserrat'] text-[13px] leading-6 text-black">
                    72739 01234
                    <br />
                    72749 01234
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-5">
                  <Mail className="mb-3 h-6 w-6 text-blue-700" />

                  <h3 className="font-['Montserrat'] text-[14px] font-bold text-[#163b72]">
                    Email
                  </h3>

                  <p className="mt-2 font-['Montserrat'] text-[13px] leading-6 text-black">
                    info@mdch.in
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* ================= BOTTOM PDF BUTTON ================= */}
          <div
            className="mx-auto mt-10 max-w-5xl text-center"
            data-aos="fade-up"
          >

            <div className="rounded-2xl bg-gradient-to-r from-[#102f69] to-[#087d91] p-8 shadow-xl">

              <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold text-white sm:text-4xl">
                Need the Complete Prospectus?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl font-['Montserrat'] text-[14px] leading-7 text-white/85 sm:text-[16px]">
                Download the official Madha Dental College &amp; Hospital
                prospectus for complete information.
              </p>

              <a
                href="/pdf/Madha_Dental_College_Prospectus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-['Montserrat'] text-[13px] font-bold text-[#163b72] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Download className="h-4 w-4" />
                Open Official Prospectus
              </a>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Prospectus;