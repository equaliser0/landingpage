import { v4 as uuid } from 'uuid'

export default defineEventHandler(async (event) => {
  try {
    const subscribersDatabase = event.context.subscribersDatabase

    const { email } = getQuery(event)

    // Check if the category with the given ID exists
    const subscriberExists = await subscribersDatabase.exists(email)
    if (subscriberExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Already subscribed! Thanks!',
      })
    }
    
    await subscribersDatabase.put(email, {
      id: uuid(),
      created: new Date().toISOString().split('T')[0],
      updated: new Date().toISOString().split('T')[0],
      email,
      active: true,
      isUser: false,
    })

    return { message: 'Thanks for subscribing!' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
