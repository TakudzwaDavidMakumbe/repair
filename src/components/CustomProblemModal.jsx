import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export default function CustomProblemModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [problem, setProblem] = useState('');

  const handleSubmit = () => {
    const message = `Custom Repair Request:\n\nPhone Brand: ${phone}\nPhone Model: ${model}\nProblem Description: ${problem}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/263779286308?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg p-6 max-w-md w-full">
          <Dialog.Title className="text-2xl font-bold mb-4">Describe Your Problem</Dialog.Title>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Brand
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g., iPhone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Model
              </label>
              <input
                type="text"
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g., iPhone 13"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
                Describe Your Problem
              </label>
              <textarea
                id="problem"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Please describe the issue you're experiencing..."
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                Send to WhatsApp
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}