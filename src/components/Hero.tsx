import logo from '../media/img/project-bolt-sb1-azb8n345.png'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center">
            <img src={logo} alt="Zuleima Arzuza" className="mb-5" style={{ width: '300px', height: 'auto' }} />
          </div>
          <h1 className="text-5xl font-bold mb-4 font-mono text-gray-900">Zuleima Arzuza</h1>
          <p className="text-xl text-gray-700 font-mono leading-relaxed">
          Mi trabajo explora mundos diversos a través de retratos, paisajes y fotografías, donde las mujeres son las protagonistas, desafiando lo posible y reflejando una profunda conexión con mis mundos internos. No me limito a un solo estilo, ya que la pluralidad es clave en mi proceso creativo. Cada obra invita a experimentar lo desconocido, transformando lo cotidiano en extraordinario. Soy Zuleima Arzuza Navarro, artista de Cartagena de Indias, y recientemente fui seleccionada en la convocatoria Esencia Festiva 2024, donde una de mis obras será la imagen oficial de las Fiestas de Independencia de Cartagena.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}