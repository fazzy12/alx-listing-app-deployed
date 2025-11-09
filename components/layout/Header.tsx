import React from 'react';
// import Image from 'next/image'; 
import Link from 'next/link';

const Header: React.FC = () => {
  const accommodationTypes = [
    { name: 'Rooms', icon: '/icons/rooms.svg' }, // Placeholder paths for icons
    { name: 'Mansion', icon: '/icons/mansion.svg' },
    { name: 'Countryside', icon: '/icons/countryside.svg' },
    { name: 'Villa', icon: '/icons/villa.svg' },
    { name: 'Tropical', icon: '/icons/tropical.svg' },
    { name: 'New', icon: '/icons/new.svg' },
    { name: 'Amazing pool', icon: '/icons/amazing_pool.svg' },
    { name: 'Beach house', icon: '/icons/beach_house.svg' },
    { name: 'Island', icon: '/icons/island.svg' },
    { name: 'Camping', icon: '/icons/camping.svg' },
    { name: 'Apartment', icon: '/icons/apartment.svg' },
    { name: 'House', icon: '/icons/house.svg' },
    { name: 'Lakefront', icon: '/icons/lakefront.svg' },
    { name: 'Farm house', icon: '/icons/farm_house.svg' },
    { name: 'Treehouse', icon: '/icons/treehouse.svg' },
    { name: 'Cabins', icon: '/icons/cabins.svg' },
    { name: 'Castles', icon: '/icons/castles.svg' },
    { name: 'Lakeside', icon: '/icons/lakeside.svg' },
  ];

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-emerald-600 text-white text-center py-2 text-sm">
        <div className="container mx-auto flex justify-center items-center gap-2">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg> */}
          <span>Overseas trip? Get the latest information on travel guides</span>
          <Link href="#" className="ml-4 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700">
            More Info
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-gray-800">alx</h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-grow flex justify-center mx-8">
            <div className="flex border border-gray-300 rounded-full shadow-sm">
              <div className="flex flex-col border-r px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-l-full">
                <span className="text-xs font-semibold">Location</span>
                <input
                  type="text"
                  placeholder="Search for destination"
                  className="text-sm border-none focus:outline-none bg-transparent w-48"
                />
              </div>
              <div className="flex flex-col border-r px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <span className="text-xs font-semibold">Check in</span>
                <input
                  type="text"
                  placeholder="Add date"
                  className="text-sm border-none focus:outline-none bg-transparent w-24"
                />
              </div>
              <div className="flex flex-col border-r px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <span className="text-xs font-semibold">Check out</span>
                <input
                  type="text"
                  placeholder="Add date"
                  className="text-sm border-none focus:outline-none bg-transparent w-24"
                />
              </div>
              <div className="flex flex-col px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-r-full">
                <span className="text-xs font-semibold">People</span>
                <input
                  type="text"
                  placeholder="Add guest"
                  className="text-sm border-none focus:outline-none bg-transparent w-24"
                />
              </div>
              <button className="bg-orange-500 text-white p-3 rounded-full ml-2 -mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700">
              Sign in
            </Link>
            <Link href="#" className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="container mx-auto py-3 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <nav className="flex space-x-8">
          {accommodationTypes.map((type) => (
            <Link
              href="#"
              key={type.name}
              className={`flex flex-col items-center p-2 border-b-2 ${
                type.name === 'Villa' ? 'border-gray-800' : 'border-transparent'
              } text-gray-700 hover:border-gray-400`}
            >
              {/* Replace with actual SVG/Image components for icons */}
              <img src={type.icon} alt={type.name} className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{type.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;