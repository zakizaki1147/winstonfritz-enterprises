import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const ProductsServicesCard = ({ productsServicesImage }) => {
  return (
    <>
      <div className='flex flex-col lg:flex-row h-full rounded overflow-hidden hover:scale-[102%] shadow transition'>
        <div className='lg:size-[300px]'>
          <img src={productsServicesImage.src} alt="image" />
        </div>
        <div className='lg:w-[500px] h-full lg:h-auto bg-cream-main p-3 lg:p-6 flex flex-col justify-center items-center gap-2 lg:gap-4'>
          <div className='flex flex-1 flex-col justify-center items-center gap-1 lg:gap-2 text-blue-main'>
            <h2 className='min-h-10 flex justify-center items-center lg:h-auto lg:block font-aclonica text-sm lg:text-xl text-center tracking-wider mt-2 lg:mt-5'>{productsServicesImage.name}</h2>
            <p className='flex flex-1 justify-center items-center lg:block lg:flex-0 font-semibold text-center text-xs lg:text-sm tracking-wide'>{productsServicesImage.desc}</p>
          </div>
          <hr className='border w-full border-blue-main' />
          <h4 className='font-aclonica text-blue-main text-xs lg:text-base flex justify-center items-center gap-1 cursor-pointer hover:underline underline-offset-2 active:opacity-70 transition'>
            <p className='mt-0.5 lg:mt-0'>Learn More</p>
            <span className='hidden lg:block'><ArrowUpRight strokeWidth={2.5} /></span>
            <span className='lg:hidden'><ArrowUpRight size={16} /></span>
          </h4>
        </div>
      </div>
    </>
  )
}

export default ProductsServicesCard
