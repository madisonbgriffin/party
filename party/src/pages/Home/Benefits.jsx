import { money, clock, clean, family, balloons } from "../../assets";


const benefits = [
  {
    image: money,
    title: "Affordable Quality",
    description:
      "Our products are designed with affordable yet high-quality materials, ensuring that you can throw an unforgettable party without breaking the bank.",
  },
  {
    image: "https://via.placeholder.com/200x200/FFFF00/000000",
    title: "Large Variety",
    description: "Description of Benefit 2",
  },
  {
    image: clock,
    title: "Quick Set Up",
    description: "Description of Benefit 3",
  },
  {
    image: clean,
    title: "Easy Clean Up",
    description: "Description of Benefit 4",
  },
  {
    image: family,
    title: "All Ages",
    description: "Description of Benefit 5",
  },
  {
    image: balloons,
    title: "Customizable",
    description: "Description of Benefit 6",
  },
]

const Benefits = () => {
  return (
    <section className="py-16 text-white">
      <h1 className="glass relative rounded-[69px] py-32 text-center text-4xl font-bold lg:py-40 lg:text-6xl">
        Here are the benefits:
      </h1>
      <div className="relative bottom-24 z-10 mx-16 grid grid-rows-2 gap-6 lg:gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="glass rounded-[69px] p-5 text-center lg:p-16"
          >
            <div className="lg:w-100 w-60 mx-auto ">
            <img
              src={benefit.image}
              alt={benefit.title}
              className="mx-auto mb-4 rounded-2xl"
            />
            </div>
            <div className="mb-2 text-2xl font-bold lg:text-3xl">
              {benefit.title}
            </div>
            <div className="text-sm lg:text-lg ">{benefit.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits

//TODO: styling and responsivenss
//TODO: good icons
//? tweak design?