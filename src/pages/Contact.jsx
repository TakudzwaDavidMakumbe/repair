import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          Contact Us
        </h1>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
                <p className="text-gray-600 mb-4">Our team is here to help</p>
                <a
                  href="tel:+15551234567"
                  className="text-red-600 font-medium hover:underline"
                >
                  (555) 123-4567
                </a>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600 mb-4">Send us a message anytime</p>
                <a
                  href="mailto:info@repairbox.com"
                  className="text-red-600 font-medium hover:underline"
                >
                  info@repairbox.com
                </a>
              </div>

              {/* Location */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Location</h3>
                <p className="text-gray-600 mb-4">Visit our showroom</p>
                <address className="not-italic text-red-600 font-medium">
                  123 Auto Street, CC 12345
                </address>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-3 rounded-md flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </button>
                </form>
              </div>

              {/* Business Hours & Map */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Business Hours
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                      <div>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 7:00 PM
                        </p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Our Location
                  </h2>
                  <div className="aspect-video bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-red-600 mr-2" />
                    <span className="text-gray-600">Map would be displayed here</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-800">
                      RepairBox
                    </h4>
                    <address className="not-italic text-gray-600 mt-1">
                      123 Auto Street, Car City, CC 12345
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}