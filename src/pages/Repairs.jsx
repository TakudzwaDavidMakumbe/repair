import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import CustomProblemModal from '../components/CustomProblemModal';
import { CircleDollarSign, HandPlatter, ShieldCheck, UsersRound } from "lucide-react";
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
import img10 from '../../public/7.png';
import img11 from '../../public/15.png';
import img12 from '../../public/16.png';
import img13 from '../../public/17.png';
import img14 from '../../public/18.png';
import img15 from '../../public/19.png';
import img16 from '../../public/20.png';

export default function Repairs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: 'Screen Repair', price: 'From $79', img:img2 },
    { title: 'Battery Replacement', price: 'From $49',img: img1 },
    { title: 'Camera Repair', price: 'From $89', img: img4 },
    { title: 'Water Damage', price: 'From $99', img: img6 },
    { title: 'Software Issues', price: 'From $39', img: img11 },
    { title: 'Data Recovery', price: 'From $99', img: img12 },
    { title: 'Microphone Repair', price: 'From $49', img: img14 },
    { title: 'Face ID Repair', price: 'From $89', img: img13 },
    { title: 'Button Repair', price: 'From $39' ,img: img8 },
    { title: 'Speaker Repair', price: 'From $59' , img: img7 },
    { title: 'Phone Not Charging', price: 'From $45', img: img15 },
    { title: 'Phone Keeps Restarting', price: 'From $69', img: img},

  ];

  const handleBooking = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Phone Repair Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-lg text-center">
              <div className="h-fit w-[60%]  rounded-2xl mx-auto mb-4"><img className='w-[100%]' src={service.img} alt="" /></div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.price}</p>
              <button
                onClick={() => handleBooking(service)}
                className="bg-blue-600 text-white px-6 w-full py-2 rounded-lg hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          ))}

          {/* Custom Problem Card */}
          <div className="bg-white rounded-lg py-10 shadow-md text-center">
            <div className="h-fit w-[60%] bg-blue-600 rounded-lg mx-auto mb-4"><img className='w-[100%]' src={img16} alt="" /></div>
            <h3 className="text-xl font-semibold mb-2">Other Problems</h3>
            <p className="text-gray-600 mb-4">Have a different issue?</p>
            <button
              onClick={() => setIsCustomModalOpen(true)}
              className="bg-blue-600 text-white px-6 w-[90%] py-2 rounded-lg hover:bg-green-700"
            >
              Create
            </button>
          </div>
        </div>

       <section className="py-16">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                 <div className="grid md:grid-cols-4 gap-8">
                   {[
                     { title: 'Expert Staff', desc: 'Highly trained professionals', icon:UsersRound },
                     { title: 'Quality Products', desc: 'Genuine Apple products',icon:ShieldCheck },
                     { title: 'Fast Service', desc: 'Quick turnaround time',icon:HandPlatter },
                     { title: 'Best Prices', desc: 'Competitive pricing',icon:CircleDollarSign },
                   ].map((item, i) => (
                     <div key={i} className="text-center">
                       <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                       {item.icon && <item.icon className="h-12 w-20 text-white mx-auto " />}
                       </div>
                       <h3 className="font-semibold mb-2">{item.title}</h3>
                       <p className="text-gray-600">{item.desc}</p>
                     </div>
                   ))}
                 </div>
               </div>
             </section>
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