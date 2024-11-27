import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Features from "./components/Features/Features"
import FAQ from "./components/FAQ/FAQ"

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <Navbar />
      <Header />
      <Features />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
