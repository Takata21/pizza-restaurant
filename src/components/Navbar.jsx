import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <header className="-container h-28 px-12 bg-[#d1411e]">
      <nav className="flex items-center">
        <div className="item">
          <Link href="/">
            <Image src="/img/logo.webp" alt="" width="32" height="32" />
          </Link>
          <p>ORDER NOW</p>
          <p>012 345</p>
        </div>
        <div className="item -center">center</div>
        <div className="item -right">right</div>
      </nav>
    </header>
  )
}

export default Navbar
