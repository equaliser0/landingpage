export const getLog = async (id) => {
  try {
    const { data } = await useFetch('/api/logs/' + id, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const getLogs = async () => {
  try {
    const { data } = await useFetch('/api/logs/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}
