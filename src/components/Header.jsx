// eslint-disable-next-line react/prop-types

function Header() {
  return (
    <div>
      <main className=" max-w-[75rem] mx-auto px-4 pt-24 md:pt-40 pb-24 md:pb-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className=" text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Trusted Multi-Chain
            <br />
            <span className="text-yellow-400">DEX</span> Platform
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-tr from-yellow-400 to-yellow-300 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Connect Wallet
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors">
              Trade Crypto
            </button>
          </div>
        </div>
      </main>

      <img
        src="sphere.png"
        className="absolute top-32 md:top-52 right-0 md:right-24 w-60 h-60 md:w-60 md:h-60 z-10"
        alt=""
      />

      <img
        className="md:top-40 top-28 w-10 h-10 md:left-40 left-20 absolute"
        src="star-img.png"
        alt=""
      />
      <img
        className="top-36 w-8 h-8 left-[70rem] absolute"
        src="star-img2.png"
        alt=""
      />
      <img
        className="md:top-[32rem] top-[25rem] w-10 h-10 md:left-[70rem] left-60 absolute"
        src="star-img.png"
        alt=""
      />

      <div className="absolute inset-0 hidden md:flex">
        <div className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[200vw] h-[200vw] border border-gray-700/30 rounded-full rotate-45 transform-gpu"></div>
        </div>
        <div className="absolute top-[76%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[250vw] h-[250vw] border border-gray-700/30 rounded-full rotate-45 transform-gpu"></div>
        </div>
        <div className="absolute top-[73%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[200vw] h-[200vw] border border-gray-700/30 rounded-full rotate-45 transform-gpu"></div>
        </div>
      </div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
    </div>
  )
}

export default Header
