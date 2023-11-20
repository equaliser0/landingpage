import { getServerSession } from '#auth'
import { Client } from '../../../lib/interfaces/client.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const clientsDatabase = event.context.clientsDatabase;
    const userRole = event.context.userRole; // Assuming you've set the user's role in a previous middleware

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

    const email = getRouterParam(event, 'email');
    const { data } = await readBody(event)

    data.updated = new Date().toISOString()

    // Check if the client with the given ID exists
    const clientExists = await clientsDatabase.exists(email);
    if (!clientExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Client not found',
      });
    }

    // Update the client in the database
    return await clientsDatabase.put(email, data);
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
