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
      <section className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='bg-cream-main w-full h-full text-cream-main text-xl font-aclonica flex flex-col justify-center items-center gap-8'>
          <h2 className='text-blue-main mt-20'>Thanks for coming! We're happy to help!</h2>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='font-serif text-4xl tracking-wider bg-blue-main p-5 w-fit'>
              <img src={LeftQuotationMark} alt="quote" className='w-7' />
            </h2>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-lg tracking-wider bg-blue-main px-5 pt-2 pb-1 w-fit'>Progress of this world can't be done alone.</h2>
              <h2 className='text-lg tracking-wider bg-blue-main px-5 py-2 w-fit'>We must stand together for the progress of this world.</h2>
            </div>
            <h2 className='text-lg tracking-wider bg-blue-main px-5 py-2 w-fit'>-Sir Winston</h2>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-8 px-24 py-8 text-cream-main'>
          <div className='grid grid-cols-4 w-full justify-between'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <img src={WFELogo} alt="logo" className='w-36' />
              <h3 className='font-aclonica text-center tracking-widest leading-tight'>WINSTON-FRITZ <br /> ENTERPRISES</h3>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-sm font-medium'>
                <h3 className='font-aclonica text-base'>Company</h3>
                <ul className='flex flex-col gap-1'>
                  {companyFooterContents.map((companyFooterContent) => (
                    <li className='hover:underline underline-offset-2 cursor-pointer w-fit active:opacity-50' key={companyFooterContent.id}>{companyFooterContent.content}</li>
                  ))}
                  {/* <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>About</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Founders</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Career</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>FAQs</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Contact Us</li> */}
                </ul>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-sm font-medium'>
                <h3 className='font-aclonica text-base'>Products & Services</h3>
                <ul className='flex flex-col gap-1'>
                  {productsServicesFooterContents.map((productsServicesFooterContent) => (
                    <li className='hover:underline underline-offset-2 cursor-pointer w-fit active:opacity-50' key={productsServicesFooterContent.id}>{productsServicesFooterContent.content}</li>
                  ))}
                  {/* <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Gadgets</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Renewable Energy</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Robotics</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Software Systems</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Tech Consulting</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Tech Repair</li> */}
                </ul>
              </div>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <div className='text-sm font-medium'>
                <h3 className='font-aclonica text-base'>Locations</h3>
                <ul className='flex flex-col gap-1'>
                  {locationsFooterContents.map((locationsFooterContent) => (
                    <li className='hover:underline underline-offset-2 cursor-pointer w-fit pr-2.5 active:opacity-50' key={locationsFooterContent.id}>{locationsFooterContent.content}</li>
                  ))}
                  {/* <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>First Factory</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Exhibition Hall</li>
                  <li className='hover:underline underline-offset-2 cursor-pointer w-fit'>Integrated Complex</li> */}
                </ul>
              </div>
              <div className='text-sm font-medium'>
                <h3 className='font-aclonica text-base'>Socials</h3>
                <ul className='flex gap-2'>
                  {socialsFooterContents.map((socialsFooterContent) => (
                    <li className='cursor-pointer w-fit p-1 hover:border-b active:opacity-50' key={socialsFooterContent.id}>{socialsFooterContent.content}</li>
                  ))}
                  {/* <li className='cursor-pointer w-fit'><MessageCircle /></li>
                  <li className='cursor-pointer w-fit'><Camera /></li>
                  <li className='cursor-pointer w-fit'><Snail /></li>
                  <li className='cursor-pointer w-fit'><TypeOutline /></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4 w-full text-cream-main'>
            <hr className='w-full border' />
            <h5 className='w-fit font-semibold text-center whitespace-nowrap'>© Year 119 Winston-Fritz Enterprises</h5>
            <hr className='w-full border' />
          </div>
        </div>
      </section>
    </>
  )
}

export default EndSection
