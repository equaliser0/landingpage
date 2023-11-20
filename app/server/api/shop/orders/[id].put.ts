// Import the Order interface
import { Order } from '../../../lib/interfaces/order.interface' // Replace with the actual path to your interface file
import { getServerSession } from '#auth'
export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const ordersDatabase = event.context.ordersDatabase;
    // const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

    // if (userRole !== 'admin') {
    //   throw createError({
    //     statusCode: 403, // Forbidden
    //     statusMessage: 'Permission denied',
    //   })
    // }
    if (!session) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }

    const id = getRouterParam(event, 'id');
    const { data } = await readBody();

    // Check if the product with the given ID exists
    const orderExists = await ordersDatabase.exists(id);
    if (!orderExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Order not found',
      });
    }

    // Update the product in the database
    await ordersDatabase.put(id, data);
    return await ordersDatabase.get(id)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
