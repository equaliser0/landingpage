import { v4 as uuid } from 'uuid'

export default defineEventHandler(async (event) => {
  try {
    const clientsDatabase = event.context.clientsDatabase;
    const userRole = event.context.userRole; // Assuming you've set the user's role in a previous middleware

    // Get the client data from the request body
    const { data } = await readBody(event)

    // Check if the client with the given ID exists
    const clientExists = await clientsDatabase.exists(data.email);
    if (clientExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Client already exists',
      });
    }

    // Generate a unique ID for the client (you can use your own method)
    data.id = uuid(); // Implement a method to generate unique IDs
    data.created = new Date().toISOString()
    data.updated = new Date().toISOString()

    // Add the client to the database
    await clientsDatabase.put(data.email, data);

    return { message: 'Client created successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
