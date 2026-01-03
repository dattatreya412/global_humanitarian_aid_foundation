'use client'

import Image from "next/image"
import { Users, Share2, Package } from "lucide-react"
import DemoImage from '@/public/donateFood.jpeg'

export default function DonationCard() {
  return (
    <div className="w-full max-w-sm bg-[#DBE2EF] rounded-3xl shadow-md p-5 transition hover:shadow-lg">

      {/* Image + Badges */}
      <div className="relative w-60 h-32 rounded-2xl overflow-hidden">
        <Image
          src={DemoImage}// change to your image
          alt="Donation"
          fill
          className="object-cover"
        />

        {/* Tax Benefit Badge
        <span className="absolute top-4 right-4 bg-[#00ADB5] text-white px-3 py-1 rounded-md text-sm font-semibold">
          Tax Benefit
        </span> */}

        {/* Accepts International Donation
        <span className="absolute bottom-4 left-4 bg-[#3F72AF] text-white px-3 py-1 rounded-md text-sm font-semibold">
          Accepts International Donation
        </span> */}

        {/* Share Icon */}
        <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
          <Share2 size={20} className="text-[#112D4E]" />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-[#112D4E] font-semibold text-lg mt-4 leading-snug">
        Contribute nutritious food and share love and joy to the poor
      </h2>

      {/* Donors Count */}
      <div className="flex items-center justify-end gap-1 text-[#393E46] text-sm mt-2">
        <Users size={18} />
        <span>49613</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-3 rounded-full mt-3">
        <div className="h-3 rounded-full bg-green-600" style={{ width: "100%" }} />
      </div>

      {/* Target */}
      <div className="flex items-center gap-2 mt-3 text-sm text-[#393E46]">
        <Package size={18} />
        <span>
          Target : <span className="text-green-600 font-medium">₹0</span> left out of 5000000
        </span>
      </div>

      {/* Button */}
      <button className="w-full mt-6 bg-[#3F72AF] text-[#F9F7F7] py-3 rounded-xl font-semibold text-center transition hover:bg-[#f6cf00]">
        DONATE NOW
      </button>

    </div>
  )
}
