import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Orders.module.css'
function Orders({ order }) {
  const status = order.status
  const statusClass = (index) => {
    if (index - status < 1) return styles.done
    if (index - status === 1) return styles.inProgress
    if (index - status > 1) return styles.undone
  }
  return (
    <div className="flex p-12 -container sm:flex-col">
      <div className="-left flex-[2]">
        <div className="-row">
          <table className="w-full mb-12 text-left -table">
            <thead>
              <tr className="-trTitle sm:hidden">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="-tr sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-xl">
                <td>
                  <span className="-id sm:before:content-['Order:'] sm:before:font-medium sm:before:mr-1">
                    {order._id}
                  </span>
                </td>
                <td>
                  <span className="-name sm:before:content-['Customer:'] sm:before:font-medium sm:before:mr-1">
                    {order.customer}
                  </span>
                </td>
                <td>
                  <span className="-address sm:before:content-['Direction:'] sm:before:font-medium sm:before:mr-1">
                    {order.address}
                  </span>
                </td>
                <td>
                  <span className="-total sm:before:content-['Total:'] sm:before:font-medium sm:before:mr-1">
                    {order.total}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-around -row sm:flex-col sm:items-center sm:justify-center">
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 -right">
        <div className="-wrapper w-[90%] max-h-[300px] bg-[#333] p-12 pt-3 flex flex-col justify-between text-white sm:m-auto sm:w-full">
          <h2 className="-title">CART TOTAL</h2>
          <div className="-totalText">
            <b className="ml-3 -totalTextTitle">Subtotal:</b>${order.total}
          </div>
          <div className="-totalText">
            <b className="ml-3 -totalTextTitle">Discount:</b>$0.00
          </div>
          <div className="-totalText">
            <b className="ml-3 -totalTextTitle">Total:</b>${order.total}
          </div>
          <button
            disabled
            className="-button h-[30px] font-bold text-teal-500 bg-white mt-5 cursor-not-allowed disabled:grayscale"
          >
            PAID
          </button>
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps = async ({ params }) => {
  console.log(params)
  try {
    const res = await fetch(`http://localhost:3000/api/orders/${params.id}`)
    const data = await res.json()
    return {
      props: { order: data },
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export default Orders
