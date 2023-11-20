export default function paginate(data, currentPage, itemsPerPage) {
  // Calculate the total number of pages
  const totalItems = data.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Ensure the current page is within a valid range
  if (currentPage < 1) {
    currentPage = 1
  } else if (currentPage > totalPages) {
    currentPage = totalPages
  }

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  // Get the data for the current page
  const currentPageData = data.slice(startIndex, endIndex)

  // Return the data for the current page
  return currentPageData
}
