import { Mail, Phone, Instagram } from 'lucide-react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "motion/react"

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rslnpae', 'template_t7oua82', form.current!, 'user_5u6vRK7MJMtC6oiAdP183')
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true);
          form.current!.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="rounded-lg bg-white p-8 shadow-lg">
      <div className="mb-6">
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          name="user_name"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:outline-none"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:outline-none"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Mensaje
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:outline-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className={`w-full rounded-md px-4 py-2 text-white ${emailSent ? 'bg-green-500' : 'bg-yellow-600'} focus:outline-none`}
      >
        {emailSent ? 'Email Enviado' : 'Enviar'}
      </button>
    </form>
  );
};

export default function Contact() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">Contacto</h1>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <Mail className="mx-auto mb-4 h-8 w-8 text-yellow-600" />
            <h3 className="mb-2 font-semibold">Email</h3>
            <p className="text-gray-600">zulearna22@gmail.com</p>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <Phone className="mx-auto mb-4 h-8 w-8 text-yellow-600" />
            <h3 className="mb-2 font-semibold">Telefono</h3>
            <p className="text-gray-600">+57 (300) 4558349</p>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <Instagram className="mx-auto mb-4 h-8 w-8 text-yellow-600" />
            <h3 className="mb-2 font-semibold">Instagram</h3>
            <p className="text-gray-600">@_zu_arte_</p>
          </div>
        </div>

        <ContactUs />
      </div>
    </div>
    </motion.div>
  );
}