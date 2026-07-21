
import { publications } from "../../data/publications";


const Publications = () => {


  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
   <div
  className="container-custom text-center"
  data-aos="fade-up"
>
          <h1 className="text-5xl font-bold mb-5">
            Publications
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/90">
            Research Publications of Madha Dental College & Hospital.
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
                  <th className="px-4 py-3">PubMed ID</th>
                  <th className="px-4 py-3">National / International</th>
                  <th className="px-4 py-3">Publication Type</th>
                  <th className="px-4 py-3">Publication Title</th>
                  <th className="px-4 py-3">Authors</th>
                  <th className="px-4 py-3">Journal</th>
                  <th className="px-4 py-3">Year</th>
                </tr>

              </thead>

              <tbody>

                {publications.map((item) => (

                 <tr
  key={item.sno}
  className="border-b hover:bg-blue-50 transition-colors duration-300"
  data-aos="fade-up"
  data-aos-delay={(item.sno % 10) * 40}
>

                    <td className="px-4 py-3">{item.sno}</td>

                    <td className="px-4 py-3">
                      <a
                        href={item.pubmedId}
                        target="_blank"
                        rel="noopener noreferrer"
                     className="text-blue-700 hover:text-cyan-600 font-medium transition-colors duration-300 underline"
                      >
                        Link
                      </a>
                    </td>

                    <td className="px-4 py-3">{item.category}</td>

                    <td className="px-4 py-3">{item.type}</td>

                    <td className="px-4 py-3">{item.title}</td>

                    <td className="px-4 py-3">{item.authors}</td>

                    <td className="px-4 py-3">{item.journal}</td>

                    <td className="px-4 py-3">{item.year}</td>

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

export default Publications;