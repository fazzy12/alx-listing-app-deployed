// components/booking/OrderSummary.tsx
import React from 'react';
import Image from 'next/image';

interface BookingDetails {
  propertyName: string;
  price: number; // Price per night
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

const PriceRow: React.FC<{ label: string, amount: number, isTotal?: boolean }> = ({ label, amount, isTotal = false }) => (
  <div className={`flex justify-between ${isTotal ? 'text-lg font-bold border-t pt-3 border-gray-300' : 'text-gray-700 text-base'}`}>
    <p>{label}</p>
    <p>${amount.toFixed(2)}</p>
  </div>
);

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const subtotal = bookingDetails.price * bookingDetails.totalNights;
  // Added a static tax for a more realistic summary
  const taxes = 15.00; 
  const grandTotal = subtotal + bookingDetails.bookingFee + taxes;

  // Placeholder property image from the existing constants/index.ts file.
  const PROPERTY_IMAGE_URL = "/assets/images/hero.jpg"; 

  return (
    <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100 lg:sticky lg:top-8 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Order Details</h2>

      {/* Property Details */}
      <div className="flex items-start mb-6 pb-4 border-b border-gray-200">
        <div className="relative w-28 h-28 flex-shrink-0">
          {/* Note: This assumes you are running the Next.js app to serve the /assets/images/hero.jpg file */}
          <Image
            src={PROPERTY_IMAGE_URL}
            alt={bookingDetails.propertyName}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{bookingDetails.propertyName}</h3>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span className="text-yellow-500 mr-1">★</span>
            <span>4.76 (345 reviews)</span>
          </div>
          <p className="text-sm text-gray-500">
            Check-in: <span className="font-medium text-gray-700">{bookingDetails.startDate}</span>
          </p>
          <p className="text-sm text-gray-500">
            Nights: <span className="font-medium text-gray-700">{bookingDetails.totalNights}</span>
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3">
        <PriceRow label={`Price (${bookingDetails.totalNights} nights x $${bookingDetails.price})`} amount={subtotal} />
        <PriceRow label="Service Fee" amount={bookingDetails.bookingFee} />
        <PriceRow label="Taxes" amount={taxes} /> 
        
        <div className="pt-4">
          <PriceRow label="Grand Total (USD)" amount={grandTotal} isTotal={true} />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;