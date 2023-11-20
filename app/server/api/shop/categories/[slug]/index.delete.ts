import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const categoriesDatabase = event.context.categoriesDatabase
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

    // Check if the category with the given ID exists
    const categoryExists = await categoriesDatabase.exists(slug)
    if (!categoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Category not found',
      })
    }

    // Delete the category from the database
    await categoriesDatabase.del(slug)

    return { message: 'Category deleted successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
