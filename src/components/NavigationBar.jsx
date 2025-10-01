import React from 'react'
import WFELogo from "../assets/WFE-logo-transparent.svg"

const navLinks = [
  {id: 1, content: "Products & Services"},
  {id: 2, content: "Locations"},
  {id: 3, content: "Careers"}
]

const NavigationBar = () => {
  return (
    <>
      <div className='bg-blue-main py-5 px-24 w-full fixed flex justify-between items-center z-50'>
        <a href='/' className='w-16'>
          <img src={WFELogo} alt="logo" />
        </a>
        <ul className='flex gap-6'>
          {navLinks.map((navLink) => (
            <li className='py-2 text-cream-main text-sm font-aclonica tracking-wide border-y-2 border-transparent hover:border-b-cream-main active:opacity-50 cursor-pointer' key={navLink.id}>{navLink.content}</li>
          ))}
          <li className='px-3 py-2 text-cream-main text-sm font-aclonica tracking-wide border-2 border-cream-main ring-cream-main hover:ring-1 active:opacity-50 cursor-pointer'>Contact Us</li>
        </ul>
      </div>
    </>
  )
}

export default NavigationBar
