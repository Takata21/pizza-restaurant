import React from 'react'
import Image from 'next/image'
function Cart() {
  return (
    <div className="flex p-12 -container sm:flex-col sm:p-5">
      <div className="-left flex-[2]">
        <table className="w-full -table border-spacing-5 sm:flex sm:flex-col sm:justify-center sm:items-center">
          <thead>
            <tr className="-trTitle sm:hidden">
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="-tr pt-5 sm:flex sm:flex-col sm:text-center sm:mb-5">
              <td className="pb-5 pt-5">
                <div className="relative w-24 h-24 -imgContainer sm:w-[35vw] sm:h-[35vw] sm:m-auto">
                  <Image
                    src="/img/pizza.png"
                    fill
                    alt=""
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </td>
              <td>
                <span className="-name sm:text-base font-medium text-lg text-[#d1411e]">
                  CORALZO
                </span>
              </td>
              <td>
                <span className="-extras sm:text-2xl">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className="-price sm:before:content-['Price:'] sm:before:font-medium sm:before:mr-1 sm:text-2xl">
                  $19.90
                </span>
              </td>
              <td>
                <span className="-quantity sm:before:content-['Quantity:'] sm:before:font-medium sm:before:mr-1 sm:text-2xl">
                  2
                </span>
              </td>
              <td>
                <span className="text-lg font-medium -total sm:before:content-['Total:'] sm:before:font-medium sm:before:mr-1 sm:text-2xl">
                  $39.80
                </span>
              </td>
            </tr>
            <tr className="-tr pt-5 sm:flex sm:flex-col sm:text-center sm:mb-5">
              <td className="pb-5">
                <div className="relative w-24 h-24 -imgContainer sm:w-[35vw] sm:h-[35vw] sm:m-auto">
                  <Image
                    src="/img/pizza.png"
                    fill
                    alt=""
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </td>
              <td>
                <span className="-name sm:text-base font-medium text-lg text-[#d1411e]">
                  CORALZO
                </span>
              </td>
              <td>
                <span className="-extras sm:text-2xl">
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className="-price sm:before:content-['Price:'] sm:before:font-medium sm:before:mr-1 sm:text-2xl">
                  $19.90
                </span>
              </td>
              <td>
                <span className="-quantity sm:before:content-['Quantity:'] sm:before:font-medium sm:before:mr-1 sm:text-2xl">
                  2
                </span>
              </td>
              <td>
                <span className="text-lg font-medium -total sm:before:content-['Total:'] sm:before:font-medium sm:before:mr-1 sm:text-2xl">
                  $39.80
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1 -right">
        <div className="-wrapper w-[90%] max-h-[300px] bg-[#333] p-12 pt-3 flex flex-col justify-between text-white sm:m-auto">
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
          <button className="-button h-[30px] font-bold text-[#d1411e] bg-white mt-5">
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
