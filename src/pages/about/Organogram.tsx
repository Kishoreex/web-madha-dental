import { IMAGES } from "../../data/images";

export default function Organogram() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative h-[300px]">
        <img
          src={IMAGES.aboutMdch}
          className="w-full h-full object-cover"
          alt="Organogram"
        />

        <div className="absolute inset-0 bg-medical-navy/70 flex items-center justify-center">
          <div
            className="text-center text-white"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-bold">
              Organogram
            </h1>

            <p className="mt-4 text-lg">
              Home / About / Organogram
            </p>
          </div>
        </div>
      </section>

      {/* Content */}

      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="text-center mb-14"
            data-aos="fade-up"
          >

            <span className="badge mb-4">
              Organizational Structure
            </span>

            <h2 className="heading-2 mb-5">
              Institutional
              <span className="gradient-text">
                {" "}Organogram
              </span>
            </h2>

            <p className="body-large max-w-3xl mx-auto text-neutral-600">
              The organizational structure of Madha Dental College &
              Hospital ensures efficient administration, academic
              excellence and quality healthcare through clearly defined
              leadership and governance.
            </p>

          </div>

          {/* Image */}

          <div
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8"
            data-aos="zoom-in"
          >

            <img
              src={IMAGES.organogram}
              alt="Organogram"
              className="w-full max-w-4xl mx-auto rounded-xl"
            />

          </div>

          {/* Cards */}

          <div
            className="grid md:grid-cols-3 gap-8 mt-14"
            data-aos="fade-up"
          >

            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold text-medical-blue mb-3">
                Leadership
              </h3>

              <p className="text-neutral-600">
                Chairman, Vice Chairman, Director and Principal provide
                strategic leadership for the institution.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold text-medical-blue mb-3">
                Administration
              </h3>

              <p className="text-neutral-600">
                Vice Principal, Administrative Officer, Faculty Members
                and Staff ensure smooth academic and administrative
                operations.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold text-medical-blue mb-3">
                Quality Assurance
              </h3>

              <p className="text-neutral-600">
                IQAC and institutional committees continuously monitor
                quality, governance and student welfare.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}