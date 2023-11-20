import { Order } from '../../../lib/interfaces/order.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const ordersDatabase = event.context.ordersDatabase
    const orderId = getRouterParam(event, 'id')

    // Check if the order with the given ID exists
    const orderExists = await ordersDatabase.exists(orderId)
    if (!orderExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Order not found',
      })
    }

    // Check if the order with the given ID exists
    const order: Order = await ordersDatabase.get(orderId)

    return { order }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
