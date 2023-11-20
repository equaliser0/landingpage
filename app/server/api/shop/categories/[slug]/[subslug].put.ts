// Import the Category interface
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const subcategoriesDatabase = event.context.subcategoriesDatabase
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

    const slug = getRouterParam(event, 'subslug')
    const { data } = await readBody(event)

    // Check if the category with the given ID exists
    const subcategoryExists = await subcategoriesDatabase.exists(slug)
    if (!subcategoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Category not found',
      })
    }

    data.updated = new Date().toISOString()

    // Update the category in the database
    await subcategoriesDatabase.put(slug, data)

    return { message: 'Category updated successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
