export const useCategoriesStore = definePiniaStore('categories', () => {
    const initialized = ref(false)
    const categories = ref([])

    const fetchCategories = async () => {
      try {
        const { data } = await useFetch('/api/shop/categories/')
        initialized.value = true
        return categories.value = data.value
      } catch (error) {
        throw new Error(error)
      }
    }

    const addCategories = async (category) => {
      try {
        await useFetch('/api/shop/categories/', {
          method: 'POST',
          body: category
        })
        categories.value.push(category)
      } catch (error) {
        throw new Error(error)
      }
    }

    const updateCategories = async (category) => {
      try {
        await useFetch(`/api/shop/categories/${category.id}`, {
          method: 'PUT',
          body: category
        })
        const newCategoriesList = categories.value.filter(c => c !== category)
        newCategoriesList.push(category)
        return categories.value = newCategoriesList
      } catch (error) {
        throw new Error(error)
      }
    }

    const removeCategories = async (category) => {
      try {
        await useFetch(`/api/shop/categories/${category.id}`, {
          method: 'DELETE'
        })
        categories.value = categories.value.filter(c => c !== category)
      } catch (error) {
        throw new Error(error)
      }
    }

    const addSubcategories = async (categoryId, subcategory) => {
      try {
        await useFetch(`/api/shop/categories/${categoryId}/subcategories`, {
          method: 'POST',
          body: subcategory
        })

        const category = categories.value.find(c => c.id === categoryId)
        category.subcategories.push(subcategory)

        const editNewCategoriesList = categories.value.filter(c => c.id !== categoryId)
        newCategoriesList.value.push(category)

        categories.value = newCategoriesList
      } catch (error) {
        throw new Error(error)
      }
    }

    const updateSubcategories = async (categoryId, subcategory) => {
      try {
        await useFetch(`/api/shop/categories/${categoryId}/${subcategory.id}`, {
          method: 'PUT',
          body: subcategory
        })

        for (let category of categories.value) {
          if (category.id === categoryId) {
            const editNewSubcategoriesList = category.subcategories.filter(sc => sc.id !== subcategory.id)

            category.subcategories = editNewSubcategoriesList

            category.subcategories.push(category)
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    }

    const removeSubcategories = async (categoryId, subcategory) => {
      try {
        await useFetch(`/api/shop/categories/${categoryId}/${subcategory.id}`, {
          method: 'DELETE'
        })

        for (let category of categories.value) {
          if (category.id === categoryId) {
            const editNewSubcategoriesList = category.subcategories.filter(sc => sc.id !== subcategory.id)

            category.subcategories = editNewSubcategoriesList
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    }

    return {
      categories,
      initialized,
      fetchCategories,
      addCategories,
      updateCategories,
      removeCategories,
      addSubcategories,
      updateSubcategories,
      removeSubcategories
    }
})
