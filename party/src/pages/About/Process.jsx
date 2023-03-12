import React from "react"

const Process = () => {
  return (
    <section >
    <div className="lg:text-5xl md:text-4xl text-3xl font-bold text-white pb-10">
      Our Process
    </div>
    <div className=" text-center mx-16  grid  gap-5 lg:gap-4 lg:grid-cols-3 text-white ">
            <div className="glass  rounded-[30px] lg:text-4xl text-2xl ">
              <div className="text-left p-3 font-bold">
                1.
              </div>
              <div className="text-left px-5 font-bold lg:text-3xl text-xl">
                Research and Development
              </div>
              <div className="text-left px-5 font-light ">
              Our team conducts extensive research on the latest trends and innovations in party planning and decorations, to ensure that our boxes are always up-to-date and on-trend.
              </div>
            </div>
            <div className="glass rounded-[30px] lg:text-4xl text-2xl">
              <div className="text-left p-3 font-bold">
                2.
              </div>
              <div className="text-left lg:text-3xl text-xl px-5 font-bold">
                Testing and Iteration
              </div>
              <div className="text-left px-5 font-light">
              Using the information gathered from our research, our team conceptualizes and designs the perfect party box, taking into account factors such as aesthetics, functionality, and customer needs.
              </div>
            </div>
            <div className="glass rounded-[30px] lg:text-4xl text-2xl">
              <div className="text-left p-3 font-bold">
                3.
              </div>
              <div className="text-left px-5 font-bold lg:text-3xl text-xl">
                Testing and Iteration
              </div>
              <div className="text-left px-5 font-light pb-5">
              Once a prototype of the party box has been created, it is rigorously tested and evaluated by both our team and a panel of party experts. Based on their feedback, we make any necessary adjustments and improvements to create the final product, the greatest party box ever.              </div>
            </div>
    </div>
    </section>

  )
}

export default Process
