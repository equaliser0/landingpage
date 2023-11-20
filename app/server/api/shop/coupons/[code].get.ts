export default defineEventHandler(async (event) => {
  try {
    const couponsDatabase = event.context.couponsDatabase
    const code = getRouterParam(event, 'code')

    // Check if the coupon with the given ID exists
    const couponExists = await couponsDatabase.exists(code)
    if (!couponExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Product not found',
      })
    }

    // Check if the coupon with the given ID exists
    return await couponsDatabase.get(code)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
