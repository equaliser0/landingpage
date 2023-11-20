export default defineEventHandler(async (event) => {
  try {
    const clientsDatabase = event.context.clientsDatabase

    return await clientsDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
