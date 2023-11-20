export default defineEventHandler(async (event) => {
  try {
    const couponsDatabase = event.context.couponsDatabase

    return await couponsDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
