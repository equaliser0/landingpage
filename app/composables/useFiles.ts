export const uploadFiles = async (path, files) => {
  try {
    const formData = new FormData()
    for (let file of files) {
      formData.append('file', file, slugify(file.name))
    }
    return await useFetch('/api/files?path=' + path, {
      method: 'POST',
      body: formData
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteFile = async (path) => {
  try {
    return await useFetch('/api/files?path=' + path, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const makeDir = async (path) => {
  try {
    return await useFetch('/api/files?dir=' + path, {
      method: 'POST',
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const removeDir = async (path) => {
  try {
    return await useFetch('/api/files?dir=' + path, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const openDir = async (path) => {
  try {
    const { data } = await useFetch('/api/files?dir=' + path, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}
