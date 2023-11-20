import { v4 as uuid } from 'uuid';
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const ordersDatabase = event.context.ordersDatabase;
    const clientsDatabase = event.context.clientsDatabase;

    // Get the order data from the request body
    const { data } = await readBody();
    let client;
    if (session && session.user.email) {
      client = await clientsDatabase.find(c => c.email === session.user.email)
    } else {
      client = {
        email: null,
        address: null,
        firstname: null,
        lastname: null
      }
    }

    // Set Order Data
    data.id = uuid()
    data.created = new Date().toISOString()
    data.expires = new Date(data.created.getTime() + 60 * 60 * 1000)
    data.paid = false
    data.shipped = false
    data.client = client

    // Add the order to the database
    await ordersDatabase.put(data.id, data)
    return await ordersDatabase.get(data.id)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
