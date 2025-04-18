import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CartModal({ isOpen, onClose, cartItems, onRemoveItem }) {
  const sendToWhatsApp = () => {
    const message = cartItems.map(item => 
      `${item.name} - $${item.price}`
    ).join('\n');
    
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const finalMessage = `My Order:\n${message}\n\nTotal: $${total}`;
    
    const encodedMessage = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/263779286308?text=${encodedMessage}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg p-6 max-w-md w-full">
          <Dialog.Title className="text-2xl font-bold mb-4">Shopping Cart</Dialog.Title>
          
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <p className="font-bold text-lg mb-4">
                  Total: ${cartItems.reduce((sum, item) => sum + item.price, 0)}
                </p>
                
                <div className="flex justify-end gap-4">
                  <button
                    onClick={sendToWhatsApp}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Send to WhatsApp
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}