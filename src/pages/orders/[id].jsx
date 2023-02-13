import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Orders.module.css'
function Orders_() {
  const status = 0
  const statusClass = (index) => {
    if (index - status < 1) return styles.done
    if (index - status === 1) return styles.inProgress
    if (index - status > 1) return styles.undone
  }
  return (
    <div className="-container p-12 flex sm:flex-col">
      <div className="-left flex-[2]">
        <div className="-row">
          <table className="-table w-full text-left mb-12">
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
                    129837819237
                  </span>
                </td>
                <td>
                  <span className="-name sm:before:content-['Customer:'] sm:before:font-medium sm:before:mr-1">
                    John Doe
                  </span>
                </td>
                <td>
                  <span className="-address sm:before:content-['Direction:'] sm:before:font-medium sm:before:mr-1">
                    Elton st. 212-33 LA
                  </span>
                </td>
                <td>
                  <span className="-total sm:before:content-['Total:'] sm:before:font-medium sm:before:mr-1">
                    $79.80
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="-row flex justify-around sm:flex-col sm:items-center sm:justify-center">
          <div className={styles.done}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
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
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
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
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
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
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="-right flex-1">
        <div className="-wrapper w-[90%] max-h-[300px] bg-[#333] p-12 pt-3 flex flex-col justify-between text-white sm:m-auto sm:w-full">
          <h2 className="-title">CART TOTAL</h2>
          <div className="-totalText">
            <b className="-totalTextTitle ml-3">Subtotal:</b>$79.60
          </div>
          <div className="-totalText">
            <b className="-totalTextTitle ml-3">Discount:</b>$0.00
          </div>
          <div className="-totalText">
            <b className="-totalTextTitle ml-3">Total:</b>$79.60
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

export default Orders_
