export const useCartStore = definePiniaStore('cart', () => {
  const orderID = ref(null)
  const items = ref([])

  const addToCart = (itemPayload) => {
    // if (!items.value[0]) { // TODO
    //   const res = await addOrder()
    // }
    const existingItem = items.value.find(item => {
      return item.id === itemPayload.id
    })

    if (existingItem) {
      let existingItemIndex = items.value.findIndex(
        item => item.id === existingItem.id
      )

      existingItem.quantity = itemPayload.quantity
      existingItem.subTotal = itemPayload.price * itemPayload.quantity
      items.value[existingItemIndex] = existingItem
    } else {
      items.value.push({
        id: itemPayload.id,
        name: itemPayload.name,
        slug: itemPayload.slug,
        EAN: itemPayload.EAN,
        price: itemPayload.price,
        currency: itemPayload.currency || 'EUR',
        quantity: itemPayload.quantity,
        subTotal: itemPayload.price * itemPayload.quantity,
      })
    }
  }

  const removeFromCart = (itemPayload) => {
    items.value = items.value.filter(item => item !== itemPayload)
  }

  const calcTotal = () => {
    let total = 0
    for (let item of items.value) {
      total += item.subTotal
    }
    return total.toFixed(2)
  }

  return {
    items,
    addToCart,
    removeFromCart,
    calcTotal
  }
})
