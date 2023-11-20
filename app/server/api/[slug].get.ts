import { User } from '../../../lib/interfaces/user.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const databaseManager = event.context.databaseManager
    const userId = getRouterParam(event, 'id')
    const user: User = await databaseManager.getUser(userId)

    return user
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
