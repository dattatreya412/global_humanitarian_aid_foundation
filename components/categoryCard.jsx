'use client';

import { useState } from "react";
import { 
  Gift, Calendar, Utensils, Baby, GraduationCap, PawPrint, 
  BriefcaseMedical, PartyPopper 
} from "lucide-react"; 

export default function CategorySelector() {
  const [active, setActive] = useState("ALL");

  const categories = [
    { name: "ALL", icon: <Gift size={28} /> },
    { name: "MONTHLY", icon: <Calendar size={28} /> },
    { name: "HUNGER", icon: <Utensils size={28} /> },
    { name: "CHILDREN", icon: <Baby size={28} /> },
    { name: "EDUCATION", icon: <GraduationCap size={28} /> },
    { name: "ANIMALS", icon: <PawPrint size={28} /> },
    { name: "MEDICINE", icon: <BriefcaseMedical size={28} /> },
    { name: "SPECIAL DAY", icon: <PartyPopper size={28} /> },
  ];

  return (
    <div className="w-full flex justify-center items-center my-8">
      <div className="w-fit flex gap-6 overflow-x-auto no-scrollbar py-4">

        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(item.name)}
            className={`
              flex flex-col items-center justify-center min-w-32 h-28 
              rounded-2xl border transition-all duration-200

              ${active === item.name
                ? "bg-[#3F72AF] text-[#F9F7F7] border-[#3F72AF] shadow-md"
                : "bg-[#F9F7F7] text-[#393E46] border-[#112D4E] border border-opacity-30 hover:scale-105 hover:shadow-lg"
              }
            `}
          >
            {item.icon}
            <span className="font-semibold mt-1 tracking-wide">
              {item.name}
            </span>
          </button>
        ))}

      </div>
    </div>
  );
}
