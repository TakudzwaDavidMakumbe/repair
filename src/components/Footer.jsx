import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-orange-500 regular text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RepairBox</h3>
            <p className="text-black">Your one-stop shop for all things iPhone</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-black hover:text-white">Home</Link></li>
              <li><Link to="/store" className="text-black hover:text-white">Store</Link></li>
              <li><Link to="/repairs" className="text-black hover:text-white">Repairs</Link></li>
              <li><Link to="/about" className="text-black hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-black hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-black">
              <li>123 Phone Street</li>
              <li>New Lands, 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@repairbox.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-white">Facebook</a>
              <a href="#" className="text-black hover:text-white">Twitter</a>
              <a href="#" className="text-black hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-black">
          <p>&copy; 2025 RepairBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}