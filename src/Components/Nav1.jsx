import React from 'react'
import { FaBaseballBatBall } from "react-icons/fa6";

function Nav1() {
  const items = [
    "The Hundred",
    "West Indies v Pakistan",
    "The Hundred",
    "England vs India",
    "The Hundred"
  ];

  // Smooth blink animation style
  const blinkStyle = {
    animation: 'blink 1.4s linear infinite'
  };

  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            60% { opacity: 0; }
          }
        `}
      </style>

      <div className='flex mt-1 gap-3 flex-wrap'>
        {items.map((text, index) => (
          <div
            key={index}
            className='flex items-center gap-8 font-bold px-4 py-1 min-w-[230px] h-[40px] bg-[rgb(108,45,44)] text-white shadow-md'
          >
            <FaBaseballBatBall className='text-lg' style={blinkStyle} />
            <p className='text-sm font-medium whitespace-nowrap' style={blinkStyle}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Nav1
