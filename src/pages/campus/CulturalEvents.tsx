
import {
  Music,
  Sparkles,
  Users,
  PartyPopper,
  Trophy,
  Gamepad2,
} from "lucide-react";
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
            Sports & Cultural Events
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90">
            Encouraging physical fitness, creativity, teamwork and
            holistic development through sports, cultural activities
            and celebrations.
          </p>
        </div>
      </section>

      {/* ================= SPORTS INTRO ================= */}
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
              Participation in sports improves physical fitness,
              mental strength and teamwork. The institution encourages
              students to explore their recreational interests and
              develop their abilities through sports and extracurricular
              activities. Every year, the college organizes Sports Week
              and Culture Week to encourage active participation from
              students and faculty members.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INDOOR GAMES ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6" data-aos="fade-up">
            <Gamepad2 className="text-blue-700" size={28} />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Indoor Games
            </h2>
          </div>

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
                  An indoor recreational activity encouraging
                  concentration, strategy and logical thinking.
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

      {/* ================= CULTURAL EVENTS INTRO ================= */}
      <section className="py-8 md:py-10">
        <div className="container-custom">
          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7 shadow-md"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-3">
              <Music className="text-blue-700" size={28} />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Cultural Activities
              </h2>
            </div>

            <p className="font-['Montserrat'] text-[14px] leading-6 text-black sm:text-[16px]">
              In the midst of academic activities and dental labs,
              our college celebrates cultural events that bring life
              to campus. From multicultural festivals celebrating
              diversity to talent showcases featuring students'
              interests, these events encourage creativity, expression
              and a strong sense of community among students and faculty.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FESTIVAL CELEBRATIONS ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6" data-aos="fade-up">
            <PartyPopper className="text-blue-700" size={28} />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Festival Celebrations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">

            {/* Cultural Event 1 */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-right"
            >
              <div className="overflow-hidden">
                <img
                  src="/images/cultural-events/cultural-1.jpg"
                  alt="Cultural festival celebration"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">
                  Festival Celebrations
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Vibrant celebrations bringing students and faculty
                  together through traditional performances and festive activities.
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
                  alt="Cultural performance"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">
                  Cultural Performances
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Students showcase their creativity through music,
                  dance and cultural performances.
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
                  alt="Student cultural activities"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">
                  Student Talent
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Cultural activities provide opportunities to express
                  hidden talents and creative interests.
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
                  alt="College cultural celebration"
                  className="w-full h-[280px] md:h-[330px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">
                  Community Celebrations
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Events encourage participation, friendship and a
                  strong sense of community across the college.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CULTURE WEEK ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">
          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7 shadow-md"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="text-blue-700" size={28} />

              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Sports Week & Culture Week
              </h2>
            </div>

            <p className="font-['Montserrat'] text-[14px] leading-6 text-black sm:text-[16px]">
              Madha Dental College encourages students to participate
              in sports competitions, traditional celebrations and
              cultural performances. These activities bring students
              and faculty together, promoting teamwork, creativity,
              sportsmanship and cultural exchange within the college
              community.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STUDENT PARTICIPATION ================= */}
      <section className="pb-12 md:pb-14">
        <div className="container-custom">
          <div
            className="bg-white rounded-2xl border shadow-sm p-6 md:p-8"
            data-aos="zoom-in"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-blue-700" size={30} />

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Student Participation
              </h2>
            </div>

            <p className="font-['Montserrat'] text-[14px] leading-7 text-black sm:text-[17px]">
              Sports and cultural events provide students with
              opportunities to participate, collaborate and showcase
              their individual talents. These activities create an
              enjoyable campus environment while encouraging physical
              fitness, creativity, teamwork and personal development.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
