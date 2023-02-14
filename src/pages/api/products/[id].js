// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../utils/mongo'
import Products from '../../../models/Product'
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req
  dbConnect()
  if (method === 'GET') {
    try {
      const product = await Products.findById(id)
      res.status(200).json(product)
    } catch (err) {
      console.log(err)
      res.status(500)
    }
  }
  if (method === 'PUT') {
    try {
      const product = await Products.create(req.body)
      res.status(201).json(product)
    } catch (err) {
      console.log(err.message)
      res.status(500)
    }
  }
  if (method === 'DELETE') {
    try {
      const product = await Products.create(req.body)
      res.status(201).json(product)
    } catch (err) {
      console.log(err.message)
      res.status(500)
    }
  }
}
