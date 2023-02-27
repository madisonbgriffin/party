import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const shopPage = () => {
    navigate("/Shop");
  };
  return (
    <section className="lg:py-40 py-20 text-center text-white">
      <h1 className="text-5xl lg:text-6xl font-bold">LET'S GET THIS PARTY STARTIED!</h1>
      <p className="mt-5 text-3xl font-light">
        Make your next party unforgettable with Party in a Box. Everything you
        need for a successful celebration, all in one convenient package!
      </p>
      <button
        type="button"
        className="glass mt-10 mr-2 mb-2 px-10 py-5 text-center text-3xl duration-200 ease-in-out hover:scale-110 xl:text-4xl"
        onClick={shopPage}
      >
        SHOP NOW
      </button>
    </section>
  );
};

export default CTA;
