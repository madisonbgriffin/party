import Marquee from "react-fast-marquee";


const logos = [
  {
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74deb6ff-8857-4c03-9da1-4107c547bbc6/dfawn6v-399fc6d5-8dae-4fc4-86cd-b85bf614218f.png/v1/fill/w_1000,h_163,strp/nickelodeon_is_white_logo_png_by_janiyawestbrook_dfawn6v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzIiwicGF0aCI6IlwvZlwvNzRkZWI2ZmYtODg1Ny00YzAzLTlkYTEtNDEwN2M1NDdiYmM2XC9kZmF3bjZ2LTM5OWZjNmQ1LThkYWUtNGZjNC04NmNkLWI4NWJmNjE0MjE4Zi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._TYtypH2yTLsiFciDZlJWGxVo1uZnTX_EVXXnz63lgE",
    alt: "Nickelodeon",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
    alt: "McDonald's",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png",
    alt: "Amazon",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/800px-1960s_Gucci_Logo.svg.png",
    alt: "Gucci",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Toys_R_Us.svg/1280px-Logo_Toys_R_Us.svg.png",
    alt: "Toys R Us",
  },
]

const Logos = () => {
  return (
    <section className="py-16">
      <Marquee gradient={false} speed={30}>
        <div className="flex h-20 text-white brightness-0 invert">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="mx-10" />
          ))}
        </div>
      </Marquee>
    </section>
  )
}

export default Logos

//TODO: add actual logos and make sure they are aligned center
//TODO: make container fluid