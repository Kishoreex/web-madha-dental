import { useState } from "react";

const EligibilityCriteria = () => {
  const [activeTab, setActiveTab] = useState<"bds" | "mds">("bds");

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
  <section className="bg-gradient-to-r from-blue-900 to-cyan-700 pt-28 pb-20 text-white">

        <div
          className="container-custom text-center"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold">
            Eligibility Criteria
          </h1>

          <p className="mt-4 font-['Montserrat'] text-[14px] leading-7 text-white sm:text-[17px]">
            Home / Admissions / Eligibility Criteria
          </p>
        </div>

      </section>

      {/* Content */}
      <section className="py-10">

        <div className="container-custom">

          {/* Course Selector */}
          <div
            className="mx-auto mb-10 max-w-3xl"
            data-aos="fade-up"
          >

            <div className="rounded-2xl bg-white p-2 shadow-card">

              <div className="grid grid-cols-2 gap-2">

                {/* BDS Button */}
                <button
                  type="button"
                  onClick={() => setActiveTab("bds")}
                  className={`rounded-xl px-6 py-4 font-['Montserrat'] text-[15px] font-semibold transition-all duration-300 sm:text-[17px] ${
                    activeTab === "bds"
                      ? "bg-blue-900 text-white shadow-lg"
                      : "bg-transparent text-blue-900 hover:bg-blue-50"
                  }`}
                >
                  Bachelor of Dental Surgery
                  <span className="ml-2">(BDS)</span>
                </button>

                {/* MDS Button */}
                <button
                  type="button"
                  onClick={() => setActiveTab("mds")}
                  className={`rounded-xl px-6 py-4 font-['Montserrat'] text-[15px] font-semibold transition-all duration-300 sm:text-[17px] ${
                    activeTab === "mds"
                      ? "bg-blue-900 text-white shadow-lg"
                      : "bg-transparent text-blue-900 hover:bg-blue-50"
                  }`}
                >
                  Master of Dental Surgery
                  <span className="ml-2">(MDS)</span>
                </button>

              </div>

            </div>

          </div>

          {/* ================= BDS ================= */}
          {activeTab === "bds" && (
            <div
              className="space-y-8"
              data-aos="fade-up"
            >

              {/* BDS Eligibility */}
              <div className="glass-card p-8">

                <h2 className="mb-8 font-['Cormorant_Garamond'] text-3xl font-bold text-blue-900 sm:text-4xl">
                  Bachelor of Dental Surgery (BDS)
                </h2>

                <h3 className="mb-6 font-['Cormorant_Garamond'] text-2xl font-semibold uppercase text-blue-800 sm:text-3xl">
                  Eligibility for Admission
                </h3>

                <div className="space-y-6">

                  <div>

                    <h4 className="mb-2 font-['Montserrat'] text-[16px] font-bold text-black sm:text-[18px]">
                      1. Qualification
                    </h4>

                    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                      Candidates should have passed the 12th Grade Examination
                      or equivalent examination, comprising the subjects of
                      Physics, Chemistry and Biology (PCB) with English as
                      language and obtained a minimum of 50% (in case of OC)
                      in the aggregate marks of Physics, Chemistry and Biology
                      (40% in the case of SC/ST/OBC).
                    </p>

                    <p className="mt-4 font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                      Eligible NEET (UG) score should be obtained as prescribed
                      by DGHS.
                    </p>

                  </div>

                  <div>

                    <h4 className="mb-2 font-['Montserrat'] text-[16px] font-bold text-black sm:text-[18px]">
                      2. Age Requirement
                    </h4>

                    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                      Candidate shall complete the age of 17 years as on
                      31st December of the year in which the admission is
                      sought.
                    </p>

                  </div>

                  <div>

                    <h4 className="mb-2 font-['Montserrat'] text-[16px] font-bold text-black sm:text-[18px]">
                      3. NEET Qualification
                    </h4>

                    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                      Candidate shall qualify in the NEET with the requisite
                      percentile score as notified by the Dental Council of
                      India by its BDS revised regulation.
                    </p>

                  </div>

                </div>

              </div>

              {/* BDS Certificates */}
              <div className="glass-card p-8">

                <h2 className="mb-6 font-['Cormorant_Garamond'] text-3xl font-bold text-blue-900 sm:text-4xl">
                  Certificates Required For Admission
                </h2>

                <p className="mb-8 font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                  Students seeking admission to first year BDS course should
                  submit the following documents/certificates in original at
                  the time of admission.
                </p>

                <ol className="list-decimal space-y-4 pl-6 font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">

                  <li>
                    Allotment order issued by the Secretary, Selection
                    Committee, Kilpauk, Chennai.
                  </li>

                  <li>
                    12th standard or equivalent examination Mark Sheet.
                  </li>

                  <li>
                    10th standard examination Mark Sheet.
                  </li>

                  <li>
                    Transfer Certificate after completion of 12th.
                  </li>

                  <li>
                    Community Certificate.
                  </li>

                  <li>
                    Conduct Certificate from institution last studied.
                  </li>

                  <li>
                    Hepatitis B Vaccination Certificate issued by the Medical
                    Officer.
                  </li>

                  <li>
                    3 sets of Xerox copies of all above original certificates.
                  </li>

                  <li>
                    Passport size photo 10 nos.
                  </li>

                  <li>
                    First Graduate Certificate (if applicable).
                  </li>

                  <li>
                    Migration Certificate for other state students
                    (CBSE / Intermediate etc.).
                  </li>

                  <li>
                    Eligibility Certificate issued by the TN Dr. M.G.R Medical
                    University (applicable to students from other Countries /
                    State students).
                  </li>

                  <li>
                    Nativity Certificate.
                  </li>

                  <li>
                    NEET Score Card for the relevant year of admission.
                  </li>

                  <li>
                    Aadhaar Card Copy.
                  </li>

                </ol>

                {/* NEET */}
                <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5">

                  <p className="font-['Montserrat'] text-[14px] font-semibold leading-7 text-black sm:text-[17px]">
                    More details and information of the NEET can be obtained
                    from the official website.
                  </p>

                  <a
                    href="https://neet.nta.nic.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Montserrat'] text-[14px] font-semibold leading-7 text-blue-600 hover:underline sm:text-[17px]"
                  >
                    https://neet.nta.nic.in/
                  </a>

                </div>

              </div>

            </div>
          )}

          {/* ================= MDS ================= */}
          {activeTab === "mds" && (
            <div
              className="space-y-8"
              data-aos="fade-up"
            >

              {/* MDS Eligibility */}
              <div className="glass-card p-8">

                <h2 className="mb-8 font-['Cormorant_Garamond'] text-3xl font-bold text-blue-900 sm:text-4xl">
                  Master of Dental Surgery (MDS)
                </h2>

                <h3 className="mb-6 font-['Cormorant_Garamond'] text-2xl font-semibold uppercase text-blue-800 sm:text-3xl">
                  Eligibility for Admission
                </h3>

                <div className="space-y-6">

                  <div>

                    <h4 className="mb-2 font-['Montserrat'] text-[16px] font-bold text-black sm:text-[18px]">
                      1. Qualification
                    </h4>

                    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                      Applicants must meet all requirements stipulated by DCI.
                      They should have successfully passed their B.D.S. from
                      an institution recognized by DCI and must have completed
                      or be completing their internship by 30th April of the
                      relevant academic year.
                    </p>

                  </div>

                  <div>

                    <h4 className="mb-2 font-['Montserrat'] text-[16px] font-bold text-black sm:text-[18px]">
                      2. NEET MDS Qualification
                    </h4>

                    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                      Candidates should have qualified in the National
                      Eligibility-cum-Entrance Test (NEET-MDS) conducted by
                      the National Testing Agency (NTA), New Delhi.
                    </p>

                    <p className="mt-4 font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                      Candidates should have obtained the minimum qualifying
                      percentile prescribed by the Dental Council of India
                      according to their respective category (OC/OBC/SC/ST).
                    </p>

                  </div>

                  <div>

                    <h4 className="mb-2 font-['Montserrat'] text-[16px] font-bold text-black sm:text-[18px]">
                      3. Registration
                    </h4>

                    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                      Every student admitted to the MDS programme should
                      possess a recognized B.D.S Degree and Permanent
                      Registration with the Dental Council of India or any
                      State Dental Council, or obtain the same within one
                      month of admission.
                    </p>

                  </div>

                  <div>

                    <h4 className="mb-2 font-['Montserrat'] text-[16px] font-bold text-black sm:text-[18px]">
                      4. Foreign University Graduates
                    </h4>

                    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                      Candidates possessing a recognized Foreign University
                      B.D.S Degree may obtain temporary or permanent
                      registration from DCI for the duration of their
                      postgraduate training, subject to DCI regulations.
                    </p>

                  </div>

                </div>

                {/* NEET MDS */}
                <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5">

                  <p className="font-['Montserrat'] text-[14px] font-semibold leading-7 text-black sm:text-[17px]">
                    More details regarding NEET-MDS can be obtained from the
                    official NBE website.
                  </p>

                  <a
                    href="https://natboard.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Montserrat'] text-[14px] font-semibold leading-7 text-blue-600 hover:underline sm:text-[17px]"
                  >
                    https://natboard.edu.in/
                  </a>

                </div>

              </div>

              {/* MDS Certificates */}
              <div className="glass-card p-8">

                <h2 className="mb-6 font-['Cormorant_Garamond'] text-3xl font-bold text-blue-900 sm:text-4xl">
                  Certificates Required For Admission
                </h2>

                <p className="mb-6 font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
                  Students seeking admission to the MDS programme should
                  submit the following original documents at the time of
                  admission.
                </p>

                <ol className="list-decimal space-y-4 pl-6 font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">

                  <li>
                    Provisional Allotment Letter issued by the Secretary,
                    Selection Committee, Directorate of Medical Education,
                    Chennai.
                  </li>

                  <li>
                    12th Mark Sheet (HSC / CBSE).
                  </li>

                  <li>
                    10th Mark Sheet (HSC / CBSE).
                  </li>

                  <li>
                    Transfer Certificate after completion of HSC.
                  </li>

                  <li>
                    Community Certificate.
                  </li>

                  <li>
                    Conduct Certificate from the institution last studied.
                  </li>

                  <li>
                    Hepatitis B Vaccination Certificate issued by Medical
                    Officer.
                  </li>

                  <li>
                    3 sets of Xerox copies of all above original certificates.
                  </li>

                  <li>
                    Ten Passport Size Colour Photographs.
                  </li>

                  <li>
                    First Graduate Certificate (if applicable).
                  </li>

                  <li>
                    Migration Certificate for other state students.
                  </li>

                  <li>
                    Eligibility Certificate from The Tamil Nadu Dr. M.G.R
                    Medical University for other board students.
                  </li>

                  <li>
                    Nativity Certificate.
                  </li>

                  <li>
                    NEET Score Card.
                  </li>

                  <li>
                    Aadhaar Card Copy.
                  </li>

                  <li>
                    B.D.S Degree Certificate / Provisional Certificate.
                  </li>

                  <li>
                    B.D.S Internship Completion Certificate.
                  </li>

                  <li>
                    Permanent State Dental Council Registration Certificate.
                  </li>

                  <li>
                    B.D.S Mark Statements (First Year to Final Year).
                  </li>

                  <li>
                    B.D.S Consolidated Statement of Marks.
                  </li>

                  <li>
                    B.D.S Attempt Certificate.
                  </li>

                  <li>
                    B.D.S Transfer / Migration Certificate.
                  </li>

                  <li>
                    B.D.S Conduct Certificate issued by the Head of
                    Institution last studied.
                  </li>

                </ol>

              </div>

            </div>
          )}

        </div>

      </section>

    </div>
  );
};

export default EligibilityCriteria;