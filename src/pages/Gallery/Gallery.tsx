import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { galleryAlbums } from "../../data/gallery";
export default function Gallery() {
  return (
    <div className="bg-white">

      <section className="py-12">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div
            className="text-center mb-12"
            data-aos="fade-up"
          >

            <span className="badge mb-4">
              Gallery
            </span>

            <h2 className="heading-2">
              College
              <span className="gradient-text">
                {" "}Gallery
              </span>
            </h2>

            <p className="body-large text-neutral-600 max-w-3xl mx-auto mt-5">
              Explore memorable moments, celebrations, academic milestones,
              cultural events and achievements of Madha Dental College &
              Hospital.
            </p>

          </div>

          {/* Albums */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {galleryAlbums.map((album) => (

              <Link
                key={album.id}
                to={`/gallery/${album.folder}`}
                className="group"
              >

            <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 bg-white h-full flex flex-col">

                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="p-5 flex-1">

                   <h3 className="text-xl font-bold text-medical-navy min-h-[56px]">
                      {album.title}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {album.count} Photos
                    </p>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}