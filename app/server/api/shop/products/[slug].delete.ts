import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const productsDatabase = event.context.productsDatabase
    const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

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

    const slug = getRouterParam(event, 'slug')

    // Check if the product with the given ID exists
    const productExists = await productsDatabase.exists(slug)
    if (!productExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Product not found',
      })
    }

    // Delete the product from the database
    await productsDatabase.del(slug)

    return { message: 'Product deleted successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
