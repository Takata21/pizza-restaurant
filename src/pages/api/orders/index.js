import dbConnect from '../../../utils/mongo'
import Order from '../../../models/Order'

const handler = async (req, res) => {
  await dbConnect()
  const {
    method,
    query: { id },
  } = req
  if (method === 'GET') {
    try {
      const orders = await Order.find()
      res.status(200).json(orders)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  if (method === 'POST') {
    try {
      console.log(req.body)
      const order = await Order.create(req.body)
      res.status(201).json(order)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}
export default handler
