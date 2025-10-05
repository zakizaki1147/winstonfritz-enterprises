import React from 'react'
import FAQsDropdown from './FAQsDropdown'

const FAQsSection = () => {
  return (
    <>
      <section className='w-full h-screen flex flex-col justify-center items-center gap-8 p-10 lg:p-0 bg-cream-main'>
        <h2 className='text-blue-main text-lg lg:text-2xl text-center font-aclonica'>FREQUENTLY ASKED QUESTIONS</h2>
        <div className='h-[400.5px]'>
          <FAQsDropdown />
        </div>
      </section>
    </>
  )
}

export default FAQsSection
