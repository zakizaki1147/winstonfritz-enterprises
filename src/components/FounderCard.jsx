import React from 'react'

const FounderCard = ({ siluetImage }) => {
  return (
    <>
      <div className='text-blue-main rounded overflow-hidden rounded-t-[40px] hover:scale-[102%] shadow transition'>
        <div className='h-80 bg-gradient-to-t from-cream-main via-cream-main to-blue-main flex justify-end items-end relative'>
          <div className='lg:w-72'>
            <img src={siluetImage.src} alt="founder" />
          </div>
          <div className='absolute w-full h-1/3 bg-gradient-to-t from-cream-main to-transparent'></div>
        </div>
        <div className='w-full bg-cream-main flex flex-col justify-center items-center gap-2 p-5'>
          <h2 className='font-aclonica text-xl'>{siluetImage.name}</h2>
          <h3 className='font-semibold text-sm'>{siluetImage.title}</h3>
        </div>
      </div>
    </>
  )
}

export default FounderCard
