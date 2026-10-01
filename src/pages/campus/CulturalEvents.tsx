import { Music, Sparkles, Users, PartyPopper } from "lucide-react";
import "aos/dist/aos.css";

export default function CulturalEvents() {
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
            Cultural Events
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90">
            Celebrating creativity, diversity, talent and togetherness through
            vibrant cultural activities and celebrations.
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

              <Music
                className="text-blue-700"
                size={28}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Cultural Activities
              </h2>

            </div>

            <p className="font-['Montserrat'] text-[14px] leading-6 text-black sm:text-[16px]">
              In the midst of sterile corridors and dental labs, our college
              pulsates with cultural events that breathe life into its academic
              atmosphere. From multicultural festivals celebrating diversity to
              talent showcases featuring students’ hidden passions, the college
              becomes a melting pot of creativity and expression. These events
              not only foster a sense of community among students and faculty
              but also provide a refreshing break from the rigors of dental
              education.
            </p>

          </div>

        </div>
      </section>


      {/* ================= FESTIVAL CELEBRATIONS ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="flex items-center gap-3 mb-6"
            data-aos="fade-up"
          >

            <PartyPopper
              className="text-blue-700"
              size={28}
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Festival Celebrations
            </h2>

          </div>


          {/* Images */}
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">

            {/* Cultural Event 1 */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-right"
            >

              <div className="overflow-hidden">

                <img
                  src="/images/cultural-events/cultural-1.jpg"
                  alt="Cultural Festival Celebration"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />

              </div>

              <div className="p-4">

                <h3 className="text-lg font-bold text-blue-900">
                  Festival Celebrations
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Vibrant celebrations bringing together students and faculty
                  through traditional performances and festive activities.
                </p>

              </div>

            </div>


            {/* Cultural Event 2 */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-left"
            >

              <div className="overflow-hidden">

                <img
                  src="/images/cultural-events/cultural-2.jpg"
                  alt="Cultural Performance"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />

              </div>

              <div className="p-4">

                <h3 className="text-lg font-bold text-blue-900">
                  Cultural Performances
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Students showcase their creativity and talents through
                  music, dance and cultural performances.
                </p>

              </div>

            </div>


            {/* Cultural Event 3 */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-right"
            >

              <div className="overflow-hidden">

                <img
                  src="/images/cultural-events/cultural-3.jpg"
                  alt="Student Cultural Activities"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />

              </div>

              <div className="p-4">

                <h3 className="text-lg font-bold text-blue-900">
                  Student Talent
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Cultural activities provide students with opportunities to
                  express their hidden talents and creative interests.
                </p>

              </div>

            </div>


            {/* Cultural Event 4 */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-left"
            >

              <div className="overflow-hidden">

                <img
                  src="/images/cultural-events/cultural-4.jpg"
                  alt="College Cultural Celebration"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />

              </div>

              <div className="p-4">

                <h3 className="text-lg font-bold text-blue-900">
                  Community Celebrations
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Events encourage participation, friendship and a strong
                  sense of community across the college.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CULTURAL WEEK ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7 shadow-md"
            data-aos="fade-up"
          >

            <div className="flex items-center gap-3 mb-3">

              <Sparkles
                className="text-blue-700"
                size={28}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Culture Week
              </h2>

            </div>

            <p className="font-['Montserrat'] text-[14px] leading-6 text-black sm:text-[16px]">
              Madha Dental College ignites festivities with vibrant decorations
              and spirited cultural performances, uniting students and faculty
              in joyous celebration. From traditional dances to fun
              competitions, each festival is a harmonious blend of tradition
              and innovation, fostering a rich tapestry of cultural exchange
              within the college community.
            </p>

          </div>

        </div>
      </section>


      {/* ================= PARTICIPATION ================= */}
      <section className="pb-12 md:pb-14">
        <div className="container-custom">

          <div
            className="bg-white rounded-2xl border shadow-sm p-6 md:p-8"
            data-aos="zoom-in"
          >

            <div className="flex items-center gap-3 mb-4">

              <Users
                className="text-blue-700"
                size={30}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Student Participation
              </h2>

            </div>
       <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
              Cultural events provide students with a platform to participate,
              collaborate and showcase their individual talents. These
              activities create an enjoyable campus environment while
              encouraging creativity, teamwork and cultural exchange.
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}