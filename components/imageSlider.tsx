'use client'

import Image from "next/image";
import { motion } from 'motion/react';
import { useState } from "react";

import freeBooks from "@/public/freebooks.jpeg";
import donateFood from '@/public/donateFood.jpeg'

const images = [
  freeBooks,
  donateFood
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLeftClick = (previousIndex : number) => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(previousIndex - 1);
    }
  }
  const handleRightClick = (prviousIndex : number) => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    }
    else {
      setCurrentIndex(prviousIndex + 1);
    }
  }
  return (
    <motion.div 
      className="h-96 my-24 w-full flex gap-2 items-center justify-between px-4 md:px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Left Arrow */}
      <button 
      className="p-3 bg-white rounded-full shadow hover:bg-gray-100 z-30"
      onClick={() => handleLeftClick(currentIndex)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="w-8 h-8 fill-[#3F72AF]"
        >
          <path d="M65.3 38.5L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z" />
        </svg>
      </button>

      {/* Slider Content */}
      <div className="relative h-96 w-11/12 rounded-lg overflow-hidden shadow-xl">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#DBE2EF]/80 to-transparent z-10 rounded-l-lg"></div>

        {/* Text and Button */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="flex flex-col justify-center h-full px-8 md:px-16 w-7/12">
            <h2 className="text-xl md:text-3xl font-semibold text-[#112D4E] leading-snug">
              A small donation today can change a child's tomorrow. Help us deliver free books to kids who need them the most.
            </h2>
            <div className="mt-6">
              <motion.button 
              className="bg-[#3F72AF] text-[#F9F7F7] px-3 py-1 text-sm md:px-4 md:py-2 md:text-base rounded-lg font-medium hover:opacity-90"
              whileHover={{
    scale: 1.1,
    // Will be used when gesture starts

    transition: { duration: 0.1 }
  }}
  // Will be used when gesture ends
  transition={{ duration: 0.5 }}
              >
                Donate Now
              </motion.button>
            </div>
          </div>

          {/* Image */}
          <div className="absolute right-0 h-full w-5/12 md:w-6/12 flex items-center justify-end">
            <Image
              src={images[currentIndex]}
              alt="Slider Image"
              className="h-full w-auto object-cover rounded-r-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button 
      className="p-3 bg-white rounded-full shadow hover:bg-gray-100 z-30"
      onClick={() => handleRightClick(currentIndex)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="w-8 h-8 fill-[#3F72AF]"
        >
          <path d="M49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" />
        </svg>
      </button>
    </motion.div>
  );
}
