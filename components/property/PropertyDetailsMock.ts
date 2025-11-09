import { PropertyProps } from "@/interfaces";

const mockHost = {
  name: "Jane Doe",
  joined: "July 2021",
  imageUrl: "https://placehold.co/40x40/5d48e6/ffffff?text=JD",
};

export const PROPERTY_DETAILS_MOCK = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    description:
      "A stunning, private luxury villa located in the heart of Seminyak, featuring a large infinity pool and breathtaking sunset views. Perfect for families or groups seeking a tranquil yet luxurious getaway.",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    amenities: [
      "Private Infinity Pool",
      "Air Conditioning",
      "Free High-Speed WiFi",
      "Fully Equipped Kitchen",
      "Smart TV",
      "Security System",
      "Daily Cleaning",
    ],
    image: "https://example.com/image1.jpg",
    discount: "",
    host: mockHost,
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    description:
      "Cozy, rustic chalet nestled in the Colorado Rockies. Enjoy spectacular mountain views, a wood-burning fireplace, and direct access to hiking trails. Ideal for a winter ski trip or a summer retreat.",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    amenities: [
      "Fireplace",
      "Heating",
      "Pet Friendly (fee applies)",
      "Outdoor Grill",
      "Washer & Dryer",
      "Ski Storage",
    ],
    image: "https://example.com/image2.jpg",
    discount: "30",
    host: mockHost,
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    description:
      "An architecturally unique retreat in Palm Springs, offering solitude and stunning desert vistas. The minimalist design maximizes light and seamlessly blends indoor and outdoor living.",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    amenities: [
      "Hot Tub",
      "Patio/Balcony",
      "Outdoor Dining Area",
      "Yoga Mats",
      "Workspace",
    ],
    image: "https://example.com/image3.jpg",
    discount: "",
    host: mockHost,
  },
] as (PropertyProps & { id: number; description: string; amenities: string[]; host: { name: string; joined: string; imageUrl: string } })[];
