import React from "react"
import { DEFAULT_IMAGE } from "../constants/imageUrls"
import { Link } from "react-router-dom"
const DefaultPage = () => {
  return (
    <div className="flex flex-col justify-center w-full h-[100vh] items-center">
      <img src={DEFAULT_IMAGE} alt="DEFAULT_IMAGE" className="w-80" />
      <h3 className="text-xl">
        Oops! Looks like No items matched your search results
      </h3>

      <span className="my-2">Try using like </span>
      <ul className="flex gap-5">
        <li className="bg-gray-200 px-4 py-2 rounded-xl font-semibold">Mens</li>
        <li className="bg-gray-200 px-4 py-2 rounded-xl font-semibold">
          Womens
        </li>
        <li className="bg-gray-200 px-4 py-2 rounded-xl font-semibold">
          Cotton
        </li>
        <li className="bg-gray-200 px-4 py-2 rounded-xl font-semibold">
          Jacket
        </li>
      </ul>
      <br />
      <span>OR</span>
      <Link className="mt-1 text-blue-600 underline font-bold" to="/store">
        Take me to store
      </Link>
    </div>
  )
}

export default DefaultPage
