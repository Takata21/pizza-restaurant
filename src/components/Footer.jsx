import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="h-[calc(100vh_-_112px)] flex bg-[#222]">
      <div className="-item flex flex-1 relative">
        <Image src="/img/bg.png" fill alt="" style={{ objectFit: 'cover' }} />
      </div>
      <div className="-item flex flex-[2] p-12 justify-between relative">
        <article className="-card flex-1 px-5">
          <h2 className="text-white text-3xl font-bold">
            OH YES, We DID FALLIN PIZZA, WELL BAKED SLICE OF PIZZA
          </h2>
        </article>
        <article className="-card flex-1 px-5">
          <h2 className="text-lg text-[#b7903c]">FIND OUR RESTAURANT</h2>
          <p className="text-gray-300 my-3">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="text-gray-300 my-3">
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className="text-gray-300 my-3">
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className="text-gray-300 my-3">
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </article>
        <article className="-card flex-1 px-5">
          <h2 className="text-lg text-[#b7903c]">WORKING HOURS</h2>
          <p className="text-gray-300 my-3">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className="text-gray-300 my-3">
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </article>
      </div>
    </footer>
  )
}

export default Footer
