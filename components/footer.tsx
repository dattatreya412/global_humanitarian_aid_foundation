import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#112D4E] text-[#F9F7F7] py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold mb-3">Global Humanitarian Aid Foundation</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Making the world a better place through community support,
            compassion, and meaningful initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer"><Link href='/our-story'>Our Story</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href='/active-campagins'>Active Campagins</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href='/how-it-works'>How it Works</Link></li>
            <li className="hover:text-white cursor-pointer"><Link href='/get-involved'>Get Involved</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">ghafindia1@gmail.com</p>
          <p className="text-gray-300 text-sm mt-1">Phone: +91-9951189689</p>
          <p className="text-gray-300 text-sm mt-1">Location: Kavadiuda, Telangana</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Global Humanitarian Aid Foundation. All Rights Reserved.
      </div>
    </footer>
  );
}
