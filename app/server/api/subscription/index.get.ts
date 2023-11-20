import { v4 as uuid } from 'uuid'

export default defineEventHandler(async (event) => {
  try {
    const subscribersDatabase = event.context.subscribersDatabase
    console.log(await subscribersDatabase.all());

    return await subscribersDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
