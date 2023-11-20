export const addProduct = async (data) => {
  try {
    return await useFetch('/api/shop/products/', {
      method: 'POST',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateProduct = async (data) => {
  try {
    return await useFetch('/api/shop/products/' + data.value.slug, {
      method: 'PUT',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getProduct = async (slug) => {
  try {
    const { data } = await useFetch('/api/shop/products/' + slug, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllProducts = async () => {
  try {
    const { data } = await useFetch('/api/shop/products/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const importProducts = async (data) => {
  try {
    return await useFetch('/api/shop/products/import', {
      method: 'POST',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteProduct = async (slug) => {
  try {
    return await useFetch('/api/shop/products/' + slug, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
