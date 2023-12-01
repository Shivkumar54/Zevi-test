import { useEffect, useState } from "react"

const useFavorite = (item) => {
  const localStorageKey = `key_${item.id}`
  
  const [isFav, setIsFav] = useState(() => {
    const storedValue = localStorage.getItem(localStorageKey)
    return storedValue ? JSON.parse(storedValue) : false
  })

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(isFav))
  }, [isFav, localStorageKey])

  const handleToggleFav = () => {
    setIsFav((prevVal) => !prevVal)
  }

  return [isFav, handleToggleFav]
}

export default useFavorite
