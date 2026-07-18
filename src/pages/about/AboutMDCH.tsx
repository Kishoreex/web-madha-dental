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

      <p className="body-large max-w-3xl mx-auto text-neutral-600">
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
17+
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
className="text-[17px] leading-8 text-slate-600 text-justify"
data-aos="fade-up"
data-aos-delay="100"
>

Madha Dental College & Hospital is a premier dental institution, affiliated to The Tamil Nadu Dr.M.G.R. Medical University and recognized by the Dental council of India. Started in the year 2006by the visionary organization, Soosaiya Peter Educational trust. The institution has evolved from a provider of BDS degree to providing Post Graduate MDS degrees across several dental specialties. Established with the goal of offering top-notch training facilities to generate dentists of the utmost quality, the institute has successfully realized this objective through the collaborative efforts of both the management and staff.
</p>
</div>
 </div>
        {/* Full Width Content */}
          <div className="mt-16 space-y-5">
<p
className="text-[17px] leading-8 text-slate-600 text-justify"
data-aos="fade-up"
data-aos-delay="100"
>
The college prides itself of the intellectual congregation at its premises in the form of the experience and expertise of the faculty members, who have towered great heights in the field of dentistry at national and international levels.

</p>

<p
className="text-[17px] leading-8 text-slate-600 text-justify"
data-aos="fade-up"
data-aos-delay="100"
>

Madha Dental College places a strong emphasis on fostering a student-centric environment that promotes both academic excellence and personal growth. Through tailored academic programs, interactive learning platforms, and personalized mentorship, the college ensures that students receive individual attention and support. Beyond academics, extracurricular activities and counseling services are provided to encourage overall personal growth, ensuring that students graduate not only as skilled dental professionals but also as well-rounded individuals prepared for the challenges of the future.
</p>
<p
className="text-[17px] leading-8 text-slate-600 text-justify"
data-aos="fade-up"
data-aos-delay="100"
>
The institute has crossed many milestones in its journey since 2006. The institute carries out an extensive and holistic Community Outreach program within the Public Health Dentistry Department. We organize regular camps and offer complimentary services to the residents of villages in the Kundrathur area. This program has benefited more than 40000 people in the last five years alone. The institution releases an annual journal, with the 2019 edition being unveiled by the esteemed President of the Dental Council of India, Dr.Dibyantu Mazumdar. Most recently, the department of Oral & Maxillofacial Surgery started training students in advanced facial esthetics procedures.

</p>

</div>


<div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8"
data-aos="zoom-in"
data-aos-delay="100">

<div className="glass-card p-6 text-center" data-aos="zoom-in" data-aos-delay="100">
<h3 className="text-4xl font-bold text-medical-blue">
17+
</h3>
<p>Years</p>
</div>

<div className="glass-card p-6 text-center" data-aos="zoom-in" data-aos-delay="100">
<h3 className="text-4xl font-bold text-medical-blue">
100+
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
40000+
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