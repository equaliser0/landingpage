export default defineEventHandler(async (event) => {
  try {
    const { transactionId } = await getRouterParam(event, 'transactionId')
    const { data } = await useFetch(`https://demo-api.vivapayments.com/checkout/v2/transactions/${transactionId}`, {
      headers: {
        Authorization: `Bearer ${apiSecret}`
      },
      method: 'GET'
    })
    return data.value
  } catch (error) {
    return createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
