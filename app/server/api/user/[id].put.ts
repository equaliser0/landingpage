import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const databaseManager = event.context.databaseManager

    if (!session) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }
    // if (userRole !== 'admin') {
    //   throw createError({
    //     statusCode: 403, // Forbidden
    //     statusMessage: 'Permission denied',
    //   });
    // }

    const id = getRouterParam(event, 'id')
    const { data } = await readBody(event)

    const userExists = await databaseManager.userExists(data.id)
    if (!userExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'User does not exist!',
      })
    }

    const user = await databaseManager.getUser(id)
    if (!data.password) {
      data.password = user.password
    } else {
      // Encrypt User Password
      const salt = generateSalt()
      const hash = hashPassword(data.password, salt)
      const password = {
        salt,
        hash
      }
      data.password = password
    }

    // Add user
    return await databaseManager.updateUser(data)
  } catch (error) {
    return createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
