import Image from 'next/image'
import React, { useState } from 'react'

function Product() {
  const [size, setSize] = useState(0)
  const pizza = {
    id: 1,
    img: '/img/pizza.png',
    name: 'CAMPAGNOLA',
    price: [19.9, 23.9, 27.9],
    dec: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae tenetur dolorum, ex ipsum dolorem! Eos eligendi quis impedit vel.',
  }
  return (
    <section className="h-[calc(100vh_-_100px)] flex">
      <section className="flex items-center justify-center flex-1 h-full -left">
        <div className="-imgContainer w-[80%] h-[80%] relative">
          <Image src={pizza.img} fill alt="" />
        </div>
      </section>
      <section className="flex-1 p-5 -right">
        <h1 className="my-4 text-3xl font-bold -title">{pizza.name}</h1>
        <span className="-price text-[#d1411e] text-2xl font-normal border-b border-[#d1411e] my-3 inline-block">
          ${pizza.price[size]}
        </span>
        <p className="-desc">{pizza.dec}</p>
        <h3 className="my-4 text-2xl font-bold -choose">Choose the size</h3>
        <div className="flex justify-between w-2/5 -sizes">
          <button className="relative w-8 h-8 -size" onClick={() => setSize(0)}>
            <Image src="/img/size.png" fill alt="" />
            <span className="-number flex justify-center items-center absolute top-[-5px] text-xs right-[-20px] text-white px-1 rounded-xl bg-teal-500">
              Small
            </span>
          </button>
          <button
            className="-size w-[40px] h-[40px] relative"
            onClick={() => setSize(1)}
          >
            <Image src="/img/size.png" fill alt="" />
            <span className="-number flex justify-center items-center absolute top-[-5px] text-xs right-[-20px] text-white px-1 rounded-xl bg-teal-500">
              Medium
            </span>
          </button>
          <button
            className="-size w-[50px] h-[50px] relative"
            onClick={() => setSize(2)}
          >
            <Image src="/img/size.png" fill alt="" />
            <span className="-number flex justify-center items-center absolute top-[-5px] text-xs right-[-20px] text-white px-1 rounded-xl bg-teal-500">
              Large
            </span>
          </button>
        </div>
        <h3 className="my-4 text-2xl font-bold -choose">
          Choose additional ingredients
        </h3>
        <div className="flex mb-8 -ingredients">
          <div className="flex items-center gap-2 mr-3 text-sm font-medium -option">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="w-5 h-5 -checkbox"
            />
            <label className="select-none" htmlFor="double">
              Double Ingredients
            </label>
          </div>
          <div className="flex items-center gap-2 mr-3 text-sm font-medium -option">
            <input
              className="w-5 h-5 -checkbox"
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label className="select-none" htmlFor="cheese">
              Extra Cheese
            </label>
          </div>
          <div className="flex items-center gap-2 mr-3 text-sm font-medium -option">
            <input
              className="w-5 h-5 -checkbox"
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label className="select-none" htmlFor="spicy">
              Spicy Sauce
            </label>
          </div>
          <div className="flex items-center gap-2 mr-3 text-sm font-medium -option">
            <input
              className="w-5 h-5 -checkbox"
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label className="select-none" htmlFor="garlic">
              Garlic Sauce
            </label>
          </div>
        </div>
        <div className="flex items-center -add">
          <input
            type="number"
            defaultValue={1}
            className="w-12 -quantity h-7"
          />
          <button className="-button p-2 flex items-center justify-center rounded-sm h-7 ml-3 bg-[#d1411e] text-white border-none font-medium">
            Add to Cart
          </button>
        </div>
      </section>
    </section>
  )
}

export default Product
