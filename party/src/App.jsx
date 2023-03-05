import { Route, Routes } from "react-router-dom"

import { Footer, Navbar, BackToTop, Notfound } from "./components"
import { StateContext } from "./context/StateContext"
import "./index.css"
import { About, Contact, Home, Shop } from "./pages"

const App = () => {
  return (
    <StateContext>
      <div className="relative overflow-x-hidden bg-gradient-to-b from-[#5400BF] to-[#1D0043]">
        <div className="container mx-auto">
          <div className="lg:mx-20 xl:mx-24">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="Shop" element={<Shop />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </div>
        </div>
        <Footer />
        <BackToTop />
      </div>
    </StateContext>
  )
}

export default App
