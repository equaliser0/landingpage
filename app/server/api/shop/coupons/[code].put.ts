import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const couponsDatabase = event.context.couponsDatabase
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

    const code = getRouterParam(event, 'code')

    // Check if the coupon with the given ID exists
    const couponExists = await couponsDatabase.exists(code)
    if (!couponExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Coupon not found',
      })
    }

    const coupon = await couponsDatabase.get(code)

    coupon.updated = new Date().toISOString()
    coupon.active = (coupon.active) ? false : true
    // Update the coupon in the database
    await couponsDatabase.put(code, coupon)

    return { message: 'Product updated successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
