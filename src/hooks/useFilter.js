const useFilter = (data, target) => {
  const filteredData = data?.filter(
    (item) => item.category === target
    // item.category.toLowerCase().includes(target)
  )
  return filteredData
}

export default useFilter
