export const addUser = async (data) => {
  try {
    const { error } = await useFetch('/api/user/', {
      method: 'POST',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateUser = async (data) => {
  try {
    const { error } = await useFetch('/api/user/' + data.id, {
      method: 'PUT',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const resetPassword = async (id) => {
  try {
    const { error } = await useFetch('/api/user/' + id + '/passwordreset', {
      method: 'POST'
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getUser = async (id) => {
  try {
    const { data } = await useFetch('/api/user/' + id, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllUsers = async () => {
  try {
    const { data, error } = await useFetch('/api/user/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

// export const importUsers = async (data) => {
//   try {
//     return await useFetch('/api/user/import', {
//       method: 'GET',
//       body: data
//     })
//   } catch (error) {
//     throw new Error(error)
//   }
// }

export const deleteUser = async (id) => {
  try {
    return await useFetch('/api/user/' + id, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
