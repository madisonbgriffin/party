const Testimonials = () => {
  return (
    <>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-3 gap-5 text-white">
          <div className=" bg-pink-600">
            <img
              src="https://miro.medium.com/max/1400/1*cYJ4yEhb1RfFicQRdVyP_Q.jpeg"
              alt="Indian Customer"
              className="h-48 w-48 rounded-full"
            />
            <div className="text-2xl font-bold">Parsha Hatel</div>
            <div className="text-xl font-medium">Indian Customer</div>
            <div className="text-lg font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </div>
          </div>
          <div className=" bg-pink-600">
            <img
              src="https://miro.medium.com/max/1400/1*cYJ4yEhb1RfFicQRdVyP_Q.jpeg"
              alt="Indian Customer"
              className="h-48 w-48 rounded-full"
            />
            <div className="text-2xl font-bold">Parsha Hatel</div>
            <div className="text-xl font-medium">Indian Customer</div>
            <div className="text-lg font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </div>
          </div>
          <div className="bg-pink-600">
            <div className="text-7xl font-bold">
              Join <br /> 1,000,000+ <br /> Partiers
            </div>
            <div className="mt-10 text-2xl font-normal">
              You'll never have to worry about party planning again. Let us take
              care of the details while you sit back and enjoy the celebration!
            </div>
          </div>
        </div>
        <div className="py-6 text-white"> companies</div>
      </div>
    </>
  );
};

export default Testimonials;
