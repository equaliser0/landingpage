export default defineEventHandler(async (event) => {
  try {
    const ordersDatabase = event.context.ordersDatabase
    return await ordersDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
