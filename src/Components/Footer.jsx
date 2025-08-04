import React from 'react';
import { im4, im5, im6, im7, ssl } from '../assets/Assets';

function Footer() {
  return (
    <footer className="bg-white mt-10 border-t border-gray-300">
      {/* Top and Middle bar merged in single red bar */}
      <div className="w-full bg-[#933c2d] text-white text-sm font-bold flex items-center    px-4 py-5">
        {/* Left side */}
        <div className="flex flex-wrap gap-2">
          <span className="cursor-pointer hover:underline">Terms and Conditions</span>
          <span className="cursor-pointer hover:underline">Responsible Gaming</span>
        </div>
        {/* Right side */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold ">
          24X7 Support
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-4 bg-white text-black text-sm">
        {/* Left: SSL */}
        <div className="flex items-center gap-2">
          <img
            src={ssl}
            alt="SSL Secure"
            className="w-[100px] h-[52px] object-contain"
          />
          <div>
            <strong>100% SAFE</strong><br />
            Protected connection and encrypted data.
          </div>
        </div>

        {/* Center */}
        <div className="text-center text-medium mb-[-7]  transform -translate-x-2/5  sm:mt-0">
          © Copyright 2025. All Rights Reserved. Powered by GRANDEXCH.
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <img src={im7} alt="18+" className="w-6 h-6" />
          <img src={im6} alt="gt" className="w-6 h-6" />
          <img src={im5} alt="secure" className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
