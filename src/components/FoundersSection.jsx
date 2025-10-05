import React from 'react'
import FounderCard from './FounderCard'
import Siluet1 from '../assets/siluet-1.png'
import Siluet2 from '../assets/siluet-2.png'
import Handshake from '../assets/handshake.png'

const siluetImages = [
  {id: 1, src: Siluet1, name: 'SIR WINSTON', title: 'The First Doctor of Management'},
  {id: 2, src: Siluet2, name: 'KING FRITZ', title: 'The Great King of Cindervale'}
]

const FoundersSection = () => {
  return (
    <>
      <section className='w-full flex flex-col justify-center items-center gap-32 px-10 py-20'>
        <div className='flex flex-col justify-center items-center gap-10'>
          <h2 className='text-lg lg:text-2xl font-aclonica text-cream-main text-center'>MEET OUR GREAT FOUNDERS!</h2>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16'>
            {siluetImages.map((siluetImage) => (
              <FounderCard key={siluetImage.id} siluetImage={siluetImage} />
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 text-cream-main'>
          <h2 className='lg:text-xl text-center font-aclonica'>With SIR WINSTON's intelligence and KING FRITZ's wisdom,</h2>
          <div className=' lg:w-[560px]'>
            <img src={Handshake} alt="" />
          </div>
          <p className='text-center font-medium hidden lg:block'>these two great figure has lead the Winston-Fritz Enterprises <br /> for decades and managed to bring humanity to the greater world.</p>
          <p className='text-center text-xs font-medium lg:hidden'>these two great figure has lead the Winston-Fritz Enterprises for decades and managed to bring humanity to the greater world.</p>
        </div>
      </section>
    </>
  )
}

export default FoundersSection
