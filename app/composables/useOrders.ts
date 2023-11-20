export const addOrder = async (data) => {
  try {
    return await useFetch('/api/shop/orders/', {
      method: 'POST',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateOrder = async (data) => {
  try {
    console.log(data);

    return await useFetch('/api/shop/orders/' + data.id, {
      method: 'PUT',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getOrder = async (id) => {
  try {
    const { data } = await useFetch('/api/shop/orders/' + id, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllOrders = async () => {
  try {
    const { data } = await useFetch('/api/shop/orders/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteOrder = async (id) => {
  try {
    return await useFetch('/api/shop/orders/' + id, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
