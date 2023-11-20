export async function addCoupon(coupon) {
  try {
    await useFetch('/api/shop/coupons/', {
      method: 'POST',
      body: {
        data: coupon
      }
    })
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCoupon(code) {
  try {
    const { data } = await useFetch('/api/shop/coupons/' + code, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateCoupon(code) {
  try {
    await useFetch('/api/shop/coupons/' + code, {
      method: 'PUT'
    })
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllCoupons() {
  try {
    const { data } = await useFetch('/api/shop/coupons/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error);
  }
}
