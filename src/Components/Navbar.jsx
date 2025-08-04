import React from 'react'

function Navbar() {
  return (
    <nav className="bg-[rgb(108,45,44)] px-4 py-3 overflow-x-auto whitespace-nowrap">
      <ul className="flex text-white gap-6 text-sm font-bold">
        {[
          'HOME', 'LOTTERY', 'CRICKET', 'TENNIS', 'FOOTBALL',
          'TABLE TENNIS', 'BACCART', '32 CARDS', 'TEENPATTI',
          'POKER', 'LUCKY 7'
        ].map((item, index) => (
          <li key={index}  className="relative pb-3 font-bold cursor-pointer
             after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:w-0 
             hover:after:w-full">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
