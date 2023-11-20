import { User } from '../../../lib/interfaces/user.interface'; // Adjust the import path accordingly

export default defineEventHandler(async (event) => {
  try {
    const databaseManager = event.context.databaseManager
    return await databaseManager.getAllUser()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
