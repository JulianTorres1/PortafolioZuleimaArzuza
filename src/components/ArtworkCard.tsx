import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Artwork } from '../types/artwork';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-0 p-6 text-white font-mono">
              <h3 className="text-xl font-semibold">{artwork.title}</h3>
              <p className="mt-2 text-sm">{artwork.description}</p>
              <div className="mt-2 flex items-center space-x-2 text-xs">
                <span className="rounded-full bg-white/20 px-2 py-1">{artwork.category}</span>
                <span>{artwork.date}</span>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

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

export default ArtworkCard;