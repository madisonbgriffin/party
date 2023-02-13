import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-3 gap-10 text-white">
          <div className="glass rounded-[69px] p-8">
            <img
              src="https://miro.medium.com/max/1400/1*cYJ4yEhb1RfFicQRdVyP_Q.jpeg"
              alt="Indian Customer"
              className="h-32 w-32 rounded-full"
            />
            <div className="mt-3 text-2xl font-bold">Dancey Dave</div>
            <div className="mt-1 text-xl font-medium">
              President of Alpha Sigma Pi
            </div>
            <div className="mt-4 text-lg font-normal">
              “Party in a Box is the ultimate frat house essential! It made
              throwing our rager a breeze and had everything we needed for a
              legendary night.”
            </div>
          </div>
          <div className="glass rounded-[69px] p-8">
            <img
              src="https://miro.medium.com/max/1400/1*cYJ4yEhb1RfFicQRdVyP_Q.jpeg"
              alt="Indian Customer"
              className="h-32 w-32 rounded-full"
            />
            <div className="mt-3 text-2xl font-bold">Party Patricia</div>
            <div className="mt-1 text-xl font-medium">Master Knitter</div>
            <div className="mt-4 text-lg font-normal">
              "Party in a Box? More like Yarn in a Box! As a knitter, I was
              pleasantly surprised to find out it had everything we needed for a
              night of crafting and laughter."
            </div>
          </div>
          <div className="">
            <div className="mt-8 text-6xl font-bold">
              Join <br /> 1,000,000+ <br /> Partiers
            </div>
            <div className="mt-6 text-2xl font-normal">
              You'll never have to worry about party planning again. Let us take
              care of the details while you sit back and enjoy the celebration!
            </div>
          </div>
        </div>
        <Marquee gradient={false} direction="right"
        speed={60}>
          <div className="mt-16 grid grid-cols-6 gap-8 text-white">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74deb6ff-8857-4c03-9da1-4107c547bbc6/dfawn6v-399fc6d5-8dae-4fc4-86cd-b85bf614218f.png/v1/fill/w_1000,h_163,strp/nickelodeon_is_white_logo_png_by_janiyawestbrook_dfawn6v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzIiwicGF0aCI6IlwvZlwvNzRkZWI2ZmYtODg1Ny00YzAzLTlkYTEtNDEwN2M1NDdiYmM2XC9kZmF3bjZ2LTM5OWZjNmQ1LThkYWUtNGZjNC04NmNkLWI4NWJmNjE0MjE4Zi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._TYtypH2yTLsiFciDZlJWGxVo1uZnTX_EVXXnz63lgE"
              alt="Nickelodeon"
            />
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74deb6ff-8857-4c03-9da1-4107c547bbc6/dfawn6v-399fc6d5-8dae-4fc4-86cd-b85bf614218f.png/v1/fill/w_1000,h_163,strp/nickelodeon_is_white_logo_png_by_janiyawestbrook_dfawn6v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzIiwicGF0aCI6IlwvZlwvNzRkZWI2ZmYtODg1Ny00YzAzLTlkYTEtNDEwN2M1NDdiYmM2XC9kZmF3bjZ2LTM5OWZjNmQ1LThkYWUtNGZjNC04NmNkLWI4NWJmNjE0MjE4Zi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._TYtypH2yTLsiFciDZlJWGxVo1uZnTX_EVXXnz63lgE"
              alt="Nickelodeon"
            />
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74deb6ff-8857-4c03-9da1-4107c547bbc6/dfawn6v-399fc6d5-8dae-4fc4-86cd-b85bf614218f.png/v1/fill/w_1000,h_163,strp/nickelodeon_is_white_logo_png_by_janiyawestbrook_dfawn6v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzIiwicGF0aCI6IlwvZlwvNzRkZWI2ZmYtODg1Ny00YzAzLTlkYTEtNDEwN2M1NDdiYmM2XC9kZmF3bjZ2LTM5OWZjNmQ1LThkYWUtNGZjNC04NmNkLWI4NWJmNjE0MjE4Zi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._TYtypH2yTLsiFciDZlJWGxVo1uZnTX_EVXXnz63lgE"
              alt="Nickelodeon"
            />
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74deb6ff-8857-4c03-9da1-4107c547bbc6/dfawn6v-399fc6d5-8dae-4fc4-86cd-b85bf614218f.png/v1/fill/w_1000,h_163,strp/nickelodeon_is_white_logo_png_by_janiyawestbrook_dfawn6v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzIiwicGF0aCI6IlwvZlwvNzRkZWI2ZmYtODg1Ny00YzAzLTlkYTEtNDEwN2M1NDdiYmM2XC9kZmF3bjZ2LTM5OWZjNmQ1LThkYWUtNGZjNC04NmNkLWI4NWJmNjE0MjE4Zi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._TYtypH2yTLsiFciDZlJWGxVo1uZnTX_EVXXnz63lgE"
              alt="Nickelodeon"
            />
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74deb6ff-8857-4c03-9da1-4107c547bbc6/dfawn6v-399fc6d5-8dae-4fc4-86cd-b85bf614218f.png/v1/fill/w_1000,h_163,strp/nickelodeon_is_white_logo_png_by_janiyawestbrook_dfawn6v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzIiwicGF0aCI6IlwvZlwvNzRkZWI2ZmYtODg1Ny00YzAzLTlkYTEtNDEwN2M1NDdiYmM2XC9kZmF3bjZ2LTM5OWZjNmQ1LThkYWUtNGZjNC04NmNkLWI4NWJmNjE0MjE4Zi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._TYtypH2yTLsiFciDZlJWGxVo1uZnTX_EVXXnz63lgE"
              alt="Nickelodeon"
            />
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74deb6ff-8857-4c03-9da1-4107c547bbc6/dfawn6v-399fc6d5-8dae-4fc4-86cd-b85bf614218f.png/v1/fill/w_1000,h_163,strp/nickelodeon_is_white_logo_png_by_janiyawestbrook_dfawn6v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzIiwicGF0aCI6IlwvZlwvNzRkZWI2ZmYtODg1Ny00YzAzLTlkYTEtNDEwN2M1NDdiYmM2XC9kZmF3bjZ2LTM5OWZjNmQ1LThkYWUtNGZjNC04NmNkLWI4NWJmNjE0MjE4Zi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._TYtypH2yTLsiFciDZlJWGxVo1uZnTX_EVXXnz63lgE"
              alt="Nickelodeon"
            />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Testimonials;
