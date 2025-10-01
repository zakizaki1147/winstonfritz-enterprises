import React from 'react'
import WFELogo from "../assets/WFE-logo-transparent.svg"
import { ChevronsDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <>
      <section className='w-full h-screen pt-16 flex flex-col justify-center items-center gap-8'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <div className='w-[360px]'>
            <img src={WFELogo} alt="logo" className='w-full' />
          </div>
          <h1 className='text-cream-main font-aclonica text-center text-[40px] tracking-widest leading-tight'>WINSTON-FRITZ <br /> ENTERPRISES</h1>
        </div>
        <h2 className='text-cream-main font-aclonica text-2xl tracking-wider'>"PROGRESS BEGINS TOGETHER"</h2>
        <a href="/" className='font-aclonica text-2xl text-cream-main flex justify-center items-center gap-1 group'>
          <h2 className='flex justify-center items-center gap-1 cursor-pointer w-fit hover:underline underline-offset-8 active:opacity-50'>BEGIN OUR PROGRESS<ChevronsDown size={32} strokeWidth={2.5} /></h2>
        </a>
      </section>
    </>
  )
}

export default HeroSection
