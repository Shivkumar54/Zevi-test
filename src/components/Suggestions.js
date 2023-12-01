import React from "react"
import TrendsShimmer from "./TrendsShimmer"
import { dummysuggestions } from "../constants/dummysuggestions"
import useApicallHook from "../hooks/useApicallHook"
import { LATEST_TREND_API } from "../constants/apis"

const Suggestions = () => {
  const data = useApicallHook(LATEST_TREND_API)
  const suggetions = dummysuggestions
  return (
    <div className="flex justify-center items-center">
      <div className="bg bg-white w-[60%] h-[72vh] px-10 pt-6 rounded-lg">
        <div className="trends">
          <h1 className="font-semibold text-xl mb-2">Latest Trend</h1>
          {!data && <TrendsShimmer />}
          <div className="trends w-full grid grid-cols-5 gap-8">
            {data
              ? data.map((data) => {
                  return (
                    <div>
                      <img
                        src={data?.image}
                        alt="dummyImages"
                        className="h-[25vh] w-full object-fill"
                      />
                      <h5 className="mt-1 text-sm truncate hover:text-clip">
                        {data?.title}
                      </h5>
                    </div>
                  )
                })
              : null}
          </div>
        </div>

        {/* POpular Searchs  */}
        <div className="popular mt-8">
          <h1 className="font-semibold text-xl mb-2">Popular Suggestions</h1>
          <div className="list">
            {suggetions.map((item, index) => {
              return (
                <h5 key={index} className="text-sm my-1">
                  {item}
                </h5>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
