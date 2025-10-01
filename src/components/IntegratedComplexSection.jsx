import React from 'react'
import Gallery from './Gallery'
import { ArrowUpRight } from 'lucide-react'

const IntegratedComplexSection = () => {
  return (
    <>
        <div className='w-full p-10 pt-12 flex flex-col justify-center items-center gap-4 bg-cream-main text-blue-main font-aclonica'>
          <h2 className='text-2xl tracking-wider'>PRESENTING OUR PRODUCTION CENTER...</h2>
          <h1 className='text-[40px] text-center tracking-widest'>THE WINSTON-FRITZ INTEGRATED COMPLEX</h1>
        </div>
      <section className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='w-full h-full text-cream-main flex justify-center items-center gap-10'>
          <div className='flex flex-col justify-center gap-4'>
            <h3 className='font-aclonica leading-tight text-lg'>Built over 10 years <br /> and involved more <br /> than 1.000 workers.</h3>
            <p className='leading-tight'>Located in the capital city of <br /> Nusantara, <strong>Neo-Karta</strong>, we have <br /> an integrated complex as our <br /> production center that significantly <br /> increases our productivity.</p>
            <p className='leading-tight'>But not just for production, our <br /> twin hotel building is available <br /> for guests to reserve it!</p>
            <h4 className='font-aclonica flex justify-center items-center gap-1 cursor-pointer w-fit hover:underline underline-offset-2 active:opacity-50'>Reserve a room<ArrowUpRight strokeWidth={2.5} /></h4>
          </div>
          <Gallery />
        </div>
      </section>
    </>
  )
}

export default IntegratedComplexSection
