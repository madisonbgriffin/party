import { useEffect } from "react"

import { Story, Start, Mission, HQ, Process, Awards, Team } from "../../pages"

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <>
      <div className="section-container">
        <Story />
      </div>
      <div className="section-container">
        <Start />
      </div>
      <div className="section-container">
        <Mission />
      </div>
      <div className="section-container">
        <HQ />
      </div>
      <div className="section-container">
        <Process />
      </div>
      <div className="section-container">
        <Awards />
      </div>
      <div className="section-container">
        <Team />
      </div>
    </>
  )
}

export default About
