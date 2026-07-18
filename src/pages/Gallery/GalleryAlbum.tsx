import { useParams } from "react-router-dom";
import { galleryAlbums } from "../../data/gallery";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function GalleryAlbum() {
  const { folder } = useParams();

  const album = galleryAlbums.find((a) => a.folder === folder);
const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = useMemo(() => {
    
    if (!album) return [];

    return Array.from({ length: album.count }, (_, i) => ({
      id: i + 1,
      src: `/gallery/${album.folder}/${i + 1}.jpg`,
    }));
  }, [album]);

  if (!album) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold">Album not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-white">

      <section className="py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">

            <span className="badge mb-4">
              Gallery
            </span>

            <h1 className="heading-2">
              {album.title}
            </h1>

            <p className="body-large text-neutral-600 mt-4">
              {album.count} Photos
            </p>

          </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

  {images.map((image, index) => (

    <div
      key={image.id}
      onClick={() => setSelectedImage(index)}
      className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
    >

      <img
        src={image.src}
        alt=""
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />

    </div>

  ))}

</div>
{selectedImage !== null && (

<div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center">

    {/* Close */}

    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-5 right-6 text-white text-5xl"
    >
      ×
    </button>

    {/* Previous */}

    <button
      onClick={() =>
        setSelectedImage(
          selectedImage === 0
            ? images.length - 1
            : selectedImage - 1
        )
      }
      className="absolute left-5 text-white text-5xl"
    >
      ‹
    </button>

    {/* Image */}

    <img
      src={images[selectedImage].src}
      className="max-w-[90vw] max-h-[90vh] rounded-xl"
    />

    {/* Next */}

    <button
      onClick={() =>
        setSelectedImage(
          selectedImage === images.length - 1
            ? 0
            : selectedImage + 1
        )
      }
      className="absolute right-5 text-white text-5xl"
    >
      ›
    </button>

</div>

)}
        </div>

      </section>

    </div>
  );
}