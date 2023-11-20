import * as nodemailer from 'nodemailer'
import handlebars from 'handlebars'

interface IEmailData {
    source: string
    head: { to: string, subject: string },
    body: any
}

export default defineEventHandler(async (event) => {
  try {
    const databaseManager = event.context.databaseManager

    const { email } = getQuery(event)

    // Add the new user to the database
    const userExists = await databaseManager.userExists(email)
    if (!userExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'User does not exist!',
      })
    }

    const user = databaseManager.getUser(email)

    // Init Passowrd Mail
    const transporter = nodemailer.createTransport({
      host: useRuntimeConfig().apiSecret.EMAIL_HOST,
      port: useRuntimeConfig().apiSecret.EMAIL_PORT,
      auth: {
        user: useRuntimeConfig().apiSecret.EMAIL_USER,
        pass: useRuntimeConfig().apiSecret.EMAIL_PASSWORD
      }
    })

    // Generate new Password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    user.password = password

    await databaseManager.updateUser(email, user)

    const compileSource = handlebars.compile(data.source)
    const mailOptions = {
      from: 'no-reply@ecosis.tech',
      to: data.head.to,
      subject: data.head.subject,
      html: compileSource(`Here is your new password: ${password}`)
    }

    await transporter.sendMail(mailOptions)

    // Add new User
    return await { message: 'New password send' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
