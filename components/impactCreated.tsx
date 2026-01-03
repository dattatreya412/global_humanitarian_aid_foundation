'use client';

import WorthDomationsImg from '@/public/wothDomations.png'
import LivesImpacted from '@/public/livesImpacted.png'
import UniqueDonors from '@/public/uniquedonors.png'
import SuccessfulCampaigns from '@/public/successfulCampaign.png'

import Image from 'next/image'
import {motion} from 'motion/react'

const impactCreated = () => {
  return (
    <motion.div 
    className='flex my-8 w-full h-40 justify-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
        <div className='flex justify-between px-20 h-full w-11/12'>
            <div className='flex flex-col justify-center items-center w-40 h-40'>
                <Image 
                src={WorthDomationsImg} 
                alt='Worth of Domations Image'
                className='m-2'
                width={80} height={80}/>
                <h3 className='text-2xl my-1 text-[#3F72AF]'>₹1 Cr+</h3>
                <p>Worth Donations</p>
            </div>
            <div className='flex flex-col justify-center items-center w-40 h-40 '>
                <Image 
                src={LivesImpacted} 
                alt='Worth of Domations Image'
                className='m-2'
                width={80} height={80}/>
                <h3 className='text-2xl my-1 text-[#3F72AF]'>₹10,000 +</h3>
                <p>Lives Impacted</p>
            </div>
            <div className='flex flex-col justify-center items-center w-40 h-40 '>
                <Image 
                src={UniqueDonors} 
                alt='Worth of Domations Image'
                className='m-2'
                width={80} height={80}/>
                <h3 className='text-2xl my-1 mt-2 text-[#3F72AF]'>₹1 Lakh+</h3>
                <p>Unique Donors</p>
            </div>
            <div className='flex flex-col justify-center items-center w-44 h-40 '>
                <Image 
                src={SuccessfulCampaigns} 
                alt='Worth of Domations Image'
                className='m-2'
                width={80} height={80}/>
                <h3 className='text-2xl my-1 text-[#3F72AF]'>₹200 +</h3>
                <p>Successful Campaigns</p>
            </div>
        </div>
    </motion.div>
    
  )
}

export default impactCreated