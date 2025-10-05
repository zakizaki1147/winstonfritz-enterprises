import React from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'

const LocationsCard = ({ locationImage }) => {
  return (
    <>
      <div className='bg-cream-main rounded overflow-hidden text-blue-main hover:scale-[102%] shadow transition'>
        <div>
          <div className='lg:w-[320px] bg-fuchsia-500 overflow-hidden'>
            <img src={locationImage.src} alt="location image" />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 p-5'>
          <div>
            <h3 className='font-aclonica lg:text-xl text-center'>WINSTON-FRITZ</h3>
            <h3 className='font-aclonica lg:text-xl text-center'>{locationImage.name}</h3>
          </div>
          <div className='flex justify-center items-center gap-1'>
            <span className='hidden lg:block'><MapPin /></span>
            <span className='lg:hidden'><MapPin size={18} /></span>
            <h4 className='font-semibold text-sm lg:text-base'>{locationImage.location}</h4>
          </div>
          <hr className='border w-full' />
          <h4 className='font-aclonica text-xs lg:text-base flex justify-center items-center gap-1 cursor-pointer hover:underline underline-offset-2 active:opacity-50 transition'>
            <p className='mt-0.5 lg:mt-0'>See on Maps</p>
            <span className='hidden lg:block'><ArrowUpRight strokeWidth={2.5} /></span>
            <span className='lg:hidden'><ArrowUpRight size={16} /></span>
          </h4>
        </div>
      </div>
    </>
  )
}

export default LocationsCard
