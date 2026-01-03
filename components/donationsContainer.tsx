import DonationCard from '@/components/donationCard'

export default function DonationsContainer(){
    return(<div className='flex gap-5' >
        {/* Left Arrow */}
      <button className="p-3 bg-white rounded-full shadow hover:bg-gray-100 z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="w-8 h-8 fill-[#3F72AF]"
        >
          <path d="M65.3 38.5L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z" />
        </svg>
      </button>
        <div className='flex gap-16 mb-20  overflow-x-hidden px-4 scroll-smooth'>
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
        </div>

        <button className="p-3 bg-white rounded-full shadow hover:bg-gray-100 z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="w-8 h-8 fill-[#3F72AF]"
        >
          <path d="M49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" />
        </svg>
      </button>
        
    </div>
    )
}