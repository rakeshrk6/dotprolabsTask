import { Check } from "lucide-react"
import { X } from "lucide-react"
import { comparisonPoints, features } from "./data"

const Features = () => {
  return (
    <div className=" bg-gray-900 text-white p-1 md:p-8 lg:p-12 z-10 relative">
      <div className=" md:mx-10 mx-1">
        <h1 className="text-2xl ml-10 md:text-3xl lg:text-4xl font-bold mb-8 pt-10">
          Why <span className="text-yellow-500">MoonEX</span> ?
        </h1>
        <div className="mb-16 bg-gray-800 bg-opacity-50 rounded-xl md:px-9 pb-8 ">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-6 text-left w-1/3 border-r border-gray-800">
                    <div className="flex items-center justify-center">
                      <h2 className="text-xl md:text-2xl text-yellow-500">
                        Comparison
                      </h2>
                    </div>
                  </th>
                  <th className="py-4 text-center w-1/4 border-r border-gray-800">
                    <div className="flex items-center justify-center ">
                      <img
                        className=" w-5 md:w-8 md:h-8 h-5 md:mr-3"
                        src="logo.png"
                        alt=""
                      />
                      <img className="w-16" src="logo-name.png" alt="" />
                    </div>
                  </th>
                  <th className="py-4 text-center w-1/4">
                    <div className="flex items-center justify-center ">
                      <img
                        className="md:w-28 md:h-8 w-24 h-6"
                        src="uinswap.png"
                        alt=""
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-4 pl-7 text-lg border-r border-gray-800 text-gray-400">
                      <span>{index + 1} .</span> {point}
                    </td>
                    <td className="py-4 border-r border-gray-800 ">
                      <Check className="text-green-500 mx-auto " />
                    </td>
                    <td className="py-4 text-center">
                      <X className="text-red-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" mx-8">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-12 text-center">
            Our <span className="text-yellow-500">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all duration-300"
              >
                <div className="bg-gray-700 bg-opacity-50 rounded-full inline-block p-3 mb-5 mt-1">
                  <feature.icon size={35} className="" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm pr-5 leading-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-72 left-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl hidden md:flex"></div>
      </div>
    </div>
  )
}

export default Features
