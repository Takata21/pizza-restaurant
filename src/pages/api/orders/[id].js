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
      const order = await Order.findById(id)
      res.status(200).json(order)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  if (method === 'PUT') {
    console.log(req.body)
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      })
      console.log(order)
      res.status(200).json(order)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  if (method === 'DELETE') {
    try {
      await Order.findByIdAndDelete(id)
      res.status(200).json('The order has been delete')
    } catch (err) {
      console.log(err.message)
      res.status(500)
    }
  }
}
export default handler
