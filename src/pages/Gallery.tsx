
import Hero from '../components/Hero';
import ArtworkCard from '../components/ArtworkCard';

// obras import

import OSADA from '../media/img/Obras/OSADA.jpg'
import LUCIDA from '../media/img/Obras/LUCIDAMAPO.jpg'
import DULCEMENTE from '../media/img/Obras/DULCEMENTE.jpg'
import CEREZADA from '../media/img/Obras/CEREZADA.jpg'
import MATCH from '../media/img/Obras/MATCH.jpg'
import TEDIOSAVISTA from '../media/img/Obras/TEDIOSAVISTA.jpg'
import ENCUSTODIA from '../media/img/Obras/ENCUSTODIA.jpg'
import VOCES from '../media/img/Obras/VOCES.jpg'
import OJOCONLAMESA from '../media/img/Obras/OJOCONLAMESA.jpg'
import SOUL from '../media/img/Obras/SOUL.jpg'
import PARAGUAS from '../media/img/Obras/PARAGUAS.jpg'
import INDIA from '../media/img/Obras/INDIA.jpg'
import INCOGNITA1 from '../media/img/Obras/INCOGNITA1.jpg'
import INCOGNITA2 from '../media/img/Obras/INCOGNITA2.jpg'
import INCOGNITA3 from '../media/img/Obras/INCOGNITA3.jpg'
import INCOGNITA4 from '../media/img/Obras/INCOGNITA4.jpg'
import INCOGNITA5 from '../media/img/Obras/INCOGNITA5.jpg'
import POPA from '../media/img/Obras/POPA.jpg'


const artworks = [
      { id: '1', title: 'OSADA', description: '36x51 cm, óleo sobre lienzo', imageUrl: OSADA, category: 'Óleo', date: '2021' },
      { id: '2', title: 'LUCIDA MAPO', description: '36x51 cm, óleo sobre lienzo', imageUrl: LUCIDA, category: 'Óleo', date: '2021' },
      { id: '3', title: 'DULCEMENTE', description: '36x51 cm, óleo sobre lienzo', imageUrl: DULCEMENTE, category: 'Óleo', date: '2021' },
      { id: '4', title: 'CEREZADA', description: '36x51 cm, óleo sobre lienzo', imageUrl: CEREZADA, category: 'Óleo', date: '2020' },
      { id: '5', title: 'MATCH', description: '30x40 cm, óleo sobre lienzo', imageUrl: MATCH, category: 'Óleo', date: '2020' },
      { id: '6', title: 'TEDIOSA VISTA', description: '36x51 cm, óleo sobre lienzo', imageUrl: TEDIOSAVISTA, category: 'Óleo', date: '2020' },
      { id: '7', title: 'EN CUSTODIA', description: '30x40 cm, óleo sobre lienzo', imageUrl: ENCUSTODIA, category: 'Óleo', date: '2020' },
      { id: '8', title: 'VOCES', description: '30x40 cm, óleo sobre lienzo', imageUrl: VOCES, category: 'Óleo', date: '2020' },
      { id: '9', title: 'OJO CON LA MESA', description: '45x29 cm, óleo sobre lienzo', imageUrl: OJOCONLAMESA, category: 'Óleo', date: '2020' },
      
      // Obras en acrílico
      { id: '10', title: 'SOUL', description: '20x30 cm, acrílico sobre lienzo', imageUrl: SOUL, category: 'Acrílico', date: '2021' },
      { id: '11', title: 'PARAGUA STREET', description: '9x12 cm, acrílico sobre lienzo', imageUrl: PARAGUAS, category: 'Acrílico', date: '2021' },
      { id: '12', title: 'INDIA CATALINA', description: '9x12 cm, acrílico sobre lienzo', imageUrl: INDIA, category: 'Acrílico', date: '2021' },
      { id: '13', title: 'INCOGNITA 1/5', description: '35x45 cm, acrílico sobre lienzo', imageUrl: INCOGNITA1, category: 'Acrílico', date: '2019' },
      { id: '14', title: 'INCOGNITA 2/5', description: '35x45 cm, acrílico sobre lienzo', imageUrl: INCOGNITA2, category: 'Acrílico', date: '2019' },
      { id: '15', title: 'INCOGNITA 3/5', description: '35x45 cm, acrílico sobre lienzo', imageUrl: INCOGNITA3, category: 'Acrílico', date: '2019' },
      { id: '16', title: 'INCOGNITA 4/5', description: '35x45 cm, acrílico sobre lienzo', imageUrl: INCOGNITA4, category: 'Acrílico', date: '2019' },
      { id: '17', title: 'INCOGNITA 5/5', description: '35x45 cm, acrílico sobre lienzo', imageUrl: INCOGNITA5, category: 'Acrílico', date: '2019' },
      { id: '18', title: 'LA POPA', description: '12x9 cm, acrílico sobre lienzo', imageUrl: POPA, category: 'Acrílico', date: '2021' },
      
      // Acrílico con intervención
      { id: '19', title: 'CHANGO: LATIDOS DE PASION Y VALOR', description: '80x50 cm, acrílico con intervención', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Acrílico con intervención', date: '2023' },
      { id: '20', title: 'OSHUN: REFLEJOS DORADOS DE AMOR Y ABUNDANCIA', description: '80x50 cm, acrílico con intervención', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Acrílico con intervención', date: '2023' },
      { id: '21', title: 'OBATALÀ: SERENIDAD Y SABIDURIA EN LA CREACION', description: '80x50 cm, acrílico con intervención', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Acrílico con intervención', date: '2023' },
      { id: '22', title: 'YEMAYÀ: OLEAJE DE SERENIDAD Y PROTECCIÒN', description: '80x50 cm, acrílico con intervención', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Acrílico con intervención', date: '2023' },
      { id: '23', title: 'LATIDOS DEL MAR', description: '30x40 cm, acrílico con intervención', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Acrílico con intervención', date: '2024' },
      { id: '24', title: 'EL GUARDIAN', description: '30x40 cm, acrílico con intervención', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Acrílico con intervención', date: '2024' },
      
      // obras en acuarela
      { id: '25', title: 'VALLE DEL VIENTO', description: '20x14 cm, acuarela', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Acuarela', date: '2020' },
      { id: '26', title: 'MARNIE', description: '20x14 cm, acuarela', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Acuarela', date: '2020' },

      // Obras en lápiz
      { id: '27', title: 'OFELIA', description: '21x28 cm, lápiz', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Lápiz', date: '2019' },
      { id: '28', title: 'CARLOS', description: '25x35 cm, lápiz', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Lápiz', date: '2019' },
      { id: '29', title: 'BRAYAN', description: '21x28 cm, lápiz', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Lápiz', date: '2021' },
      { id: '30', title: 'MAT', description: '21x28 cm, lápiz', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Lápiz', date: '2019' },
      { id: '31', title: 'MABELYN', description: '21x28 cm, lápiz', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Lápiz', date: '2020' },
      { id: '32', title: 'MITAD', description: '25x35 cm, lápiz', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Lápiz', date: '2019' },
      { id: '33', title: 'A LA INVERSA', description: '21x28 cm, lápiz', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Lápiz', date: '2021' },
      { id: '34', title: 'MARY', description: '30x50 cm, lápiz', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Lápiz', date: '2021' },

      // Obras en color
      { id: '35', title: 'MI EXPRESION 1/3', description: '28x21 cm, color', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Color', date: '2020' },
      { id: '36', title: 'MI EXPRESION 2/3', description: '28x21 cm, color', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Color', date: '2020' },
      { id: '37', title: 'MI EXPRESION 3/3', description: '28x21 cm, color', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Color', date: '2020' },
      { id: '38', title: 'A RASTRAS', description: '14x29 cm, color', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Color', date: '2020' },
      { id: '39', title: 'BAILANDO EN MEDUSAS', description: '14x29 cm, color', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Color', date: '2020' },
      { id: '40', title: 'INFANCIA', description: '28x21 cm, color', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Color', date: '2019' },

      // Obras digitales
      { id: '41', title: 'FORZADAS', description: 'Digital', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Digital', date: '2021' },
      { id: '42', title: 'RITMO Y SABOR EN LA FANTASTICA', description: 'Digital', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Digital', date: '2024' },
      { id: '43', title: 'APATIA EN VENTA', description: 'Digital', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Digital', date: '2021' },
      { id: '44', title: 'MILK', description: 'Digital', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Digital', date: '2021' },
      { id: '45', title: 'UN SUEÑO', description: 'Digital', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Digital', date: '2020' },
      { id: '46', title: 'GALA', description: 'Digital', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Digital', date: '2020' },

      // Obras en fotografía
      { id: '47', title: 'CON LA SOGA AL CUELLO', description: 'Fotografía', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Fotografía', date: '2019' },
      { id: '48', title: 'ANONIMO', description: 'Fotografía', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Fotografía', date: '2019' },
      { id: '49', title: 'LABOR', description: 'Fotografía', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Fotografía', date: '2019' },
      { id: '50', title: 'ORLANDO', description: 'Fotografía', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Fotografía', date: '2019' },
      { id: '51', title: 'ESQUINA', description: 'Fotografía', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Fotografía', date: '2019' },
      { id: '52', title: 'FACHADA', description: 'Fotografía', imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Fotografía', date: '2019' }

];

export default function Gallery() {
  return (
    <>
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
      </div>
    </>
  );
}