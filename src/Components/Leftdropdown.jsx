import React, { useState } from 'react';
import { FaAngleDown, FaChevronUp } from 'react-icons/fa';

function Leftdropdown() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const renderIcon = (name) =>
    openDropdown === name ? (
      <FaChevronUp className="text-xs sm:text-sm" />
    ) : (
      <FaAngleDown className="text-xs sm:text-sm" />
    );

  return (
    <div className="flex flex-col w-65 bg-[rgb(159,70,54)] text-white font-semibold text-sm mt-1">
      {/* Racing Sports */}
      <div className="relative">
        <div
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-[rgb(130,50,40)]"
          onClick={() => toggleDropdown('racing')}
        >
          <p>Racing Sports</p>
          {renderIcon('racing')}
        </div>
        {openDropdown === 'racing' && (
          <ul className="bg-gray-200 text-black shadow-md z-10 w-full">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-300">Horse racing</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Greyhound racing</li>
          </ul>
        )}
      </div>

      {/* Others */}
      <div className="relative">
        <div
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-[rgb(130,50,40)]"
          onClick={() => toggleDropdown('others')}
        >
          <p>Others</p>
          {renderIcon('others')}
        </div>
        {openDropdown === 'others' && (
          <ul className="bg-gray-200 text-black shadow-md z-10 w-full">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-300">Chess</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-300">Esports</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kabaddi</li>
          </ul>
        )}
      </div>

      {/* All Sports */}
      <div className="relative">
        <div
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-[rgb(130,50,40)]"
          onClick={() => toggleDropdown('all')}
        >
          <p>All Sports</p>
          {renderIcon('all')}
        </div>
        {openDropdown === 'all' && (
          <ul className="bg-gray-200 text-black shadow-md z-10 w-full">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-300">Cricket</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-300">Football</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tennis</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Leftdropdown;
