export const adddOrder = async (data) => {
  try {
    return await useFetch('/api/shop/orders/', {
      method: 'POST',
      body: data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updatedOrder = async (id, data) => {
  try {
    return await useFetch('/api/shop/orders/' + id, {
      method: 'PUT',
      body: data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getdOrder = async (id) => {
  try {
    return await useFetch('/api/shop/orders/' + id, {
      method: 'GET'
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getAlldOrders = async () => {
  try {
    return await useFetch('/api/shop/orders/'', {
      method: 'GET'
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const deletedOrder = async (id) => {
  try {
    return await useFetch('/api/shop/orders/' + id, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
