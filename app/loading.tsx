'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../public/logo.png";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#DBE2EF]">
      
      {/* Logo with bounce animation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { type: "spring", stiffness: 500, damping: 10, repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 0.5 }
        }}
        className="mb-6"
      >
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </motion.div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-[#3F72AF] text-lg font-semibold"
      >
        Loading...
      </motion.p>
    </div>
  );
}
