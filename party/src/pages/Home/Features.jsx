import React from "react";

const featureData = [
  {
    title: "Feature 1",
    desc: "Description for feature 1",
    image:
      "https://via.placeholder.com/500x500/FF0000/FFFFFF?text=Image+1",
  },
  {
    title: "Feature 2",
    desc: "Description for feature 2",
    image:
      "https://via.placeholder.com/500x500/00FF00/FFFFFF?text=Image+2",
  },
  {
    title: "Feature 3",
    desc: "Description for feature 3",
    image:
      "https://via.placeholder.com/500x500/0000FF/FFFFFF?text=Image+3",
  },
];

const Features = () => {
  return (
    <section className="py-16 text-white">
      <div className="grid grid-cols-2 gap-8">
        {featureData.map((feature, index) => (
        <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center mb-12`}>
          <div className="w-1/2 lg:w-2/5 p-4">
            <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
            <p className="text-gray-700">{feature.desc}</p>
          </div>
          <div className="w-1/2 lg:w-3/5 p-4">
            <img src={feature.image} alt={feature.title} className="rounded-lg shadow-md" />
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Features;
