import { Dialog } from '@headlessui/react';

export default function ProductModal({ isOpen, onClose, phone }) {
  if (!phone) {
    return null; // Render nothing if phone is undefined
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg p-6 max-w-sm w-full">
          <Dialog.Title className="text-2xl font-bold mb-4">{phone.name}</Dialog.Title>
          
          <img src={phone.image} alt={phone.name} className="w-full h-48 object-contain mb-4" />
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Colors:</h3>
            <div className="flex gap-2">
              {phone.colors?.map(color => (
                <span key={color} className="px-2 py-1 bg-gray-100 rounded text-sm">
                  {color}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside">
              {phone.features?.map(feature => (
                <li key={feature} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}