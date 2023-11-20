import { v4 as uuid } from 'uuid'
import { useDatabaseManager } from '../../lib'; // Import your DatabaseManager
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  // Get Session Data
  const session = await getServerSession(event)

  // App Database instance
  const databaseManager = useDatabaseManager();
  const logsDatabase = await databaseManager.accessDatabase('logs') // TODO Make it Native in the Manager?
  event.context.logsDatabase = logsDatabase

  const id = uuid()
  await logsDatabase.put(id, {
    id,
    timestamp: new Date().toISOString(),
    path: event.path,
    type: 'info',
    code: 202,
    user: (session) ? session.user.email : null,
    context: `${event.node.req.method} ${event.node.req.url}`
  })
  // Continue with the request
  return;
});
