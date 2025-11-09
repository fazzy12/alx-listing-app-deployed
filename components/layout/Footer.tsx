import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 border-b border-gray-700 pb-8">
          {/* About ALX */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">alx</h2>
            <p className="text-sm leading-relaxed">
              ALX is a platform where travelers can discover and book unique, comfortable, and
              affordable lodging options worldwide. From cozy city apartments and tranquil
              countryside retreats to exotic, beachside villas. ALX connects you with the perfect
              place to stay for any trip.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Apartments in Dubai</Link></li>
              <li><Link href="#" className="hover:text-white">Hotels in New York</Link></li>
              <li><Link href="#" className="hover:text-white">Villa in Spain</Link></li>
              <li><Link href="#" className="hover:text-white">Mansion in Indonesia</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">About us</Link></li>
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Career</Link></li>
              <li><Link href="#" className="hover:text-white">Customers</Link></li>
              <li><Link href="#" className="hover:text-white">Brand</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Support</Link></li>
              <li><Link href="#" className="hover:text-white">Cancel booking</Link></li>
              <li><Link href="#" className="hover:text-white">Refunds Process</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            Some hotel requires you to cancel more than 24 hours before check-in. Details{' '}
            <Link href="#" className="text-emerald-500 hover:underline">here</Link>
          </p>
          <nav className="flex space-x-4">
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Policy service</Link>
            <Link href="#" className="hover:text-white">Cookies Policy</Link>
            <Link href="#" className="hover:text-white">Partners</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;