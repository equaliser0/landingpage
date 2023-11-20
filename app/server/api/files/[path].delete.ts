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

    // Check if the file with the given ID exists
    const fileExists = await filesDatabase.exists(productId);
    if (!fileExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Product not found',
      });
    }

    // Delete the file from the database
    await filesDatabase.del(fileId);

    return { message: 'Product deleted successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
