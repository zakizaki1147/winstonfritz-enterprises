import React from 'react'
import ExhibitionHall from "../assets/wfe-exhibition-hall-bg.png"
import { ArrowUpRight } from 'lucide-react'

const ExhibitionHallSection = () => {
  return (
    <>
      <section className='w-full h-screen flex flex-col justify-center items-center text-cream-main relative'>
        <img src={ExhibitionHall} alt="exhibition hall" className='absolute inset-0 w-full h-screen -z-10 opacity-20' />
        <div className='h-[560px] flex flex-col justify-center items-center'>
          <h2 className='font-aclonica text-2xl tracking-wider bg-blue-main px-5 py-2'>COME SEE US AT...</h2>
          <h1 className='font-aclonica text-[40px] text-center tracking-widest bg-blue-main px-5 py-2'>THE WINSTON-FRITZ EXHIBITION HALL</h1>
          <h3 className='font-montserrat font-medium text-lg tracking-wider bg-blue-main px-5 py-2'>Located in <strong>Midgard</strong>, near the <strong>Yggdrasil Tree!</strong></h3>
        </div>
        <h3 className='font-aclonica flex justify-center items-center gap-1 bg-blue-main px-5 py-3 rounded cursor-pointer hover:underline underline-offset-2 active:text-cream-main/50 transition'>See on Maps<ArrowUpRight strokeWidth={2.5} /></h3>
      </section>
    </>
  )
}

export default ExhibitionHallSection
