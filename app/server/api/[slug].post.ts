import { v4 as uuid } from 'uuid'
import { Data } from '../../../lib/interfaces/data.interface' // Adjust the import path accordingly

export default defineEventHandler(async (event) => {
  try {
    if (!session) {
      return createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }
    // Check if the user is authorized to edit the data
    if (session.userRole !== 'admin') {
      return createError({ statusCode: 403, statusMessage: 'Forbidden' })
    }

    const manager = event.context.database

    const { content } = useBody(event) // TODO Date Server Side
    const slug = getRouterParam(event, 'slug')

    // Generate a unique data ID
    const id = uuid()

    // Add the ID to the data object
    const data: Data = { ...content, id }

    if (manager.exists(slug)) {
      // Add the new data to the database
      await manager.put(id, data)
    }
    
    return { status: 'Data created successfully', data }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
