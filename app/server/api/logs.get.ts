export default defineEventHandler(async (event) => {
  try {
    return await event.context.logsDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
