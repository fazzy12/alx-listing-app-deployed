import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail"; 
import { PropertyProps } from "@/interfaces";
import { PROPERTY_DETAILS_MOCK } from "@/components/property/PropertyDetailsMock";

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

export default function PropertyDetailPage() {
  const router = useRouter();

  const { id } = router.query;
  
  const [property, setProperty] = useState<DetailedPropertyProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      
      const propertyId = Array.isArray(id) ? id[0] : id;

      // Reset state for new fetch
      setLoading(true);
      setError(null);
      
      try {
        // Simulating the API call to GET /properties/:id
        // In a real application, i would use:
        // const response = await axios.get<DetailedPropertyProps>(`/api/properties/${propertyId}`);
        // setProperty(response.data);

        // --- SIMULATION START ---
        console.log(`Simulating API call for property ID: ${propertyId}`);
        await new Promise(resolve => setTimeout(resolve, 800)); 

        const mockPropertyData = PROPERTY_DETAILS_MOCK.find(p => p.id.toString() === propertyId);
        
        if (mockPropertyData) {
            const mockProperty: DetailedPropertyProps = { 
                ...mockPropertyData,
                id: propertyId 
            } as DetailedPropertyProps; 
            setProperty(mockProperty);
        } else {
            setError("Property ID not found in mock data.");
        }
        // --- SIMULATION END ---

      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Loading Property Details...</h1>
            <p className="mt-2 text-gray-500">Fetching data for ID: {id}</p>
        </div>
    );
  }

  if (error) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-red-600">Error</h1>
            <p className="mt-2 text-gray-500">{error}</p>
        </div>
    );
  }

  if (!property) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Property Not Found</h1>
            <p className="mt-2 text-gray-500">The requested property does not exist.</p>
        </div>
    );
  }

  return <PropertyDetail property={property} />;
}
