export const subscribe = async (email) => {
  try {
    return await useFetch('/api/subscription?email=' + email, {
      method: 'POST',
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllSubscribers = async () => {
  try {
    const { data } = await useFetch('/api/subscription', {
      method: 'GET',
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}
