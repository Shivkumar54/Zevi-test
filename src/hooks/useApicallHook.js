import { useEffect, useState } from "react"

const useApicallHook = (APINAME) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getApiResults()
  }, [])
  const getApiResults = async () => {
    const apiData = await fetch(APINAME)
    const jsonData = await apiData.json()
    setData(jsonData)
  }
  return data
}

export default useApicallHook
