import React from 'react';
import artworks from '../../types/artworks';
import ArtworkCard from '../../components/ArtworkCardExpos';
import { MapPin } from 'lucide-react';

import evidencia1 from '../../media/img/Evidencias/Ritos/Ritos-biblioteca-pie-popa/evidencia1.jpeg';
import evidencia2 from '../../media/img/Evidencias/Ritos/Ritos-biblioteca-pie-popa/evidencia2.jpeg';
import evidencia3 from '../../media/img/Evidencias/Ritos/Ritos-biblioteca-pie-popa/evidencia3.jpeg';
import evidencia4 from '../../media/img/Evidencias/Ritos/Ritos-biblioteca-pie-popa/evidencia4.jpeg';
//import evidencia5 from '../../media/img/Evidencias/Ritos/Ritos-biblioteca-pie-popa/evidencia5.jpeg';
import evidencia6 from '../../media/img/Evidencias/Ritos/Ritos-biblioteca-pie-popa/evidencia6.jpeg';

const evidencias = [
    { id: 1, url: evidencia1 },
    { id: 2, url: evidencia2 },
    { id: 3, url: evidencia3 },
    { id: 4, url: evidencia4 },
    { id: 6, url: evidencia6 }
];

export default function Expos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-center">Ritos</h2>
          <p className="text-lg mt-2 text-center text-gray-600">
            <em>"Esencia sagrada: <strong>Orishas</strong> de Colombia"</em>
          </p>
          <p className="mt-4 text-justify">
            Esta exposición busca desentrañar la riqueza espiritual y cultural de la Santería en Colombia, destacando la positividad y la profunda conexión que esta tradición tiene con la vida cotidiana y la identidad del país. A través de una sinfonía de colores, simbolismo y emociones, esta obra aspira a redefinir la percepción de la Santería, despojándola de estigmas, enfatizando y promoviendo una apreciación genuina de esta creencia arraigada en la vida diaria de muchas personas y la cultura del país.
            Cada cuadro es una ventana a un mundo espiritual profundo y enriquecedor.
          </p>
        </div>
        <div className="mt-4 mx-4 md:mx-10">
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center">
            {artworks.filter((artwork) => Number(artwork.id) >= 19 && Number(artwork.id) <= 22).map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        <div className="mt-8"></div>
          <h3 className="text-2xl font-bold text-center">
            <MapPin className="mr-2" />
            Biblioteca y Centro Cultural Pie de la Popa</h3>
          <div className="flex justify-center items-center">
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-4">
              {evidencias.map((evidencia) => (
                <div key={evidencia.id} className="overflow-hidden rounded-lg shadow-lg flex justify-center items-center">
                  <img src={evidencia.url} alt={`Evidencia ${evidencia.id}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
