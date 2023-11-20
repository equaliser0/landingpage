export default defineEventHandler(async (event) => {
  try {
    const productsDatabase = event.context.productsDatabase
    const slug = getRouterParam(event, 'slug')

    // Check if the product with the given ID exists
    const productExists = await productsDatabase.exists(slug)
    if (!productExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Product not found',
      })
    }

    // Check if the product with the given ID exists
    return await productsDatabase.get(slug)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
