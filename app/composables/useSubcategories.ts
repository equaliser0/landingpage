export const addSubcategory = async (cat, data) => {
  try {
    return await useFetch('/api/shop/categories/' + cat, {
      method: 'POST',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateSubcategory = async (cat, data) => {
  try {
    return await useFetch('/api/shop/categories/' + cat + '/' + data.value.slug, {
      method: 'PUT',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getSubcategory = async (cat, slug) => {
  try {
    const { data } = await useFetch('/api/shop/categories/' + cat + '/' + slug, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllSubsubcategoriess = async () => {
  try {
    const { data } = await useFetch('/api/shop/categories/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteSubcategory = async (cat, slug) => {
  try {
    return await useFetch('/api/shop/categories/' + cat + '/' + slug, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
