// pages/booking/index.tsx
import React from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

const BookingPage: React.FC = () => {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Your Booking</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          <BookingForm />
          <CancellationPolicy />
        </div>

        <div className="lg:col-span-1">
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;