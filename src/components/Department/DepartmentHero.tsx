export default function DepartmentHero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">

      <img
        src="https://www.mdch.in/wp-content/uploads/2021/07/mdch-banner.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/70 to-blue-700/40" />

      <div className="relative z-10 text-center text-white max-w-5xl px-6">

        <span className="inline-block bg-blue-500/20 border border-blue-300 px-5 py-2 rounded-full mb-6">
          Department
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Conservative Dentistry &
          <br />
          Endodontics
        </h1>

        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Excellence in restorative dentistry, esthetic dentistry,
          endodontics, clinical training and advanced patient care.
        </p>

      </div>

    </section>
  );
}