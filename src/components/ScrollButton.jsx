import React, { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 600) {
      setVisible(true)
    } else if (scrolled <= 600) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener("scroll", toggleVisible)

  return (
    <>
      <button
        className={`p-3 rounded-full bg-blue-main text-cream-main w-fit fixed right-7 bottom-7 ring cursor-pointer hover:ring-2 active:bg-blue-main active:text-cream-main/50 ring-cream-main active:ring-cream-main/50 transition
          ${visible ? 'block' : 'hidden'}
        `}
        onClick={scrollToTop}
      >
        <ChevronUp size={28} />
      </button>
    </>
  )
}

export default ScrollButton
