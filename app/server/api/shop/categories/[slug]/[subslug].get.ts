export default defineEventHandler(async (event) => {
  try {
    const subcategoriesDatabase = event.context.subcategoriesDatabase
    const slug = getRouterParam(event, 'subslug')

    // Check if the category with the given ID exists
    const subcategoryExists = await subcategoriesDatabase.exists(slug)
    if (!subcategoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Subcategory not found',
      })
    }

    // Retrieve the category data from the database
    return await subcategoriesDatabase.get(slug)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
