import Image from "next/image";
import KidsImage from "@/public/freebooks.jpeg"; // replace with your actual image

export default function HappinessSection() {
  return (
    <div className="w-11/12 h-96 flex flex-col md:flex-row bg-[#e7eaf0] bg-linear-r rounded-xl pl-10 mx-auto my-20 shadow-lg gap-10">

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#222831]">
          Let's bring more happiness together!
        </h1>

        <p className="text-[#393E46] text-base leading-relaxed">
          Become a social change evangelist within your company! Support for causes that matter
          to bring a change. Lead an example and inspire others by creating a positive impact
          both inside and outside the workplace. Together, we can make a difference!
        </p>

        <button className="bg-[#3F72AF] text-[#F9F7F7] font-semibold w-40 py-3 rounded-xl hover:opacity-90 transition">
          START NOW
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full md:w-1/2 rounded-r-2xl overflow-hidden">
        <Image
          src={KidsImage}
          alt="Kids"
          className="w-full h-full object-cover"
        />

        {/* TEXT OVER IMAGE */}
        <div className="absolute bottom-6 left-6 text-[#F9F7F7]">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Be a part of the change
          </h2>
          {/* YELLOW LINE */}
          <div className="h-1 w-40 bg-[#3F72AF] mt-1"></div>
        </div>
      </div>
    </div>
  );
}
