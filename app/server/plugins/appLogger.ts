import { v4 as uuid } from 'uuid'
import { useDatabaseManager } from '../../lib'; // Import your DatabaseManager

export default defineNitroPlugin(async  (nitro) => {
  const databaseManager = useDatabaseManager();
  const logsDatabase = await databaseManager.accessDatabase('logs') // TODO Make it Native in the Manager?

  nitro.hooks.hook("error", async (error, { event }) => {
    const id = uuid()
    await logsDatabase.put(id, {
      id,
      timestamp: new Date().toISOString(),
      path: event.path,
      type: 'error',
      user: 'system',
      code: error.statusCode,
      context: error.message
    })
  });
})
