import { useEffect } from "react"

import {
  Hero,
  Testimonials,
  Benefits,
  Features,
  FAQ,
  CTA,
  Logos,
} from "../../pages"

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <>
      <div className="section-container">
        <Hero />
      </div>
      <div className="section-container">
        <Testimonials />
      </div>
        <Logos />
      <div className="section-container">
        <Benefits />
      </div>
      <div className="section-container">
        <Features />
      </div>
      <div className="section-container">
        <FAQ />
      </div>
      <div className="section-container">
        <CTA />
      </div>
    </>
  )
}

export default Home
