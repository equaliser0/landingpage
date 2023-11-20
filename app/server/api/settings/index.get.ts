import { AppSettings } from '../../../lib/interfaces/appsettings.interface'; // Adjust the import path accordingly

export default defineEventHandler(async (event) => {
  try {
    const databaseManager = event.context.databaseManager;
    const session = await getServerSession(event);

    if (!session || !session.userRole.includes('admin')) {
      // Check if the user is not authenticated or is not an admin
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      });
    }

    // Retrieve app settings from the database
    const settings: AppSettings = await databaseManager.getSettings();

    return { settings };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
