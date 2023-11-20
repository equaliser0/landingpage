import { getServerSession } from '#auth'
import { User } from '../../../lib/interfaces/user.interface'; // Adjust the import path accordingly

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)

    if (!session || session.userRole !== 'admin') {
      throw new Error('Unauthorized')
    }

    const databaseManager = event.context.databaseManager
    const userId = getRouterParam(event, 'id')

    // Retrieve the user from the database
    const user: User = await databaseManager.getUser(userId)

    // Delete the user from the database
    await databaseManager.deleteUser(userId)

    return { status: 'User deleted successfully', user }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
