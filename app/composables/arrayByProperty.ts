export function sortArrayByProperty(array, property, ascending = true) {
  const compareFunction = (a, b) => {
    // Use the `localeCompare` method to compare strings
    if (typeof a[property] === 'string' || typeof b[property] === 'string') {
      return ascending
        ? a[property].localeCompare(b[property])
        : b[property].localeCompare(a[property])
    }

    // For numerical or non-string properties
    if (ascending) {
      return a[property] - b[property]
    } else {
      return b[property] - a[property]
    }
  }

  // Create a copy of the array to avoid modifying the original array
  const sortedArray = [...array]

  return sortedArray.sort(compareFunction)
}

export function filterArrayByProperty(array, propertyName, keyword) {
  if (keyword) {
    return array.filter(item => {
      const propertyValue = item[propertyName]
      if (typeof propertyValue === 'string') {
        return propertyValue.toLowerCase().includes(keyword.toLowerCase())
      }
      return false
    })
  } else {
    return array
  }
}

export function filterArrayByKeyword(array, keyword) {
  return array.filter(item => {
    for (const property in item) {
      if (Object.prototype.hasOwnProperty.call(item, property)) {
        const propertyValue = item[property];
        if (typeof propertyValue === 'string' && propertyValue.toLowerCase().includes(keyword.toLowerCase())) {
          return true; // Include the item if any property contains the keyword
        }
      }
    }
    return false;
  });
}
