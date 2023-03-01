import { useEffect } from "react"

import { Story, Start, Mission, HQ, Process, Awards, Team } from "../../pages"

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <>
      <Story />
      <Start />
      <Mission />
      <HQ />
      <Process />
      <Awards />
      <Team />
    </>
  )
}

export default About
