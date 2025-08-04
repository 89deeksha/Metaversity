import React, { useState, useRef, useEffect } from 'react'
import { logo } from '../assets/Assets'
import { FaSearchPlus } from "react-icons/fa"
import { RiArrowDropDownLine } from "react-icons/ri"

function Header() {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef();

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev)
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false)
      }

      if (
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowInput(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='bg-[rgb(159,70,54)] flex items-center justify-between px-4 py-2 text-white relative'>
      <img src={logo} alt="logoimg" className="w-40 h-20 ml-2 py-2" />

      <div className='flex gap-3 items-center font-bold'>
        {/* Search input */}
        <div className='flex items-center relative' ref={inputRef}>
          {showInput && (
            <input
              type='text'
              placeholder='Search here'
              className='absolute font-light outline-none left-[-180px] top-0 p-2 bg-white border-none  text-black w-40 transition-all duration-700 ease-in-out shadow-md '
            />
          )}
          <FaSearchPlus
  className="text-3xl cursor-pointer"
  onClick={() => setShowInput(prev => !prev)}
/>
          
        </div>

        {/* Balance Info */}
        <div className='flex flex-col text-sm'>
          <p>Balance: 1500</p>
          <p>Exp: 0</p>
        </div>

        {/* Demo dropdown */}
        <div className='relative' ref={dropdownRef}>
          <div
            onClick={toggleDropdown}
            className='flex items-center gap-1 cursor-pointer'
          >
            <p>Demo</p>
            <RiArrowDropDownLine className='text-2xl' />
          </div>

          {showDropdown && (
            <div className='absolute right-0 mt-2 w-44 bg-white text-black font-medium rounded shadow-md z-10'>
              <ul className='py-2 '>
                <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer'>Account Statement</li>
                <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer'>Current Bet</li>
                <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer'>Casino Results</li>
                <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer'>Set Button Values</li>
                <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer'>Signout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
