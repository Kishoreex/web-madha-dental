import { useState } from "react";
import {
  ChevronDown,
  // your existing icons...
} from "lucide-react";

const AdmissionProcess = () => {
  const [openProgram, setOpenProgram] = useState<"bds" | "mds" | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
       <div
  className="container-custom text-center"
  data-aos="fade-up"
>


          <h1 className="text-5xl font-bold mb-5">
            Admission Procedure (SOP)
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Your complete step-by-step guide for admission into
            Madha Dental College & Hospital.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
<section
  className="py-16 bg-gray-50"
  data-aos="fade-up"
>
        <div className="container-custom">

          <h2 className="text-3xl font-bold text-center mb-10">
            Quick Navigation
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

      <a
  data-aos="zoom-in"
  data-aos-delay="100"
  href="/admissions/eligibility"
  className="block bg-white rounded-xl shadow p-6 hover:shadow-xl transition duration-300"
>

  <h3 className="font-bold text-xl mb-2">
    Eligibility
  </h3>

  <p>
    BDS & MDS Eligibility Criteria
  </p>

</a>

        

          <a
  data-aos="zoom-in"
  data-aos-delay="200"
  href="/admissions/eligibility#documents"
  className="block bg-white rounded-xl shadow p-6 hover:shadow-xl transition duration-300"
>

  <h3 className="font-bold text-xl mb-2">
    Documents
  </h3>

  <p>
    BDS & MDS Required Certificates & Records
  </p>

</a>

       
         <a
  data-aos="zoom-in"
  data-aos-delay="300"
  href="/admissions/mds"
  className="block bg-white rounded-xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
  <h3 className="font-bold text-xl mb-2">
    PG Seats
  </h3>

  <p>
    MDS Seat Availability
  </p>
</a>

          

          </div>

        </div>
      </section>
{/* Admission Journey */}

<section className="py-20 bg-white">
  <div className="container-custom">

    {/* Heading */}
    <div className="text-center mb-14">

     

      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-5">
        Admission Journey
      </h2>

      <p className="max-w-2xl mx-auto text-neutral-600 text-lg leading-8">
        Follow the journey from qualifying NEET to securing your admission
        at Madha Dental College & Hospital.
      </p>

    </div>


    {/* Journey */}
    <div className="relative max-w-6xl mx-auto">

      {/* Connecting Line - Desktop */}
      <div className="hidden lg:block absolute top-[48px] left-[7%] right-[7%] h-1 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">

        {[
          {
            number: "01",
            title: "NEET",
            description: "Qualify in the required entrance examination",
            icon: "🎯",
          },
          {
            number: "02",
            title: "Registration",
            description: "Complete the counselling registration",
            icon: "📝",
          },
          {
            number: "03",
            title: "Choice Filling",
            description: "Select your preferred college and course",
            icon: "☑️",
          },
          {
            number: "04",
            title: "Seat Allotment",
            description: "Receive your counselling allotment",
            icon: "🎓",
          },
          {
            number: "05",
            title: "Documents",
            description: "Complete certificate verification",
            icon: "📄",
          },
          {
            number: "06",
            title: "Fee Payment",
            description: "Pay the prescribed admission fees",
            icon: "💳",
          },
          {
            number: "07",
            title: "Admission",
            description: "Complete joining and admission formalities",
            icon: "✅",
          },
        ].map((step, index) => (

          <div
            key={step.number}
            className="relative group text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >

            {/* Number Circle */}
            <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center shadow-lg group-hover:border-blue-600 group-hover:scale-110 transition-all duration-300">

              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-blue-600 text-white flex flex-col items-center justify-center shadow-md">

                <span className="text-xs font-medium text-blue-200">
                  STEP
                </span>

                <span className="text-xl font-bold">
                  {step.number}
                </span>

              </div>

            </div>


            {/* Content */}
            <div className="mt-7 px-2">

              <div className="text-2xl mb-3">
                {step.icon}
              </div>

              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-neutral-500 leading-6">
                {step.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>


  

  </div>
</section>
{/* BDS & MDS ADMISSION PROCESS */}

<section className="py-20 bg-gray-50">
  <div className="container-custom">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Admission Process
      </h2>

      <p className="text-neutral-600 max-w-2xl mx-auto">
        Select your programme below to view the step-by-step admission
        procedure.
      </p>
    </div>

    <div className="max-w-5xl mx-auto space-y-5">

      {/* ================= BDS ================= */}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">

        <button
          type="button"
          onClick={() =>
            setOpenProgram(
              openProgram === "bds" ? null : "bds"
            )
          }
          className="w-full flex items-center justify-between gap-6 px-6 py-6 md:px-8 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-left hover:from-blue-800 hover:to-blue-600 transition-all duration-300"
        >

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-xl font-bold">
              BDS
            </div>

            <div>
              <p className="text-sm text-blue-200 font-medium">
                Bachelor of Dental Surgery
              </p>

              <h3 className="text-2xl md:text-3xl font-bold">
                BDS Admission Process
              </h3>

              <p className="text-sm text-blue-100 mt-1">
                7-step admission procedure
              </p>
            </div>

          </div>

          <ChevronDown
            className={`w-7 h-7 shrink-0 transition-transform duration-300 ${
              openProgram === "bds"
                ? "rotate-180"
                : ""
            }`}
          />

        </button>


        {openProgram === "bds" && (

          <div className="p-6 md:p-8">

            <p className="text-center text-neutral-600 mb-8">
              Step-by-step admission procedure for Bachelor of Dental Surgery.
            </p>

            <div className="space-y-5">

              {/* Step 1 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 1 — Eligibility
                </h3>

                <p className="text-neutral-700 leading-8">
                  Candidate must possess a valid NEET-UG score and satisfy
                  the eligibility criteria prescribed by the Dental Council
                  of India and the Tamil Nadu Selection Committee.
                </p>

              </div>


              {/* Step 2 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 2 — Register for Counselling
                </h3>

                <p className="text-neutral-700 leading-8">
                  Register online through the Tamil Nadu Selection Committee
                  portal and complete counselling registration by uploading
                  the required documents and paying the registration fee.
                </p>

              </div>


              {/* Step 3 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 3 — Choice Filling
                </h3>

                <p className="text-neutral-700 leading-8">
                  Select Madha Dental College & Hospital among your preferred
                  colleges and lock your choices before the deadline.
                </p>

              </div>


              {/* Step 4 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 4 — Seat Allotment
                </h3>

                <p className="text-neutral-700 leading-8">
                  Wait for the Selection Committee to publish the merit list
                  and seat allotment results.
                </p>

              </div>


              {/* Step 5 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 5 — Document Verification
                </h3>

                <p className="text-neutral-700 leading-8">
                  Report to the college with all original certificates for
                  verification within the reporting schedule.
                </p>

              </div>


              {/* Step 6 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 6 — Fee Payment
                </h3>

                <p className="text-neutral-700 leading-8">
                  Pay the prescribed tuition fee, security deposit and
                  complete admission formalities.
                </p>

              </div>


              {/* Step 7 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 7 — Admission Confirmed
                </h3>

                <p className="text-neutral-700 leading-8">
                  After successful verification and fee payment,
                  your admission to the BDS programme is confirmed.
                </p>

              </div>

            </div>

          </div>

        )}

      </div>


      {/* ================= MDS ================= */}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">

        <button
          type="button"
          onClick={() =>
            setOpenProgram(
              openProgram === "mds" ? null : "mds"
            )
          }
          className="w-full flex items-center justify-between gap-6 px-6 py-6 md:px-8 bg-gradient-to-r from-[#0b2345] to-[#164e63] text-white text-left hover:from-[#102f59] hover:to-[#17627a] transition-all duration-300"
        >

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-xl font-bold">
              MDS
            </div>

            <div>
              <p className="text-sm text-cyan-200 font-medium">
                Master of Dental Surgery
              </p>

              <h3 className="text-2xl md:text-3xl font-bold">
                MDS Admission Process
              </h3>

              <p className="text-sm text-cyan-100 mt-1">
                7-step postgraduate admission procedure
              </p>
            </div>

          </div>

          <ChevronDown
            className={`w-7 h-7 shrink-0 transition-transform duration-300 ${
              openProgram === "mds"
                ? "rotate-180"
                : ""
            }`}
          />

        </button>


        {openProgram === "mds" && (

          <div className="p-6 md:p-8">

            <p className="text-center text-neutral-600 mb-8">
              Step-by-step admission procedure for Master of Dental Surgery.
            </p>

            <div className="space-y-5">

              {/* Step 1 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 1 — Eligibility
                </h3>

                <p className="text-neutral-700 leading-8">
                  Candidate must possess a recognized BDS degree, complete
                  the compulsory internship, and qualify in the NEET-MDS
                  examination.
                </p>

              </div>


              {/* Step 2 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 2 — Counselling Registration
                </h3>

                <p className="text-neutral-700 leading-8">
                  Register through the appropriate counselling authority
                  (MCC for All India Quota or Tamil Nadu Selection Committee
                  for State Quota).
                </p>

              </div>


              {/* Step 3 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 3 — Choice Filling
                </h3>

                <p className="text-neutral-700 leading-8">
                  Select your preferred MDS specialty and choose
                  Madha Dental College & Hospital during counselling.
                </p>

              </div>


              {/* Step 4 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 4 — Seat Allotment
                </h3>

                <p className="text-neutral-700 leading-8">
                  Download the allotment order after the counselling
                  authority publishes the seat allotment results.
                </p>

              </div>


              {/* Step 5 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 5 — Reporting & Verification
                </h3>

                <p className="text-neutral-700 leading-8">
                  Report to the college with all original certificates
                  and complete document verification.
                </p>

              </div>


              {/* Step 6 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 6 — Fee Payment
                </h3>

                <p className="text-neutral-700 leading-8">
                  Pay the prescribed tuition fee, caution deposit and
                  complete all joining formalities.
                </p>

              </div>


              {/* Step 7 */}
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Step 7 — Admission Confirmed
                </h3>

                <p className="text-neutral-700 leading-8">
                  After successful verification and fee payment,
                  your admission to the MDS programme is confirmed.
                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  </div>
</section>
{/* Fee Structure */}

<section className="py-20 bg-gray-50">

  <div className="container-custom">

    <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
      Fee Structure
    </h2>

    <p className="text-center text-neutral-600 mb-12">
      Tuition fee details for BDS and MDS programmes.
    </p>

 <div
  data-aos="zoom-in"
  className="overflow-x-auto"
>

      <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">

        <thead className="bg-blue-900 text-white">

          <tr>

            <th className="p-5 text-left">
              Programme
            </th>

            <th className="p-5 text-center">
              Government Quota
            </th>

            <th className="p-5 text-center">
              Management Quota
            </th>

            <th className="p-5 text-center">
              Duration
            </th>

          </tr>

        </thead>

        <tbody>

          <tr className="border-b hover:bg-blue-50 transition">

            <td className="p-5 font-semibold">
              BDS
            </td>

            <td className="p-5 text-center">
              ₹2.5 Lakhs / Year
            </td>

            <td className="p-5 text-center">
              ₹6 Lakhs / Year
            </td>

            <td className="p-5 text-center">
              5 Years
            </td>

          </tr>

          <tr className="hover:bg-blue-50 transition">

            <td className="p-5 font-semibold">
              MDS
            </td>

            <td className="p-5 text-center">
              —
            </td>

            <td className="p-5 text-center">
              ₹8.5 Lakhs / Year
            </td>

            <td className="p-5 text-center">
              3 Years
            </td>

          </tr>

        </tbody>

      </table>

    </div>
<div
  className="mt-8 rounded-xl bg-blue-50 border border-blue-200 p-5"
  data-aos="fade-up"
>   

      <p className="font-semibold text-blue-800">
        Note:
      </p>

      <p className="mt-2 text-neutral-700 leading-8">
        The above fees are indicative and subject to revision as per
        Government regulations, University guidelines and College policies.
        Candidates are advised to verify the latest fee structure with the
        Admissions Office before confirmation of admission.
      </p>

    </div>

  </div>

</section>
{/* PG PROGRAMMES / SEATS */}

<section className="py-20 bg-white">

  <div className="container-custom">

    {/* Header */}
    <div className="text-center mb-14">

      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
        POSTGRADUATE PROGRAMMES
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-5 mb-5">
        PG Seats Available
      </h2>

      <p className="max-w-2xl mx-auto text-neutral-600 text-lg leading-8">
        Explore the Master of Dental Surgery specializations available
        at Madha Dental College & Hospital.
      </p>

    </div>


    {/* Summary */}
    <div className="max-w-5xl mx-auto mb-12">

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-800 p-8 md:p-10 text-white shadow-xl">

        {/* Background decoration */}
        <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-white/5" />
        <div className="absolute -left-16 -bottom-24 w-64 h-64 rounded-full bg-cyan-400/10" />

        <div className="relative grid md:grid-cols-3 gap-8 items-center">

          {/* Programme */}
          <div className="text-center md:text-left">

            <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">
              Programme
            </p>

            <h3 className="text-3xl font-bold mt-2">
              MDS
            </h3>

            <p className="text-blue-100 mt-1">
              Master of Dental Surgery
            </p>

          </div>


          {/* Specialties */}
          <div className="text-center border-y md:border-y-0 md:border-x border-white/15 py-6 md:py-0">

            <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">
              Specialties
            </p>

            <div className="text-4xl font-black mt-1">
              9
            </div>

            <p className="text-blue-100 mt-1">
              MDS Disciplines
            </p>

          </div>


          {/* Duration */}
          <div className="text-center md:text-right">

            <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">
              Programme Duration
            </p>

            <div className="text-4xl font-black mt-1">
              3
            </div>

            <p className="text-blue-100 mt-1">
              Years
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* Specialties */}
    <div className="max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {[
          {
            number: "01",
            title: "Conservative Dentistry & Endodontics",
            description: "Advanced restorative and endodontic treatment.",
            seats: 6,
          },
          {
            number: "02",
            title: "Oral & Maxillofacial Surgery",
            description: "Surgical management of oral and facial conditions.",
            seats: 6,
          },
          {
            number: "03",
            title: "Orthodontics & Dentofacial Orthopaedics",
            description: "Diagnosis and correction of irregular teeth and jaws.",
            seats: 6,
          },
          {
            number: "04",
            title: "Prosthodontics & Crown Bridge",
            description: "Restoration and replacement of missing teeth.",
            seats: 6,
          },
          {
            number: "05",
            title: "Periodontology",
            description: "Prevention and treatment of gum diseases.",
            seats: 6,
          },
          {
            number: "06",
            title: "Pedodontics & Preventive Dentistry",
            description: "Specialized dental care for children.",
            seats: 6,
          },
          {
            number: "07",
            title: "Public Health Dentistry",
            description: "Community oral health and preventive programmes.",
            seats: 2,
          },
          {
            number: "08",
            title: "Oral Medicine & Radiology",
            description: "Diagnosis using advanced imaging and oral medicine.",
            seats: 2,
          },
          {
            number: "09",
            title: "Oral Pathology & Microbiology",
            description: "Study and diagnosis of oral diseases.",
            seats: 2,
          },
        ].map((specialty, index) => (

          <div
            key={specialty.number}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={index * 70}
          >

            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-cyan-500" />


            {/* Number + Seats */}
            <div className="flex items-start justify-between mb-7">

              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                {specialty.number}
              </div>

              <div className="text-right">

                <div className="text-3xl font-black text-blue-900 leading-none">
                  {specialty.seats}
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mt-1">
                  Seats
                </div>

              </div>

            </div>


            {/* Title */}
            <h3 className="text-xl font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors">
              {specialty.title}
            </h3>


            {/* Description */}
            <p className="mt-3 text-sm text-neutral-600 leading-6">
              {specialty.description}
            </p>


            {/* Bottom */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">

              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                MDS Programme
              </span>

              <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-700">

                <span className="w-2 h-2 rounded-full bg-cyan-500" />

                {specialty.seats} Seats

              </span>

            </div>


            {/* Hover glow */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-500/5 group-hover:bg-blue-500/10 transition-all duration-500" />

          </div>

        ))}

      </div>

    </div>


  

  </div>

</section>
{/* Admission Checklist & Contact */}

<section className="py-20 bg-gray-50">

  <div className="container-custom">

    <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
      Admission Checklist
    </h2>

    <p className="text-center text-neutral-600 mb-12">
      Ensure you have completed all the required steps before reporting to the college.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Checklist */}

<div
  className="glass-card p-8"
  data-aos="fade-right"
>


        <h3 className="text-2xl font-bold text-blue-800 mb-6">
          Before You Join
        </h3>

        <ul className="space-y-4 text-neutral-700">

          <li>✅ Qualified in NEET (UG / MDS)</li>

          <li>✅ Completed Counselling Registration</li>

          <li>✅ Downloaded Allotment Order</li>

          <li>✅ Original Certificates Ready</li>

          <li>✅ Passport Size Photographs</li>

          <li>✅ Aadhaar Card Copy</li>

          <li>✅ Tuition Fee Prepared</li>

          <li>✅ Reporting Date Confirmed</li>

        </ul>

      </div>

      {/* Useful Links */}

    <div
  className="glass-card p-8"
  data-aos="fade-left"
>

        <h3 className="text-2xl font-bold text-blue-800 mb-6">
          Useful Links
        </h3>

        <div className="space-y-4">

          <a
            href="https://tnmedicalselection.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg border hover:bg-blue-50 transition"
          >
            Tamil Nadu Selection Committee
          </a>

          <a
            href="/pdf/Brochure.pdf"
            target="_blank"
            className="block p-4 rounded-lg border hover:bg-blue-50 transition"
          >
            Download Admission Brochure
          </a>

          <a
            href="/contact"
            className="block p-4 rounded-lg border hover:bg-blue-50 transition"
          >
            Contact Admissions Office
          </a>

        </div>

      </div>

    </div>

  </div>

</section>


    </>
  );
};

export default AdmissionProcess;