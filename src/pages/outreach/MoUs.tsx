
import { Download, FileText } from "lucide-react";
import "aos/dist/aos.css";
const mouData = [
  {
    year: "2020",
    title: "OPD From CBCC Oncology Services Pvt Ltd",
    partner:
      "Dr. Rai-CBCC Oncology Services Pvt Ltd at Saveetha Dental College Campus",
    duration: "3 years",
    activities: "Radiation and chemotherapy treatment to cancer patients",
    participants: "12",
  },
  {
    year: "2022",
    title: "TACT BLS Training Service",
    partner:
      "TACT Academy for Clinical Training Private Limited, No.29, Plot #1997, J Block, 13th Main Road, Annanagar, Chennai-600040",
    duration: "2 years",
    activities: "Training services on Basic Life Support",
    participants: "100",
  },
  {
    year: "2022",
    title: "FFc Dental Hub Dental Lab for Patient Service",
    partner:
      "FFc Dental Hub Dental Lab, New No.14, Old No.286, Natesan Road, Ice House, Mirsaibpet, Triplicane, Chennai-600005",
    duration: "3 years",
    activities: "3-D printing, CAD-CAM, intra-oral scanner, laser sintered crowns",
    participants: "20",
  },
  {
    year: "2022",
    title: "Noris Dental Implants",
    partner: "Company of Denmed Planetarium (Noris Dental Implants)",
    duration: "3 years",
    activities: "Treatment planning and placement of implants",
    participants: "50",
  },
  {
    year: "2023",
    title: "Porur Dental X-ray Service",
    partner:
      "Porur Dental X-rays and CBCT, No.5/3, 1st Street, Karambakkam, Porur, Chennai-600116",
    duration: "3 years",
    activities: "Patient referral for CBCT, digital imaging",
    participants: "9",
  },
  {
    year: "2023",
    title: "Mediocean Learning Service",
    partner: "Mediocean, No.24, Thiruvallur Street, MGR Nagar, Chennai-600078",
    duration: "3 years",
    activities:
      "Teaching programme – latest practices in preventing, diagnosing and treating microbial infections",
    participants: "100",
  },
  {
    year: "2023",
    title: "Inoffice - Aligner Training Service",
    partner:
      "Tagore Dental College and Hospital, Vandalur, Melakottaiyur Post, Rathinamangalam, Tamil Nadu, Chennai-600127",
    duration: "2 years",
    activities: "Training course for inoffice aligner practices",
    participants: "100",
  },
  {
    year: "2023",
    title: "Oral Health Care Services",
    partner: "All The Children, No.39, Palla Second Street, Vyasarpadi, Chennai-600039",
    duration: "3 years",
    activities: "Periodic screening and comprehensive dental treatment services",
    participants: "15",
  },
  {
    year: "2023",
    title: "Child Dental Care",
    partner:
      "Udhavum Ullangal, Plot No.1352, Gokulapuram, Maraimalai Nagar, Chennai-603204",
    duration: "3 years",
    activities: "Oral health awareness and dental care services",
    participants: "15",
  },
  {
    year: "2023",
    title: "Child Dental Care",
    partner:
      "New Hope New Life Children Home, No.3/218, Gangaiaamman Koil Street, near Advent Christian Church, Perumbakkam, Chennai-600100, Tamil Nadu",
    duration: "3 years",
    activities: "Oral health awareness and dental care services",
    participants: "15",
  },
  {
    year: "2023",
    title: "Caremed Digital Imaging Service",
    partner:
      "Caremed Scans and Lab, Plot No.2, Sri Guruvayurappan Nagar, Jawaharlal Nehru Road, Kundrathur, Chennai-600069",
    duration: "1 year",
    activities: "Research studies, workshops, patient referral",
    participants: "10",
  },
  {
    year: "2023",
    title: "Subajeyam Turners Dental Health Service",
    partner:
      "Subajeyam Turners, No.200/1, Vanagaram Road, Athipet, Chennai-600058",
    duration: "1 year",
    activities:
      "Dental screening and procedures, oral cancer awareness, habit cessation counselling",
    participants: "20",
  },
  {
    year: "2023",
    title: "Biodevour Research Service",
    partner:
      "Biodevour Research Lab, No.3/726, Pomaimann Kovil, 4th Cross Street, Madanathapuram, Porur, Chennai-125",
    duration: "3 years",
    activities: "Research and project development",
    participants: "9",
  },
  {
    year: "2023",
    title: "CAD-CAM Patient Service",
    partner:
      "Dentfocus Dental Lab, No.4/27, Pillaiyar Kovil Street, Sridevi Nagar, Puliayamedu Main Road, Goburasanallore, Chennai-600005",
    duration: "1 year",
    activities: "CAD-CAM designing, digital imaging, inlays, onlays and crowns",
    participants: "15",
  },
  {
    year: "2023",
    title: "Tobacco Cessation Counselling Service",
    partner:
      "Chennai De-addiction Centre, No.40, Sri Chakra Nagar, Kamatchisalai, Mangadu, Chennai-600122",
    duration: "3 years",
    activities: "Tobacco cessation counselling session, awareness speech",
    participants: "10",
  },
  {
    year: "2023",
    title: "Child Dental Care",
    partner:
      "SOS Children's Village of India, 21, 1st Main Road, Professors Colony, Tambaram East, Tamil Nadu, Chennai-600059",
    duration: "3 years",
    activities: "Oral health awareness and dental care services",
    participants: "15",
  },
  {
    year: "2023",
    title: "Dio Digital Implant Service",
    partner:
      "Dio Digital Implant India Private Limited, 1202-03 & 1206-09, Galleria Commercial Tower, DLF Phase IV, Gurgaon-122009",
    duration: "1 year",
    activities:
      "Digitally enabled navigation solution for dental implants/customized device-based treatment planning",
    participants: "19",
  },
  {
    year: "2023",
    title: "Whizbang Bioresarch Collaboration Activity",
    partner:
      "Whizbang Bioresearch Private Limited, 4/1, Maruthi Avenue, Govardanagiri, Lakshmipuram, Avadi, Chennai, Tamil Nadu 600071",
    duration: "3 years",
    activities:
      "To promote academic, educational, research exchange and cooperation",
    participants: "50",
  },
  {
    year: "2024",
    title: "Tamil Nadu Physical Education and Sports University",
    partner: "Melakottaiyur, Chennai-600127, India",
    duration: "5 years",
    activities: "Advancement of physical education, sports and dental care",
    participants: "",
  },
];

export default function MoUs() {
 return (
  <div className="bg-white">

    {/* Hero — same style as Academic Regulations */}
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
      <div
        className="container-custom text-center text-white"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          MOUs
        </h1>

        <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto">
          Functional Memoranda of Understanding and institutional collaborations
          for academic development, clinical training and research.
        </p>
      </div>
    </section>

    {/* About — same rounded blue card style */}
    <section className="py-6 md:py-8">
      <div className="container-custom">
        <div
          className="bg-blue-50 rounded-2xl p-5 md:p-6 shadow-md"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            About Memoranda of Understanding
          </h2>

          <p className="font-['Montserrat'] text-[14px] leading-6 text-black sm:text-[16px]">
            List of functional MoUs/linkages with institutions and industries
            in India and abroad for academics, clinical training, internship,
            on-the-job training, project work, student/faculty exchange and
            collaborative research programmes during the last five years.
          </p>
        </div>
      </div>
    </section>

    {/* MoU Records — styled to match the sample page */}
    <section className="pb-6 md:pb-8">
      <div className="container-custom">
        <div
          className="rounded-2xl border shadow-sm p-3 sm:p-5 hover:shadow-lg transition-all duration-300"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-blue-700" size={28} />
            <h3 className="text-lg md:text-xl font-bold">
              List of Functional MoUs
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-blue-200">
            <table className="w-full min-w-[1000px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-3">S.No</th>
                  <th className="p-3">Year of commencement</th>
                  <th className="p-3">Title of the MoU</th>
                  <th className="p-3">
                    Partnering institution / industry
                  </th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Activities under the MoU</th>
                  <th className="p-3">Participants</th>
                  <th className="p-3">Relevant document</th>
                </tr>
              </thead>

              <tbody>
                {mouData.map((mou, index) => (
                  <tr
                    key={`${mou.year}-${index}`}
                    className={
                      index % 2 === 0
                        ? "bg-blue-50 hover:bg-blue-100"
                        : "bg-white hover:bg-slate-50"
                    }
                  >
                    <td className="p-3 border-b border-blue-100 align-top">
                      {index + 1}
                    </td>

                    <td className="p-3 border-b border-blue-100 align-top">
                      {mou.year}
                    </td>

                    <td className="p-3 border-b border-blue-100 align-top">
                      {mou.title}
                    </td>

                    <td className="p-3 border-b border-blue-100 align-top">
                      {mou.partner}
                    </td>

                    <td className="p-3 border-b border-blue-100 align-top">
                      {mou.duration}
                    </td>

                    <td className="p-3 border-b border-blue-100 align-top">
                      {mou.activities}
                    </td>

                    <td className="p-3 border-b border-blue-100 align-top">
                      {mou.participants || "—"}
                    </td>

                    <td className="p-3 border-b border-blue-100 align-top text-center">
                      <a
                        href={`/pdf/mous/mou-${index + 1}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open MoU document ${index + 1}`}
                        className="inline-flex items-center justify-center text-red-600 hover:text-red-800 transition"
                      >
                        <Download size={22} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            On smaller screens, scroll horizontally to view all table columns.
          </p>
        </div>
      </div>
    </section>

  </div>
);

}