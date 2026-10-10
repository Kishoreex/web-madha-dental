import { useState } from "react";
import {
  ArrowLeft,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type OutreachCamp = {
  venue: string;
  details: string[];
  description?: string;
  photos: string[];
};

type CampusMonth = {
  name: string;
  folder: string;
  cover: string;
  photos: string[];
};

const february2024Camps: OutreachCamp[] = [
  {
    venue: "PANCHAYAT UNION MIDDLE SCHOOL, PUDUPER",
    details: ["Patients benefited: 264"],
    photos: ["/images/campus/february-2024/1.jpg", "/images/campus/february-2024/2.jpg"],
  },
  {
    venue: "DAZZLING STONE ORPHANAGE",
    details: [
      "Patients benefited: 39",
      "No. of scaling: 16",
      "No. of preventive procedures: 16",
    ],
    photos: ["/images/campus/february-2024/3.jpg", "/images/campus/february-2024/4.jpg"],
  },
  {
    venue: "PALMAS PUBLIC SCHOOL, PALLAVARAM",
    details: ["Patients benefited: 77"],
    photos: [
      "/images/campus/february-2024/5.jpg",
      "/images/campus/february-2024/6.jpg",
      "/images/campus/february-2024/7.jpg",
    ],
  },
  {
    venue: "SHAKTHI ADHARVU ILLAM",
    details: [
      "No. of scaling: 08",
      "No. of restoration: 10",
      "No. of extractions: 02",
    ],
    photos: ["/images/campus/february-2024/8.jpg", "/images/campus/february-2024/9.jpg", "/images/campus/february-2024/10.jpg"],
  },
];

const november2023Camps: OutreachCamp[] = [
  {
    venue: "EN NADU EN DESAM TRUST, KOVUR",
    details: [
      "Camp date: 3/11/23",
      "Patients benefited: 33",
    ],
    description:
      "Recognizing the unique needs of older adults in residential care settings helps tailor services and support to address these challenges effectively. Providing specialized oral health care for the elderly population contributes to their overall health, comfort, and quality of life.",
    photos: [
      "/images/campus/november-2023/1.jpg",
      "/images/campus/november-2023/2.jpg",
    ],
  },
  {
    venue: "NATIONAL FEDERATION OF BLIND, KOVUR",
    details: [
      "Camp date: 11/11/23",
      "Patients benefited: 14",
    ],
    description:
      "Madha Dental College's Department of Public Health Dentistry organized a commendable dental camp for blind residents of the National Federation of Blind in Kovur, addressing unique oral health needs. The initiative provided specialized care and education, offering accessible dental services such as screenings, treatments, and oral hygiene education. The camp significantly improved dental health and overall well-being for this special needs group.",
    photos: [
      "/images/campus/november-2023/3.jpg",
      "/images/campus/november-2023/4.jpg",
      "/images/campus/november-2023/5.jpg",
      "/images/campus/november-2023/6.jpg",
    ],
  },
];
const october2023Camps: OutreachCamp[] = [
  {
    venue: "RESCUE FOUNDATION, AVADI",
    details: [
      "Camp date: 14/10/23",
      "Patients benefited: 36",
    ],
    description:
      "The Department of Public Health Dentistry organized a transformative dental camp for Rescue Foundation patients in Avadi, a rehabilitation center for addiction recovery. The initiative targeted oral health challenges during recovery, offering essential services like screenings, treatments, and education. The camp contributed to residents’ overall health, aligning with the department’s commitment to community well-being and supporting the dental health needs of those in addiction recovery.",
    photos: [
      "/images/campus/october-2023/1.jpg",
      "/images/campus/october-2023/2.jpg",
      "/images/campus/october-2023/3.jpg",
    ],
  },
];
const january2024Camps: OutreachCamp[] = [
  {
    venue: "NEW CAMBRIDGE SCHOOL",
    details: ["Patients benefited: 140"],
    photos: ["/images/campus/january-2024/1.jpg"],
  },
  {
    venue: "PADMA SUBRAMANIAM BALA BHAVAN MAT HR SEC SCHOOL",
    details: [
      "Patients benefited: 190",
      "No. of restoration: 15",
      "No. of preventive procedures: 37",
      "No. of extractions: 03",
    ],
    photos: ["/images/campus/january-2024/2.jpg"],
  },
  {
    venue: "NOBLE ACADEMY, PAMMAL",
    details: ["Patients benefited: 139"],
    photos: ["/images/campus/january-2024/3.jpg"],
  },
  {
    venue: "CSI ST STEPHENS MATRICULATION SCHOOL, PALLAVARAM",
    details: ["Patients benefited: 323"],
    photos: ["/images/campus/january-2024/4.jpg"],
  },
  {
    venue: "DIVINE OLD AGE HOME, MOULIVAKKAM",
    details: [],
    photos: ["/images/campus/january-2024/5.jpg"],
  },
  {
    venue: "ROSE OF SHARON AG CHURCH, KUNDRATHUR",
    details: ["Patients benefited: 64"],
    photos: ["/images/campus/january-2024/6.jpg"],
  },
  {
    venue: "KALAVANI OLD AGE HOME, TAMBARAM",
    details: [
      "Patients benefited: 38",
      "No. of extractions: 01",
      "No. of fillings: 16",
      "No. of dentures: 02",
    ],
    photos: [
      "/images/campus/january-2024/7.jpg",
      "/images/campus/january-2024/8.jpg",
    ],
  },
];
const campusMonths: CampusMonth[] = [
  { name: "FEBRUARY 2024", folder: "february-2024", cover: "/images/campus/february-2024/1.jpg", photos: Array.from({ length: 10 }, (_, i) => `/images/campus/february-2024/${i + 1}.jpg`) },
  { name: "JANUARY 2024", folder: "january-2024", cover: "/images/campus/january-2024/1.jpg", photos: Array.from({ length: 8 }, (_, i) => `/images/campus/january-2024/${i + 1}.jpg`) },
  { name: "NOVEMBER 2023", folder: "november-2023", cover: "/images/campus/november-2023/1.jpg", photos: Array.from({ length: 8 }, (_, i) => `/images/campus/november-2023/${i + 1}.jpg`) },
  { name: "OCTOBER 2023", folder: "october-2023", cover: "/images/campus/october-2023/1.jpg", photos: Array.from({ length: 8 }, (_, i) => `/images/campus/october-2023/${i + 1}.jpg`) },

];

export default function Campus() {
  const [activeMonth, setActiveMonth] = useState<CampusMonth | null>(null);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const closeGallery = () => {
    setActiveMonth(null);
    setActivePhoto(null);
  };

  const february2024 = activeMonth?.folder === "february-2024";
const january2024 =
  activeMonth?.folder === "january-2024";
const november2023 =
  activeMonth?.folder === "november-2023";
  const october2023 =
  activeMonth?.folder === "october-2023";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50/50 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-r from-medical-navy via-medical-blue to-blue-700 pt-36 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="container-custom relative z-10 px-4 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-sm">
            Madha Dental College &amp; Hospital
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Campus Outreach Activities
          </h1>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-300 to-white" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            Explore our community dental camps, public health initiatives, and outreach memories.
          </p>
        </div>
      </section>

      <section className="container-custom px-4 pt-12 sm:pt-16">
        {!activeMonth ? (
          <>
            <div className="mb-9 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-700 sm:text-sm">Our Moments in the Community</p>
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-slate-900 sm:text-4xl">Outreach Photo Gallery</h2>
              <div className="mx-auto mt-4 h-0.5 w-14 bg-blue-700" />
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {campusMonths.map((month, index) => (
                <button
                  type="button"
                  key={month.folder}
                  onClick={() => setActiveMonth(month)}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-[0_10px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(30,64,175,0.16)]"
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 60, 300)}
                >
                  <div className="relative h-60 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
                    <img src={month.cover} alt={`${month.name} outreach camp`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/65 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                      <Images size={15} /> View photographs
                    </div>
                  </div>
                  <div className="px-5 py-5 text-center">
                    <h3 className="font-['Manrope'] text-base font-bold tracking-wide text-blue-900">{month.name}</h3>
                    <div className="mx-auto mt-3 h-[2px] w-12 rounded-full bg-blue-700 transition-all duration-300 group-hover:w-20" />
                    <p className="mt-3 text-sm text-slate-500">Explore outreach activities</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <button type="button" onClick={closeGallery} className="mb-7 inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm font-semibold text-blue-800 shadow-sm transition hover:bg-blue-50">
              <ArrowLeft size={17} /> Back to months
            </button>

{february2024 || january2024 || november2023 || october2023 ? (
              <>
                <div className="mb-7 text-center">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">Campus Outreach Gallery</p>
                  <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-slate-900 sm:text-4xl">{activeMonth.name}</h2>
                  <div className="mx-auto mt-4 h-0.5 w-14 bg-blue-700" />
                </div>
                <p className="mx-auto mb-8 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
                  In February, the Department of Public Health Dentistry observed National Children’s Dental Health Month and Gum Disease Awareness Month to raise awareness about oral health. The department conducted treatment camps offering preventive and treatment services to school children, children in orphanages, and elderly residents, promoting good oral health practices for all age groups.
                </p>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
               {(october2023
  ? october2023Camps
  : november2023
  ? november2023Camps
  : january2024
  ? january2024Camps
  : february2024Camps
).map((camp) => (
                    <article key={camp.venue} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.07)]">
                      <h3 className="mb-3 text-sm font-bold leading-6 text-blue-900">{camp.venue}</h3>
                      <div className="mb-4 space-y-1">
                        {camp.details.map((detail) => <p key={detail} className="text-xs font-medium leading-5 text-slate-600 sm:text-sm">{detail}</p>)}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {camp.photos.map((photo, index) => (
                          <button key={photo} type="button" onClick={() => setActivePhoto(photo)} className="overflow-hidden rounded-lg bg-slate-100">
                            <img src={photo} alt={`${camp.venue} outreach photo ${index + 1}`} className="h-36 w-full object-cover transition duration-300 hover:scale-105 sm:h-40" onError={(event) => { event.currentTarget.parentElement?.classList.add("hidden"); }} />
                          </button>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="mb-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">Campus Outreach Gallery</p>
                  <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-slate-900 sm:text-4xl">{activeMonth.name}</h2>
                  <div className="mt-4 h-0.5 w-14 bg-blue-700" />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {activeMonth.photos.map((photo, index) => (
                    <button type="button" key={photo} onClick={() => setActivePhoto(photo)} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                      <div className="h-64 overflow-hidden bg-slate-100">
                        <img src={photo} alt={`${activeMonth.name} outreach photograph ${index + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" onError={(event) => { event.currentTarget.parentElement?.classList.add("hidden"); }} />
                      </div>
                      <div className="flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-700"><Images size={17} className="text-blue-700" />Outreach photograph {index + 1}</div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>

      {activePhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setActivePhoto(null)}>
          <button type="button" aria-label="Close photo" onClick={() => setActivePhoto(null)} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-7 sm:top-7"><X size={25} /></button>
          <img src={activePhoto} alt="Outreach activity" className="max-h-[86vh] max-w-[90vw] rounded-xl object-contain shadow-2xl" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
