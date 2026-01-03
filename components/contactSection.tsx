'use client';

import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <div className="flex justify-center my-20">
      <div className="w-10/12  py-16 px-6 md:px-20">

        {/* Heading */}
      <p className="text-sm font-semibold text-[#3F72AF] mb-2">GET IN TOUCH</p>
        <h1 className="text-2xl md:text-2xl font-bold text-[#1b1b1b] mb-10">
          Reach out to us. We are here to help you!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* WhatsApp */}
            <motion.div

              className="flex items-center justify-between bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="text-green-600 bg-green-100 p-2 rounded-full">
                  <FaWhatsapp size={28} />
                </div>
                <div>
                  <p className="font-semibold text-md">Chat with us on Whatsapp</p>
                  <p className="text-gray-600 text-sm">+91-9951189689</p>
                </div>
              </div>
              <p className="text-gray-600 text-md">{">"}</p>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-lg duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="text-yellow-600 bg-yellow-100 p-4 rounded-full">
                  <MdEmail size={28} />
                </div>
                <div>
                  <p className="font-semibold text-md">Send us an Email</p>
                  <p className="text-gray-600 text-sm">ghafindia1@gmail.com</p>
                </div>
              </div>
              <p className="text-gray-600 text-xl">{">"}</p>
            </motion.div>

            {/* Call */}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-lg duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="text-blue-700 bg-blue-100 p-4 rounded-full">
                  <FiPhoneCall size={28} />
                </div>
                <div>
                  <p className="font-semibold text-md">Get on call with us</p>
                  <p className="text-gray-600 text-sm">+91-9951189689</p>
                </div>
              </div>
              <p className="text-gray-600 text-xl">{">"}</p>
            </motion.div>

            {/* Registered Address */}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-lg duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="text-red-500 bg-red-100 p-4 rounded-full">
                  <MdLocationOn size={28} />
                </div>
                <div>
                  <p className="font-semibold text-md">Registered Address</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kavadiguda <br />
                    Near Nexas Mall, Secunderabad, Telangana 500070.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Operational Address */}
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-lg duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="text-red-500 bg-red-100 p-4 rounded-full">
                  <MdLocationOn size={28} />
                </div>
                <div>
                  <p className="font-semibold text-md">Operational Address</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kavadiguda <br />
                    Near Nexas Mall, Secunderabad, Telangana 500070.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">Send us an Email</h2>

            <div className="space-y-10">

              {/* Name */}
              <div className="relative">
                <label className="text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="
                    peer w-full mt-2 px-0 py-3
                    border-b-2 border-gray-300
                    bg-transparent outline-none
                    focus:border-transparent
                  "
                />
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#3F72AF] transition-all duration-300 peer-focus:w-full"></span>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="text-sm font-medium">Mail</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="
                    peer w-full mt-2 px-0 py-3
                    border-b-2 border-gray-300
                    bg-transparent outline-none
                    focus:border-transparent
                  "
                />
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#3F72AF] transition-all duration-300 peer-focus:w-full"></span>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={1}
                  placeholder="Write Your Message Here"
                  className="
                    peer w-full mt-2 px-0 py-3
                    border-b-2 border-gray-300
                    bg-transparent outline-none resize-none
                    focus:border-transparent
                  "
                ></textarea>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#3F72AF] transition-all duration-300 peer-focus:w-full"></span>
              </div>

              {/* Button */}
              <motion.button
                className="w-full bg-[#3F72AF] text-[#F9F7F7] font-semibold py-4 rounded-xl"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 }
                }}
                transition={{ duration: 0.5 }}
              >
                SEND MESSAGE
              </motion.button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
