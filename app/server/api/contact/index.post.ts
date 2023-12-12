import { v4 as uuid } from 'uuid'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: '',
  port: 465,
  secure: true,
  auth: {
    user: '',
    pass: '',
  },
});

export default defineEventHandler(async (event) => {
  try {
    const contactDatabase = event.context.contactDatabase

    const { data } = await readBody(event)

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"nujin Mail" <no-reply@enjine.dev>', // sender address
      to: '', // list of receivers
      subject: `New Request from ${data.name}`, // Subject line
      text: data.message, // plain text body
      // html: '<b>Hello world?</b>', // html body
    });

    await contactDatabase.put(info.messageId, {
      id: uuid(),
      created: new Date().toISOString().split('T')[0],
      email: data.email,
      name: data.name,
      message: data.message,
      // isUser: false,
    })

    return { message: 'Thanks for contacting us!' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
