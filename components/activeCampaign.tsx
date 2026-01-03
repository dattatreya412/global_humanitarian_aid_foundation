import SearchBar from "@/components/searchBar";
import DonationsContainer from "./donationsContainer";
import CategoryCard from '@/components/categoryCard'

const activeCampaign = () => {
  return (
    <div className='w-full h-fit mt-8'>
      <h4 className='pt-8 pb-2 text-center font-bold text-[#3F72AF]'>ACTIVE CAMPAIGNS</h4>
      <h1 className='py-2 pb-4 text-4xl text-center text-[#112D4E]'>Discover Causes you can Support</h1>
      <SearchBar />
      <CategoryCard />
      <DonationsContainer />
      <div className="flex items-center justify-center">
        <button className="px-4 py-2 bg-[#eff1f5] text-[#112D4E] border rounded-lg">SHOW MORE CAMPAGIN</button>
      </div>
    </div>
  )
} 

export default activeCampaign  