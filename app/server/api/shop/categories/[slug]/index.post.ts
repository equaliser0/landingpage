import { v4 as uuid } from 'uuid'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const categoriesDatabase = event.context.categoriesDatabase
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
    const categorySlug = getRouterParam(event, 'slug')

    // Get the category data from the request body
    const { data } = await readBody(event)

    // Generate a unique ID for the category (you can use your own method)
    data.id = uuid() // Implement a method to generate unique IDs
    data.created = new Date().toISOString()
    data.updated = new Date().toISOString()

    // Get category to add subcategory
    const categoryExists = await categoriesDatabase.exists(categorySlug)
    if (!categoryExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Category does not exist!',
      })
    }
    const category = await categoriesDatabase.get(categorySlug)

    // Store Category ad Subcategory Data
    if (category) {
      const subcategoryExists = await subcategoriesDatabase.exists(data.slug)
      if (subcategoryExists) {
        throw createError({
          statusCode: 403, // Forbidden
          statusMessage: 'Slug already exists!',
        })
      }

      // Store Category with added Subcategory Slug
      category.subcategories.push(data.slug)
      await categoriesDatabase.put(category.slug, category)

      // Store Subcategory with Parent Slug
      await subcategoriesDatabase.put(data.slug, data)

      return { message: 'Category created successfully' }
    }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
