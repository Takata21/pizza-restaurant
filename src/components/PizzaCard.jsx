import Image from 'next/image'
import React from 'react'

function PizzaCard() {
  return (
    <article className="w-[22%] py-5 p-3 px-10 flex items-center justify-center flex-col">
      <Image src="/img/pizza.png" width={500} height={500} alt="" />
      <h2 className="text-lg font-bold text-[#d1411e]">FIORO DI ZUCCA</h2>
      <span className="text-lg font-bold text-[#666]">$19.00</span>
      <p className="text-center text-[#777]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        tempore.
      </p>
      PizzaCard
    </article>
  )
}

export default PizzaCard
