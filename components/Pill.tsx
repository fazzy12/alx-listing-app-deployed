// components/Pill.tsx
import React from 'react';

interface PillProps {
  label: string;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, active = false }) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-full border text-sm font-medium
        ${active ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 border-gray-300'}
        hover:bg-gray-100 transition-colors
      `}
    >
      {label}
    </button>
  );
};

export default Pill;