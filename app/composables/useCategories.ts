export const addCategory = async (data) => {
  try {
    return await useFetch('/api/shop/categories/', {
      method: 'POST',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateCategory = async (data) => {
  try {
    return await useFetch('/api/shop/categories/' + data.value.slug, {
      method: 'PUT',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getCategory = async (slug) => {
  try {
    const { data } = await useFetch('/api/shop/categories/' + slug, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllCategoriess = async () => {
  try {
    const { data } = await useFetch('/api/shop/categories/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteCategory = async (slug) => {
  try {
    return await useFetch('/api/shop/categories/' + slug, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
