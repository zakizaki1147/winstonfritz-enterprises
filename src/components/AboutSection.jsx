import React from 'react'
import StatisticsColumn from './StatisticsColumn'

const AboutSection = ({ id }) => {
  return (
    <>
      <section className='w-full h-screen flex justify-center items-center gap-20' id='aboutUs'>
        <div className='w-[400px] flex flex-col justify-center items-center gap-3 text-cream-main'>
          <h2 className='font-aclonica text-2xl tracking-wide'>Welcome!</h2>
          <p className='leading-tight text-justify'>Winston-Fritz Enterprises is a global innovator dedicated to shaping the future through technology, energy, and advanced solutions. Over the years, the company has earned 20+ recognized awards, developed 35+ innovative products, and successfully completed 85+ projects across industries.</p>
          <p className='leading-tight text-justify'>With a 98% satisfaction rating and 90% customer retention, Winston-Fritz Enterprises continues to build strong partnerships and deliver trusted results. Backed by 137 collaborations, a growing workforce of 1,865 employees, and a global reach of more than 21,000 customers, the company stands as a symbol of progress and reliability worldwide.</p>
        </div>
        <StatisticsColumn />
      </section>
      <div className='w-full p-12 flex flex-col justify-center items-center gap-4 bg-cream-main text-blue-main font-aclonica'>
        <h1 className='text-4xl text-center leading-tight tracking-widest'>WE ARE READY TO BRING <br /> HUMANITY TO THE GREATER WORLD.</h1>
      </div>
    </>
  )
}

export default AboutSection
