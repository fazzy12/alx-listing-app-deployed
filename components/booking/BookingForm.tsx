// components/booking/BookingForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  streetAddress: string;
  aptSuite: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

/**
 * Reusable input field component for consistent styling and binding
 */
const InputField: React.FC<{ 
  label: string; 
  type: string; 
  name: keyof BookingFormData; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}> = ({ label, type, name, value, onChange, placeholder, required = true }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="border border-gray-300 p-3 w-full rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
    />
  </div>
);

const BookingForm: React.FC = () => {
  const initialFormData: BookingFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  };

  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (error) setError(null);
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!formData.firstName || !formData.email || !formData.cardNumber) {
      setError("Please fill in all mandatory fields.");
      setLoading(false);
      return;
    }

    try {
      
      const submissionData = {
          ...formData,
          // Attaching mock booking details to show completeness
          bookingDetails: {
            propertyId: '12345',
            checkIn: '2025-08-24',
            checkOut: '2025-08-27',
            totalPrice: 7715.00
          }
      };
      
      // const response = await axios.post("/api/bookings", submissionData);
      const response = await axios.post(\${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, submissionData);`
      
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      if (response.status === 201 || response.status === 200 || response.data?.success === true) {
        setSuccess(true);
        setFormData(initialFormData); 
      } else {
        setError(response.data?.message || "Booking failed due to an unknown server issue.");
      }

    } catch (apiError) {
      console.error("Error submitting booking:", apiError);
      setError("Failed to process payment. Please check your card details and try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Enter Your Details</h2>

      {/* Success/Error Feedback */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <p className="font-bold">Booking Confirmed!</p>
          <p className="text-sm">Your reservation has been successfully processed. Check your email for details.</p>
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <p className="font-bold">Submission Failed</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            <InputField label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            <InputField label="Phone Number" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
        </section>

        {/* Payment Information */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">Payment Information</h3>
          <div className="mt-4">
            <InputField label="Card Number" type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="XXXX XXXX XXXX XXXX" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <InputField label="Expiration Date" type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} placeholder="MM/YY" />
            <InputField label="CVV" type="text" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" />
          </div>
        </section>

        {/* Billing Address */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">Billing Address</h3>
          <div className="mt-4">
            <InputField label="Street Address" type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
          </div>
          <div className="mt-4">
            <InputField label="Apt/Suite" type="text" name="aptSuite" value={formData.aptSuite} onChange={handleChange} placeholder="Optional" required={false} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <InputField label="City" type="text" name="city" value={formData.city} onChange={handleChange} />
            <InputField label="State" type="text" name="state" value={formData.state} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <InputField label="Zip Code" type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
            <InputField label="Country" type="text" name="country" value={formData.country} onChange={handleChange} />
          </div>
        </section>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className="mt-6 bg-emerald-600 text-white py-3 px-4 rounded-lg w-full text-lg font-medium hover:bg-emerald-700 transition duration-150 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Processing...</span>
            </>
          ) : (
            <span>Confirm & Pay</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
