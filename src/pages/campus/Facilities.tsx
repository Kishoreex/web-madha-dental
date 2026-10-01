import {
  Building2,
  Bus,
  Home,
  Users,
  Landmark,
} from "lucide-react";
import "aos/dist/aos.css";

export default function Facilities() {
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
         Facilities
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90">
            Modern facilities and campus infrastructure supporting
            education, research, healthcare and student life.
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
    

            <p className="font-['Montserrat'] text-[14px] leading-6 text-black sm:text-[16px]">
              Madha Dental College and Hospital, Chennai offers many
              facilities to meet the requirements of students, faculty,
              and patients, ensuring the delivery of excellent patient
              care and providing the technological resources essential
              to facilitate teaching and research endeavors.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CAMPUS ================= */}
      <section className="pb-8 md:pb-10">
        <div className="container-custom">

          <div
            className="flex items-center gap-3 mb-5"
            data-aos="fade-up"
          >
            <Building2 className="text-blue-700" size={28} />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Campus Infrastructure
            </h2>
          </div>


          <div className="grid md:grid-cols-2 gap-5">

            {/* Campus Image 1 */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-right"
            >
              <img
                src="/images/facilities/campus-1.jpg"
                alt="Madha Dental College and Hospital"
                className="w-full h-[260px] md:h-[330px] object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">
                  Madha Dental College & Hospital
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  College and hospital infrastructure supporting
                  academic and clinical activities.
                </p>
              </div>
            </div>


            {/* Campus Image 2 */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-left"
            >
              <img
                src="/images/facilities/campus-2.jpg"
                alt="Madha Dental College Campus"
                className="w-full h-[260px] md:h-[330px] object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">
                  Campus Environment
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Spacious campus infrastructure designed to support
                  learning and student activities.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= AUDITORIUM ================= */}
      <section className="pb-8 md:pb-10">
        <div className="container-custom">

          <div
            className="rounded-2xl bg-white border shadow-sm overflow-hidden"
            data-aos="zoom-in"
          >

            <div className="grid lg:grid-cols-2">

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">

                <div className="flex items-center gap-3 mb-4">
                  <Landmark
                    className="text-blue-700"
                    size={30}
                  />

                  <h2 className="text-2xl md:text-3xl font-bold">
                    Auditorium
                  </h2>
                </div>

                <p className="text-gray-700 text-sm md:text-base leading-7">
                  The vibrant college auditorium, adorned with bright
                  hues and lively decor, welcomes audiences to its
                  250-seat capacity space. Its cheerful ambiance sets
                  the stage for engaging lectures, dynamic performances,
                  and enriching events, creating a vibrant hub of
                  creativity and learning within the campus community.
                </p>

                <div className="mt-5 inline-flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-semibold">
                    250 Seat Capacity
                  </span>
                </div>

              </div>


              {/* Image */}
              <div>
                <img
                  src="/images/facilities/auditorium.jpg"
                  alt="College Auditorium"
                  className="w-full h-[300px] lg:h-full min-h-[340px] object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= HOSTEL ================= */}
      <section className="pb-8 md:pb-10">
        <div className="container-custom">

          <div
            className="bg-blue-50 rounded-2xl p-5 md:p-7 mb-5"
            data-aos="fade-up"
          >

            <div className="flex items-center gap-3 mb-3">

              <Home
                className="text-blue-700"
                size={30}
              />

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Hostel
              </h2>

            </div>

            <p className="text-gray-700 text-sm md:text-base leading-7">
              The college offers separate on-campus housing
              accommodations for Boys and Girls students. The Boys and
              Girls hostels are located with lush green surroundings
              in close proximity to the academic building, which
              fosters a tranquil study environment among students.
              Also, the mess in the campus is maintained with adequate
              ventilation, which provides hygienic and well-balanced
              food to support the overall well-being of students.
            </p>

          </div>


          {/* Hostel Cards */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* Boys */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-right"
            >

              <img
                src="/images/facilities/boys-hostel.jpg"
                alt="Boys Hostel"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-5">

                <div className="flex items-center gap-2 mb-2">
                  <Users className="text-blue-700" size={22} />

                  <h3 className="text-xl font-bold text-blue-900">
                    Boys Hostel
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-6">
                  Dedicated on-campus accommodation providing a
                  comfortable and convenient residential environment
                  for students.
                </p>

              </div>

            </div>


            {/* Girls */}
            <div
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-left"
            >

              <img
                src="/images/facilities/girls-hostel.jpg"
                alt="Girls Hostel"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-5">

                <div className="flex items-center gap-2 mb-2">
                  <Users className="text-blue-700" size={22} />

                  <h3 className="text-xl font-bold text-blue-900">
                    Girls Hostel
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-6">
                  Dedicated residential accommodation located close
                  to the academic facilities and designed for student
                  convenience.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= TRANSPORT ================= */}
      <section className="pb-10 md:pb-12">
        <div className="container-custom">

          <div
            className="rounded-2xl bg-white border shadow-sm overflow-hidden"
            data-aos="zoom-in"
          >

            <div className="grid lg:grid-cols-2">

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">

                <div className="flex items-center gap-3 mb-4">

                  <Bus
                    className="text-blue-700"
                    size={30}
                  />

                  <h2 className="text-2xl md:text-3xl font-bold">
                    Transport
                  </h2>

                </div>

                <p className="text-gray-700 text-sm md:text-base leading-7">
                  The institution maintains an exclusive fleet of
                  buses, facilitating transportation to and from
                  significant locations throughout Chennai city.
                  These buses are instrumental in simplifying the
                  commute for students and staff residing outside the
                  college campus boundaries, ensuring their safe and
                  punctual arrival. This facility facilitates timely
                  commencement of classes and thereby aids in the
                  educational process.
                </p>

              </div>


              {/* Image */}
              <div>

                <img
                  src="/images/facilities/transport.jpg"
                  alt="Madha Dental College Transport"
                  className="w-full h-[300px] lg:h-full min-h-[350px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}