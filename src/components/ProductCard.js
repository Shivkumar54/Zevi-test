import React, { useEffect, useState } from "react"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import useFavorite from "../hooks/useFavorite"
const ProductCard = ({ item }) => {
  const [isFav, handleToggleFav] = useFavorite(item && item)
  const curentPrice = (item?.price * 10).toFixed(2)

  return (
    <div className="relative w-full p-5 flex flex-col justify-center text-left bg-white mb-1">
      {isFav ? (
        <FaHeart
          className="text-red-500 absolute top-0 right-0 mt-4 mr-4"
          onClick={handleToggleFav}
          size={20}
        />
      ) : (
        <FaRegHeart
          className="absolute top-0 right-0 mt-4 mr-4"
          onClick={handleToggleFav}
          size={20}
        />
      )}

      <div className="w-full overflow-hidden">
        <img
          className=" w-full h-[30vh] object-contain mb-2"
          src={item?.image}
          alt={item?.title}
        />
        <h5 className="opacity-0 bg-blue-600 text-white text-center mb-1 py-1 capitalize hover:opacity-100 cursor-pointer">
          View details
        </h5>
      </div>

      <h5 className="truncate hover:text-clip">{item?.title}</h5>
      <h6 className="font-bold">Price - {curentPrice}</h6>
      <span>Star - {item?.rating?.rate}⭐</span>
    </div>
  )
}

export default ProductCard
