import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">Contact</h1>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <Mail className="mx-auto mb-4 h-8 w-8 text-indigo-600" />
            <h3 className="mb-2 font-semibold">Email</h3>
            <p className="text-gray-600">artist@example.com</p>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <Phone className="mx-auto mb-4 h-8 w-8 text-indigo-600" />
            <h3 className="mb-2 font-semibold">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <MapPin className="mx-auto mb-4 h-8 w-8 text-indigo-600" />
            <h3 className="mb-2 font-semibold">Studio</h3>
            <p className="text-gray-600">123 Art Street, City</p>
          </div>
        </div>

        <form className="rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}