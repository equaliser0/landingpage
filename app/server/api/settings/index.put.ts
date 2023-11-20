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

    const { settings } = useBody();

    // Update the app settings in the database
    await databaseManager.updateSettings(settings);

    return { status: 'Settings updated successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
