import React, { useState } from 'react'
import GalleryImage1 from '../assets/gallery-1.png'
import GalleryImage2 from '../assets/gallery-2.png'
import GalleryImage3 from '../assets/gallery-3.png'
import GalleryImage4 from '../assets/gallery-4.png'

const galleryImages = [
  {id: 1, image: GalleryImage1},
  {id: 2, image: GalleryImage2},
  {id: 3, image: GalleryImage3},
  {id: 4, image: GalleryImage4}
]

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(galleryImages[0].id)

  return (
    <>
      <div className='flex justify-center items-center gap-1 lg:gap-2'>
        {galleryImages.map((galleryImage) => (
          <div
            key={galleryImage.id}
            onClick={() => setActiveImage(galleryImage.id)}
            className={`rounded overflow-hidden transition-all duration-300 ease-in-out shadow
              ${activeImage === galleryImage.id ? 'w-[180px] h-[160px] lg:w-[560px] lg:h-[360px]' : 'w-[28px] h-[160px] lg:w-[60px] lg:h-[360px] hover:scale-[102%] cursor-pointer'}
            `}
          >
            <img src={galleryImage.image} alt="gallery" className='w-full h-full object-cover' />
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery
