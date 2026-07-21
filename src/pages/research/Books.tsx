import { books } from "../../data/books";

const Books = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white">
      <div
  className="container-custom text-center"
  data-aos="fade-up"
>
          <h1 className="text-5xl font-bold mb-5">
            Books
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/90">
            Books and Book Chapters Published by the Faculty.
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
                  <th className="px-4 py-3">Sl.No</th>
                  <th className="px-4 py-3">UGC CARE ID</th>
                  <th className="px-4 py-3">Link</th>
                  <th className="px-4 py-3">Publication Type</th>
                  <th className="px-4 py-3">Book Chapter</th>
                  <th className="px-4 py-3">Author Name</th>
                  <th className="px-4 py-3">Journal Name</th>
                  <th className="px-4 py-3">ISBN Number</th>
                  <th className="px-4 py-3">Book Title</th>
                  <th className="px-4 py-3">Year</th>
                </tr>

              </thead>

              <tbody>

                {books.map((book) => (

                  <tr
                    key={book.sno}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="px-4 py-3">{book.sno}</td>

                    <td className="px-4 py-3">
                      {book.ugcCareId || "-"}
                    </td>

                    <td className="px-4 py-3">
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-cyan-600 font-medium transition-colors duration-300 underline"
                      >
                        View
                      </a>
                    </td>

                    <td className="px-4 py-3">{book.publicationType}</td>

                    <td className="px-4 py-3">{book.bookChapter}</td>

                    <td className="px-4 py-3">{book.authorName}</td>

                    <td className="px-4 py-3">
                      {book.journalName || "-"}
                    </td>

                    <td className="px-4 py-3">{book.isbnNumber}</td>

                    <td className="px-4 py-3">{book.bookTitle}</td>

                    <td className="px-4 py-3">{book.year}</td>

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

export default Books;