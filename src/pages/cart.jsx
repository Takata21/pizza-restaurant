import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'

function Cart() {
  const [open, setOpen] = useState(false)
  // This values are the props in the UI
  const amount = '2'
  const currency = 'USD'
  const style = { layout: 'vertical' }
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer()

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      })
    }, [currency, showSpinner])

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId
              })
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            })
          }}
        />
      </>
    )
  }
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
            {cart.products.map((product) => (
              <tr
                className="-tr pt-5 sm:flex sm:flex-col sm:text-center sm:mb-5"
                key={product._id}
              >
                <td className="pb-5">
                  <div className="relative w-24 h-24 -imgContainer sm:w-[35vw] sm:h-[35vw] sm:m-auto">
                    <Image
                      src={product.img}
                      fill
                      alt=""
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </td>
                <td>
                  <span className="-name sm:text-base font-medium text-lg text-[#d1411e]">
                    {product.title}
                  </span>
                </td>
                <td>
                  <span className="-extras sm:text-2xl">
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text} </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className="-price sm:before:content-['Price:'] sm:before:font-medium sm:before:mr-1 sm:text-2xl">
                    {product.price}
                  </span>
                </td>
                <td>
                  <span className="-quantity sm:before:content-['Quantity:'] sm:before:font-medium sm:before:mr-1 sm:text-2xl">
                    {product.quantity}
                  </span>
                </td>
                <td>
                  <span className="text-lg font-medium -total sm:before:content-['Total:'] sm:before:font-medium sm:before:mr-1 sm:text-2xl">
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-1 -right">
        <div className="-wrapper w-[90%] max-h-[300px] bg-[#333] p-12 pt-3 flex flex-col justify-between text-white sm:m-auto">
          <h2 className="-title">CART TOTAL</h2>
          <div className="-totalText">
            <b className="-totalTextTitle ml-3">Subtotal:</b>${cart.total}
          </div>
          <div className="-totalText">
            <b className="-totalTextTitle ml-3">Discount:</b>$0.00
          </div>
          <div className="-totalText">
            <b className="-totalTextTitle ml-3">Total:</b>${cart.total}
          </div>
          {open ? (
            <div className="flex mt-3 flex-col">
              <button className="p-2 mb-1 text-teal-500 bg-white font-bold">
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  'client-id':
                    'AcaiogoJbvgJT3IXtmyW0TIao4ovVU4M-nwZONsfnzO1T83filZkdiJX2Oaw5d2kn3WluaefZPO_m9VR',
                  components: 'buttons',
                  currency: 'USD',
                  'disable-funding': 'credit,card,p24',
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              className="-button h-[30px] font-bold text-[#d1411e] bg-white mt-5"
              onClick={() => setOpen(true)}
            >
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
