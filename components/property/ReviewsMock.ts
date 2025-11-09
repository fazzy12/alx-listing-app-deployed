interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export const REVIEWS_MOCK: Review[] = [
  {
    id: 101,
    author: "Alice Johnson",
    rating: 5.0,
    date: "October 15, 2025",
    comment:
      "Absolutely stunning location and the villa was immaculate. The host was incredibly responsive and helpful. We especially enjoyed the private pool and the quiet, relaxing atmosphere. Highly recommend for a luxury getaway!",
  },
  {
    id: 102,
    author: "Bob Smith",
    rating: 4.5,
    date: "September 28, 2025",
    comment:
      "The Mountain Escape Chalet was perfect for our family ski trip. Cozy fireplace and easy access to the slopes. Docked half a star because the Wi-Fi was a bit slow, but otherwise a fantastic stay!",
  },
  {
    id: 103,
    author: "Charlie Brown",
    rating: 5.0,
    date: "August 20, 2025",
    comment:
      "A true desert oasis. The minimalist design of the retreat was refreshing, and the hot tub under the stars was the highlight of our vacation. Everything was clean and exactly as advertised.",
  },
  {
    id: 104,
    author: "Diana Prince",
    rating: 4.0,
    date: "July 12, 2025",
    comment:
      "Great property, spacious and well-maintained. The only issue was the noise level from the nearby street during the morning rush. Host communication was excellent throughout our stay.",
  },
  {
    id: 105,
    author: "Ethan Hunt",
    rating: 5.0,
    date: "June 5, 2025",
    comment:
      "Five stars! The best vacation rental I've ever experienced. seamless self-check-in, fresh linens, and the kitchen was fully stocked. A perfect, hassle-free booking.",
  },
];

export interface ReviewProps {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export const MAPPED_REVIEWS: { [key: string]: Review[] } = {
  "1": [REVIEWS_MOCK[0], REVIEWS_MOCK[1], REVIEWS_MOCK[3]],
  "2": [REVIEWS_MOCK[1], REVIEWS_MOCK[2], REVIEWS_MOCK[4]],
  "3": [REVIEWS_MOCK[2], REVIEWS_MOCK[0]],
};
