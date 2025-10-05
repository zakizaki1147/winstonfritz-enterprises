import React from 'react'
import Gallery from './Gallery'
import { ArrowUpRight } from 'lucide-react'

const IntegratedComplexSection = () => {
  return (
    <>
      <div className='w-full p-8 lg:pt-12 flex flex-col justify-center items-center gap-4 bg-cream-main text-blue-main font-aclonica'>
        <h2 className='text-lg lg:text-2xl text-center tracking-wider'>PRESENTING OUR PRODUCTION CENTER...</h2>
        <h1 className='text-xl lg:text-[40px] text-center tracking-widest'>THE WINSTON-FRITZ INTEGRATED COMPLEX!</h1>
      </div>
      <section className='w-full lg:h-screen flex flex-col justify-center items-center px-10 py-16'>
        <div className='w-full h-full text-cream-main flex flex-col-reverse lg:flex-row justify-center items-center gap-10'>
          <div className='lg:flex flex-col justify-center gap-4 hidden'>
            <h3 className='font-aclonica leading-tight text-lg'>Built over 10 years <br /> and involved more <br /> than 1.000 workers.</h3>
            <p className='leading-tight'>Located in the capital city of <br /> Nusantara, <strong>Neo-Karta</strong>, we have <br /> an integrated complex as our <br /> production center that significantly <br /> increases our productivity.</p>
            <p className='leading-tight'>But not just for production, our <br /> twin hotel building is available <br /> for guests to reserve it!</p>
            <h4 className='font-aclonica flex justify-center items-center gap-1 cursor-pointer w-fit hover:underline underline-offset-2 active:opacity-50'>
              <p>Reserve a room</p>
              <span><ArrowUpRight strokeWidth={2.5} /></span>
            </h4>
          </div>
          <div className='flex flex-col justify-center items-center gap-4 lg:hidden'>
            <h3 className='font-aclonica leading-tight text-center'>Built over 10 years and involved more than 1.000 workers.</h3>
            <p className='leading-tight text-sm text-center'>Located in the capital city of Nusantara, <strong>Neo-Karta</strong>, we have an integrated complex as our production center that significantly increases our productivity.</p>
            <p className='leading-tight text-sm text-center'>But not just for production, our twin hotel building is available for guests to reserve it!</p>
            <h4 className='font-aclonica text-sm flex justify-center items-center gap-1 cursor-pointer w-fit hover:underline underline-offset-2 active:opacity-50'>
              <p className='mt-0.5'>Reserve a room</p>
              <span><ArrowUpRight size={18} /></span>
            </h4>
          </div>
          <Gallery />
        </div>
      </section>
    </>
  )
}

export default IntegratedComplexSection
