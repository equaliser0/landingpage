export const addClient = async (data) => {
  try {
    console.log('data', data);

    return await useFetch('/api/shop/clients/', {
      method: 'POST',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateClient = async (email, data) => {
  try {
    return await useFetch('/api/shop/clients/' + email, {
      method: 'PUT',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getClient = async (email) => {
  try {
    const { data } = await useFetch('/api/shop/clients/' + email, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllClients = async () => {
  try {
    const { data } = await useFetch('/api/shop/clients/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteClient = async (email) => {
  try {
    return await useFetch('/api/shop/clients/' + email, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
