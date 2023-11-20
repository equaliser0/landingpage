export const useOrdersStore = definePiniaStore('orders', () => {
    const orders = ref([])

    const fetchOrders = async () => {
      try {
        const { data } = await useFetch('/api/shop/orders/')
        return orders.value = data.value
      } catch (error) {
        throw new Error(error)
      }
    }

    return {
      orders,
      fetchOrders
    }
})
