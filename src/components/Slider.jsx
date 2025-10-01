import React from 'react'

const Slider = ({ sliderImages, direction = 'right' }) => {
  return (
    <>
      <div className='w-full h-full overflow-hidden'>
        <div className={`flex gap-2 w-max ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
          {[...sliderImages, ...sliderImages].map((sliderImage, index) => (
            <div className='min-h-[240px] w-full rounded overflow-hidden' key={`${sliderImage.id}-${index}`}>
              <img src={sliderImage.image} alt="slider" className='h-[240px] w-full object-cover opacity-50 hover:opacity-90 transition' />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Slider
