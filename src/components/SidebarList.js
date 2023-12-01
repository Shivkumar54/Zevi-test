import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"
const SidebarList = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className="mt-5">
      <div onClick={toggle} className="flex justify-between">
        <h3 className="text-xl uppercase font-light mb-2 cursor-pointer">
          {title}
        </h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen &&
        data.map((i) => {
          return (
            <li className="cursor-pointer" key={i?.id}>
              {i?.title}
            </li>
          )
        })}
    </div>
  )
}

export default SidebarList
