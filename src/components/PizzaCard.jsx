import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PizzaCard({ pizza }) {
  return (
    <article className="w-[22%] py-5 p-3 px-10 flex items-center justify-center flex-col sm:w-full">
      <Link href={`/product/${pizza._id}`}>
        <Image src={pizza.img} width={500} height={500} alt="" />
        <h2 className="text-lg font-bold text-[#d1411e] sm:text-3xl">
          {pizza.title}
        </h2>
        <span className="text-lg font-bold text-[#666] sm:text-2xl">
          {pizza.prices[0]}
        </span>
        <p className="text-center text-[#777] sm:text-2xl">{pizza.desc}</p>
      </Link>
    </article>
  )
}

export default PizzaCard
