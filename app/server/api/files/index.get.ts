export default defineEventHandler(async (event) => {
  try {
    const filesDatabase = event.context.filesDatabase

    return await filesDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
