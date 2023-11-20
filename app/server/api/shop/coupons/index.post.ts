import { v4 as uuid } from 'uuid';
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const couponsDatabase = event.context.couponsDatabase
    // const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

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

    // Get the coupon data from the request body
    const { data } = await readBody(event)

    // Generate a unique ID for the coupon (you can use your own method)
    data.id = uuid() // Implement a method to generate unique IDs
    data.created = new Date().toISOString()
    data.updated = new Date().toISOString()
    data.active = true

    // Add the coupon to the database
    const couponExists = await couponsDatabase.exists(data.code)
    if (couponExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Slug already exists!',
      })
    }
    await couponsDatabase.put(data.code, data)

    return { message: 'Coupon created successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
