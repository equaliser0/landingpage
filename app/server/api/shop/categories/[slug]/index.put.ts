// Import the Category interface
import { Category } from '../../../lib/interfaces/category.interface' // Replace with the actual path to your interface file
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
    const { data } = await readBody(event)

    // Check if the category with the given ID exists
    const categoryExists = await categoriesDatabase.exists(slug)
    if (!categoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Category not found',
      })
    }

    data.updated = new Date().toISOString()

    // Update the category in the database
    await categoriesDatabase.put(slug, data)

    return { message: 'Category updated successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
