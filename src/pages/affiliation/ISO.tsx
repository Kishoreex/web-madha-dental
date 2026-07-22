import { isoCertificates } from "../../data/isoCertificates";

const ISO = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold">
            ISO Certifications
          </h1>

          <p className="mt-4 text-lg text-white/90">
            Quality Certifications of Madha Dental College & Hospital
          </p>
        </div>
      </section>

      {/* Certificates */}

      <section className="py-16">

        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {isoCertificates.map((item) => (

              <a
                key={item.id}
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] object-contain bg-white group-hover:scale-105 transition duration-500"
                />

                <div className="p-5">

                  <h3 className="text-xl font-semibold text-center text-blue-900">
                    {item.title}
                  </h3>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default ISO;