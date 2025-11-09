import axios from "axios";
import React, { useState, useEffect } from "react";
import { ReviewProps, MAPPED_REVIEWS } from "./ReviewsMock";

interface ReviewSectionProps {
    propertyId: string;
}

// Helper component for displaying a single review
const ReviewCard: React.FC<{ review: ReviewProps }> = ({ review }) => (
    <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-gray-800">{review.author}</p>
            <div className="flex items-center text-sm font-medium text-gray-600">
                <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.042a1 1 0 00-1.175 0l-2.817 2.042c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {review.rating.toFixed(1)}
            </div>
        </div>
        <p className="text-gray-600 mb-2 leading-relaxed">{review.comment}</p>
        <p className="text-xs text-gray-400">Reviewed on {review.date}</p>
    </div>
);

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
    const [reviews, setReviews] = useState<ReviewProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!propertyId) return;

        const fetchReviews = async () => {
            setLoading(true);
            setError(null);

            try {
                // Simulating the API call to GET /properties/:id/reviews
                // In a real application, i would use:
                // const response = await axios.get<ReviewProps[]>(`/api/properties/${propertyId}/reviews`);
                // setReviews(response.data);

                // --- SIMULATION START ---
                console.log(`Simulating API call for reviews on Property ID: ${propertyId}`);
                await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network latency
                
                const mockReviews = MAPPED_REVIEWS[propertyId] || [];
                setReviews(mockReviews);
                // --- SIMULATION END ---

            } catch (err) {
                console.error("Error fetching reviews:", err);
                setError("Failed to load reviews. Try refreshing the page.");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [propertyId]);

    if (loading) {
        return <p className="text-center text-gray-500 py-4">Loading property reviews...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 py-4">{error}</p>;
    }
    
    if (reviews.length === 0) {
        return <p className="text-center text-gray-500 py-4">Be the first to review this property!</p>;
    }


    return (
        <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Reviews ({reviews.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
            {reviews.length > 2 && (
                <div className="text-center mt-6">
                    <button className="text-md text-gray-700 font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                        Show all {reviews.length} reviews
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReviewSection;
