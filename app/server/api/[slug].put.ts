import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const manager = event.context.database

    if (!session) {
      return createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }

    const slug = getRouterParam(event, 'slug')
    const {
      database,
      content
     } = useBody()

    // Check if the user is authorized to edit the data
    if (session.userRole !== 'admin') {
      return createError({ statusCode: 403, statusMessage: 'Forbidden' })
    }
    await manager.put(id, content)
  } catch (error) {
    return createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
