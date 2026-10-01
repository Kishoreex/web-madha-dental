import { Trophy, Gamepad2 } from "lucide-react";
import "aos/dist/aos.css";

export default function Sports() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
        <div
          className="container-custom text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >


          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            
            Sports
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90">
            Encouraging physical fitness, recreation, teamwork and
            holistic development through sports and extracurricular activities.
          </p>
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
              <Trophy className="text-blue-700" size={28} />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Sports & Recreation
              </h2>
            </div>

            <p className="font-['Montserrat'] text-[14px] leading-6 text-black sm:text-[16px]">
              Participation in sports not only improves physical fitness but
              also builds mental strength. The institution prioritizes
              nurturing students’ recreational interests, recognizing their
              importance in talent cultivation and overall progress. This
              commitment involves actively promoting extracurricular activities
              such as sports, cultural events, and literary endeavors, all aimed
              at refining students’ abilities and fostering holistic growth.
              Every year, the college organizes both “Sports Week” and
              “Culture Week,” designed with the aim of promoting full engagement
              from every student and faculty member.
            </p>

          </div>

        </div>
      </section>


      {/* ================= INDOOR GAMES ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="flex items-center gap-3 mb-6"
            data-aos="fade-up"
          >
            <Gamepad2 className="text-blue-700" size={28} />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Indoor Games
            </h2>
          </div>


          {/* Images */}
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">

            {/* Chess */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-right"
            >

              <div className="overflow-hidden">
                <img
                  src="/images/sports/chess.jpg"
                  alt="Students playing chess"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">
                  Chess
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Indoor recreational activity encouraging concentration,
                  strategy and logical thinking.
                </p>
              </div>

            </div>


            {/* Carrom */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-left"
            >

              <div className="overflow-hidden">
                <img
                  src="/images/sports/carrom.jpg"
                  alt="Students playing carrom"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">
                  Carrom
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  A popular indoor game that encourages recreation,
                  coordination and friendly competition.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}