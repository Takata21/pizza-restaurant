import Image from 'next/image'
import React from 'react'

function PizzaCard() {
  return (
    <article className="w-[22%] py-5 p-3 px-10 flex items-center justify-center flex-col sm:w-full">
      <Image src="/img/pizza.png" width={500} height={500} alt="" />
      <h2 className="text-lg font-bold text-[#d1411e] sm:text-3xl">
        FIORO DI ZUCCA
      </h2>
      <span className="text-lg font-bold text-[#666] sm:text-2xl">$19.00</span>
      <p className="text-center text-[#777] sm:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        tempore.
      </p>
    </article>
  )
}

export default PizzaCard
