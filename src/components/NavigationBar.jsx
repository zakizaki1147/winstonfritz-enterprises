import React, { useState, useEffect } from 'react'
import WFELogo from "../assets/WFE-logo-transparent.svg"
import { Menu, X } from 'lucide-react'

const navLinks = [
  {id: 1, content: "Products & Services"},
  {id: 2, content: "Locations"},
  {id: 3, content: "Careers"}
]

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <>
      <div className='bg-blue-main py-5 px-10 lg:px-24 w-full fixed flex justify-between items-center z-20'>
        <a href='/' className='w-12 lg:w-16'>
          <img src={WFELogo} alt="logo" />
        </a>
        <ul className='lg:flex gap-6 hidden'>
          {navLinks.map((navLink) => (
            <li className='py-2 text-cream-main text-sm font-aclonica tracking-wide border-y-2 border-transparent hover:border-b-cream-main active:opacity-50 cursor-pointer' key={navLink.id}>{navLink.content}</li>
          ))}
          <li className='px-3 py-2 text-cream-main text-sm font-aclonica tracking-wide border-2 border-cream-main ring-cream-main hover:ring-1 active:opacity-50 cursor-pointer'>Contact Us</li>
        </ul>

        <button onClick={toggleMenu} className='text-cream-main lg:hidden z-30'>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`bg-blue-main fixed top-16 right-0 p-10 pt-5 w-full h-screen lg:hidden transition-transform duration-500 ease-in-out z-20 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((navLink) => (
            <div className='py-2 mb-2 text-cream-main text-sm text-center font-aclonica tracking-wide border-y-2 border-transparent hover:border-b-cream-main active:opacity-50 cursor-pointer' key={navLink.id}>{navLink.content}</div>
          ))}
          <div className='px-3 py-2 text-cream-main text-sm text-center font-aclonica tracking-wide border-2 border-cream-main ring-cream-main hover:ring-1 active:opacity-50 cursor-pointer'>Contact Us</div>
        </div>
      </div>

      {menuOpen && (
        <div className='fixed inset-0 bg-black/40 z-10 lg:hidden' onClick={toggleMenu}></div>
      )}
    </>
  )
}

export default NavigationBar
