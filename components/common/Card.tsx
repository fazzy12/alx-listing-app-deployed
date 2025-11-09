// import React from 'react';
// import { CardProps } from '../../interfaces';

// const Card: React.FC<CardProps> = ({
//   title,
//   description,
//   imageUrl,
//   price,
//   rating,
//   location,
//   className = '',
//   onClick
// }) => {
//   return (
//     <div 
//       className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer ${className}`}
//       onClick={onClick}
//     >
//       {imageUrl && (
//         <div className="relative h-48 w-full">
//           <img
//             src={imageUrl}
//             alt={title}
//             className="w-full h-full object-cover"
//           />
//           {rating && (
//             <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold flex items-center">
//               <span className="text-yellow-500 mr-1">★</span>
//               {rating}
//             </div>
//           )}
//         </div>
//       )}
      
//       <div className="p-4">
//         {location && (
//           <p className="text-sm text-gray-500 mb-1">{location}</p>
//         )}
        
//         <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
//           {title}
//         </h3>
        
//         {description && (
//           <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//             {description}
//           </p>
//         )}
        
//         {price && (
//           <div className="flex items-center justify-between">
//             <span className="text-xl font-bold text-gray-900">
//               ${price}
//               <span className="text-sm font-normal text-gray-500"> / night</span>
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;