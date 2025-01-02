import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Artwork } from '../types/artwork';
import { ScrollText } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCardExpos = ({ artwork }: ArtworkCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFichaOpen, setIsFichaOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleFicha = () => setIsFichaOpen(!isFichaOpen);

  return (
    <>
      <LazyLoad height={200} offset={100}>
        <div
          className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          onClick={openModal}
        >
          <div className="aspect-w-3 aspect-h-4">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-4 right-4">
            <button
              className="bg-white p-2 rounded-full shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                toggleFicha();
              }}
            >
              <ScrollText name="file" className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </LazyLoad>

      {isFichaOpen && (
        <span className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 rounded shadow-lg">
          <div className="relative">
            <button
              className="absolute top-6 -right-6 bg-white text-black text-2xl rounded-full p-2 shadow-lg"
              onClick={toggleFicha}
            >
              &times;
            </button>
            <div className="p-4">
              <h2 className='text-white'>{artwork.title}</h2>
              <p className='text-white'>{artwork.description}</p>
            {artwork.fichaTecnica && (
                <img
                    src={artwork.fichaTecnica}
                    alt={`Ficha técnica de ${artwork.title}`}
                    className="mt-4 max-w-full h-auto"
                />
            )}
            </div>
          </div>
        </span>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="max-h-screen max-w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ArtworkCardExpos;