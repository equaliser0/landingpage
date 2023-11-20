import { v4 as uuid } from 'uuid'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const databaseManager = event.context.databaseManager
    const { data } = await readBody(event)

    // Add the new user to the database
    const userExists = await databaseManager.getUserByMail(data.email)
    if (userExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'User already exists!',
      })
    }

    // Generate a unique user ID
    data.id = uuid()
    data.created = new Date().toISOString()
    data.updated = new Date().toISOString()

    // Encrypt User Password
    const password = {
      salt: generateSalt(),
      hash: hashPassword(data.password, data.salt)
    }
    data.password = password

    // Add new User
    return await databaseManager.addUser(data)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
