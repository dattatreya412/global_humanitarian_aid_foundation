import Image from 'next/image'

import SearchImage from '@/public/searchIcon.png'

export default function SearchBar(){
    return (
        <div className="flex justify-center mt-8">
            <div className="relative w-1/2">
                <Image
                    src={SearchImage}
                    alt="Search Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
                />
                <input
                    type="text"
                    placeholder="Search Camaigns"
                    className="w-full px-4 pl-16 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
            </div>
        </div>
    )
}