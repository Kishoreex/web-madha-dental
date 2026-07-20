import { useState } from "react";
import { GraduationCap } from "lucide-react";

export default function ProgrammeOutcomes() {
  const [activeTab, setActiveTab] = useState("bds");

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">

        <div className="container mx-auto px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
            Programme & Course Outcomes
          </h1>

          <p className="mt-4 text-blue-100">
            Bachelor of Dental Surgery (BDS) & Master of Dental Surgery (MDS)
          </p>

        </div>

      </section>

      {/* Tabs */}

      <section className="container mx-auto px-6 py-12">

        <div className="flex justify-center gap-5 mb-10">

          <button
            onClick={() => setActiveTab("bds")}
            className={`px-8 py-3 rounded-xl font-semibold transition ${
              activeTab === "bds"
                ? "bg-blue-700 text-white"
                : "bg-white shadow"
            }`}
          >
            Bachelor of Dental Surgery (B.D.S)
          </button>

          <button
            onClick={() => setActiveTab("mds")}
            className={`px-8 py-3 rounded-xl font-semibold transition ${
              activeTab === "mds"
                ? "bg-blue-700 text-white"
                : "bg-white shadow"
            }`}
          >
            Master of Dental Surgery (M.D.S)
          </button>

        </div>

        {activeTab === "bds" ? (

        <div
  data-aos="fade-up"
  data-aos-duration="700"
  className="bg-white rounded-2xl shadow-xl p-6"
>

            <div className="flex items-center gap-3 mb-6">

              <GraduationCap className="text-blue-700" size={30} />

              <h2 className="text-2xl font-bold">
                Bachelor of Dental Surgery (B.D.S)
              </h2>

            </div>

            <p className="text-gray-600">
              Programme Outcomes and Course Outcomes
            </p>
<div className="mt-10">

  <h3 className="text-xl font-bold text-blue-800 mb-5">
    Programme Outcomes (PO)
  </h3>

  <div className="space-y-5">

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 1</h4>
      <p>
        Demonstrate thorough and sound knowledge of basic and applied sciences
        with the ability to integrate them for effective patient care.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 2</h4>
      <p>
        Arrive at an accurate diagnosis and prepare appropriate treatment
        plans in the best interest of the patient.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 3</h4>
      <p>
        Participate in research activities and apply scientific advancements
        for community welfare.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 4</h4>
      <p>
        Communicate effectively with patients and take responsibility for
        clinical decisions.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 5</h4>
      <p>
        Treat every patient with empathy while respecting social, behavioural,
        economic and cultural differences.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 6</h4>
      <p>
        Contribute to improving oral healthcare for all sections of society.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 7</h4>
      <p>
        Develop competencies in clinical dentistry and practice management.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 8</h4>
      <p>
        Work effectively with fellow clinicians and demonstrate excellent
        interpersonal skills.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 9</h4>
      <p>
        Continuously update knowledge with scientific innovations and digital
        technology.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 10</h4>
      <p>
        Engage in lifelong learning through continuing dental education,
        workshops and professional development.
      </p>
    </div>

  </div>

</div>
{/* Course Outcomes */}

<div data-aos="fade-up"
data-aos-delay="100"
className="mt-16">

  <h3 className="text-xl font-bold text-blue-800 mb-5">
    Course Outcomes (CO)
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h4 className="text-xl font-bold text-blue-700 mb-3">
        First Year
      </h4>

      <ul className="space-y-2 text-gray-700">
    <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    General Anatomy
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the basic anatomical structures and demonstrate the relationship of superficial and deep structures of the human body, including vital structures and their applied anatomy.
        </li>

        <li>
          CO2. Explain human embryonic development and histological structures with emphasis on oral, dental, maxillofacial, head and neck development and developmental anomalies.
        </li>

        <li>
          CO3. Identify bones, joints and muscles of the head and neck, including skull bones, base of skull and cervical vertebrae with their anatomical attachments.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO4. Identify the relationship of blood vessels, nerves and muscles and correlate anatomical knowledge with other dental subjects.
        </li>

        <li>
          CO5. Identify embryological structures, recognize different tissue types under the microscope and correlate them with important clinical conditions of the head and neck.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO6. Apply anatomical knowledge in the best interest of patients and the welfare of society.
        </li>

        <li>
          CO7. Appreciate community needs and promote awareness for healthy living.
        </li>

      </ul>

    </div>

  </div>

</details>
     <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    General Human Physiology
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Describe the physiology of human organs and their functions to understand changes occurring in pathological conditions.
        </li>

        <li>
          CO2. Explain the importance of homeostasis and maintenance of equilibrium in the human body.
        </li>

        <li>
          CO3. Describe the role of exocrine and endocrine hormones in maintaining normal body functions.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO4. Identify the parts of a microscope and demonstrate proper laboratory handling techniques.
        </li>

        <li>
          CO5. Record respiratory rate, heart rate, radial pulse and body temperature, and explain their physiological regulation.
        </li>

        <li>
          CO6. Demonstrate blood sample collection techniques and perform blood grouping.
        </li>

        <li>
          CO7. Determine bleeding time, clotting time, ESR and perform differential white blood cell counting.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO8. Demonstrate professional laboratory practice and apply physiological knowledge to improve community health and patient care.
        </li>

      </ul>

    </div>

  </div>

</details>
    <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Biochemistry
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Demonstrate knowledge of major biomolecules, their structure, functions and role in maintaining health and causing disease.
        </li>

        <li>
          CO2. Explain the role of enzymes in metabolic functions and their importance in disease diagnosis.
        </li>

        <li>
          CO3. Discuss the fundamental chemical principles involved in body mechanisms and life processes.
        </li>

        <li>
          CO4. Describe the importance of micronutrients in maintaining normal health and body functions.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Perform and interpret common biochemistry laboratory investigations.
        </li>

        <li>
          CO6. Apply biochemical knowledge in medicine and dentistry for diagnosis and patient management.
        </li>

        <li>
          CO7. Estimate blood glucose and detect abnormal urinary constituents for diagnosis of diabetes mellitus, renal, liver and thyroid disorders.
        </li>

        <li>
          CO8. Interpret laboratory values including serum urea, creatinine, total protein and bilirubin.
        </li>

        <li>
          CO9. Differentiate between normal and abnormal laboratory findings obtained during biochemical investigations.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO10. Demonstrate sound knowledge of the biochemical basis of health and disease while maintaining professional ethics in patient care.
        </li>

      </ul>

    </div>

  </div>

</details>
        <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Dental Anatomy & Oral Histology
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Outline the characteristics of human dentition, identify different types of dentition and distinguish their characteristic features.
        </li>

        <li>
          CO2. Describe the development of the maxilla, mandible, palate, tongue and lips, including congenital defects associated with their formation.
        </li>

        <li>
          CO3. Describe the historical evolution of teeth in living beings.
        </li>

        <li>
          CO4. Explain the stages of tooth development, the structure of teeth, salivary glands and oral mucosal tissues.
        </li>

        <li>
          CO5. Describe the mechanism and pattern of tooth eruption and shedding and explain their clinical significance.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO6. Demonstrate the physiological process of tooth development.
        </li>

        <li>
          CO7. Identify teeth based on morphology, classify dentition and describe the chronology of tooth development.
        </li>

        <li>
          CO8. Apply dental notation systems and carve human teeth accurately using wax blocks.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO9. Demonstrate sound knowledge of teeth and dentition and apply it to promote a healthy oral environment for patients.
        </li>

      </ul>

    </div>

  </div>

</details>
      </ul>
    </div>

    <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h4 className="text-xl font-bold text-blue-700 mb-3">
        Second Year
      </h4>

      <ul className="space-y-2 text-gray-700">
 <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    General Pathology
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the history of pathology and the significant contributions of scientists to the field of pathology.
        </li>

        <li>
          CO2. Describe the molecular pathogenesis of diseases and correlate pathological changes with clinical diagnosis and treatment.
        </li>

        <li>
          CO3. Explain the basic concepts of inflammation, oedema, necrosis, tumours and thromboembolic disorders.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO4. Identify and differentiate neoplastic and non-neoplastic lesions of the head and neck region.
        </li>

        <li>
          CO5. Recognize acute, chronic and granulomatous inflammatory lesions.
        </li>

        <li>
          CO6. Interpret clinical pathological specimens in haematological and urinary analysis.
        </li>

        <li>
          CO7. Demonstrate proper biopsy specimen handling, laboratory submission and cytology procedures.
        </li>

        <li>
          CO8. Educate patients and the community regarding wound healing after tooth extraction and other oral lesions.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO9. Demonstrate commitment to lifelong learning by updating diagnostic knowledge and applying it in the best interest of patients and the community.
        </li>

      </ul>

    </div>

  </div>

</details>
  <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    General Microbiology
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Describe the various branches of microbiology and their significance in dentistry.
        </li>

        <li>
          CO2. Explain the principles and methods of sterilization and disinfection used in dental practice.
        </li>

        <li>
          CO3. Describe the etiology, morphology, transmission, pathogenesis, laboratory diagnosis, treatment and prevention of medically important microorganisms with special emphasis on dental infections.
        </li>

        <li>
          CO4. Explain the procedures involved in biomedical waste management and safe disposal practices.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Perform aseptic procedures, sterilization and disinfection of instruments and equipment used in dental clinics.
        </li>

        <li>
          CO6. Identify and differentiate medically important microorganisms from clinical specimens.
        </li>

        <li>
          CO7. Demonstrate safe handling and disposal of biomedical waste according to standard protocols.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO8. Prescribe appropriate broad-spectrum antibiotics responsibly to minimize the emergence of multidrug-resistant infections.
        </li>

        <li>
          CO9. Demonstrate commitment to continuous learning and adherence to safe biomedical waste management practices.
        </li>

      </ul>

    </div>

  </div>

</details>
<details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Pharmacology
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Describe the enteral and parenteral routes of drug administration, their advantages, disadvantages and clinical applications.
        </li>

        <li>
          CO2. Explain the pathophysiology of diseases and the pharmacotherapy used in the management of common medical and dental conditions.
        </li>

        <li>
          CO3. Justify the rational use of drugs for the welfare of individual patients and the community.
        </li>

        <li>
          CO4. Describe the management of medical emergencies in the dental office and the appropriate use of antimicrobial agents for oral infections.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Write rational prescriptions and apply therapeutic decision-making principles in dental practice.
        </li>

        <li>
          CO6. Prescribe drugs safely by considering drug interactions and special conditions such as pregnancy and lactation.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO7. Demonstrate responsible and ethical use of medicines to ensure patient safety and help prevent the emergence of drug resistance.
        </li>

      </ul>

    </div>

  </div>

</details>
        <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Dental Materials
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Describe the physical, chemical, biological and mechanical properties of dental materials and explain their biocompatibility.
        </li>

        <li>
          CO2. Explain the composition, manipulation and proper handling of dental cements, amalgams and other restorative materials, including their toxic and side effects.
        </li>

        <li>
          CO3. Describe the classification and principles of cutting and polishing materials used in dentistry.
        </li>

        <li>
          CO4. Explain the properties and applications of cast partial dentures, cast gold restorations and denture base materials.
        </li>

        <li>
          CO5. Describe the principles of soldering, welding and the use of various forms of stainless steel in dentistry.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO6. Select appropriate dental materials and instruments for different clinical procedures.
        </li>

        <li>
          CO7. Manipulate various dental cements, gypsum products and dental amalgam correctly.
        </li>

        <li>
          CO8. Manipulate acrylic resin and other dental materials while preserving their physical properties.
        </li>

        <li>
          CO9. Evaluate and explore newer dental materials to improve the quality of patient care.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO10. Apply the principles of dental materials to deliver safe, effective and high-quality dental treatment.
        </li>

        <li>
          CO11. Demonstrate professional ethics, empathy and compassion while providing scientifically sound patient care.
        </li>

      </ul>

    </div>

  </div>

</details>
  <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Pre Clinical Prosthodontics, Crown and Bridge
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the structure and functions of teeth and jaws, and their importance in the physical and social well-being of patients.
        </li>

        <li>
          CO2. Describe normal occlusion and various occlusal abnormalities.
        </li>

        <li>
          CO3. Explain the ill effects of occlusal discrepancies resulting from improperly fabricated dentures.
        </li>

        <li>
          CO4. Demonstrate understanding of the composition, properties and manipulation of elastomeric impression materials.
        </li>

        <li>
          CO5. Describe the importance and properties of commonly used base metals in dentistry.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO6. Fabricate removable partial dentures, fixed partial dentures, prepare wax patterns and perform casting procedures.
        </li>

        <li>
          CO7. Manipulate base plate wax to fabricate special trays and temporary denture bases.
        </li>

        <li>
          CO8. Construct denture bases using acrylic resin and perform repair of fractured dentures.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO9. Apply current prosthodontic knowledge in the best interest of patients and the community.
        </li>

        <li>
          CO10. Maintain high standards of professional ethics and demonstrate empathy, compassion and responsibility in patient care.
        </li>

      </ul>

    </div>

  </div>

</details>
     <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Pre Clinical Conservative Dentistry
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the principles and treatment procedures carried out in Conservative Dentistry.
        </li>

        <li>
          CO2. Describe the composition, properties and clinical applications of restorative dental materials.
        </li>

        <li>
          CO3. Explain the different dentin bonding agents and their mechanisms of adhesion.
        </li>

        <li>
          CO4. Describe the indications, properties and clinical importance of pit and fissure sealants.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Prepare different classes of cavities on plaster models and simulation phantom heads.
        </li>

        <li>
          CO6. Identify and manipulate restorative materials including composites, zinc oxide eugenol and zinc phosphate cement.
        </li>

        <li>
          CO7. Demonstrate proper manipulation and placement of light-cured composite resin restorations.
        </li>

        <li>
          CO8. Demonstrate correct manipulation and clinical application of calcium hydroxide materials.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO9. Apply current concepts and restorative material knowledge in the best interest of patients and the community.
        </li>

        <li>
          CO10. Demonstrate commitment to continuous learning by updating knowledge of new materials, innovations and technologies that improve patient care and quality of life.
        </li>

      </ul>

    </div>

  </div>

</details>
      </ul>
    </div>

    <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h4 className="text-xl font-bold text-blue-700 mb-3">
        Third Year
      </h4>

      <ul className="space-y-2 text-gray-700">
     <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    General Medicine
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the manifestations of common diseases affecting the various systems of the human body.
        </li>

        <li>
          CO2. Describe the principles of history taking and systematic clinical examination.
        </li>

        <li>
          CO3. Correlate clinical symptoms and physical signs to formulate a provisional diagnosis and recommend appropriate investigations.
        </li>

        <li>
          CO4. Explain the pathology of common systemic diseases, appropriate diagnostic methods and pharmacological management.
        </li>

        <li>
          CO5. Describe common medical disorders based on clinical findings and prepare appropriate prescriptions.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO6. Elicit complete patient history through effective communication and perform appropriate clinical follow-up.
        </li>

        <li>
          CO7. Record arterial pulse, blood pressure, temperature and respiration, perform CPR and interpret hematological reports, chest X-rays, ECGs and CT scans.
        </li>

        <li>
          CO8. Demonstrate competency in administering intramuscular and intravenous injections.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO9. Apply current medical and dental knowledge in the best interest of patients and the community.
        </li>

        <li>
          CO10. Promote the physical, mental and social well-being of individuals while contributing towards a healthier society.
        </li>

      </ul>

    </div>

  </div>

</details>
       <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    General Surgery
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Discuss the common surgical conditions affecting the head and neck region.
        </li>

        <li>
          CO2. Explain the appropriate radiological and haematological investigations used in surgical diagnosis.
        </li>

        <li>
          CO3. Describe the clinical features of benign and malignant lesions of the head and neck.
        </li>

        <li>
          CO4. Explain the standard methods for diagnosing swellings, ulcers, sinuses, fistulas, lymph node disorders and temporomandibular joint conditions.
        </li>

        <li>
          CO5. Describe the importance of inspection, palpation, percussion and auscultation during clinical examination.
        </li>

        <li>
          CO6. Explain the fundamental principles of surgery, including patient evaluation and surgical management.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO7. Perform general, local and systemic examination and provide appropriate first aid measures.
        </li>

        <li>
          CO8. Interpret common surgical investigation reports and correlate findings with clinical conditions.
        </li>

        <li>
          CO9. Demonstrate minor surgical procedures such as abscess drainage and biopsy techniques.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO10. Demonstrate professionalism, compassion and commitment towards improving the physical, mental and social well-being of patients and the community.
        </li>

      </ul>

    </div>

  </div>

</details>
<details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Oral Pathology & Microbiology
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the mechanisms of diseases affecting the orofacial region, including developmental abnormalities, metabolic disorders, haematological diseases, bone diseases, salivary gland disorders, odontogenic cysts and tumours, space infections, microbiological diseases and syndromes involving the head and neck.
        </li>

        <li>
          CO2. Describe the histopathological features of diseases affecting the oral and maxillofacial region.
        </li>

        <li>
          CO3. Explain the applications of oral histopathology, FNAC, cytological examination, frozen section, immunohistochemistry and other specialized investigations, including forensic odontology.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO4. Identify oral diseases based on histopathological findings and correlate microscopic features with clinical and radiographic presentations to establish a final diagnosis.
        </li>

        <li>
          CO5. Apply forensic odontology principles for individual identification in civil, criminal and disaster victim identification cases.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO6. Apply current knowledge of oral pathology in the diagnosis, prognosis and management of patients for their overall well-being.
        </li>

        <li>
          CO7. Promote awareness about early diagnosis and timely treatment of head and neck diseases to improve survival outcomes and community health.
        </li>

      </ul>

    </div>

  </div>

</details>
      </ul>
    </div>

    <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h4 className="text-xl font-bold text-blue-700 mb-3">
        Final Year
      </h4>

      <ul className="space-y-2 text-gray-700">
    <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Oral Medicine & Radiology
  </summary>

  <div className="p-4 space-y-5">

    <div>
      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          CO1. Delineate various benign and malignant tumours, their molecular pathogenesis, signs, symptoms, diagnostic aids and treatment modalities.
        </li>

        <li>
          CO2. Discuss traumatic lesions, reactive lesions and salivary gland diseases.
        </li>

        <li>
          CO3. Explain X-rays, diagnostic techniques and radiotherapy effects in the oral cavity.
        </li>

        <li>
          CO4. Describe viral and bacterial diseases of salivary glands and xerostomia.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Differentiate and manage dental and non-dental pain.
        </li>

        <li>
          CO6. Perform chairside investigations, prescribe medications and follow-up patients.
        </li>

        <li>
          CO7. Take intraoral radiographs and interpret OPGs.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO8. Apply current dental knowledge in the best interest of patients.
        </li>

        <li>
          CO9. Maintain professional ethics and promote oral cancer awareness.
        </li>

      </ul>

    </div>

  </div>

</details>
<details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Conservative Dentistry & Endodontics
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Correlate theoretical knowledge and clinical principles while diagnosing and treatment planning.
        </li>

        <li>
          CO2. Describe the properties and manipulation of various restorative materials.
        </li>

        <li>
          CO3. Describe conservative procedures to preserve sound tooth structure and restore form and function.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO4. Perform restorative procedures while maintaining long-term survival of the tooth.
        </li>

        <li>
          CO5. Practice Minimally Invasive Dentistry (MID) and Evidence Based Dentistry (EBD).
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO6. Improve awareness and provide ethical solutions for oral health problems in the community.
        </li>

        <li>
          CO7. Participate in continuing education programmes to update professional knowledge and skills.
        </li>

      </ul>

    </div>

  </div>

</details>
    <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Periodontology
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the etiology, pathogenesis, diagnosis and classification of periodontal diseases.
        </li>

        <li>
          CO2. Describe periodontal anatomy, microbiology and host immune response.
        </li>

        <li>
          CO3. Understand the principles of periodontal therapy and maintenance.
        </li>

        <li>
          CO4. Explain the role of periodontal health in overall systemic health.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Perform periodontal examination and charting.
        </li>

        <li>
          CO6. Carry out scaling and root planing procedures.
        </li>

        <li>
          CO7. Assist and perform basic periodontal surgical procedures.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO8. Educate patients about oral hygiene and prevention of periodontal diseases.
        </li>

        <li>
          CO9. Demonstrate ethical and professional behaviour in periodontal practice.
        </li>

      </ul>

    </div>

  </div>

</details>
 <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Prosthodontics
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the principles of complete dentures, removable partial dentures, fixed partial dentures and maxillofacial prosthesis.
        </li>

        <li>
          CO2. Describe the properties, indications and manipulation of prosthodontic materials.
        </li>

        <li>
          CO3. Understand occlusion, aesthetics and biomechanics in prosthodontic treatment.
        </li>

        <li>
          CO4. Understand diagnosis, treatment planning and maintenance of prosthodontic patients.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Perform complete denture procedures and fabricate removable prostheses.
        </li>

        <li>
          CO6. Prepare teeth for fixed prosthodontic restorations and manage prosthetic rehabilitation.
        </li>

        <li>
          CO7. Restore oral function, comfort and aesthetics through appropriate prosthodontic treatment.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO8. Demonstrate professionalism, empathy and ethical patient care.
        </li>

        <li>
          CO9. Encourage lifelong maintenance and follow-up of prosthodontic patients.
        </li>

      </ul>

    </div>

  </div>

</details>
       <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Oral & Maxillofacial Surgery
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the diagnosis, treatment planning and management of oral and maxillofacial diseases, trauma and infections.
        </li>

        <li>
          CO2. Describe principles of exodontia, minor oral surgery and management of medically compromised patients.
        </li>

        <li>
          CO3. Understand facial trauma, cysts, tumours and temporomandibular joint disorders.
        </li>

        <li>
          CO4. Explain the principles of anesthesia, pain control and emergency management in oral surgery.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Perform uncomplicated tooth extractions using standard surgical techniques.
        </li>

        <li>
          CO6. Manage dental emergencies, post-operative care and minor surgical procedures.
        </li>

        <li>
          CO7. Maintain proper infection control and aseptic surgical protocols.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO8. Demonstrate ethical surgical practice with patient safety as the highest priority.
        </li>

        <li>
          CO9. Communicate effectively with patients before and after surgical procedures.
        </li>

      </ul>

    </div>

  </div>

</details>
<details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Orthodontics & Dentofacial Orthopaedics
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the growth and development of the craniofacial complex and normal occlusion.
        </li>

        <li>
          CO2. Describe the etiology, classification and diagnosis of malocclusion.
        </li>

        <li>
          CO3. Understand cephalometric analysis, orthodontic records and treatment planning.
        </li>

        <li>
          CO4. Explain preventive, interceptive and corrective orthodontic procedures.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Perform clinical examination, diagnosis and basic orthodontic treatment planning.
        </li>

        <li>
          CO6. Fabricate and manage removable orthodontic appliances under supervision.
        </li>

        <li>
          CO7. Interpret orthodontic radiographs, study models and cephalometric findings.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO8. Communicate treatment options and expected outcomes effectively with patients.
        </li>

        <li>
          CO9. Demonstrate professionalism, ethics and patient-centred orthodontic care.
        </li>

      </ul>

    </div>

  </div>

</details>
<details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Pedodontics & Preventive Dentistry
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the growth and development of primary and mixed dentition.
        </li>

        <li>
          CO2. Describe behaviour management techniques for children.
        </li>

        <li>
          CO3. Understand preventive, restorative and interceptive treatment procedures in pediatric dentistry.
        </li>

        <li>
          CO4. Explain the management of dental trauma and special healthcare needs in children.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Perform preventive and restorative procedures for pediatric patients.
        </li>

        <li>
          CO6. Apply fluoride therapy, pit and fissure sealants and space maintainers.
        </li>

        <li>
          CO7. Manage child patients with confidence and compassion.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO8. Promote preventive oral healthcare among children and parents.
        </li>

        <li>
          CO9. Demonstrate empathy, patience and ethical behaviour while treating pediatric patients.
        </li>

      </ul>

    </div>

  </div>

</details>
     <details className="mb-3 rounded-lg border border-blue-200">

  <summary className="cursor-pointer bg-blue-50 px-4 py-3 font-semibold text-blue-800">
    Public Health Dentistry
  </summary>

  <div className="p-4 space-y-5">

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Knowledge & Understanding
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO1. Explain the principles of public health dentistry, epidemiology and biostatistics.
        </li>

        <li>
          CO2. Describe the prevalence, prevention and control of oral diseases at community level.
        </li>

        <li>
          CO3. Understand national oral health programmes, health education and preventive strategies.
        </li>

        <li>
          CO4. Explain the planning, implementation and evaluation of community dental health programmes.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Skills
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO5. Conduct oral health surveys and community screening programmes.
        </li>

        <li>
          CO6. Apply preventive measures including fluoride application, oral health education and tobacco cessation counselling.
        </li>

        <li>
          CO7. Analyse community oral health data and recommend appropriate interventions.
        </li>

      </ul>

    </div>

    <div>

      <h5 className="font-bold text-blue-700 mb-2">
        Attitude
      </h5>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">

        <li>
          CO8. Demonstrate social responsibility and commitment towards improving community oral health.
        </li>

        <li>
          CO9. Practice ethical, preventive and patient-centred community dental care.
        </li>

      </ul>

    </div>

  </div>

</details>
      </ul>
    </div>

  </div>

</div>
          </div>

        ) : (

      <div
  data-aos="fade-up"
  data-aos-duration="700"
  className="bg-white rounded-2xl shadow-xl p-6"
>

            <div className="flex items-center gap-3 mb-6">

              <GraduationCap className="text-blue-700" size={30} />

              <h2 className="text-2xl font-bold">
                Master of Dental Surgery (M.D.S)
              </h2>

            </div>

            <p className="text-gray-600">
              Programme Outcomes and Course Outcomes
            </p>
<div className="mt-10">

  <h3 className="text-xl font-bold text-blue-800 mb-5">
    Programme Outcomes (PO)
  </h3>

  <div className="space-y-5">

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 1</h4>
      <p>
        Demonstrate explicit knowledge and in-depth understanding of the speciality
        mastered during the postgraduate programme.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 2</h4>
      <p>
        Diagnose various pathologies accurately and perform specialty-specific
        treatment with advanced clinical skills.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 3</h4>
      <p>
        Conduct, organize and promote research activities while contributing to
        scientific advancements in the specialty.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 4</h4>
      <p>
        Demonstrate excellence in clinical decision making and problem solving in
        the best interest of the patient.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 5</h4>
      <p>
        Formulate comprehensive interdisciplinary treatment plans that improve
        patient outcomes.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 6</h4>
      <p>
        Deliver ethical, empathetic and culturally sensitive patient-centred care.
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-700">
      <h4 className="font-bold text-base">PO 7</h4>
      <p>
        Develop leadership, clinical practice management skills and lifelong
        learning for delivering quality healthcare.
      </p>
    </div>

  </div>


</div>
{/* MDS Course Outcomes */}

<div 
data-aos="fade-up"
data-aos-delay="100"
className="mt-16">

  <h3 className="text-xl font-bold text-blue-800 mb-5">
    Course Outcomes (CO)
  </h3>

  <div className="space-y-4">

    <details className="rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

      <summary className="cursor-pointer bg-blue-50 hover:bg-blue-100 px-4 py-3 font-semibold text-blue-800 transition">
        Oral Medicine & Radiology
      </summary>

      <div className="p-4">

        <p className="font-semibold text-gray-800 mb-4">
          Upon completion of the Post Graduation the Post Graduate is able to:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

          <li>
            CO1. Define basic diagnostic procedures and techniques useful in recognizing diseases of the oral tissues of local and constitutional origin and their medical management.
          </li>

          <li>
            CO2. Demonstrate skills in various radiographic procedures including X-rays and three-dimensional radiographic imaging techniques useful in diagnosis and treatment of diseases in the orofacial region.
          </li>

          <li>
            CO3. Conduct research activities with emphasis on oral cancer, premalignant lesions and diseases of the oral cavity for the benefit of society.
          </li>

          <li>
            CO4. Demonstrate communication skills while recording detailed case history, making clinical decisions, treatment planning and medical management.
          </li>

          <li>
            CO5. Analyse and interpret radiographs and clinical findings comprehensively while collaborating with interdisciplinary dental professionals.
          </li>

          <li>
            CO6. Formulate clinical practice management strategies using the latest digital technologies for accurate diagnosis and appropriate treatment.
          </li>

        </ul>

      </div>

    </details>
<details className="rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

  <summary className="cursor-pointer bg-blue-50 hover:bg-blue-100 px-4 py-3 font-semibold text-blue-800 transition">
    Periodontics
  </summary>

  <div className="p-4">

    <p className="font-semibold text-gray-800 mb-4">
      Upon completion of the Post Graduation the Post Graduate is able to:
    </p>

    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

      <li>
        CO1. Diagnose periodontal diseases accurately and formulate comprehensive treatment plans using current evidence-based principles.
      </li>

      <li>
        CO2. Perform non-surgical and surgical periodontal procedures including regenerative and mucogingival therapies with clinical competence.
      </li>

      <li>
        CO3. Demonstrate advanced knowledge in implant dentistry and periodontal maintenance for long-term patient care.
      </li>

      <li>
        CO4. Conduct research activities and critically evaluate scientific literature to improve periodontal practice.
      </li>

      <li>
        CO5. Communicate effectively with patients and interdisciplinary teams while maintaining professional ethics and patient-centred care.
      </li>

      <li>
        CO6. Apply recent technological advances and evidence-based concepts in Periodontics for comprehensive patient management.
      </li>

    </ul>

  </div>

</details>

<details className="rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

  <summary className="cursor-pointer bg-blue-50 hover:bg-blue-100 px-4 py-3 font-semibold text-blue-800 transition">
    Pediatric & Preventive Dentistry
  </summary>

  <div className="p-4">

    <p className="font-semibold text-gray-800 mb-4">
      Upon completion of the Post Graduation the Post Graduate is able to:
    </p>

    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

      <li>
        CO1. Diagnose, prevent and manage oral diseases affecting infants, children, adolescents and patients with special healthcare needs.
      </li>

      <li>
        CO2. Demonstrate advanced behaviour management techniques and comprehensive treatment planning for pediatric dental patients.
      </li>

      <li>
        CO3. Perform preventive, restorative, pulp therapy, trauma management and interceptive orthodontic procedures with clinical competence.
      </li>

      <li>
        CO4. Conduct research and apply evidence-based pediatric dental practices to improve oral health outcomes.
      </li>

      <li>
        CO5. Promote oral health education and preventive dental care among children, parents and the community.
      </li>

      <li>
        CO6. Demonstrate ethical practice, empathy and lifelong learning while delivering high-quality pediatric dental care.
      </li>

    </ul>

  </div>

</details>

<details className="rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

  <summary className="cursor-pointer bg-blue-50 hover:bg-blue-100 px-4 py-3 font-semibold text-blue-800 transition">
    Public Health Dentistry
  </summary>

  <div className="p-4">

    <p className="font-semibold text-gray-800 mb-4">
      Upon completion of the Post Graduation the Post Graduate is able to:
    </p>

    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

      <li>
        CO1. Assess community oral health needs through epidemiological surveys and formulate evidence-based public health programmes.
      </li>

      <li>
        CO2. Plan, implement, monitor and evaluate community oral health promotion and disease prevention programmes.
      </li>

      <li>
        CO3. Demonstrate competence in biostatistics, research methodology and scientific data analysis for public health decision making.
      </li>

      <li>
        CO4. Develop leadership skills in planning, administration and management of oral healthcare services at institutional and community levels.
      </li>

      <li>
        CO5. Promote oral health education, tobacco cessation and preventive dental care through effective communication and community participation.
      </li>

      <li>
        CO6. Practice ethical public health dentistry while contributing to policy development, research and lifelong learning.
      </li>

    </ul>

  </div>

</details>
<details className="rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

  <summary className="cursor-pointer bg-blue-50 hover:bg-blue-100 px-4 py-3 font-semibold text-blue-800 transition">
    Prosthodontics and Crown & Bridge
  </summary>

  <div className="p-4">

    <p className="font-semibold text-gray-800 mb-4">
      Upon completion of the Post Graduation the Post Graduate is able to:
    </p>

    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

      <li>
        CO1. Diagnose, treatment plan and manage patients requiring fixed, removable, implant-supported and maxillofacial prosthetic rehabilitation.
      </li>

      <li>
        CO2. Demonstrate advanced clinical skills in complete dentures, removable partial dentures, fixed prosthodontics and implant prosthodontics.
      </li>

      <li>
        CO3. Apply principles of occlusion, aesthetics, biomechanics and digital dentistry for comprehensive prosthodontic rehabilitation.
      </li>

      <li>
        CO4. Conduct research and critically evaluate scientific evidence to improve prosthodontic treatment outcomes.
      </li>

      <li>
        CO5. Communicate effectively with patients and interdisciplinary healthcare teams while maintaining ethical and patient-centred care.
      </li>

      <li>
        CO6. Integrate recent advances in biomaterials, CAD/CAM technology and implant dentistry into clinical practice.
      </li>

    </ul>

  </div>

</details>
<details className="rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

  <summary className="cursor-pointer bg-blue-50 hover:bg-blue-100 px-4 py-3 font-semibold text-blue-800 transition">
    Orthodontics & Dentofacial Orthopedics
  </summary>

  <div className="p-4">

    <p className="font-semibold text-gray-800 mb-4">
      Upon completion of the Post Graduation the Post Graduate is able to:
    </p>

    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

      <li>
        CO1. Diagnose dentofacial deformities and malocclusions using comprehensive clinical examination, cephalometric analysis and advanced diagnostic records.
      </li>

      <li>
        CO2. Formulate evidence-based treatment plans for preventive, interceptive and corrective orthodontic management.
      </li>

      <li>
        CO3. Demonstrate advanced clinical skills in the use of fixed, removable and functional orthodontic appliances.
      </li>

      <li>
        CO4. Integrate growth modification, biomechanics and interdisciplinary treatment concepts into orthodontic practice.
      </li>

      <li>
        CO5. Conduct research, critically evaluate scientific literature and apply evidence-based orthodontic techniques in clinical practice.
      </li>

      <li>
        CO6. Demonstrate professionalism, ethical practice, effective communication and lifelong learning while delivering quality orthodontic care.
      </li>

    </ul>

  </div>

</details>

<details className="rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

  <summary className="cursor-pointer bg-blue-50 hover:bg-blue-100 px-4 py-3 font-semibold text-blue-800 transition">
    Conservative Dentistry & Endodontics
  </summary>

  <div className="p-4">

    <p className="font-semibold text-gray-800 mb-4">
      Upon completion of the Post Graduation the Post Graduate is able to:
    </p>

    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

      <li>
        CO1. Diagnose diseases of the dental pulp and periapical tissues and formulate comprehensive evidence-based treatment plans.
      </li>

      <li>
        CO2. Demonstrate advanced clinical skills in aesthetic restorative dentistry, endodontic therapy and management of traumatic dental injuries.
      </li>

      <li>
        CO3. Apply principles of minimally invasive dentistry, adhesive dentistry and contemporary restorative materials in clinical practice.
      </li>

      <li>
        CO4. Integrate magnification, rotary instrumentation, digital imaging and other modern technologies into endodontic treatment.
      </li>

      <li>
        CO5. Conduct research, critically evaluate scientific literature and implement evidence-based clinical protocols.
      </li>

      <li>
        CO6. Demonstrate ethical practice, effective patient communication and lifelong learning while delivering high-quality conservative and endodontic care.
      </li>

    </ul>

  </div>

</details>
<details className="rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

  <summary className="cursor-pointer bg-blue-50 hover:bg-blue-100 px-4 py-3 font-semibold text-blue-800 transition">
    Oral & Maxillofacial Surgery
  </summary>

  <div className="p-4">

    <p className="font-semibold text-gray-800 mb-4">
      Upon completion of the Post Graduation the Post Graduate is able to:
    </p>

    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

      <li>
        CO1. Diagnose and manage oral and maxillofacial diseases, trauma, infections, cysts, tumours and craniofacial deformities using advanced clinical knowledge.
      </li>

      <li>
        CO2. Demonstrate proficiency in dentoalveolar surgery, trauma management, orthognathic surgery, implant surgery and reconstruction of maxillofacial defects.
      </li>

      <li>
        CO3. Apply evidence-based principles in surgical planning, pain control, anaesthesia, infection prevention and postoperative patient care.
      </li>

      <li>
        CO4. Integrate advanced imaging, digital surgical planning and interdisciplinary approaches into oral and maxillofacial surgical practice.
      </li>

      <li>
        CO5. Conduct scientific research, critically analyse current literature and apply recent advances to improve patient outcomes.
      </li>

      <li>
        CO6. Demonstrate professionalism, ethical practice, effective communication and lifelong learning while delivering comprehensive surgical care.
      </li>

    </ul>

  </div>

</details>

<details className="rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

  <summary className="cursor-pointer bg-blue-50 hover:bg-blue-100 px-4 py-3 font-semibold text-blue-800 transition">
    Oral Pathology
  </summary>

  <div className="p-4">

    <p className="font-semibold text-gray-800 mb-4">
      Upon completion of the Post Graduation the Post Graduate is able to:
    </p>

    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">

      <li>
        CO1. Diagnose and interpret diseases affecting the oral and maxillofacial region through clinical, histopathological, cytological and molecular investigations.
      </li>

      <li>
        CO2. Correlate clinical, radiographic and microscopic findings to establish accurate diagnosis and prognosis of oral diseases.
      </li>

      <li>
        CO3. Demonstrate competence in biopsy procedures, specimen handling, histopathological interpretation and advanced diagnostic techniques.
      </li>

      <li>
        CO4. Conduct scientific research, critically evaluate contemporary literature and apply evidence-based concepts in oral pathology practice.
      </li>

      <li>
        CO5. Collaborate effectively with clinicians and other healthcare professionals in the diagnosis and management of oral diseases.
      </li>

      <li>
        CO6. Demonstrate professionalism, ethical practice and lifelong learning while contributing to quality patient care and academic excellence.
      </li>

    </ul>

  </div>

</details>  
  </div>

</div>
          </div>

        )}

      </section>

    </div>
  );
}