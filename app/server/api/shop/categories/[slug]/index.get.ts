export default defineEventHandler(async (event) => {
  try {
    const categoriesDatabase = event.context.categoriesDatabase
    const slug = getRouterParam(event, 'slug')

    // Check if the category with the given ID exists
    const categoryExists = await categoriesDatabase.exists(slug)
    if (!categoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Category not found',
      })
    }

    // Retrieve the category data from the database
    return await categoriesDatabase.get(slug)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
