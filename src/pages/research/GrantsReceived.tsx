import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GrantsReceived = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">

          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold"
          >
            Grants Received
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-5 text-blue-100 max-w-3xl mx-auto"
          >
            Madha Dental College & Hospital actively promotes research by
            encouraging faculty members to undertake funded research projects
            across various dental specialties.
          </p>

        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          <div
            data-aos="zoom-in"
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-blue-700">
              46
            </h2>

            <p className="mt-2 text-gray-600">
              Total Projects
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-green-700">
              ₹5,03,500
            </h2>

            <p className="mt-2 text-gray-600">
              Total Funds (2022–23)
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-green-700">
              ₹7,88,100
            </h2>

            <p className="mt-2 text-gray-600">
              Total Funds (2023–24)
            </p>
          </div>

        </div>

     </section>

{/* 2022-23 */}
<section className="container mx-auto px-6 pb-20">

  <div
    data-aos="fade-up"
    className="bg-white rounded-2xl shadow-xl overflow-hidden"
  >

    <div className="bg-blue-800 text-white px-6 py-5">

      <h2 className="text-3xl font-bold">
        Grants Received – 2022–23
      </h2>

      <p className="text-blue-100 mt-2">
        Faculty Research Projects funded during the academic year 2022–23.
      </p>

    </div>

    <div className="overflow-x-auto">

      <table className="min-w-full text-sm">

        <thead className="bg-blue-900 text-white">

          <tr>

            <th className="px-4 py-3 text-left">S.No</th>

            <th className="px-4 py-3 text-left">Principal Investigator</th>

            <th className="px-4 py-3 text-left">Project Title</th>

            <th className="px-4 py-3 text-left">Funding Agency</th>

            <th className="px-4 py-3 text-left">Department</th>

            <th className="px-4 py-3 text-left">Funds</th>

            <th className="px-4 py-3 text-left">Duration</th>

          </tr>

        </thead>

       <tbody>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">1</td>
  <td className="px-4 py-4">Dr. S. Karthik</td>
  <td className="px-4 py-4">
    A Retrospective Study on the Assessment of Anterior and Posterior Cranial Bases and Sella Turcica for Local Population as Seen in Class I Skeletal and Dental Malocclusion
  </td>
  <td className="px-4 py-4">MDCH</td>
  <td className="px-4 py-4">Orthodontics</td>
  <td className="px-4 py-4">₹59,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">2</td>
  <td className="px-4 py-4">Dr. Veronica Aruna Kumari</td>
  <td className="px-4 py-4">
    Exploring the Future of Dentistry: AI-aided Diagnosis of Dental X-rays vs. Human Expertise
  </td>
  <td className="px-4 py-4">MDCH</td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹59,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">3</td>
  <td className="px-4 py-4">Dr. Susila Anand</td>
  <td className="px-4 py-4">
    Biomimetic Remineralization of Dental Caries Guided by Serine – In Vitro Study
  </td>
  <td className="px-4 py-4">MDCH</td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹70,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">4</td>
  <td className="px-4 py-4">Dr. Sai Shamini</td>
  <td className="px-4 py-4">
    Efficacy of Citrus Limetta Peel Extract as Potential Solvents for AH Plus Endodontic Sealer Compared to Chloroform
  </td>
  <td className="px-4 py-4">MDCH</td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹62,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">5</td>
  <td className="px-4 py-4">Dr. E. Arun</td>
  <td className="px-4 py-4">
    Virtual Reality Visionaries vs Audio Visual Maestros – Decoding the Ideal Distraction Technique
  </td>
  <td className="px-4 py-4">MDCH</td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹68,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>
<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">6</td>
  <td className="px-4 py-4">Dr. C.G. Madhan</td>
  <td className="px-4 py-4">
    Comparative Evaluation of Anxiety Level in Children Treated in Regular Dental Environment and Sensory Adapted Dental Environments
  </td>
  <td className="px-4 py-4">MDCH</td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹70,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">7</td>
  <td className="px-4 py-4">Dr. Adithya Arumugam</td>
  <td className="px-4 py-4">
    Comparing the Efficacy of Simvastatin Versus Acemannan in Bone Regeneration and Soft Tissue Healing in Extracted Sockets of Mandibular Third Molars
  </td>
  <td className="px-4 py-4">
    Armats Biotek, Training and Research Institute (ABTRI)
  </td>
  <td className="px-4 py-4">Oral Surgery</td>
  <td className="px-4 py-4">₹5,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">8</td>
  <td className="px-4 py-4">Dr. Aparanaa M.</td>
  <td className="px-4 py-4">
    Comparing the Efficacy of Chitosan Coated Titanium Dental Implants and Conventional Titanium Dental Implants – An In Vivo Study
  </td>
  <td className="px-4 py-4">
    Armats Biotek, Training and Research Institute (ABTRI)
  </td>
  <td className="px-4 py-4">Oral Surgery</td>
  <td className="px-4 py-4">₹6,500</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">9</td>
  <td className="px-4 py-4">Dr. Parvathi K.</td>
  <td className="px-4 py-4">
    Cephalometric Comparison of Soft Tissue Changes in Class II Division I Patients Following Extraction and Non-Extraction Treatment (In Vitro)
  </td>
  <td className="px-4 py-4">
    V.R. Bone and Joint Dental Clinic
  </td>
  <td className="px-4 py-4">Orthodontics</td>
  <td className="px-4 py-4">₹5,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">10</td>
  <td className="px-4 py-4">Dr. Selva Priya</td>
  <td className="px-4 py-4">
    Comparative Evaluation of Four Different Obturating Techniques in Primary Teeth – An In-Vivo Study
  </td>
  <td className="px-4 py-4">
    Chakra Critical Care Centre and Hospitals
  </td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹12,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">11</td>
  <td className="px-4 py-4">Dr. Vignesh Manickam</td>
  <td className="px-4 py-4">
    Comparison Of Conventional And Digital Implant Impression For Its
    3-Dimensional Accuracy Using Intra Oral Scanners – Invitro Study
  </td>
  <td className="px-4 py-4">
    Veb Dental Care
  </td>
  <td className="px-4 py-4">Prosthodontics</td>
  <td className="px-4 py-4">₹5,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">12</td>
  <td className="px-4 py-4">Dr. Mohammed Bukhary</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Fatigue Behavior And Surface Characteristic
    Of PEKK, BioHPP PEEK With PMMA Resins
  </td>
  <td className="px-4 py-4">
    Divine Dentistry
  </td>
  <td className="px-4 py-4">Prosthodontics</td>
  <td className="px-4 py-4">₹10,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">13</td>
  <td className="px-4 py-4">Dr. Shwetha Anbarasan</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Osteo Induction By Zirconium Oxide And
    Titanium Oxide Bone Graft Materials – An In Vitro Study
  </td>
  <td className="px-4 py-4">
    Venkatakrishna Agency
  </td>
  <td className="px-4 py-4">Prosthodontics</td>
  <td className="px-4 py-4">₹5,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">14</td>
  <td className="px-4 py-4">Dr. J. Sarvesh Kumar</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Socket Preservation With And Without Freeze
    Dried Bone Allograft Following Tooth Extraction – A Clinico Radiographic Study
  </td>
  <td className="px-4 py-4">
    Nalam Multi-Speciality Clinic
  </td>
  <td className="px-4 py-4">Periodontics</td>
  <td className="px-4 py-4">₹10,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">15</td>
  <td className="px-4 py-4">Dr. R. Bhuvaneshwari</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Efficacy Of Aloe Vera Gel And Grape Seed Gel
    In Laser Assisted Scaling And Root Planing In The Management Of
    Chronic Periodontitis – A Double Blind Study
  </td>
  <td className="px-4 py-4">
    Tooth Shine Dental Care
  </td>
  <td className="px-4 py-4">Periodontics</td>
  <td className="px-4 py-4">₹12,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>
<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">16</td>
  <td className="px-4 py-4">Dr. Loshini Raj</td>
  <td className="px-4 py-4">
    Clinical Evaluation Of Two Proximal Contour Finishing Systems
  </td>
  <td className="px-4 py-4">
    32 Dental Care
  </td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹10,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">17</td>
  <td className="px-4 py-4">Dr. Guru Swathy R.</td>
  <td className="px-4 py-4">
    Effectiveness Of Transcutaneous Electrical Nerve Stimulation (TENS)
    In MPDS Patients
  </td>
  <td className="px-4 py-4">
    Azhaghumathi Dental Care
  </td>
  <td className="px-4 py-4">Oral Medicine</td>
  <td className="px-4 py-4">₹10,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">18</td>
  <td className="px-4 py-4">Dr. Devi S.</td>
  <td className="px-4 py-4">
    Assessment Of Anatomical Variations In Maxillary Sinus Using CBCT –
    A Retrospective Study
  </td>
  <td className="px-4 py-4">
    Shiva Shakthi Dental Clinic
  </td>
  <td className="px-4 py-4">Oral Medicine</td>
  <td className="px-4 py-4">₹5,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">19</td>
  <td className="px-4 py-4">Dr. Surya K.</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Dentin Bio-Modifiers In Conservative
    Dentistry And Endodontics
  </td>
  <td className="px-4 py-4">
    Vivident Multispeciality Dental Hospitals
  </td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹17,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-blue-50">
  <td className="px-4 py-4">20</td>
  <td className="px-4 py-4">Dr. Sivapriya U.</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Perception Of Discomfort, Separation
    Efficiency And Bacterial Colonization Of Four Different Orthodontic
    Elastomeric Separators – In Vivo
  </td>
  <td className="px-4 py-4">
    Smile Forever Dental Clinic
  </td>
  <td className="px-4 py-4">Orthodontics</td>
  <td className="px-4 py-4">₹3,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>
</tbody>

      </table>

    </div>

  </div>

</section>
{/* 2023-24 */}
<section className="container mx-auto px-6 pb-20">

  <div
    data-aos="fade-up"
    className="bg-white rounded-2xl shadow-xl overflow-hidden"
  >

    <div className="bg-green-700 text-white px-6 py-5">

      <h2 className="text-3xl font-bold">
        Grants Received – 2023–24
      </h2>

      <p className="text-green-100 mt-2">
        Faculty Research Projects funded during the academic year 2023–24.
      </p>

    </div>

    <div className="overflow-x-auto">

      <table className="min-w-full text-sm">

        <thead className="bg-green-800 text-white">

          <tr>

            <th className="px-4 py-3 text-left">S.No</th>

            <th className="px-4 py-3 text-left">Principal Investigator</th>

            <th className="px-4 py-3 text-left">Project Title</th>

            <th className="px-4 py-3 text-left">Funding Agency</th>

            <th className="px-4 py-3 text-left">Department</th>

            <th className="px-4 py-3 text-left">Funds</th>

            <th className="px-4 py-3 text-left">Duration</th>

          </tr>

        </thead>

        <tbody><tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">1</td>
  <td className="px-4 py-4">Dr. Raga Nivedha R.</td>
  <td className="px-4 py-4">
    Novel Indigenous Calcium Silicate Cement With Added Additives To Improve Bioactivity
  </td>
  <td className="px-4 py-4">
    Darshan's Dental Care
  </td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹15,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">2</td>
  <td className="px-4 py-4">Dr. Kumaresh P.</td>
  <td className="px-4 py-4">
    Analysis Of Tobacco Usage, Risk Factors, Nicotine Dependence And Exhaled Carbon Monoxide Level Among Government Bus Drivers In Chennai – A Cross Sectional Study
  </td>
  <td className="px-4 py-4">
    Dr. Vivek's – MSRAM's Dentistry
  </td>
  <td className="px-4 py-4">Public Health Dentistry</td>
  <td className="px-4 py-4">₹5,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">3</td>
  <td className="px-4 py-4">Dr. G. Abirami</td>
  <td className="px-4 py-4">
    Evaluation Of Effect Of Intrapocket Medicamentation Of Chitosan Gel Vs Chlorhexidine Gel In The Management Of Chronic Periodontitis – A Clinico-Microbiological Study
  </td>
  <td className="px-4 py-4">
    Yoga Sudha Dental Care
  </td>
  <td className="px-4 py-4">Periodontics</td>
  <td className="px-4 py-4">₹12,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">4</td>
  <td className="px-4 py-4">Dr. Princy Annuncia E.</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Penetration Depth, Marginal Adaptation And Microleakage Between Conventional, Hydrophilic And Bioactive Pit And Fissure Sealants In Extracted Third Molars – An In Vitro Study
  </td>
  <td className="px-4 py-4">
    Dr. Vivek's – MSRAM's Dentistry
  </td>
  <td className="px-4 py-4">Public Health Dentistry</td>
  <td className="px-4 py-4">₹12,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">5</td>
  <td className="px-4 py-4">Dr. Vigneshwaran J.</td>
  <td className="px-4 py-4">
    Evaluation And Assessment Of The Ethmoid Bone And Location Of Anterior Ethmoidal Artery Using Cone Beam Computed Tomography (CBCT) – A Cross-Sectional Study
  </td>
  <td className="px-4 py-4">
    Marri's Dental Care
  </td>
  <td className="px-4 py-4">Oral Medicine</td>
  <td className="px-4 py-4">₹5,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>
<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">6</td>
  <td className="px-4 py-4">Dr. Deetchadha</td>
  <td className="px-4 py-4">
    Expression Profile Of Micro-RNA-486-3P In Oral Squamous Cell Carcinoma Patients Exposed To Smoking Habit – A Case Control Study
  </td>
  <td className="px-4 py-4">
    Vijaya Dental And Orthodontic Centre
  </td>
  <td className="px-4 py-4">Oral Pathology</td>
  <td className="px-4 py-4">₹5,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">7</td>
  <td className="px-4 py-4">Dr. Abisha Varghese</td>
  <td className="px-4 py-4">
    Randomised Controlled Trial In Management Of Root Caries Using Different Protocols
  </td>
  <td className="px-4 py-4">
    Devadhas Granites And Tiles
  </td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹14,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">8</td>
  <td className="px-4 py-4">Dr. Neya A.</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Color Stability In 3D Printed Denture Base Material And Conventional Denture Base Material After Immersion In Different Coloring Agents – An In Vitro Study
  </td>
  <td className="px-4 py-4">
    32 Dental Care
  </td>
  <td className="px-4 py-4">Prosthodontics</td>
  <td className="px-4 py-4">₹8,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">9</td>
  <td className="px-4 py-4">Dr. Kevin Samson J.</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Marginal Fit Of Provisional Crowns Fabricated By CAD-CAM And Conventional Technique – An In Vitro Study
  </td>
  <td className="px-4 py-4">
    32 Dental Care
  </td>
  <td className="px-4 py-4">Prosthodontics</td>
  <td className="px-4 py-4">₹8,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">10</td>
  <td className="px-4 py-4">Dr. Alfia Shahin T.</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Wettability Of Three Salivary Substitutes On Three Denture Base Resins
  </td>
  <td className="px-4 py-4">
    32 Dental Care
  </td>
  <td className="px-4 py-4">Prosthodontics</td>
  <td className="px-4 py-4">₹8,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>
<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">11</td>
  <td className="px-4 py-4">Dr. Kamal Deepa S.</td>
  <td className="px-4 py-4">
    In Vitro Comparison Of Gloss And Surface Roughness Among Two Different Pediatric Dental Crowns
  </td>
  <td className="px-4 py-4">
    Vijay Dental Care
  </td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹8,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">12</td>
  <td className="px-4 py-4">Dr. Vasumathi D.</td>
  <td className="px-4 py-4">
    Comparison Of Cariogenic Potential Of Commonly Used Infant Milk Formulas – An In Vitro Study
  </td>
  <td className="px-4 py-4">
    Om Shakthi Dental Care
  </td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹7,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">13</td>
  <td className="px-4 py-4">Dr. Viji Vinnarasi</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Different Tooth Colored Restorative Materials Over Silver Diamine Fluoride
  </td>
  <td className="px-4 py-4">
    Venus Smile Care Dental Clinic
  </td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹8,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">14</td>
  <td className="px-4 py-4">Dr. Mary Grace</td>
  <td className="px-4 py-4">
    Comparative Evaluation Of Two Different Distraction Techniques In Dental Anxiety And Pain During Maxillary Infiltration And Inferior Nerve Block Administration Among 6–11 Year Old Children
  </td>
  <td className="px-4 py-4">
    Child Care Clinic
  </td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹10,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">15</td>
  <td className="px-4 py-4">Dr. Mohammed Bilal Sheriff</td>
  <td className="px-4 py-4">
    In Vivo Evaluation Of A Novel Bioactive Restorative Resin In Proximal Restorations Of Primary Molars – A Comparative Study
  </td>
  <td className="px-4 py-4">
    Iquery World
  </td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹10,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>
<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">16</td>
  <td className="px-4 py-4">Dr. R. Pragatheeswari</td>
  <td className="px-4 py-4">
    Evaluation Of Genotoxic And Cytotoxic Effects Of X-Ray In Buccal Epithelial Cells Following Panoramic Radiography
  </td>
  <td className="px-4 py-4">
    Thanga Vinayagam Hospitals
  </td>
  <td className="px-4 py-4">Oral Medicine</td>
  <td className="px-4 py-4">₹4,000</td>
  <td className="px-4 py-4">2 Years</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">17</td>
  <td className="px-4 py-4">Dr. Sai Shamini</td>
  <td className="px-4 py-4">
    Novel Instrument Retrieval Technique – In Vitro Volumetric Analysis by CBCT &amp; Time Taken for Retrieval
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹65,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">18</td>
  <td className="px-4 py-4">Dr. V. Susila Anand</td>
  <td className="px-4 py-4">
    Comparison of Cyclic Fatigue Resistance of Three Different Rotary NiTi Systems – An In Vitro Study
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹67,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">19</td>
  <td className="px-4 py-4">Dr. Veronica Aruna Kumari</td>
  <td className="px-4 py-4">
    Comparative Evaluation of Antibacterial Effectiveness of Herbal Root Canal Irrigants Nigella Sativa Seed Extract, Cassia Auriculata Flower Extract and 5.2% Sodium Hypochlorite Against Enterococcus faecalis &amp; Streptococcus mutans – An In Vitro Study
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Endodontics</td>
  <td className="px-4 py-4">₹62,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">20</td>
  <td className="px-4 py-4">Dr. Kavitha M.</td>
  <td className="px-4 py-4">
    Computer Aided Age Estimation by Measuring Pulp: Tooth Area Ratio – A Retrospective Study
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Oral Medicine</td>
  <td className="px-4 py-4">₹60,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">21</td>
  <td className="px-4 py-4">Dr. N. Gautham Kumar</td>
  <td className="px-4 py-4">
    Prevalence Of Periodontitis And Its Association With The Risk Of Metabolic Syndrome In Chennai City – An Epidemiological Study
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Periodontics</td>
  <td className="px-4 py-4">₹70,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">22</td>
  <td className="px-4 py-4">Dr. Arun</td>
  <td className="px-4 py-4">
    Comparative Evaluation of the Effectiveness of Conventional and Customized Cartoon Syringes Among Pediatric Patients During Intra Oral Local Anesthesia Administration
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹60,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">23</td>
  <td className="px-4 py-4">Dr. J. Aarthi</td>
  <td className="px-4 py-4">
    Dens In Dente – A Genetic Spark
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Pedodontics</td>
  <td className="px-4 py-4">₹70,100</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">24</td>
  <td className="px-4 py-4">Dr. Sarumathi T.</td>
  <td className="px-4 py-4">
    Evaluating Positional Errors In Digital Orthopantomogram – A Retrospective Study
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Oral Medicine</td>
  <td className="px-4 py-4">₹65,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">25</td>
  <td className="px-4 py-4">Dr. Preethi</td>
  <td className="px-4 py-4">
    A Cephalometric Study for Evaluation and Comparison of the Cranial Base Angles and Cranial Base Length and the Effective Maxillary and Mandibular Lengths in Class I, Class II and Class II Subdivision Malocclusion Among Male and Female Adults in Kundrathur Population
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Orthodontics</td>
  <td className="px-4 py-4">₹60,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>

<tr className="border-b hover:bg-green-50">
  <td className="px-4 py-4">26</td>
  <td className="px-4 py-4">Nanda Balan</td>
  <td className="px-4 py-4">
    Preventive Effect of Fluoridated and Fluoride Free Toothpastes on Enamel Erosion Caused by Industrialized Sports Drinks – An In Vitro Study
  </td>
  <td className="px-4 py-4">
    MDCH
  </td>
  <td className="px-4 py-4">Public Health Dentistry</td>
  <td className="px-4 py-4">₹70,000</td>
  <td className="px-4 py-4">1 Year</td>
</tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
</div>
  );
};

export default GrantsReceived;