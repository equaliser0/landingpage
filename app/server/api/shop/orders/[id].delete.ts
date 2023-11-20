export default defineEventHandler(async (event) => {
  try {
    // const ordersDatabase = event.context.ordersDatabase;
    // const userRole = event.context.userRole; // Assuming you've set the user's role in a previous middleware
    //
    // if (userRole !== 'admin') {
    //   throw createError({
    //     statusCode: 403, // Forbidden
    //     statusMessage: 'Permission denied',
    //   });
    // }
    //
    // const orderId = getRouterParam(event, 'id');
    //
    // // Check if the product with the given ID exists
    // const orderExists = await ordersDatabase.exists(orderId);
    // if (!orderExists) {
    //   throw createError({
    //     statusCode: 404, // Not Found
    //     statusMessage: 'Order not found',
    //   });
    // }
    //
    // // Delete the product from the database
    // await ordersDatabase.del(orderId);
    //
    return { message: 'Maintenance' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
