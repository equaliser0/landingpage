export default defineEventHandler(async (event) => {
  try {
    const categoriesDatabase = event.context.categoriesDatabase

    return await categoriesDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
