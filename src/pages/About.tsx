// import { User } from 'lucide-react';
import User from '../media/img/ZuleUser.jpeg'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex items-center justify-center mb-2">
            <img src={User} alt="Zuleima Arzuza" className=" rounded-full w-36 h-36" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Acerca de la Artista</h1>
        </div>

        <div className="prose prose-lg mx-auto">
          <h2 className="text-2xl font-semibold">Statement</h2>
          <p className="mb-4">
            Mi trabajo se nutre de una constante exploración de mundos diversos, donde la libertad de experimentar con diferentes técnicas y temáticas se convierte en el motor de mi proceso creativo. No me limito a un solo estilo ni a una única visión, pues considero que la pluralidad es una de las mayores riquezas de la expresión artística. Sin embargo, hay un hilo conductor que atraviesa todo mi trabajo: la creación de universos donde las mujeres son las protagonistas, encarnando figuras mágicas y habitando realidades paralelas que desafían las fronteras de lo posible.
          </p>
          <p className="mb-4">
            A través de retratos, paisajes y fotografías, mis piezas no solo narran historias, sino que reflejan una conexión profunda con mis propios mundos internos. Cada obra es un espacio de riesgo, una invitación a experimentar sin temor y a transitar por territorios inexplorados. Es en esa búsqueda constante por lo desconocido donde hallo mi verdadera voz artística, aquella que me impulsa a transformar lo cotidiano en lo extraordinario, y a ofrecer al espectador una visión única de la belleza, la fantasía y la mujer como fuerza primordial.
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Biografía</h2>
          <p className="mb-4">
            Zuleima Arzuza Navarro, nací el 22 de mayo de 2001 en Cartagena de Indias. El arte ha estado presente en mi vida desde muy temprana edad, guiándome a través de diferentes disciplinas como la música, el modelaje, la danza y, por supuesto, las artes visuales. A lo largo de los años, me he formado en diversas academias y cursos, siempre con el apoyo incondicional de mis padres, quienes fomentaron mi pasión por la creatividad y me impulsaron a seguir mi vocación artística.
          </p>
          <p className="mb-4">
            Cursé mi bachillerato en la Institución Educativa Soledad Acosta de Samper y más tarde, completé mi carrera en Artes Plásticas en la Universidad de Bellas Artes y Ciencias de Bolívar, donde desarrollé mi visión y técnica artística. Además, realicé estudios de inglés en el Centro Cultural Colombo Americano, obteniendo un nivel B2 que me ha permitido ampliar mis horizontes tanto en el ámbito artístico como profesional.
          </p>
          <p className="mb-4">
            Recientemente, fui ganadora de la convocatoria Esencia Festiva 2024, donde una de mis obras fue seleccionada como la imagen oficial de las Fiestas de Independencia de Cartagena de Indias 2024. Este logro ha sido un impulso importante para seguir explorando nuevas formas de expresión y continuar mi camino artístico con mayor dedicación.
          </p>

            <p className="mt-8 text-lg">
            <span className="font-semibold">Instagram:</span> @_zu_arte_
            </p>
            <p className="mt-4 text-lg">
            <span className="font-semibold">Teléfono:</span> +57 3004558349
            </p>
            <p className="mt-4 text-lg">
            <span className="font-semibold">Email:</span> zulearna22@gmail.com
            </p>
          
        </div>
      </div>
    </div>
  );
}
