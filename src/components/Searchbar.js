import React, { useEffect, useState } from "react"
import { RiSearchLine } from "react-icons/ri"
import Suggestions from "./Suggestions"
import useApicallHook from "../hooks/useApicallHook"
import { ALL_PRODUCTS } from "../constants/apis"
import { useNavigate } from "react-router-dom"

const Searchbar = () => {
  const [isKeyPress, setIsKeyPress] = useState(false)
  const [searchTxt, setSearchTxt] = useState("")
  const apidata = useApicallHook(ALL_PRODUCTS)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDataAndFilter = async () => {
      if (!searchTxt) return
      const fetchedData = await apidata

      const searchData = fetchedData?.filter(
        (item) =>
          item?.description.toLowerCase().includes(searchTxt) ||
          item?.title.toLowerCase().includes(searchTxt) ||
          item?.category.toLowerCase().includes(searchTxt)
      )

      if (searchData && searchData.length > 3) {
        navigate("/store")
      } else {
        navigate("/otherpage")
      }
    }

    const timer = setTimeout(fetchDataAndFilter, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [searchTxt, apidata, navigate])

  return (
    <div className="section">
      <div className="searchBox w-full flex justify-center items-end mb-3 h-[25vh]">
        <form className="w-[50%] flex items-center relative">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-3 rounded-lg w-full outline-none"
              onFocus={() => setIsKeyPress(true)}
              onBlur={() => setIsKeyPress(false)}
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
            <div className="absolute right-3">
              <RiSearchLine
                size={25}
                className="text-gray-600 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
      {isKeyPress && <Suggestions />}
    </div>
  )
}

export default Searchbar
