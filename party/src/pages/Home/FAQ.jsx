import { HiChevronUp } from "react-icons/hi"

import { Disclosure } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"

const faqData = [
  {
    question: "What is the meaning of life?",
    answer:
      "To find out why your parents kept insisting that you finish the food on your plate.",
  },
  {
    question: "Will I ever find love?",
    answer:
      "Probably, but only if you stop looking for it in your refrigerator.",
  },
  {
    question: "What happens after we die?",
    answer:
      "We realize that life was just a simulation, and we were all just NPCs.",
  },
  {
    question: "Why do bad things happen to good people?",
    answer:
      "Because good people are just naive enough to believe that life is fair.",
  },
  {
    question: "Is there life after death?",
    answer:
      "Yes, but it's just a never-ending Zoom meeting with people you don't really like.",
  },
]

const FAQ = () => {
  return (
    <section className=" lg:py-16 py-20 p-5 text-white">
      <h1 className="text-center text-4xl font-bold lg:text-7xl">FAQ</h1>
      {faqData.map((faq, index) => (
        <div key={index}>
          <hr className="my-8 border-b-2" />
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="glass flex w-full justify-between py-4 px-8 text-2xl font-medium lg:text-3xl">
                  <span className="my-auto">{faq.question}</span>
                  <HiChevronUp
                    className={`${open ? "rotate-180 transform" : ""} text-5xl`}
                  />
                </Disclosure.Button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, scale: 0.8 }}
                      animate={{ opacity: 1, height: "auto", scale: 1 }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        scale: 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div className="px-8 pt-8 text-2xl" key="content">
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        </div>
      ))}
      <hr className="mt-8 border-b-2" />
    </section>
  )
}

export default FAQ

//TODO: make an open animation using framer-motion
//? Maybe create an FAQ page for more questions with a search function?
