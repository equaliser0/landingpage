import { v4 as uuid } from 'uuid';
import { Product } from '../../../lib/interfaces/product.interface' // Replace with the actual path to your interface file
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const productsDatabase = event.context.productsDatabase
    const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

    if (!session) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }
    // if (userRole !== 'admin') {
    //   throw createError({
    //     statusCode: 403, // Forbidden
    //     statusMessage: 'Permission denied',
    //   })
    // }

    // Get the product data from the request body
    const { data } = await readBody(event)

    // Generate a unique ID for the product (you can use your own method)
    data.id = uuid() // Implement a method to generate unique IDs
    data.created = new Date().toISOString()
    data.updated = new Date().toISOString()

    // Add the product to the database
    const productExists = await productsDatabase.exists(data.slug)
    if (productExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Slug already exists!',
      })
    }
    await productsDatabase.put(data.slug, data)

    return { message: 'Product created successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
