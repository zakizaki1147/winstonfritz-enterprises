import React from 'react'
import Slider from './Slider'
import SliderImage1 from '../assets/slider-1.png' 
import SliderImage2 from '../assets/slider-2.png' 
import SliderImage3 from '../assets/slider-3.png' 
import SliderImage4 from '../assets/slider-4.png' 
import SliderImage5 from '../assets/slider-5.png' 
import SliderImage6 from '../assets/slider-6.png' 
import SliderImage7 from '../assets/slider-7.png' 
import SliderImage8 from '../assets/slider-8.png' 
import SliderImage9 from '../assets/slider-9.png' 
import SliderImage10 from '../assets/slider-10.png' 
import { ArrowUpRight } from 'lucide-react'

const sliderUpImages = [
  {id: 1, image: SliderImage1},
  {id: 2, image: SliderImage2},
  {id: 3, image: SliderImage3},
  {id: 4, image: SliderImage4},
  {id: 5, image: SliderImage5},
]

const sliderBottomImages = [
  {id: 6, image: SliderImage6},
  {id: 7, image: SliderImage7},
  {id: 8, image: SliderImage8},
  {id: 9, image: SliderImage9},
  {id: 10, image: SliderImage10},
]

const CareerSection = () => {
  return (
    <>
      <section className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='w-full h-fit'>
          <Slider sliderImages={sliderUpImages} direction='right' />
        </div>
        <div className='lg:pt-2 h-full font-aclonica text-cream-main flex flex-col justify-center items-center gap-8 lg:gap-2 p-10'>
          <h1 className='hidden lg:block text-[40px] text-center tracking-widest lg:mt-8'>BE A PART OF THE WINSTON-FRITZ ENTERPRISES FAMILY!</h1>
          <h1 className='lg:hidden text-3xl text-center leading-relaxed tracking-widest'>BE A <br /> PART OF THE <br /> WINSTON-FRITZ <br /> ENTERPRISES <br /> FAMILY!</h1>
          <h2 className='flex lg:text-lg tracking-wider'>Send us your best CV <span className='flex justify-center items-center gap-1 ml-1.5 hover:underline underline-offset-2 active:opacity-50 cursor-pointer'>here <ArrowUpRight strokeWidth={2.5} /></span></h2>
        </div>
        <div className= 'w-full h-fit'>
          <Slider sliderImages={sliderBottomImages} direction='left' />
        </div>
      </section>
    </>
  )
}

export default CareerSection
