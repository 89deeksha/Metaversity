import React, { useState } from 'react';
import { FaBaseballBatBall } from 'react-icons/fa6';

function Games() {
  const items = [
    "Cricket",
    "Football",
    "Tennis",
    "Table Tennis",
    "Esoccer",
    'Horse Racing',
    "Greyhound Racing",
    "BasketBall",
    "Wresling",
    "VolleyBall",
    "Badminton",
    "Snooker",
    "Darts"

  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="flex mt-1 ">
      {items.map((text, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)} // Change selected index on click
          className={`cursor-pointer flex flex-wra  font-bold px-3 py-1 w-full h-[34px] shadow-md ${index !== 0 ? 'border-l border-black' : ''} 
            ${selectedIndex === index ? 'bg-[rgb(108,45,44)] text-white' : 'bg-gray-300 text-black'}`}
        >
          <p className="text-sm font-medium whitespace-nowrap     ">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Games;
