export default defineEventHandler(async (event) => {
  try {
    const database = event.context.database
    return await database.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
