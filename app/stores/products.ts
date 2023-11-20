export const useProductsStore = definePiniaStore('products', () => {
    const initialized = ref(false)
    const products = ref([])

    const fetchProducts = async () => {
      try {
        const { data } = await useFetch('/api/shop/products')
        initialized.value = true
        return products.value = data.value
      } catch (error) {
        throw new Error(error)
      }
    }

    const addProduct = async (product) => {
      try {
        await useFetch('/api/shop/products/', {
          method: 'POST',
          body: product
        })
        products.value.push(product)
      } catch (error) {
        throw new Error(error)
      }
    }

    const updateProduct = async (product) => {
      try {
        await useFetch(`/api/shop/products/${product.id}`, {
          method: 'PUT',
          body: product
        })
        const newOrderList = products.value.filter(p => p !== product)
        newOrderList.push(product)
      } catch (error) {
        throw new Error(error)
      }
    }

    const removeProduct = async (product) => {
      try {
        await useFetch(`/api/shop/products/${product.id}`, {
          method: 'DELETE'
        })
        products.value = products.value.filter(p => p !== product)
      } catch (error) {
        throw new Error(error)
      }
    }

    const importJSON = async (data) => {
      try {
        await useFetch('/api/shop/products/import', {
          method: 'POST',
          body: data
        })
        for (let product of data) {
          products.value.push(product)
        }
      } catch (error) {
        throw new Error(error)
      }
    }

    return {
      products,
      initialized,
      fetchProducts,
      addProduct,
      updateProduct,
      removeProduct,
      importJSON
    }
})

const demoGroups = [
  {
    id: 1,
    name: 'Coffeeshop TLC',
    banner: 'coffeeshop.webp',
    slug: 'coffeeshop',
    subgroups: [
      {
        id: 3,
        name: 'Tabak & Tabakersatz',
        banner: 'tabak-tabakersatz.webp',
        slug: 'tabak-tabakersatz',
        products: [],
        parent: 'coffeeshop'
      },
      {
        id: 4,
        name: 'Papes & Tip',
        banner: 'papes-tips.webp',
        slug: 'papes-tips',
        products: [],
        parent: 'coffeeshop'
      },
    ]
  },
  {
    id: 2,
    name: 'Raucherzubehör',
    banner: 'raucherzubehoer.webp',
    slug: 'raucherzubehoer',
    subgroups: [
      {
        id: 5,
        name: 'Feuerzeuge',
        banner: 'feuerzeuge.webp',
        slug: 'feuerzeuge',
        products: [],
        parent: 'raucherzubehoer'
      },
      {
        id: 6,
        name: 'Aschenbecher',
        banner: 'aschenbecher.webp',
        slug: 'aschenbecher',
        products: [],
        parent: 'raucherzubehoer'
      },
    ]
  }
]
