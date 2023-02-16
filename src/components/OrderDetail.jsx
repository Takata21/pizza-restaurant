import React, { useState } from 'react'
const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState('')
  const [address, setAddress] = useState('')

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 })
  }

  return (
    <div className="-container w-full h-[100vh] absolute top-0 left-0 flex items-center justify-center bg-gray-500/40 z-[998]">
      <div className="-wrapper gap-3  w-[500px] bg-white rounded-2xl p-12 flex items-center justify-center flex-col">
        <h1 className="my-5 text-3xl font-light -title">
          You will pay ${total} after delivery.
        </h1>
        <div className="flex flex-col w-full -item ">
          <label className="mb-2 -label">Name Surname</label>
          <input
            placeholder="John Doe"
            type="text"
            className="h-10 px-3 border border-gray-500 -input"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full -item ">
          <label className="mb-2 -label">Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className="h-10 px-3 border border-gray-500 -input"
          />
        </div>
        <div className="flex flex-col w-full -item ">
          <label className="mb-2 -label">Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className="px-3 border border-gray-500 -textarea"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          className="px-5 py-2 text-base font-medium text-white bg-teal-500 border-none rounded-lg cursor-pointer -button"
          onClick={handleClick}
        >
          Order
        </button>
      </div>
    </div>
  )
}

export default OrderDetail
