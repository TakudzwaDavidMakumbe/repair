import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import CustomProblemModal from '../components/CustomProblemModal';
import img from '../../public/3.png';
import img1 from '../../public/4.png';
import img2 from '../../public/6.png';
import img3 from '../../public/7.png';
import img4 from '../../public/8.png';
import img5 from '../../public/9.png';
import img6 from '../../public/11.png';
import img7 from '../../public/12.png';
import img8 from '../../public/13.png';
import img9 from '../../public/14.png';


export default function Repairs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: 'Screen Repair', price: 'From $79', img:img2 },
    { title: 'Battery Replacement', price: 'From $49',img: img1 },
    { title: 'Camera Repair', price: 'From $89', img: img4 },
    { title: 'Water Damage', price: 'From $99', img: img6 },
    { title: 'Charging Port Repair', price: 'From $59', img: img5 },
    { title: 'Software Issues', price: 'From $39', img: img6 },
    { title: 'Data Recovery', price: 'From $99', img: img7 },
    { title: 'Microphone Repair', price: 'From $49', img: img8 },
    { title: 'Face ID Repair', price: 'From $89', img: img9 },
    { title: 'Button Repair', price: 'From $39' },
    { title: 'Speaker Repair', price: 'From $59' },
    { title: 'Phone Not Charging', price: 'From $45' },
    { title: 'Phone Keeps Restarting', price: 'From $69' },
    { title: 'Touch Screen Not Working', price: 'From $89' },
  ];

  const handleBooking = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">iPhone Repair Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full mx-auto mb-4"><img src={service.img} alt="" /></div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.price}</p>
              <button
                onClick={() => handleBooking(service)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          ))}

          {/* Custom Problem Card */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="h-16 w-16 bg-blue-600 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Other Problems</h3>
            <p className="text-gray-600 mb-4">Have a different issue?</p>
            <button
              onClick={() => setIsCustomModalOpen(true)}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
            >
              Create
            </button>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Repair Service?</h2>
          <ul className="text-left space-y-4 text-gray-600">
            <li>✓ Certified technicians with years of experience</li>
            <li>✓ Genuine Apple parts used for all repairs</li>
            <li>✓ Same-day repair service available</li>
            <li>✓ 90-day warranty on all repairs</li>
            <li>✓ Competitive pricing</li>
          </ul>
        </div>
      </div>

      {selectedService && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceTitle={selectedService.title}
          servicePrice={selectedService.price}
        />
      )}

      <CustomProblemModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />
    </div>
  );
}