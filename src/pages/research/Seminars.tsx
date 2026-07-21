import { seminars } from "../../data/seminars";

const Seminars = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
    <div
  className="container-custom text-center"
  data-aos="fade-up"
>
          <h1 className="text-5xl font-bold mb-5">
            Seminars & Workshops
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/90">
            Seminars, Workshops, Lectures and Webinars organized by the Institution.
          </p>
        </div>
      </section>

      {/* Table */}

   <section
  className="py-16"
  data-aos="fade-up"
  data-aos-delay="100"
>

        <div className="container-custom">

     <div className="rounded-2xl shadow-lg bg-white overflow-hidden">

  <div className="overflow-auto max-h-[700px]">

    <table className="min-w-full">

        <thead className="sticky top-0 bg-blue-900 text-white z-10">

                <tr>
                  <th className="px-4 py-3">S.No</th>
                  <th className="px-4 py-3">Year</th>
                  <th className="px-4 py-3">Name of Workshop / Seminar</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Number of Participants</th>
                </tr>

              </thead>

              <tbody>

                {seminars.map((item) => (

                <tr
  key={item.sno}
  className="border-b hover:bg-blue-50 transition-colors duration-300"
  data-aos="fade-up"
  data-aos-delay={(item.sno % 10) * 40}
>
                    <td className="px-4 py-3">{item.sno}</td>

                    <td className="px-4 py-3">{item.year}</td>

                    <td className="px-4 py-3">{item.name}</td>

                    <td className="px-4 py-3">{item.date}</td>

                    <td className="px-4 py-3 text-center">
                      {item.participants}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
</div>
      </section>

    </div>
  );
};

export default Seminars;