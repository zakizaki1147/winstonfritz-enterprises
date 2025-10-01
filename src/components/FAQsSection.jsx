import React from 'react'
import FAQsDropdown from './FAQsDropdown'

const FAQsSection = () => {
  return (
    <>
      <section className='w-full h-screen flex flex-col justify-center items-center gap-8 bg-cream-main'>
        <h2 className='text-blue-main text-2xl font-aclonica'>FREQUENTLY ASKED QUESTIONS</h2>
        <div className='h-[400.5px]'>
          <FAQsDropdown />
        </div>
      </section>
    </>
  )
}

export default FAQsSection
