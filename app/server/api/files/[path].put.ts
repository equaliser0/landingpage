// Import the File interface
import { File } from '../../../lib/interfaces/file.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const filesDatabase = event.context.filesDatabase;
    const userRole = event.context.userRole; // Assuming you've set the user's role in a previous middleware

    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      });
    }

    const fileId = getRouterParam(event, 'id');
    const { fileData: File } = useBody();

    // Check if the product with the given ID exists
    const fileExists = await filesDatabase.exists(fileId);
    if (!fileExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'File not found',
      });
    }

    // Update the file in the database
    await filesDatabase.put(fileId, fileData);

    return { message: 'File updated successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
