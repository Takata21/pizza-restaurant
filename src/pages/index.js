import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../components/layout'
import Slider from '@/components/Slider/Slider'
import PizzaList from '@/components/PizzaList'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ pizzaList }) {
  return (
    <>
      <Head>
        <title>Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <PizzaList pizzaList={pizzaList} />
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  console.log(data)
  return {
    props: {
      pizzaList: data,
    },
  }
}
