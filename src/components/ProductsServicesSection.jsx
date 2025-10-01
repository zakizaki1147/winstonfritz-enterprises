import React from 'react'
import ProductsServicesCard from './ProductsServicesCard'
import PSImage1 from '../assets/p&s-gadgets.png'
import PSImage2 from '../assets/p&s-re.png'
import PSImage3 from '../assets/p&s-robotics.png'
import PSImage4 from '../assets/p&s-ss.png'
import PSImage5 from '../assets/p&s-tc.png'
import PSImage6 from '../assets/p&s-tr.png'

const productsServicesImages = [
  {id: 1, src: PSImage1, name: 'Gadgets', desc: 'A new generation of smart devices that integrate with everyday life.'},
  {id: 2, src: PSImage2, name: 'Renewable Energy', desc: 'Bio-plasma powered renewable energy that powers cities without leaving a carbon footprint.'},
  {id: 3, src: PSImage3, name: 'Robotics', desc: 'Advanced robotic units with adaptive intelligence that support the industrials.'},
  {id: 4, src: PSImage4, name: 'Software Systems', desc: 'Integrated intelligent software for smart cities, government systems, and social networks.'},
  {id: 5, src: PSImage5, name: 'Tech Consulting', desc: 'A strategic partner in digital transformation for global institutions.'},
  {id: 6, src: PSImage6, name: 'Tech Repair', desc: 'Advanced technology repair services for all Winston-Fritz products.'}
]

const ProductsServicesSection = () => {
  return (
    <>
      <section className='w-full h-[2016.5px] py-12 flex justify-center items-center gap-40'>
        <div className='h-full bg-cream-main px-8 py-10 flex flex-col justify-center items-center gap-6 rounded'>
          <div className='flex-1 border-2 border-blue-main' />
          <h2 className='w-8 font-aclonica text-blue-main text-4xl text-center wrap-break-word leading-snug'>PRODUCTS <span className='text-cream-main'>&</span> & <span className='text-cream-main'>&</span> SERVICES</h2>
          <div className='flex-1 border-2 border-blue-main' />
        </div>
        <div className='flex flex-col justify-center items-center gap-6'>
          {productsServicesImages.map((productsServicesImage) => (
            <ProductsServicesCard key={productsServicesImage.id} productsServicesImage={productsServicesImage} />
          ))}
        </div>
      </section>
      <div className='w-full p-16 flex flex-col justify-center items-center gap-4 bg-cream-main text-blue-main font-aclonica'>
        <h1 className='text-4xl text-center leading-tight tracking-widest'>WANT TO SEE OUR PRODUCTS DIRECTLY?</h1>
      </div>
    </>
  )
}

export default ProductsServicesSection
