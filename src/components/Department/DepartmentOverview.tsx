export default function DepartmentOverview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              About Department
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">
              Conservative Dentistry &
              <br />
              Endodontics
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              The Department of Conservative Dentistry and Endodontics is
              dedicated to preserving natural teeth through advanced restorative
              procedures, aesthetic dentistry, microscopic endodontics, and
              evidence-based clinical practice.
            </p>

            <p className="text-gray-600 leading-8">
              Our department combines modern technology with experienced faculty
              to provide exceptional undergraduate, postgraduate, and clinical
              training while delivering quality patient care.
            </p>

          </div>

          {/* Right Side */}

          <div>

            <img
              src="/images/departments/conservative/about.jpg"
              alt=""
              className="rounded-3xl shadow-2xl w-full"
            />

          </div>

        </div>

      </div>
    </section>
  );
}