import React from "react"
import useApicallHook from "../hooks/useApicallHook"
import { ALL_PRODUCTS } from "../constants/apis"
import ProductCard from "./ProductCard"

const ProductList = () => {
  const data = useApicallHook(ALL_PRODUCTS)
  return (
    <div className="w-full grid grid-cols-4 gap-5 bg-gray-100 p-4">
      {data &&
        data.map((item) => {
          return <ProductCard key={item.id} item={item} />
        })}
    </div>
  )
}

export default ProductList
