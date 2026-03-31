import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#084469] px-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-center h-20">
        
        {/* Logo & Title */}
        <div className="flex items-center">
          <img
            src="/images/logo1.png"
            alt="Logo 1"
            className="w-14 h-14 "
          />
          <img
            src="/images/logo2.png"
            alt="Logo 2"
            className="w-13 h-13"
          />
          <span className="text-white text-center ml-2 leading-tight text-[12px] md:text-base font-semibold">
            Kementerian Imigrasi dan Pemasyarakatan
            <br />
            Republik Indonesia
          </span>
        </div>

        {/* Desktop Menu */}
        {/* <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-gray-300 cursor-pointer">Beranda</li>
          <li className="hover:text-gray-300 cursor-pointer">Link</li>
        </ul> */}

        {/* Mobile Button */}
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-[#084469] px-4 pb-4">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li className="hover:text-gray-300">Beranda</li>
            <li className="hover:text-gray-300">Link</li>
          </ul>
        </div>
      )} */}
    </nav>
  );
}
