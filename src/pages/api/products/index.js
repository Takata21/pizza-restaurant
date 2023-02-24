// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../utils/mongo'
import Products from '../../../models/Product'
export default async function handler(req, res) {
  const { method, cookies } = req
  const token = cookies.token
  dbConnect()
  if (method === 'GET') {
    try {
      const products = await Products.find()
      res.status(200).json(products)
    } catch (err) {
      console.log(err)
      res.status(500)
    }
  }
  if (method === 'POST') {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json('Not authenticated!')
    }
    try {
      const product = await Products.create(req.body)
      res.status(201).json(product)
    } catch (err) {
      console.log(err.message)
      res.status(500)
    }
  }
}
