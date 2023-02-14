import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
function Product({ pizza }) {
  const [size, setSize] = useState(0)
  const [price, setPrice] = useState(pizza.prices[0])
  const [extras, setExtras] = useState([])
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const changePrice = (number) => {
    setPrice(price + number)
  }
  const handleChange = (e, option) => {
    const checked = e.target.checked

    if (checked) {
      changePrice(option.price)
      setExtras((prev) => [...prev, option])
    } else {
      setExtras(extras.filter((extra) => extra._id !== option._id))
      changePrice(-option.price)
    }
  }

  const handleSizes = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size]
    setSize(sizeIndex)
    changePrice(difference)
  }
  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }))
  }
  return (
    <section className="h-[calc(100vh_-_100px)] flex sm:h-auto sm:text-center sm:flex-col sm:mt-5">
      <section className="flex items-center justify-center flex-1 h-full -left">
        <div className="-imgContainer w-[80%] h-[80%] relative sm:w-[70vw] sm:h-[70vw]">
          <Image src={pizza.img} fill alt="" />
        </div>
      </section>
      <section className="flex-1 p-5 -right">
        <h1 className="my-4 text-3xl font-bold -title sm:m-1">{pizza.title}</h1>
        <span className="-price text-[#d1411e] text-2xl font-normal border-b border-[#d1411e] my-3 inline-block">
          ${price}
        </span>
        <p className="-desc">{pizza.desc}</p>
        <h3 className="my-4 text-2xl font-bold -choose">Choose the size</h3>
        <div className="flex justify-between w-2/5 -sizes sm:w-full sm:px-5">
          <button
            className="relative w-8 h-8 -size"
            onClick={() => handleSizes(0)}
          >
            <Image src="/img/size.png" fill alt="" />
            <span className="-number flex justify-center items-center absolute top-[-5px] text-xs right-[-20px] text-white px-1 rounded-xl bg-teal-500">
              Small
            </span>
          </button>
          <button
            className="-size w-[40px] h-[40px] relative"
            onClick={() => handleSizes(1)}
          >
            <Image src="/img/size.png" fill alt="" />
            <span className="-number flex justify-center items-center absolute top-[-5px] text-xs right-[-20px] text-white px-1 rounded-xl bg-teal-500">
              Medium
            </span>
          </button>
          <button
            className="-size w-[50px] h-[50px] relative"
            onClick={() => handleSizes(2)}
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
        <div className="flex mb-8 -ingredients sm:flex-col">
          {pizza.extraOptions.map((option) => (
            <div
              className="flex items-center gap-2 mr-3 text-sm font-medium -option sm:m-3 sm:text-lg"
              key={pizza._id}
            >
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className="w-5 h-5 -checkbox sm:w-6 sm:h-6"
                onChange={(e) => handleChange(e, option)}
              />
              <label className="select-none" htmlFor="double">
                Double Ingredients
              </label>
            </div>
          ))}
        </div>
        <div className="flex items-center  -add sm:justify-center">
          <input
            type="number"
            defaultValue={1}
            className="w-12 -quantity h-7 sm:h-12 sm:px-5 sm:py-3"
            onChange={() => setQuantity(e.target.value)}
          />
          <button
            className="-button p-2 flex items-center justify-center rounded-sm h-7 ml-3 bg-[#d1411e] text-white border-none font-medium sm:h-12 sm:px-5 sm:py-3"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </section>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`)
  const data = await res.json()
  console.log(data)
  return {
    props: {
      pizza: data,
    },
  }
}
export default Product
