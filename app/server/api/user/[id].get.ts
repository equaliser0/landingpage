import { User } from '../../../lib/interfaces/user.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const databaseManager = event.context.databaseManager
    const id = getRouterParam(event, 'id')

    // const userExists = await databaseManager.userExists(id)
    // if (!userExists) {
    //   throw createError({
    //     statusCode: 403, // Forbidden
    //     statusMessage: 'User does not exist!',
    //   })
    // }

    // Get User
    const user = await databaseManager.getUser(id)

    // Hide User Password Data
    user.password = undefined

    return user
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
