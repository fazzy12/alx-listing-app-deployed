import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";
import { HERO_IMAGE_URL } from "@/constants";
import { PropertyProps } from '@/interfaces';


// 1. Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <Image
        src={HERO_IMAGE_URL}
        alt="Scenic view with a lake and mountains"
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl">
          The best prices for over 2 million properties worldwide
        </p>
      </div>
    </div>
  );
};

// 2. Filter Section Component
const filterLabels = [
  "All", "Top Villa", "Free Reschedule", "Book Now, Pay Later",
  "Self Checkin", "Instant Book",
];

const FilterSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-8">
      <div className="flex flex-wrap gap-2">
        {filterLabels.map((label) => (
          <Pill key={label} label={label} active={label === "All"} />
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
          <svg /* ... Filter Icon ... */ />
          <span>Filter</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
          <svg /* ... Sort Icon ... */ />
          <span>Sort by:</span>
          <span className="font-semibold text-gray-900">Highest Price</span>
        </div>
      </div>
    </div>
  );
};

// 3. Listing Section Component
const ListingSection: React.FC<{ properties: PropertyProps[], loading: boolean }> = ({ properties, loading }) => {
  if (loading) {
    return (
      <section className="py-8 text-center text-lg font-semibold text-gray-600">
        <p>Loading property listings...</p>
      </section>
    );
  }

  if (properties.length === 0) {
    return (
      <section className="py-8 text-center text-lg font-semibold text-gray-600">
        <p>No properties found. Please try adjusting your filters.</p>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.name} property={property} /> 
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
          Show more
        </button>
      </div>
    </section>
  );
};


// 4. Main Home Page Component - Handles API fetching and state
const Home: React.FC = () => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // const response = await axios.get("/api/properties");
        const response = await axios.get(\${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);`
        // Use response data if available, otherwise fall back to the sample data
        const data = response?.data ?? (await import('@/constants')).PROPERTYLISTINGSAMPLE;
        setProperties(data);

      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FilterSection />
      <ListingSection properties={properties} loading={loading} />
    </div>
  );
};

export default Home;