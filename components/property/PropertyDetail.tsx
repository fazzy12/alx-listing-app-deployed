import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReviewSection from './ReviewSection'; // Import the new component

// Re-using the interfaces defined in the dynamic page
interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

interface DetailedPropertyProps extends PropertyProps {
    id: string;
    description: string;
    amenities: string[];
    host: {
      name: string;
      joined: string;
      imageUrl: string;
    };
}

interface PropertyDetailProps {
    property: DetailedPropertyProps;
}

// Icon helper function for offers (since we can't use external libraries)
const IconBox: React.FC<{ label: string; icon: React.ReactNode }> = ({ label, icon }) => (
    <div className="flex items-center space-x-2 text-gray-700">
        {icon}
        <span className="text-sm">{label}</span>
    </div>
);

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
    
    const discountedPrice = property.discount 
        ? (property.price * (1 - (parseFloat(property.discount) / 100))) 
        : property.price;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Header and Gallery */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{property.name}</h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                        <span className="flex items-center font-semibold text-emerald-600">
                            <svg className="w-5 h-5 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.042a1 1 0 00-1.175 0l-2.817 2.042c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {property.rating}
                        </span>
                        <span className="text-sm text-gray-500">| {property.address.city}, {property.address.country}</span>
                    </div>
                </div>

                {/* Main Image Gallery (Simplified to single image) */}
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-12 shadow-xl">
                    <Image
                        src={property.image.replace('example.com', 'placehold.co/1200x500/0f766e/ffffff?text=Property+Gallery')}
                        alt={property.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-xl"
                    />
                    {property.discount && (
                        <span className="absolute top-4 right-4 bg-red-600 text-white text-xl font-bold px-4 py-2 rounded-full shadow-lg">
                            {property.discount}% OFF
                        </span>
                    )}
                </div>

                {/* Main Content Grid: Details on Left, Booking Summary on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Description, Host, Amenities */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* Property Summary */}
                        <div className="border-b pb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{property.name} hosted by {property.host.name}</h2>
                            <div className="flex space-x-6 text-gray-600">
                                <IconBox label={`${property.offers.bed} Bed`} icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-4 4v10m0 0l-3-3m3 3l3-3m-3-4h.01" /></svg>} />
                                <IconBox label={`${property.offers.shower} Bathroom`} icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.857 2.725l-7.737 12.015A1 1 0 0111 21h-2a1 1 0 01-.868-.445l-7.737-12.015A2 2 0 012.236 10H7v10h10V10z" /></svg>} />
                                <IconBox label={`${property.offers.occupants} Guests`} icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-4a2 2 0 01-2-2v-3a2 2 0 012-2h4a2 2 0 012 2v3a2 2 0 01-2 2zM9 16V9a4 4 0 014-4h2a4 4 0 014 4v7m-10 4h12" /></svg>} />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">About the space</h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{property.description}</p>
                        </div>
                        
                        {/* Amenities */}
                        <div className="border-b pb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">What this place offers</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {property.amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-6 text-md text-gray-700 font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                                Show all amenities
                            </button>
                        </div>

                        {/* Host Profile */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Meet your host</h3>
                            <div className="flex items-center space-x-4">
                                <Image
                                    src={property.host.imageUrl}
                                    alt={property.host.name}
                                    width={64}
                                    height={64}
                                    className="rounded-full object-cover border-2 border-emerald-500"
                                />
                                <div>
                                    <p className="text-lg font-bold text-gray-800">{property.host.name}</p>
                                    <p className="text-sm text-gray-500">Joined ALX in {property.host.joined}</p>
                                    <p className="text-sm text-gray-500 mt-1 flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                                        Superhost
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* Right Column: Booking Card (Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 bg-white p-6 shadow-2xl rounded-xl border border-gray-100">
                            <div className="flex items-end justify-between mb-4 pb-4 border-b">
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">
                                        ${discountedPrice.toFixed(2)}
                                    </p>
                                    {property.discount && (
                                        <span className="text-sm line-through text-red-400">
                                            ${property.price.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center text-sm font-semibold">
                                    <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.042a1 1 0 00-1.175 0l-2.817 2.042c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className='text-gray-700'>{property.rating}</span>
                                </div>
                            </div>
                            
                            {/* Date Picker and Guest Count (Simplified for layout) */}
                            <div className="mb-4">
                                <div className="border border-gray-300 rounded-lg overflow-hidden flex divide-x">
                                    <div className="p-3 w-1/2">
                                        <p className="text-xs font-semibold">Check-in</p>
                                        <p className="text-sm text-gray-500">Add Date</p>
                                    </div>
                                    <div className="p-3 w-1/2">
                                        <p className="text-xs font-semibold">Check-out</p>
                                        <p className="text-sm text-gray-500">Add Date</p>
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded-lg mt-2 p-3">
                                    <p className="text-xs font-semibold">Guests</p>
                                    <p className="text-sm text-gray-500">1 Guest</p>
                                </div>
                            </div>

                            {/* Booking Button */}
                            <Link href="/booking" className="block text-center bg-emerald-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-emerald-700 transition duration-150 shadow-lg">
                                Reserve
                            </Link>

                            <p className="text-center text-sm text-gray-500 mt-3">You won&apos;t be charged yet</p>
                        </div>
                    </div>
                </div>

                <ReviewSection propertyId={property.id} />
                
            </div>
        </div>
    );
};

export default PropertyDetail;
