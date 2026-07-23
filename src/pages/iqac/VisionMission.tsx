import { Eye, Target, CheckCircle2 } from "lucide-react";

const missions = [
  "To channelize and systematise the institution's efforts and measures towards academic excellence.",
  "To be the catalyst for fostering quality implementation, quality sustenance and quality excellence in academic, administrative and student support activities of the institution.",
];

const VisionMission = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
<section className="pt-20 pb-10 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
        <div
          className="container-custom text-center"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-3 text-sm">
            <Eye className="w-5 h-5" />
            IQAC
          </div>

<h1 className="text-3xl lg:text-4xl font-bold mb-2">
            Vision & Mission
          </h1>

          <p className="max-w-xl mx-auto text-sm lg:text-base text-white/90">
            Internal Quality Assurance Cell (IQAC) is committed to
            promoting quality culture and continuous institutional
            excellence.
          </p>
        </div>
      </section>

      {/* Vision */}

<section className="py-10">
        <div className="container-custom">

          <h2
     className="text-3xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            Our Vision
          </h2>

          <div
          className="glass-card rounded-xl p-5 bg-gradient-to-r from-blue-900 to-cyan-700 text-white max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <div className="flex items-center gap-3 mb-4">
           <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
               <Eye className="w-6 h-6" />
              </div>

      <h3 className="text-xl font-semibold">
                Vision of the IQAC
              </h3>
            </div>

       <p className="text-base leading-7 text-white/95">
              To establish and maintain a quality culture focused on
              overall institutional excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}

   <section className="pb-10">
        <div className="container-custom">

          <h2
           className="text-3xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            Our Mission
          </h2>

          <div className="grid gap-5">  

            {missions.map((mission, index) => (
              <div
                key={index}
            className="glass-card p-4 rounded-xl max-w-4xl mx-auto hover:-translate-y-1 hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex items-start gap-5">

                 <div className="w-11 h-11 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
    <Target className="text-blue-700 w-5 h-5" />
</div>

                  <div>

                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Mission {index + 1}
                    </h3>

                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />

                      <p className="text-gray-700 text-[15px] leading-7">
                        {mission}
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
};

export default VisionMission;