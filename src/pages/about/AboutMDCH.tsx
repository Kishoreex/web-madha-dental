import { IMAGES } from "../../data/images";

export default function AboutMDCH() {
  return (
    <div className="bg-white">

      {/* Hero Banner */}
      <section className="relative h-[300px]">
        <img
          src={IMAGES.aboutMdch}
          className="w-full h-full object-cover"
          alt="About MDCH"
        />

        <div className="absolute inset-0 bg-medical-navy/70 flex items-center justify-center">
         <div
  className="text-center text-white"
  data-aos="fade-up"
>
            <h1 className="text-5xl font-bold">
              Madha Dental College & Hospital
            </h1>

            <p className="mt-4 text-lg">
              Home / About / Madha Dental College & Hospital
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
<section className="py-14 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

  <div
className="text-center mb-10"
data-aos="fade-up"
>

      <span className="badge mb-4">
        About Madha Dental College
      </span>

      <h2 className="heading-2 mb-6">
        Building Future
        <span className="gradient-text">
          {" "}Dental Leaders
        </span>
      </h2>

      <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
        Madha Dental College & Hospital has been delivering excellence in
        dental education, research and patient care since 2006.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

<div
className="relative"
data-aos="fade-right"
>

<img
src={IMAGES.aboutMdch}
alt="About MDCH"
className="rounded-3xl shadow-2xl w-full"
/>

<div className="absolute -bottom-8 -right-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 p-6">

<h3 className="text-4xl font-bold text-medical-blue">
19+
</h3>

<p className="text-neutral-600">
Years of Excellence
</p>

</div>

</div>

<div
data-aos="fade-left"
>
<h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
  Excellence in Dental Education Since 2006
</h3>

<p
className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]"
data-aos="fade-up"
data-aos-delay="100"
>

Madha Dental College & Hospital is a premier institution committed to excellence in dental education, clinical training, research, innovation, and community service. Affiliated with The Tamil Nadu Dr. M.G.R. Medical University and recognized by the Dental Council of India, the institution was established in 2006 under the Soosaiya Peter Educational Trust and has grown into a centre for undergraduate and postgraduate dental education across multiple specialties.</p>
</div>
 </div>
        {/* Full Width Content */}
          <div className="mt-16 space-y-5">
<p
className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]"
data-aos="fade-up"
data-aos-delay="100"
>
With experienced faculty, modern infrastructure, advanced clinical facilities, and a student-centric learning environment, the institution nurtures competent, ethical, and future-ready dental professionals. Academic excellence is reflected in university-level distinctions and subject toppers, while a growing culture of research has resulted in peer-reviewed publications, research grants, patents, and copyrights.
</p>

<p
className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]"
data-aos="fade-up"
data-aos-delay="100"
>

Madha Dental College & Hospital is equally committed to creating opportunities for students from diverse social and economic backgrounds, enabling them to access quality professional education, develop their skills, and progress towards meaningful and independent careers. Through education, mentorship, and a supportive institutional environment, the college seeks to contribute to individual advancement and broader social mobility.</p>
<p
className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]"
data-aos="fade-up"
data-aos-delay="100"
>
The institution encourages holistic development through sports, extracurricular activities, and professional forums, with students earning recognition at university and intercollegiate levels. Its sustained community outreach initiatives extend oral healthcare, education, screening, and preventive services to underserved communities.
</p>
<p
className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]"
data-aos="fade-up"
data-aos-delay="100"
>
The institution also publishes an annual journal, providing a platform for scholarly and research contributions. With nearly two decades of growth and achievement, Madha Dental College & Hospital continues to advance a vision that integrates academic excellence, clinical competence, research, innovation, social responsibility, and holistic development.</p>
</div>


<div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8"
data-aos="zoom-in"
data-aos-delay="100">

<div className="glass-card p-6 text-center" data-aos="zoom-in" data-aos-delay="100">
<h3 className="text-4xl font-bold text-medical-blue">
19+
</h3>
<p>Years</p>
</div>

<div className="glass-card p-6 text-center" data-aos="zoom-in" data-aos-delay="100">
<h3 className="text-4xl font-bold text-medical-blue">
90+
</h3>
<p>Faculty</p>
</div>

<div className="glass-card p-6 text-center" data-aos="zoom-in" data-aos-delay="100">
<h3 className="text-4xl font-bold text-medical-blue">
300+
</h3>
<p>Dental Chairs</p>
</div>

<div className="glass-card p-6 text-center" data-aos="zoom-in" data-aos-delay="100">
<h3 className="text-4xl font-bold text-medical-blue">
150000+
</h3>
<p>Patients</p>
</div>

<div className="glass-card p-6 text-center" data-aos="zoom-in" data-aos-delay="100">
<h3 className="text-4xl font-bold text-medical-blue">
DCI
</h3>
<p>Recognized</p>
</div>

<div className="glass-card p-6 text-center" data-aos="zoom-in" data-aos-delay="100">
<h3 className="text-4xl font-bold text-medical-blue">
NAAC
</h3>
<p>Accredited</p>
</div>

</div>
</div>
</section>

    </div>
  );
}