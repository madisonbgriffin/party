const benefits = [
  {
    image: "https://via.placeholder.com/200x200/FF0000/FFFFFF",
    title: "Benefit 1",
    description: "Description of Benefit 1",
  },
  {
    image: "https://via.placeholder.com/200x200/FFFF00/000000",
    title: "Benefit 2",
    description: "Description of Benefit 2",
  },
  {
    image: "https://via.placeholder.com/200x200/00FF00/FFFFFF",
    title: "Benefit 3",
    description: "Description of Benefit 3",
  },
  {
    image: "https://via.placeholder.com/200x200/FF0000/FFFFFF",
    title: "Benefit 4",
    description: "Description of Benefit 4",
  },
  {
    image: "https://via.placeholder.com/200x200/FFFF00/000000",
    title: "Benefit 5",
    description: "Description of Benefit 5",
  },
  {
    image: "https://via.placeholder.com/200x200/00FF00/FFFFFF",
    title: "Benefit 6",
    description: "Description of Benefit 6",
  },
]

const Benefits = () => {
  return (
    <section className="py-16 text-white">
      <h1 className="glass relative rounded-[69px] py-40 text-center text-6xl font-bold">
        Here are the benefits
      </h1>
      <div className="relative bottom-24 z-10 mx-16 grid grid-cols-3 grid-rows-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="glass rounded-[69px] p-16 text-center">
            <img
              src={benefit.image}
              alt={benefit.title}
              className="mx-auto mb-4 rounded-2xl"
            />
            <div className="mb-2 text-3xl font-bold">{benefit.title}</div>
            <div className="text-lg">{benefit.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
