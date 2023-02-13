import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { AiOutlinePhone, AiOutlineShoppingCart } from 'react-icons/ai'
function Navbar() {
  return (
    <header className="-container h-28 px-12 bg-[#d1411e] fixed left-0 right-0 z-10 top-0 ">
      <nav className="flex items-center justify-between h-full">
        <div className="flex items-center flex-[3] item">
          <Link
            href="/"
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
          >
            <AiOutlinePhone size={32} color="#d1411e" />
          </Link>
          <div className="items-center ml-5 text-white -text sm:flex sm:flex-col">
            <p className="text-xs font-medium">ORDER NOW</p>
            <p className="text-xl font-bold">012 345</p>
          </div>
        </div>
        <div className="item flex items-center flex-[3] -center sm:hidden ">
          <ul className="flex items-center text-white">
            <li className="mx-5 font-medium ">Homepage</li>
            <li className="mx-5 font-medium ">Products</li>
            <li className="mx-5 font-medium ">Menu</li>
            <div className="flex items-center justify-center w-40 h-16">
              <h1 className="text-3xl">FALLIN</h1>
            </div>
            <li className="mx-5 font-medium ">Events</li>
            <li className="mx-5 font-medium ">Blog</li>
            <li className="mx-5 font-medium ">Contact</li>
          </ul>
        </div>
        <button className="relative flex items-center justify-end flex-1 item -right">
          <AiOutlineShoppingCart size={30} color="#fff" />
          <span className="absolute top-[-10px] right-[-10px]  font-semibold w-5 h-5 rounded-full flex justify-center items-center bg-white text-[#d1411e]">
            2
          </span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
