import Image from 'next/image'
import React, { useState } from 'react'

function Admin({ orders, products }) {
  const [pizzaList, setPizzaList] = useState(products)
  const [orderList, setOrderList] = useState(orders)
  const status = ['preparing', 'on the way', 'delivered']
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE',
      })
      await res.json()
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id))
    } catch (err) {
      console.log(err)
    }
  }
  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0]
    const currentStatus = item.status
    try {
      const res = await fetch(`http://localhost:3000/api/orders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: currentStatus + 1 }),
      })
      const data = await res.json()
      console.log(data)

      setOrderList([data, ...orderList.filter((order) => order._id !== id)])
      console.log(orderList)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <section className="flex p-12 -container">
      <div className="flex-1 -item ">
        <h1 className="my-5 text-3xl font-bold -title">Products</h1>
        <table className="w-full text-left border-spacing-5">
          <thead>
            <tr className="-trTitle sm:hidden">
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzaList?.map((product) => (
              <tr className="-trTitle sm:hidden" key={product?._id}>
                <td>
                  <Image
                    src={product?.img}
                    width={50}
                    height={50}
                    style={{
                      objectFit: 'cover',
                    }}
                    alt=""
                  />
                </td>
                <td>{product?._id.slice(0, 5)}...</td>
                <td>{product?.title}</td>
                <td>{product?.prices[0]}</td>
                <td>
                  <button className="p-1 mr-3 text-white bg-teal-500 border-none -button">
                    Edit
                  </button>
                  <button
                    className="p-1 text-white bg-red-600 border-none -button"
                    onClick={() => handleDelete(product?._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-1 -item ">
        <h1 className="my-5 text-3xl font-bold -title">Orders</h1>
        <table className="w-full text-left border-spacing-5">
          <thead>
            <tr className="-trTitle sm:hidden">
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <tr className="capitalize -trTitle sm:hidden" key={order._id}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className="p-1 mb-3 mr-3 text-white bg-teal-300 border-none"
                    onClick={() => handleStatus(order._id)}
                  >
                    Next Stage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || ''
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }
  const productsRes = await fetch('http://localhost:3000/api/products')
  const productsList = await productsRes.json()
  const orderRes = await fetch('http://localhost:3000/api/orders')
  const orderList = await orderRes.json()

  return {
    props: {
      orders: orderList,
      products: productsList,
    },
  }
}
export default Admin
