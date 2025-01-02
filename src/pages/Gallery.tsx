
import Hero from '../components/Hero';
import ArtworkCard from '../components/ArtworkCard';
import { motion } from "motion/react"
import artworks from '../types/artworks';

export default function Gallery() {
  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900 font-mono">Obras</h1>


        <h2 className="mb-8 text-center text-3xl text-gray-900 font-light border-b border-primary-300">Óleo</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.filter((artwork) => artwork.category === 'Óleo').map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>



        <h2 className="mb-20 mt-20 text-center text-3xl text-gray-900 font-light border-b border-primary-300">Acrílico</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.filter((artwork) => artwork.category === 'Acrílico').map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        <h2 className="mb-20 mt-20 text-center text-3xl text-gray-900 font-light border-b border-primary-300">Acrílico con intervención</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.filter((artwork) => artwork.category === 'Acrílico con intervención').map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
        
        
        <h2 className="mb-20 mt-20 text-center text-3xl text-gray-900 font-light border-b border-primary-300">Acuarela</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.filter((artwork) => artwork.category === 'Acuarela').map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
        
        <h2 className="mb-20 mt-20 text-center text-3xl text-gray-900 font-light border-b border-primary-300">Lápiz</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.filter((artwork) => artwork.category === 'Lápiz').map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        <h2 className="mb-20 mt-20 text-center text-3xl text-gray-900 font-light border-b border-primary-300">Color</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.filter((artwork) => artwork.category === 'Color').map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        <h2 className="mb-20 mt-20 text-center text-3xl text-gray-900 font-light border-b border-primary-300">Digital</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.filter((artwork) => artwork.category === 'Digital').map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        <h2 className="mb-20 mt-20 text-center text-3xl text-gray-900 font-light border-b border-primary-300">Fotografía</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.filter((artwork) => artwork.category === 'Fotografía').map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
      </motion.div>
    </>
  );
}
