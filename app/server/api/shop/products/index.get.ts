export default defineEventHandler(async (event) => {
  try {
    const productsDatabase = event.context.productsDatabase

    return await productsDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
