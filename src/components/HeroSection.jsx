import React from 'react'
import WFELogo from "../assets/WFE-logo-transparent.svg"
import { ChevronsDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <>
      <section className='w-full h-screen p-10 lg:pt-16 flex flex-col justify-center items-center gap-8'>
        <div className='flex flex-col justify-center items-center gap-6 lg:gap-8'>
          <div className='w-48 lg:w-[360px]'>
            <img src={WFELogo} alt="logo" className='w-full' />
          </div>
          <h1 className='text-cream-main font-aclonica text-center text-2xl lg:text-[40px] tracking-widest leading-tight'>WINSTON-FRITZ <br /> ENTERPRISES</h1>
        </div>
        <h2 className='text-cream-main font-aclonica text-center text-sm lg:text-2xl tracking-wider'>"PROGRESS BEGINS TOGETHER"</h2>
        <a href="/" className='flex justify-center items-center gap-1 group'>
          <h2 className='font-aclonica text-sm lg:text-2xl text-cream-main flex justify-center items-center gap-1 cursor-pointer w-fit hover:underline underline-offset-8 active:opacity-50'>
            BEGIN OUR PROGRESS 
            <span className='hidden lg:block'><ChevronsDown size={32} strokeWidth={2.5} /></span>
            <span className='block lg:hidden'><ChevronsDown size={20} /></span></h2>
        </a>
      </section>
    </>
  )
}

export default HeroSection
