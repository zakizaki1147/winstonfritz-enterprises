import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const ProductsServicesCard = ({ productsServicesImage }) => {
  return (
    <>
      <div className='flex rounded overflow-hidden hover:scale-[102%] shadow transition'>
        <div className='size-[300px]'>
          <img src={productsServicesImage.src} alt="image" />
        </div>
        <div className='w-[500px] bg-cream-main p-6 flex flex-col justify-center items-center gap-4'>
          <div className='flex flex-1 flex-col justify-center items-center gap-2 text-blue-main'>
            <h2 className='font-aclonica text-xl tracking-wider mt-5'>{productsServicesImage.name}</h2>
            <p className='font-semibold text-center text-sm tracking-wide'>{productsServicesImage.desc}</p>
          </div>
          <hr className='border w-full border-blue-main' />
          <h4 className='font-aclonica text-blue-main flex justify-center items-center gap-1 cursor-pointer hover:underline underline-offset-2 active:opacity-70 transition'>Learn More<ArrowUpRight strokeWidth={2.5} /> </h4>
        </div>
      </div>
    </>
  )
}

export default ProductsServicesCard
