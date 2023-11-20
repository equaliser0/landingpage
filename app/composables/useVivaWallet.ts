export async function checkout(order) {
  try {
    const { data } = await useFetch('/api/shop/checkout', {
      body: {
        order
      },
      method: 'POST'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export async function getTransaction(id) {
  try {
    const { data } = await useFetch(`/api/shop/checkout/${id}`, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}
