import { IMAGES } from "../../data/images";

export default function PrincipalsDesk() {
  return (
    <div className="bg-white">

     <section className="pt-24 pb-8">

  <div className="max-w-5xl mx-auto px-6">

    {/* Header */}

    <div
      className="text-center mb-12"
      data-aos="fade-up"
    >

      <span className="mb-3 font-['Montserrat'] text-[17px] font-semibold uppercase tracking-[0.28em] text-blue-700">
        Principal's Desk
      </span>

      <h2 className="heading-2">
        Message From Our
        <span className="gradient-text">
          {" "}Principal
        </span>
      </h2>

    <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px] max-w-4xl mx-auto mt-6">
        A warm welcome from the Principal of Madha Dental College & Hospital,
        sharing the vision, values and commitment towards excellence in dental
        education, research and patient care.
      </p>

    </div>

          {/* Principal Card */}

         <div
  className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-10"
  data-aos="fade-up"
>

  {/* Top Section */}

  <div className="grid lg:grid-cols-3 gap-10 items-start">

    {/* Image */}

{/* Image */}

<div className="lg:pt-9">

  <img
    src={IMAGES.Principal}
    alt="Dr. V. Anand Kumar"
    className="rounded-2xl w-full shadow-lg"
  />

</div>

    {/* Right Side */}

    <div className="lg:col-span-2">

      <span className="mb-3 font-['Montserrat'] text-[17px] font-semibold uppercase tracking-[0.28em] text-blue-700">   Principal
      </span>

      <h2 className="text-4xl font-bold text-medical-navy mb-2">
        Dr. V. Anand Kumar
      </h2>

<p className="font-['Montserrat'] text-medical-blue font-semibold mb-4 tracking-wide">
  Madha Dental College & Hospital
</p>

<p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px] italic text-medical-navy font-medium">
    Dear Parents and Students,
  </p>

<p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">

    It gives me immense pleasure to welcome you to the website of Madha
    Dental College and Hospital, Chennai. The Madha Group of Institutions
    has been a pioneer in the field of higher education since 1998. Under
    the visionary leadership of our Founder and Chairman, Ln. Dr. S. Peter,
    Madha Dental College was established in 2007 under the aegis of the
    Soosaiya Peter Educational Trust. Today, the institution is guided by
    Ms. Mercy Florence Peter, Vice Chairperson and Mr. Ajay Ravindra Kumar,
    Managing Director, whose leadership continues to strengthen its legacy
    of excellence.
  </p>

    </div>

  </div>

  {/* Remaining Message */}

<div className="mt-4 space-y-5 text-justify">

   
<p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
    Over a short span of 17 years, Madha Dental College and Hospital,
    located at Kundrathur, Chennai, in Kancheepuram District, is affiliated
    with the prestigious The Tamil Nadu Dr. M.G.R. Medical University,
    Chennai. It offers an undergraduate programme with an annual intake of
    100 BDS students and is recognized for conducting postgraduate
    programmes in nine dental specialties, reflecting its comprehensive
    academic strength.
  </p>

<p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
    Through its dedicated faculty, state-of-the-art infrastructure and
    patient-centered approach, the college strives to enhance the quality
    of life of the community through excellence in dental education,
    comprehensive patient care and innovative research. By fostering
    academic excellence and social responsibility, the institution aims to
    contribute significantly to the oral health and overall well-being of
    the people it serves.
  </p>

<p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
    True to Phil Jackson's dictum,
    <span className="italic">
      {" "}
      "The strength of the team is each individual member; the strength of
      each member is the team,"
    </span>{" "}
    our management, faculty and staff are united by a common vision to
    nurture competent and disciplined professionals, ethical leaders and
    compassionate healthcare providers who will contribute meaningfully to
    society.
  </p>

 <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
    As you explore our website, you will discover the academic programmes,
    clinical services, research initiatives and vibrant learning
    environment that define Madha Dental College and Hospital. We look
    forward to welcoming aspiring students and partnering with parents in
    shaping the future of our nation. Together, we aspire to develop
    compassionate caregivers who will make a meaningful difference to
    society and contribute to the health and well-being of the communities
    they serve.
  </p>

  <div className="pt-4 border-t border-gray-200">

 <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px] italic text-medical-navy mb-1">
  With best wishes,
</p>

    <h3 className="text-2xl font-bold text-medical-navy">
      Dr. V. Anand Kumar
    </h3>

<p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px] text-medical-blue font-semibold mt-0">
      Principal, Madha Dental College &amp; Hospital, Chennai
    </p>
</div>

  </div>

</div>

        </div>

      </section>

    </div>
  );
}