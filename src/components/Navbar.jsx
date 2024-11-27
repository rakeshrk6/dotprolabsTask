import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <nav className=" max-w-[76rem] mx-auto px-4 py-6 relative z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img className="w-14 h-14 text-yellow-400" src="logo.png" alt="" />
            <img
              className="w-[106px] h-[28px] text-yellow-400"
              src="logo-name.png"
              alt=""
            />
          </div>
          <div className="hidden md:flex items-center space-x-16">
            <a
              href="#"
              className="hover:text-yellow-400 font-extrabold text-md transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 font-extrabold text-md transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 font-extrabold text-md transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 font-extrabold text-md transition-colors"
            >
              FAQs
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 font-extrabold text-md transition-colors"
            >
              Contact Us
            </a>
          </div>
          <button className="hidden md:block bg-gradient-to-tr from-yellow-400 to-yellow-300 text-gray-900 px-6 py-3 rounded-full font-semibold  transition-colors">
            Connect Wallet
          </button>
          <button className="md:hidden text-yellow-400 " onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute flex flex-col items-center top-full left-0 right-0 bg-gradient-to-br from-gray-900 to-gray-800/40 backdrop-blur-md shadow-lg py-4 px-4 space-y-4">
            <a
              href="#"
              className="block hover:text-yellow-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:text-yellow-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="block hover:text-yellow-400 transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#"
              className="block hover:text-yellow-400 transition-colors"
            >
              FAQs
            </a>
            <a
              href="#"
              className="block hover:text-yellow-400 transition-colors"
            >
              Contact Us
            </a>
            <button className="w-full bg-gradient-to-tr from-yellow-400 to-yellow-300 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Connect Wallet
            </button>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
