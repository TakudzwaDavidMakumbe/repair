import { useState } from 'react';
import ProductModal from './ProductModal';

export default function PhoneCard({ phone, onAddToCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src={phone.image} alt={phone.name} className="w-full h-48 object-contain mb-4" />
        <h2 className="text-xl font-semibold mb-2">{phone.name}</h2>
        <p className="text-gray-600 mb-4">${phone.price}</p>
        <div className="flex justify-between">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View More
          </button>
          <button
            onClick={() => onAddToCart(phone)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phone={phone}
      />
    </>
  );
}