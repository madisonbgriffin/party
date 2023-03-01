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
      <Hero />
      <Testimonials />
      <Logos />
      <Benefits />
      <Features />
      <FAQ />
      <CTA />
    </>
  )
}

export default Home
