const featureData = [
  {
    title: "Feature 1",
    desc: "Description for feature 1",
    image: "https://via.placeholder.com/400x400/FF0000/FFFFFF?text=Image+1",
  },
  {
    title: "Feature 2",
    desc: "Description for feature 2",
    image: "https://via.placeholder.com/400x400/00FF00/FFFFFF?text=Image+2",
  },
  {
    title: "Feature 3",
    desc: "Description for feature 3",
    image: "https://via.placeholder.com/400x400/0000FF/FFFFFF?text=Image+3",
  },
]

const Features = () => {
  return (
    <section className="py-16 text-white">
      {featureData.map((feature, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } glass mb-12 items-center justify-center rounded-[69px] p-16`}
        >
          <div className="w-1/2 text-center">
            <h2 className="mb-4 text-6xl font-bold">{feature.title}</h2>
            <p className="text-lg">{feature.desc}</p>
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
