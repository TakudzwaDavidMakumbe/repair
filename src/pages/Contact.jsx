export default function Contact() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Address:</strong><br />
                123 Phone Street<br />
                New York, NY 10001
              </p>
              <p>
                <strong>Phone:</strong><br />
                (555) 123-4567
              </p>
              <p>
                <strong>Email:</strong><br />
                info@reapairbox.com
              </p>
              <p>
                <strong>Business Hours:</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">Facebook</a>
                <a href="#" className="text-blue-600 hover:text-blue-700">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-700">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}