import { Client } from '../../../lib/interfaces/client.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const clientsDatabase = event.context.clientsDatabase
    const clientId = getRouterParam(event, 'id')

    // Check if the client with the given ID exists
    const clientExists = await clientsDatabase.exists(clientId)
    if (!clientExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Client not found',
      })
    }

    // Check if the client with the given ID exists
    const client: Client = await clientsDatabase.get(clientId)

    return { client }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
