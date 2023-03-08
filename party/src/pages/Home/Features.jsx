const featureData = [
  {
    title: "Step 1:",
    desc: "Description for feature 1",
    image: "https://via.placeholder.com/200x200/FF0000/FFFFFF?text=Image+1",
  },
  {
    title: "Step 2:",
    desc: "Description for feature 2",
    image: "https://via.placeholder.com/200x200/00FF00/FFFFFF?text=Image+2",
  },
  {
    title: "Step 3:",
    desc: "Description for feature 3",
    image: "https://via.placeholder.com/200x200/0000FF/FFFFFF?text=Image+3",
  },
]

const Features = () => {
  return (
    <section className="py-5 text-white lg:py-16">
      {featureData.map((feature, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } glass mb-6 items-center justify-center gap-8 rounded-[69px] p-10 lg:mb-12 lg:p-16`}
        >
          <div className="w-1/2 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-6xl">
              {feature.title}
            </h2>
            <p className="text-md lg:text-lg">{feature.desc}</p>
          </div>
          <div className="w-1/2">
            <img
              src={feature.image}
              alt={feature.title}
              className="mx-auto rounded-[69px] shadow-md"
            />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Features

//TODO: tweak design, maybe flow chart thing
//TODO: styling and responsivenss
