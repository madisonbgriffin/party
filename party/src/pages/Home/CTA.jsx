import { useNavigate } from "react-router-dom";


const CTA = () => {
  const navigate = useNavigate()

  const shopPage = () => {
    navigate("/Shop")
  }
  return (
    <section className="p-5 py-20 text-center text-white lg:py-40">
      <h1 className="text-5xl font-bold lg:text-6xl">
        LET'S GET THIS PARTY STARTIED!
      </h1>
      <p className="mt-5 text-3xl font-light">
        Make your next party unforgettable with Party in a Box. Everything you
        need for a successful celebration, all in one convenient package!
      </p>
      <button
        type="button"
        className="glass mt-10 mr-2 mb-2 px-10 py-5 text-center text-xl duration-200 ease-in-out hover:scale-110 lg:text-3xl xl:text-4xl"
        onClick={shopPage}
      >
        SHOP NOW
      </button>
    </section>
  )
}

export default CTA

//TODO: styling and responsivenss