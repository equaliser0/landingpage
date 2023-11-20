import { v4 as uuid } from 'uuid';
import { getServerSession } from '#auth'

const API_SECRET = ''
const SOURCE_CODE = ''
const VIVA_API_SECRET = ''
const COLOR_CODE = '#66cc8a' // TODO

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  const productsDatabase = event.context.productsDatabase
  const ordersDatabase = event.context.ordersDatabase
  const couponsDatabase = event.context.couponsDatabase

  const { order } = await readBody(event)

  // Initialize an empty transaction string
  let transactionString = 'Deine Bestellung:\n';

  // Loop through the cart and add product details to the transaction string
  order.products.forEach((product) => {
    const { name, quantity, price } = product;
    const total = quantity * price;
    transactionString += `${name} x${quantity}: ${total.toFixed(2)}€ \n`;
  });

  // Calculate the total price
  let totalPrice = order.products.reduce((total, product) => total + product.quantity * product.price, 0);
  order.totalGross = totalPrice

  // Check & cald Coupons
  if (order.coupon) {
    const couponExists = await couponsDatabase.exists(order.coupon)
    if (!couponExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Coupon doesnt exist!',
      })
    }
    order.coupon = await couponsDatabase.get(order.coupon)
    totalPrice = totalPrice - (totalPrice * (order.coupon.discount / 100))
    transactionString += `\nRabatt: ${order.coupon.discount / 100}\n`;
  }

  // Add a separator and total price to the transaction string
  transactionString += '\nTotal:\n';
  transactionString += `${totalPrice.toFixed(2)}€`;

  // Set Order Data
  order.id = uuid()
  order.created = new Date()
  order.expires = new Date(order.created.getTime() + 7 * 24 * 60 * 60 * 1000)
  order.paid = false
  order.shipped = false
  order.totalNet = totalPrice
  // order.client = client

  // const { data } = await useFetch('https://demo-api.vivapayments.com/checkout/v2/orders', {
  //   headers: {
  //     Authorization: `Bearer ${API_SECRET}`
  //   },
  //   method: 'POST',
  //   body: {
  //     "amount": order.total,
  //     "customerTrns": transactionString,
  //     "customer":
  //     {
  //       "email": order.email,
  //       "fullName": `${order.delivery.title} ${order.delivery.firsrname} ${order.delivery.lastname}`,
  //       // "phone": "+30999999999",
  //       "countryCode": "DE",
  //       "requestLang": "de"
  //     },
  //     "paymentTimeout": 300,
  //     "preauth": false,
  //     "allowRecurring": false,
  //     "maxInstallments": 12,
  //     "paymentNotification": true,
  //     "tipAmount": 0,
  //     "disableExactAmount": false,
  //     "disableCash": false,
  //     "disableWallet": false,
  //     "sourceCode": SOURCE_CODE,
  //     "merchantTrns": order.products,
  //     "tags": order.products,
  //     // "cardTokens":
  //     // [
  //     //   "ct_5d0a4e3a7e04469f82da228ca98fd661"
  //     // ]
  //   }
  // })
  //
  // Add the order to the database
  await ordersDatabase.put(order.id, order)

  // const orderCode = data.value
  // return `https://demo.vivapayments.com/web/checkout?ref=${orderCode}&color=${COLOR_CODE}`
  return true
})
