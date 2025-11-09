// components/PropertyCard.tsx
import React from 'react';
import { PropertyProps } from "@/interfaces";
import Image from 'next/image';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-sm group cursor-pointer">
      <div className="relative w-full h-72">
        <Image
          src={property.image}
          alt={property.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        {property.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {property.discount}% OFF
          </span>
        )}
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-semibold text-lg truncate">{property.name}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <svg /* ... Star Icon ... */ />
            <span>{property.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 truncate">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex items-center space-x-2 mt-2">
          {/* Offers icons (bed, shower, occupants) - use SVGs */}
        </div>
        <div className="mt-2 text-right">
          <span className="text-lg font-bold text-gray-800">
            ${property.price}
          </span>
          <span className="text-sm text-gray-500">/n</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;