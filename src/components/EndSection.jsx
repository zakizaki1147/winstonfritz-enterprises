import React from 'react'
import LeftQuotationMark from "../assets/left-quotation-mark.svg"
import WFELogo from "../assets/WFE-logo-transparent.svg"
import { Camera, MessageCircle, Snail, TypeOutline } from 'lucide-react'

const companyFooterContents = [
  {id: 1, content: 'About Us'},
  {id: 2, content: 'Founders'},
  {id: 3, content: 'Career'},
  {id: 4, content: 'FAQs'},
  {id: 5, content: 'Contact Us'}
]

const productsServicesFooterContents = [
  {id: 1, content: 'Gadgets'},
  {id: 2, content: 'Renewable Energy'},
  {id: 3, content: 'Robotics'},
  {id: 4, content: 'Software Systems'},
  {id: 5, content: 'Tech Consulting'},
  {id: 6, content: 'Tech Repair'}
]

const locationsFooterContents = [
  {id: 1, content: 'First Factory'},
  {id: 2, content: 'Exhibition Hall'},
  {id: 3, content: 'Integrated Complex'}
]

const socialsFooterContents = [
  {id: 1, content: <MessageCircle />},
  {id: 2, content: <Camera />},
  {id: 3, content: <Snail />},
  {id: 4, content: <TypeOutline />}
]

const EndSection = () => {
  return (
    <>
      <section className='w-full lg:h-screen flex flex-col justify-center items-center'>
        <div className='bg-cream-main w-full h-full text-cream-main font-aclonica flex flex-col justify-center items-center gap-8 p-10'>
          <h2 className='hidden lg:block text-blue-main text-xl text-center mt-20'>Thanks for coming! We're happy to help!</h2>
          <h2 className='lg:hidden text-blue-main text-center mt-20'>Thanks for coming! <br /> We're happy to help!</h2>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='font-serif text-4xl tracking-wider bg-blue-main p-3 w-fit'>
              <img src={LeftQuotationMark} alt="quote" className='w-4 lg:w-7' />
            </h2>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-xs lg:text-lg text-center tracking-wider bg-blue-main px-5 pt-3 pb-1 w-fit'>Progress of this world can't be done alone.</h2>
              <h2 className='text-xs lg:text-lg text-center tracking-wider bg-blue-main px-5 py-3 w-fit'>We must stand together for the progress of this world.</h2>
            </div>
            <h2 className='text-sm lg:text-lg tracking-wider bg-blue-main px-5 py-2 w-fit'>-Sir Winston</h2>
          </div>
        </div>
        <div className='w-full h-screen lg:h-auto flex flex-col justify-center items-center gap-8 p-10 lg:p-0 lg:px-24 lg:py-8 text-cream-main'>
          <div className='grid grid-cols-1 lg:grid-cols-4 w-full justify-between gap-5 lg:gap-0'>
            <div className='flex flex-col justify-center items-center gap-4'>
              <img src={WFELogo} alt="logo" className='w-44' />
              <h3 className='font-aclonica text-center text-lg tracking-widest leading-tight'>WINSTON-FRITZ <br /> ENTERPRISES</h3>
            </div>
            <div className='flex flex-col lg:items-center gap-1'>
              <h3 className='font-aclonica text-sm lg:text-base'>Company</h3>
              <ul className='flex flex-col gap-1 text-xs lg:text-sm font-medium'>
                {companyFooterContents.map((companyFooterContent) => (
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit active:opacity-50' key={companyFooterContent.id}>{companyFooterContent.content}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col lg:items-center gap-1'>
              <h3 className='font-aclonica text-sm lg:text-base'>Products & Services</h3>
              <ul className='flex flex-col gap-1 text-xs lg:text-sm font-medium'>
                {productsServicesFooterContents.map((productsServicesFooterContent) => (
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit pr-10 active:opacity-50' key={productsServicesFooterContent.id}>{productsServicesFooterContent.content}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col lg:items-center gap-1 lg:hidden'>
              <h3 className='font-aclonica text-sm lg:text-base'>Locations</h3>
              <ul className='flex flex-col gap-1 text-xs lg:text-sm font-medium'>
                {locationsFooterContents.map((locationsFooterContent) => (
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit active:opacity-50' key={locationsFooterContent.id}>{locationsFooterContent.content}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col lg:items-center gap-1 lg:hidden'>
              <h3 className='font-aclonica text-sm lg:text-base'>Socials</h3>
              <ul className='flex gap-3'>
                {socialsFooterContents.map((socialsFooterContent) => (
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit active:opacity-50' key={socialsFooterContent.id}>{socialsFooterContent.content}</li>
                ))}
              </ul>
            </div>
            <div className='lg:flex flex-col items-center gap-3 hidden'>
              <div className='flex flex-col gap-1'>
                <h3 className='font-aclonica text-sm lg:text-base'>Locations</h3>
                <ul className='flex flex-col gap-1 text-xs lg:text-sm font-medium'>
                  {locationsFooterContents.map((locationsFooterContent) => (
                    <li className='hover:underline underline-offset-2 cursor-pointer w-fit pr-2.5 active:opacity-50' key={locationsFooterContent.id}>{locationsFooterContent.content}</li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-col gap-0.5'>
                <h3 className='font-aclonica text-sm lg:text-base'>Socials</h3>
                <ul className='flex gap-2'>
                  {socialsFooterContents.map((socialsFooterContent) => (
                    <li className='cursor-pointer w-fit p-1 hover:border-b active:opacity-50' key={socialsFooterContent.id}>{socialsFooterContent.content}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center gap-2 lg:gap-4 w-full text-cream-main'>
            <hr className='w-full border' />
            <h5 className='w-fit font-semibold text-center text-sm lg:text-base whitespace-nowrap'>© Year 119 Winston-Fritz Enterprises</h5>
            <hr className='w-full border' />
          </div>
        </div>
      </section>
    </>
  )
}

export default EndSection
