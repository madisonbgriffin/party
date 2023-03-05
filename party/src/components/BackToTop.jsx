import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";



import { motion } from "framer-motion";


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > 0) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.button
      className={`fixed bottom-12 right-12 z-50 bg-pink-700 p-2 rounded-full text-white ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <FaArrowUp className="text-5xl" />
    </motion.button>
  )
}

export default BackToTop