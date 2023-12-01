import React from "react"
import Sidebar from "../components/Sidebar"
import ProductList from "../components/ProductList"
import useApicallHook from "../hooks/useApicallHook"
import { ALL_PRODUCTS } from "../constants/apis"
import useFilter from "../hooks/useFilter"

const ProductStore = () => {
  const apiresults = useApicallHook(ALL_PRODUCTS)
  const electronics = useFilter(apiresults, "electronics")
  console.log(electronics)

  return (
    <div className="mt-5 container mx-auto flex gap-5">
      <div className="w-[20%] ">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <ProductList />
      </div>
    </div>
  )
}

export default ProductStore
