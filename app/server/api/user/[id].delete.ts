import { getServerSession } from '#auth'
import { User } from '../../../lib/interfaces/user.interface'; // Adjust the import path accordingly

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const databaseManager = event.context.databaseManager

    if (!session) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }

    const id = getRouterParam(event, 'id')

    // Retrieve the user from the database
    const userExists = await databaseManager.userExists(id)
    if (!userExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'User does not exist!',
      })
    }

    // Delete the user from the database
    await databaseManager.deleteUser(id)

    return { status: 'User deleted successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
