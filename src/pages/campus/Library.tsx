import {
  Library as LibraryIcon,
  BookOpen,
  BookMarked,
  ExternalLink,
  Globe,
  Monitor,
  Award,
} from "lucide-react";

import "aos/dist/aos.css";

export default function Library() {
  const textBooks = [
    ["BASIC SCIENCES", "1295"],
    ["CONSERVATIVE & ENDODONTICS DENTISTRY", "196"],
    ["GENERAL", "198"],
    ["ORAL AND MAXILLOFACIAL SURGERY", "195"],
    ["ORAL MEDICINE & RADIOLOGY", "219"],
    ["ORAL PATHOLOGY & MICROBIOLOGY", "507"],
    ["ORTHODONTICS & DENTOFACIAL ORTHOPAEDICS", "95"],
    ["PEDODONTICS & PREVENTIVE DENTISTRY", "68"],
    ["PERIODONTICS & ORAL IMPLANTOLOGY", "59"],
    ["PROSTHODONTIC CROWN & BRIDGE", "243"],
    ["PUBLIC HEALTH DENTISTRY & PREVENTIVE DENTISTRY", "248"],
  ];

  const journals = [
    ["CONSERVATIVE DENTISTRY & ENDODONTICS", "451"],
    ["GENERAL", "602"],
    ["ORAL & MAXILLOFACIAL SURGERY", "396"],
    ["ORAL MEDICINE & RADIOLOGY", "152"],
    ["ORAL PATHAOLOGY", "124"],
    ["ORTHODONTICS", "500"],
    ["PEDODONTICS", "262"],
    ["PERIODONTICS", "238"],
    ["PROSTHODONTICS", "512"],
    ["PUBLIC HEALTH DENTISTRY", "227"],
  ];

  const usefulLinks = [
    {
      title: "e-Consortium – The Tamilnadu Dr. M.G.R. Medical University",
      href: "https://www.tnmgrmu.ac.in/",
    },
    {
      title: "E-Questions – The Tamilnadu Dr. M.G.R. Medical University",
      href: "https://www.tnmgrmu.ac.in/index.php/library/e-questions",
    },
    {
      title: "National Library of Medicine – National Institutes of Health",
      href: "https://www.ncbi.nlm.nih.gov/",
    },
    {
      title: "Elsevier Journals – ScienceDirect",
      href: "https://www.sciencedirect.com/",
    },
    {
      title: "ScienceDirect – Science, health and medical journals",
      href: "https://www.sciencedirect.com/",
    },
    {
      title: "BMC – Springer Open",
      href: "https://www.biomedcentral.com/",
    },
    {
      title: "PubMed – Home",
      href: "https://pubmed.ncbi.nlm.nih.gov/",
    },
    {
      title: "Taylor & Francis Open Access",
      href: "https://www.tandfonline.com/",
    },
    {
      title: "Open Access: Medicine",
      href: "https://www.lww.com/",
    },
    {
      title: "Journals | Peer Reviewed Open Access Journals | Hindawi",
      href: "https://www.hindawi.com/",
    },
    {
      title: "The Open Dentistry Journal",
      href: "https://opendentistryjournal.com/",
    },
  ];

  const eBooks = [
    {
      title: "National Digital Library of India",
      href: "https://ndl.iitkgp.ac.in/",
    },
    {
      title: "e-PGPathshala",
      href: "https://epgp.inflibnet.ac.in/",
    },
    {
      title: "PDF Drive",
      href: "https://www.pdfdrive.com/",
    },
    {
      title: "Directory of Open Access Books",
      href: "https://www.doabooks.org/",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
        <div
          className="container-custom text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex justify-center mb-3">
            <LibraryIcon size={38} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Library
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90">
            Supporting teaching, learning, research and academic excellence
            through comprehensive print and digital library resources.
          </p>
        </div>
      </section>
{/* ================= E-LIBRARY ================= */}
<section className="pt-8 md:pt-10">
  <div className="container-custom">

    <a
      href="https://discovery.delnet.in"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl border shadow-sm p-5 md:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      data-aos="fade-up"
    >

      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
          <Globe
            className="text-blue-700"
            size={28}
          />
        </div>

        <div className="flex-1">

          <div className="flex items-center gap-2">

            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              E-Library
            </h2>

            <ExternalLink
              size={18}
              className="text-blue-600"
            />

          </div>

          <p className="text-sm md:text-base text-gray-600 mt-1">
            Access the DELNET Discovery online library and digital resources.
          </p>

        </div>

      </div>

    </a>

  </div>
</section>

      {/* ================= INTRO ================= */}
      <section className="py-8 md:py-10">
        <div className="container-custom">

          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7 shadow-md"
            data-aos="fade-up"
          >

            <div className="flex items-center gap-3 mb-3">
              <BookOpen
                className="text-blue-700"
                size={28}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Central Library
              </h2>
            </div>

            <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[16px]">
              The Central Library provides students and faculty with access
              to a wide range of dental books, reference materials,
              journals and electronic resources. The library supports
              academic learning, clinical education, research activities
              and continuous professional development.
            </p>

          </div>

        </div>
      </section>


      {/* ================= TEXT BOOKS ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="flex items-center gap-3 mb-5"
            data-aos="fade-up"
          >
            <BookMarked
              className="text-blue-700"
              size={28}
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Text Books
            </h2>
          </div>

          <div
            className="bg-white rounded-2xl border shadow-sm overflow-hidden"
            data-aos="fade-up"
          >

            <div className="overflow-x-auto">

              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="text-left px-4 py-3 w-20">
                      S No
                    </th>

                    <th className="text-left px-4 py-3">
                      Department
                    </th>

                    <th className="text-left px-4 py-3 w-40">
                      Book Count
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {textBooks.map(([department, count], index) => (
                    <tr
                      key={department}
                      className={
                        index % 2 === 0
                          ? "bg-blue-50"
                          : "bg-gray-100"
                      }
                    >
                      <td className="px-4 py-3">
                        {index + 1}
                      </td>

                      <td className="px-4 py-3 font-medium">
                        {department}
                      </td>

                      <td className="px-4 py-3">
                        {count}
                      </td>
                    </tr>
                  ))}

                  <tr className="bg-gray-200 font-bold">
                    <td
                      colSpan={2}
                      className="px-4 py-3"
                    >
                      Total
                    </td>

                    <td className="px-4 py-3">
                      3323
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>

        </div>
      </section>


      {/* ================= JOURNALS ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="flex items-center gap-3 mb-5"
            data-aos="fade-up"
          >
            <BookOpen
              className="text-blue-700"
              size={28}
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Journals
            </h2>
          </div>

          <div
            className="bg-white rounded-2xl border shadow-sm overflow-hidden"
            data-aos="fade-up"
          >

            <div className="overflow-x-auto">

              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="text-left px-4 py-3 w-20">
                      S.No
                    </th>

                    <th className="text-left px-4 py-3">
                      Department
                    </th>

                    <th className="text-left px-4 py-3 w-40">
                      Journals Count
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {journals.map(([department, count], index) => (
                    <tr
                      key={department}
                      className={
                        index % 2 === 0
                          ? "bg-blue-50"
                          : "bg-gray-100"
                      }
                    >
                      <td className="px-4 py-3">
                        {index + 1}
                      </td>

                      <td className="px-4 py-3 font-medium">
                        {department}
                      </td>

                      <td className="px-4 py-3">
                        {count}
                      </td>
                    </tr>
                  ))}

                  <tr className="bg-blue-100 font-bold">
                    <td
                      colSpan={2}
                      className="px-4 py-3"
                    >
                      Total Count
                    </td>

                    <td className="px-4 py-3">
                      3464
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>

        </div>
      </section>


      {/* ================= E-RESOURCES ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7"
            data-aos="fade-up"
          >

            <div className="flex items-center gap-3 mb-5">
              <Globe
                className="text-blue-700"
                size={30}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                E-Resources
              </h2>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Useful Links
            </h3>

            <div className="space-y-3">

              {usefulLinks.map((link, index) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >

                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>

                  <span className="pt-1 text-blue-700 group-hover:text-blue-900 group-hover:underline text-sm md:text-base">
                    {link.title}
                  </span>

                  <ExternalLink
                    size={15}
                    className="mt-1 text-blue-500 opacity-0 group-hover:opacity-100 transition"
                  />

                </a>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ================= E-BOOKS ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="bg-white rounded-2xl border shadow-sm p-5 md:p-7"
            data-aos="fade-up"
          >

            <div className="flex items-center gap-3 mb-5">

              <BookOpen
                className="text-blue-700"
                size={30}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                E-Books
              </h2>

            </div>

            <div className="space-y-3">

              {eBooks.map((book, index) => (
                <a
                  key={book.title}
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >

                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>

                  <span className="pt-1 text-blue-700 group-hover:text-blue-900 group-hover:underline text-sm md:text-base">
                    {book.title}
                  </span>

                  <ExternalLink
                    size={15}
                    className="mt-1 text-blue-500 opacity-0 group-hover:opacity-100 transition"
                  />

                </a>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ================= DIGITAL ACADEMIC RESOURCES ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div className="grid md:grid-cols-2 gap-5">

            {/* Digital Library */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden"
              data-aos="fade-right"
            >

              <div className="bg-blue-50 p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Monitor
                    className="text-blue-700"
                    size={30}
                  />
                </div>

                <h2 className="text-2xl font-bold text-blue-900">
                  Digital Library
                </h2>
              </div>

              <div className="p-5">

                <p className="text-gray-700 text-sm md:text-base leading-7">
                  Access digital academic resources and electronic
                  learning materials supporting students, faculty and
                  researchers.
                </p>

              </div>

            </div>


            {/* Institutional Membership */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden"
              data-aos="fade-left"
            >

              <div className="bg-blue-50 p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Award
                    className="text-blue-700"
                    size={30}
                  />
                </div>

                <h2 className="text-2xl font-bold text-blue-900">
                  Institutional Membership
                </h2>
              </div>

              <div className="p-5">

                <p className="text-gray-700 text-sm md:text-base leading-7">
                  The library supports institutional access to academic
                  networks and professional information resources.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ONLINE LEARNING ================= */}
      <section className="pb-12 md:pb-14">
        <div className="container-custom">

          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7"
            data-aos="fade-up"
          >

            <div className="flex items-center gap-3 mb-4">

              <Monitor
                className="text-blue-700"
                size={30}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Online Learning Resources
              </h2>

            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">

              {[
                ["e-Shodhganga", "https://shodhganga.inflibnet.ac.in/"],
                ["e-ShodhSindhu", "https://ess.inflibnet.ac.in/"],
                ["SWAYAM", "https://swayam.gov.in/"],
                ["NPTEL", "https://nptel.ac.in/"],
              ].map(([name, href]) => (

                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border rounded-xl p-4 text-center hover:shadow-md hover:-translate-y-1 transition-all"
                >

                  <Globe
                    className="mx-auto text-blue-700 mb-2"
                    size={24}
                  />

                  <h3 className="font-bold text-blue-900">
                    {name}
                  </h3>

                </a>

              ))}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}