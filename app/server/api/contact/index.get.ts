import { v4 as uuid } from 'uuid'

export default defineEventHandler(async (event) => {
  try {
    const contactDatabase = event.context.contactDatabase
    console.log(await contactDatabase.all());

    return await contactDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
