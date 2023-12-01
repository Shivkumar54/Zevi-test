import React from "react"
import SidebarList from "./SidebarList"
import { SidebarFilter } from "../constants/SidebarFilter"
import useFilter from "../hooks/useFilter"

const Sidebar = () => {
  const list = SidebarFilter
  const category = useFilter(list, "category")
  const price = useFilter(list, "price")
  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">Search Results </h2>
      <SidebarList title={"category"} data={category} />
      <SidebarList title={"price range"} data={price} />
    </div>
  )
}

export default Sidebar
