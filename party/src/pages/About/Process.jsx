import React from "react"

const Process = () => {
  return (
    <section>
      <div className="pb-10 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        Our Process
      </div>
      <div className=" mx-16 grid  gap-5  text-center text-white lg:grid-cols-3 lg:gap-4 ">
        <div className="glass  rounded-[30px] text-2xl lg:text-4xl ">
          <div className="p-3 text-left font-bold">1.</div>
          <div className="px-5 text-left text-xl font-bold lg:text-3xl">
            Research and Development
          </div>
          <div className="px-5 text-left font-light ">
            Our team conducts extensive research on the latest trends and
            innovations in party planning and decorations, to ensure that our
            boxes are always up-to-date and on-trend.
          </div>
        </div>
        <div className="glass rounded-[30px] text-2xl lg:text-4xl">
          <div className="p-3 text-left font-bold">2.</div>
          <div className="px-5 text-left text-xl font-bold lg:text-3xl">
            Testing and Iteration
          </div>
          <div className="px-5 text-left font-light">
            Using the information gathered from our research, our team
            conceptualizes and designs the perfect party box, taking into
            account factors such as aesthetics, functionality, and customer
            needs.
          </div>
        </div>
        <div className="glass rounded-[30px] text-2xl lg:text-4xl">
          <div className="p-3 text-left font-bold">3.</div>
          <div className="px-5 text-left text-xl font-bold lg:text-3xl">
            Testing and Iteration
          </div>
          <div className="px-5 pb-5 text-left font-light">
            Once a prototype of the party box has been created, it is rigorously
            tested and evaluated by both our team and a panel of party experts.
            Based on their feedback, we make any necessary adjustments and
            improvements to create the final product, the greatest party box
            ever.{" "}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
