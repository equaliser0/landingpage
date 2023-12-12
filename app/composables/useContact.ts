export const submitContact = async (data) => {
  try {
    return await useFetch('/api/contact/', {
      method: 'POST',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}
