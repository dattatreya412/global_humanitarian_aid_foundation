'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import Logo from "../public/logo.png";

export default function Header() {

  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Active Campagins", href: "/active-campagins" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Get Involved", href: "/get-involved" },
  ];

  return (
    <motion.div 
    className="fixed top-0 left-0 font-nunito font-medium flex justify-between items-center h-20 w-full px-6 md:px-14 bg-[#DBE2EF] text-[#3F72AF] shadow-md z-50"
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    >

      {/* Logo + Title */}
      <Link href="/" className="flex gap-4 items-center">
        <Image
          src={Logo}
          alt="Logo"
          className="h-10 w-10 md:h-12 md:w-12"
          width={50}
          height={50}
        />
        <div className="flex flex-col leading-tight text-sm md:text-lg">
          <span className="font-montserrat font-semibold">Global Humanitarian</span>
          <span className="font-montserrat font-normal pl-2">Aid Foundation</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-12 px-8 py-2 bg-[#F9F7F7] rounded-full border border-[#EEEEEE]/30 shadow-md relative">

        {menuItems.map((item) => (
          <motion.li
            key={item.href}
            className="relative"
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
          >
            <Link href={item.href}>{item.name}</Link>

            {/* Animated underline for active route */}
            {pathname === item.href && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 mx-auto h-0.5 bg-[#3F72AF] rounded-full"
              />
            )}
          </motion.li>
        ))}

      </ul>

      {/* Right Side Buttons */}
      <div className="flex gap-3 items-center">

        <motion.button
          className="hidden md:block bg-[#3F72AF] mx-2 text-[#F9F7F7] px-4 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          transition={{ duration: 0.5 }}
        >
          Login
        </motion.button>

        <motion.button
          className="bg-[#3F72AF] text-[#F9F7F7] px-3 py-1 mx-2 text-sm md:px-4 md:py-2 md:text-base rounded-lg font-medium"
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        >
          Donate Now
        </motion.button>
      </div>

    </motion.div>
  );
}
