import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
import { useRouter } from 'next/router'
import { reset } from '../redux/cartSlice'
import OrderDetail from '@/components/OrderDetail'

function Cart() {
  const [open, setOpen] = useState(false)
  const [cash, setCash] = useState(false)
  // This values are the props in the UI
  const cart = useSelector((state) => state.cart)
  const amount = cart.total
  const currency = 'USD'
  const style = { layout: 'vertical' }
  const dispatch = useDispatch()
  const router = useRouter()

  const createOrder = async (data) => {
    try {
      const res = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log(res)
      const response = await res.json()
      console.log(response)
      res.status === 201 && router.push(`/orders/${response._id}`)
      dispatch(reset())
    } catch (err) {
      console.log(err)
    }
  }

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
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              })
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
                className="pt-5 -tr sm:flex sm:flex-col sm:text-center sm:mb-5"
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
            <b className="ml-3 -totalTextTitle">Subtotal:</b>${cart.total}
          </div>
          <div className="-totalText">
            <b className="ml-3 -totalTextTitle">Discount:</b>$0.00
          </div>
          <div className="-totalText">
            <b className="ml-3 -totalTextTitle">Total:</b>${cart.total}
          </div>
          {open ? (
            <div className="flex flex-col mt-3">
              <button
                className="p-2 mb-1 font-bold text-teal-500 bg-white"
                onClick={() => setCash(!cash)}
              >
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
                className="z-10"
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
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  )
}

export default Cart
