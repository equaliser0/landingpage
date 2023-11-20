export default function fetchShopOverview(params:type) {
  try {
    return await useFetch('/api/shop/overview/')
  } catch (error) {
    throw new Error(error)
  }
}
