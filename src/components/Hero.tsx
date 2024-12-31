import { motion } from 'framer-motion';
import logo from '../media/img/project-bolt-sb1-azb8n345.png';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative  py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center">
            <motion.img
              src={logo}
              alt="Zuleima Arzuza"
              className="mb-5"
              style={{ width: '300px', height: 'auto' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <motion.h1
            className="text-5xl font-bold mb-4 font-mono text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Zuleima Arzuza
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 font-mono leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Mi trabajo explora mundos diversos a través de retratos, paisajes y fotografías, donde las mujeres son las protagonistas, desafiando lo posible y reflejando una profunda conexión con mis mundos internos. No me limito a un solo estilo, ya que la pluralidad es clave en mi proceso creativo. Cada obra invita a experimentar lo desconocido, transformando lo cotidiano en extraordinario.
          </motion.p>
        </motion.div>
      </div>

      <div className="flex justify-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ArrowDown size={48} color="gray" />
        </motion.div>
      </div>
    </div>
  );
}