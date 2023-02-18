import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../components/layout'
import Slider from '@/components/Slider/Slider'
import PizzaList from '@/components/PizzaList'
import Add from '@/components/Add'
import AddButton from '@/components/AddButton'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ pizzaList, admin }) {
  console.log(admin)
  const [close, setClose] = useState(true)
  return (
    <>
      <Head>
        <title>Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || ''
  let admin = false
  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return {
    props: {
      pizzaList: data,
      admin,
    },
  }
}
