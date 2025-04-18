import { useState } from 'react';
import { phones } from '../data/phones';
import { samsungPhones } from '../data/samsung';
import { huaweiPhones } from '../data/huawei';
import PhoneCard from './PhoneCard';
import CartModal from './CartModal';

export default function PhoneStore() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (phone) => {
    setCartItems([...cartItems, phone]);
  };

  const removeFromCart = (phoneId) => {
    setCartItems(cartItems.filter(item => item.id !== phoneId));
  };

  const renderPhoneSection = (title, phoneList) => {
    // Only render the section if phoneList exists and has items
    if (!phoneList || phoneList.length === 0) return null;

    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {phoneList.map(phone => (
            <PhoneCard
              key={phone.id}
              phone={phone}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900"></h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Cart ({cartItems.length})
          </button>
        </div>

        {/* iPhone Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-8">Phone Store</h1>
          {renderPhoneSection("All iPhones", phones)}
        </div>

        {/* Samsung Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-8">Samsung</h1>
          {renderPhoneSection("Galaxy A Series", samsungPhones.aSeriesPhones)}
          {renderPhoneSection("Galaxy M Series", samsungPhones.mSeriesPhones)}
          {renderPhoneSection("Galaxy J Series", samsungPhones.jSeriesPhones)}
          {renderPhoneSection("Galaxy S Series", samsungPhones.sSeriesPhones)}
          {renderPhoneSection("Galaxy Note Series", samsungPhones.noteSeriesPhones)}
          {renderPhoneSection("Galaxy Z Series", samsungPhones.zSeriesPhones)}
        </div>

        {/* Huawei Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-8">Huawei</h1>
          {renderPhoneSection("Mate Series", huaweiPhones.mateSeriesPhones)}
          {renderPhoneSection("G Series", huaweiPhones.gSeriesPhones)}
          {renderPhoneSection("Honor Series", huaweiPhones.honorSeriesPhones)}
          {renderPhoneSection("Nova Series", huaweiPhones.novaSeriesPhones)}
        </div>

        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemoveItem={removeFromCart}
        />
      </div>
    </div>
  );
}