export const useContentStore = definePiniaStore('content', () => {
    const pages = ref([])

    const fetchPages = async () => {
      try {
        const { data } = await useFetch('/api/content/fetch')
        return pages.value = data.value
      } catch (error) {
        throw new Error(error)
      }
    }

    const getPage = async (path) => {
      try {
        const { data } = await useFetch(`/api/content/${path}`)
      } catch (error) {
        throw new Error(error)
      }
    }

    const savePage = async (path, data) => {
      try {
        await useFetch(`/api/content/${path}`, {
          method: 'POST',
          body: data
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    return {
      pages,
      fetchPages,
      getPage,
      savePage
    }
})
