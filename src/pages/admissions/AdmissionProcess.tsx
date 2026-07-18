const AdmissionProcess = () => {
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

      {/* Admission Timeline */}
   <section
  className="py-20"
  data-aos="fade-up"
>

        <div className="container-custom">

          <h2 className="text-3xl font-bold text-center mb-14">
            Admission Journey
          </h2>

          <div className="grid lg:grid-cols-7 gap-6 text-center">

            {[
              "NEET",
              "Registration",
              "Choice Filling",
              "Seat Allotment",
              "Documents",
              "Fee Payment",
              "Admission"
            ].map((step, index) => (

            <div
  key={index}
  className="bg-white rounded-xl shadow-md p-6 border hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
  data-aos="zoom-in"
  data-aos-delay={index * 100}
>

                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>

                <h3 className="font-semibold">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
{/* BDS Admission Process */}

<section
  className="py-20 bg-gray-50"
  data-aos="fade-up"
>

  <div className="container-custom">

    <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
      BDS Admission Process
    </h2>

    <p className="text-center text-neutral-600 mb-14">
      Step-by-step admission procedure for Bachelor of Dental Surgery.
    </p>

    <div className="space-y-8">

    <div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-right"
>
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 1 — Eligibility
        </h3>

        <p className="text-neutral-700 leading-8">
          Candidate must possess a valid NEET-UG score and satisfy
          the eligibility criteria prescribed by the Dental Council
          of India and the Tamil Nadu Selection Committee.
        </p>
      </div>

   <div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-right"
>
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 2 — Register for Counselling
        </h3>

        <p className="text-neutral-700 leading-8">
          Register online through the Tamil Nadu Selection Committee
          portal and complete counselling registration by uploading
          the required documents and paying the registration fee.
        </p>
      </div>

<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-right"
>
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 3 — Choice Filling
        </h3>

        <p className="text-neutral-700 leading-8">
          Select Madha Dental College & Hospital among your preferred
          colleges and lock your choices before the deadline.
        </p>
      </div>
<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-right"
>
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 4 — Seat Allotment
        </h3>

        <p className="text-neutral-700 leading-8">
          Wait for the Selection Committee to publish the merit list
          and seat allotment results.
        </p>
      </div>
<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-right"
>
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 5 — Document Verification
        </h3>

        <p className="text-neutral-700 leading-8">
          Report to the college with all original certificates for
          verification within the reporting schedule.
        </p>
      </div>
<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-right"
>
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 6 — Fee Payment
        </h3>

        <p className="text-neutral-700 leading-8">
          Pay the prescribed tuition fee, security deposit and
          complete admission formalities.
        </p>
      </div>

  <div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-right"
>
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 7 — Admission Confirmed
        </h3>

        <p className="text-neutral-700 leading-8">
          After successful verification and fee payment,
          your admission to the BDS programme is confirmed.
        </p>
      </div>

    </div>

  </div>

</section>
{/* MDS Admission Process */}

<section className="py-20">

  <div className="container-custom">

    <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
      MDS Admission Process
    </h2>

    <p className="text-center text-neutral-600 mb-14">
      Step-by-step admission procedure for Master of Dental Surgery.
    </p>

    <div className="space-y-8">

  <div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-left"
>

        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 1 — Eligibility
        </h3>

        <p className="text-neutral-700 leading-8">
          Candidate must possess a recognized BDS degree, complete the
          compulsory internship, and qualify in the NEET-MDS examination.
        </p>

      </div>

<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-left"
>

        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 2 — Counselling Registration
        </h3>

        <p className="text-neutral-700 leading-8">
          Register through the appropriate counselling authority
          (MCC for All India Quota or Tamil Nadu Selection Committee
          for State Quota).
        </p>

      </div>

<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-left"
>

        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 3 — Choice Filling
        </h3>

        <p className="text-neutral-700 leading-8">
          Select your preferred MDS specialty and choose
          Madha Dental College & Hospital during counselling.
        </p>

      </div>

<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-left"
>

        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 4 — Seat Allotment
        </h3>

        <p className="text-neutral-700 leading-8">
          Download the allotment order after the counselling
          authority publishes the seat allotment results.
        </p>

      </div>

<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-left"
>

        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 5 — Reporting & Verification
        </h3>

        <p className="text-neutral-700 leading-8">
          Report to the college with all original certificates
          and complete document verification.
        </p>

      </div>
<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-left"
>

        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 6 — Fee Payment
        </h3>

        <p className="text-neutral-700 leading-8">
          Pay the prescribed tuition fee, caution deposit and
          complete all joining formalities.
        </p>

      </div>
<div
  className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
  data-aos="fade-left"
>
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          Step 7 — Admission Confirmed
        </h3>

        <p className="text-neutral-700 leading-8">
          After successful verification and fee payment,
          your admission to the MDS programme is confirmed.
        </p>

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
{/* PG Seats */}

<section className="py-20">

  <div className="container-custom">

    <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
      PG Seats Available in Various Disciplines
    </h2>

    <p className="text-center text-neutral-600 mb-14">
      Master of Dental Surgery (MDS) seat distribution across various specialties.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div
  className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
  data-aos="zoom-in"
  data-aos-delay="100"
>
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          Conservative Dentistry & Endodontics
        </h3>
        <p className="text-neutral-600 mb-3">
          Advanced restorative and endodontic treatment.
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          3 Seats
        </span>
      </div>
<div
  className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
  data-aos="zoom-in"
  data-aos-delay="100"
>
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          Oral & Maxillofacial Surgery
        </h3>
        <p className="text-neutral-600 mb-3">
          Surgical management of oral and facial conditions.
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          3 Seats
        </span>
      </div>

<div
  className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
  data-aos="zoom-in"
  data-aos-delay="100"
>
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          Orthodontics & Dentofacial Orthopaedics
        </h3>
        <p className="text-neutral-600 mb-3">
          Diagnosis and correction of irregular teeth and jaws.
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          3 Seats
        </span>
      </div>

 <div
  className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
  data-aos="zoom-in"
  data-aos-delay="100"
>
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          Prosthodontics & Crown Bridge
        </h3>
        <p className="text-neutral-600 mb-3">
          Restoration and replacement of missing teeth.
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          3 Seats
        </span>
      </div>

<div
  className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
  data-aos="zoom-in"
  data-aos-delay="100"
>
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          Periodontology
        </h3>
        <p className="text-neutral-600 mb-3">
          Prevention and treatment of gum diseases.
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          3 Seats
        </span>
      </div>

<div
  className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
  data-aos="zoom-in"
  data-aos-delay="100"
>
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          Pedodontics & Preventive Dentistry
        </h3>
        <p className="text-neutral-600 mb-3">
          Specialized dental care for children.
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          3 Seats
        </span>
      </div>
<div
  className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
  data-aos="zoom-in"
  data-aos-delay="100"
>
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          Public Health Dentistry
        </h3>
        <p className="text-neutral-600 mb-3">
          Community oral health and preventive programmes.
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          2 Seats
        </span>
      </div>
<div
  className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
  data-aos="zoom-in"
  data-aos-delay="100"
>
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          Oral Medicine & Radiology
        </h3>
        <p className="text-neutral-600 mb-3">
          Diagnosis using advanced imaging and oral medicine.
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          2 Seats
        </span>
      </div>
<div
  className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
  data-aos="zoom-in"
  data-aos-delay="100"
>
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          Oral Pathology & Microbiology
        </h3>
        <p className="text-neutral-600 mb-3">
          Study and diagnosis of oral diseases.
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
          2 Seats
        </span>
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

{/* Contact Admissions */}

<section className="py-20">

  <div className="container-custom">

<div
  className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl text-white p-12 text-center"
  data-aos="zoom-in"
>

      <h2 className="text-4xl font-bold mb-4">
        Need Admission Assistance?
      </h2>

      <p className="text-blue-100 max-w-3xl mx-auto mb-10">
        Our Admissions Office is here to guide you through every step of the admission process.
        Contact us for counselling, eligibility, fee details, and document verification.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div>

          <h4 className="font-semibold mb-2">
            Phone
          </h4>

          <p>+91 XXXXX XXXXX</p>

        </div>

        <div>

          <h4 className="font-semibold mb-2">
            Email
          </h4>

          <p>admissions@madhadentalcollege.com</p>

        </div>

        <div>

          <h4 className="font-semibold mb-2">
            Office Hours
          </h4>

          <p>Monday – Saturday<br />9:00 AM – 5:00 PM</p>

        </div>

      </div>

      <div className="flex flex-wrap justify-center gap-4">

        <a
          href="/contact"
          className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-100 transition"
        >
          Contact Us
        </a>

        <a
          href="/pdf/Brochure.pdf"
          target="_blank"
          className="px-8 py-4 border border-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition"
        >
          Download Brochure
        </a>

      </div>

    </div>

  </div>

</section>
    </>
  );
};

export default AdmissionProcess;