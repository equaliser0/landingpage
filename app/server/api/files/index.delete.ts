import fs from 'fs';
import { writeFile, mkdir, access } from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const filesDatabase = event.context.filesDatabase
    // const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

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

    const { path } = await getQuery(event)

    if (!path) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No path entered!',
      })
    }

    const filepath = `app/public/uploads/${path}`

    await fs.unlinkSync(filepath);

    // // Get the product data from the request body
    // const { data } = await readBody()
    //
    // // Generate a unique ID for the product (you can use your own method)
    // const fileID = uuid() // Implement a method to generate unique IDs
    //
    // // Add the product to the database
    // await filesDatabase.put(fileID, fileData)

    return { message: 'Product created successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
