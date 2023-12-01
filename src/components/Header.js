import React from "react"
import { LOGO_URL } from "../constants/imageUrls"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  const isStore = location.pathname === "/store"

  const homeStyle = {
    position: "absolute",
  }
  const storeStyle = {
    height: "10vh",
    display: "flex",
    alignItems: "center",
  }

  return (
    <div
      style={isStore ? storeStyle : homeStyle}
      className="flex justify-between items-center h-16 px-5 w-full"
    >
      <div className="w-[50%]">
        {isStore && (
          <input
            type="text"
            placeholder="Search"
            className=" ml-[50%] border px-3 py-2 rounded-lg w-full outline-none"
          />
        )}
      </div>
      <div className="">
        <Link to="/">
          <img src={LOGO_URL} alt="Zevi Logo" className="w-20" />
        </Link>
      </div>
    </div>
  )
}

export default Header
