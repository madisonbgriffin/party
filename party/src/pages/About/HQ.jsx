import { partyhq } from "../../assets"

const HQ = () => {
  return (
    <section className="py-40 md:px-40 lg:px-20">
      <div className="relative z-20 top-10 w-1/2 ">
      <img src={partyhq} alt="" />
      </div>
      <div className="glass relative rounded-[50px] p-10 pb-10 text-white lg:pb-20">
        <div className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          OUR HQ
        </div>
        
        <div className="text-md pt-7 text-center md:text-xl lg:px-10 lg:text-2xl">
          At Party in a Box HQ, our team works tirelessly to ensure that every
          box is packed with the latest and greatest party essentials, from
          decorations to snacks and everything in between, to make sure every
          customer's celebration is a success.
        </div>
      </div>
    </section>
  )
}

export default HQ
