import { FileText, ExternalLink, ShieldAlert } from "lucide-react";
import "aos/dist/aos.css";

export default function AntiRaggingComplaint() {
  const documents = [
    {
      title: "Anti Ragging Consernt Form",
      description:
        "Download and submit the official Anti Ragging Consent Form.",
      pdf: "/pdf/student-support/Anti_Ragging_Consent_Form.pdf",
    },
    {
      title: "DCI anti ragging regulations 2009",
      description:
        "View the procedure and guidelines for submitting an Anti Ragging Complaint.",
      pdf: "/pdf/student-support/Anti_Ragging_Complaint_Procedure.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-700 py-24">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md"
            data-aos="fade-down"
          >
            <ShieldAlert className="h-9 w-9 text-white" />
          </div>

          <h1
            className="text-4xl font-bold tracking-tight text-white md:text-5xl"
            data-aos="fade-up"
          >
            Anti Ragging Complaint
          </h1>

          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 md:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Access the Anti Ragging Complaint Form and the complaint
            procedure provided for students.
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="mb-10 text-center">
          <h2
            className="text-3xl font-bold text-gray-900"
            data-aos="fade-up"
          >
            Anti Ragging Documents
          </h2>

          <p
            className="mt-3 text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Select the document you want to view.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {documents.map((doc, index) => (
            <div
              key={doc.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                <FileText className="h-8 w-8 text-blue-700" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {doc.title}
              </h3>

              <p className="mt-3 min-h-[56px] leading-7 text-gray-600">
                {doc.description}
              </p>

              <a
                href={doc.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View PDF
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}