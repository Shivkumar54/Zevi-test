import React from "react"

const TrendsShimmer = () => {
  return (
    <div className="animate-pulse w-[100%] grid grid-cols-5 gap-5">
      {[...Array(5)].map((_, index) => {
        return <div key={index} className="bg-gray-300 h-[25vh] w-[100%]"></div>
      })}
    </div>
  )
}

export default TrendsShimmer
