import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { InView } from "react-intersection-observer";

import { swirl } from "../../assets";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto py-16">
        <div className="absolute -left-48">
          <img src={swirl} alt="swirl" className="relative top-36" />
        </div>
        <div className="absolute -right-32">
          <div className="relative bottom-72 z-0 h-[675px] w-[675px] rounded-[50%] bg-gradient-to-b from-[#C194EA] to-[#EE77C7]/[0.94] opacity-[0.75] blur-[3px]" />
        </div>
        <div className="absolute right-72">
          <div className="relative bottom-0 z-0 h-[475px] w-[475px] rounded-[50%] bg-gradient-to-b from-[#9940EB]/[0.54] to-[#F05EC0]/[0.68] opacity-[0.75] blur-[3px]" />
        </div>
        <div className="grid grid-cols-1 gap-10 text-white lg:grid-cols-3">
          <div className="glass relative z-10 rounded-[69px] p-8 duration-200 ease-in-out hover:scale-110">
            <div className="h-32 w-32 overflow-hidden rounded-full">
              <div className="relative -left-[60px] w-60">
                <img
                  src="https://totalfratmove.com/wp-content/uploads/2021/01/Frar-Boy.jpg"
                  alt="Dancey Dave"
                  className="aspect-auto"
                />
              </div>
            </div>
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
          <div className="glass relative z-10 rounded-[69px] p-8 duration-200 ease-in-out hover:scale-110">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCiXWB9DQRT7__bG1iRRu3qFW-pTJF8zktA&usqp=CAU"
              alt="Party Patricia"
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
          <div className="relative z-10">
            <div className="mt-8 text-6xl font-bold">
              Join <br />
              {/* <CountUp end={1000000} separator="," suffix="+" duration={1} /> */}
              <InView triggerOnce>
                {({ inView, ref }) => (
                  <span ref={ref}>
                    {inView ? (
                      <CountUp
                        end={1000000}
                        separator=","
                        suffix="+"
                        duration={1}
                      />
                    ) : (
                      <span>69</span>
                    )}
                  </span>
                )}
              </InView>
              <br /> Partiers
            </div>
            <div className="mt-6 text-2xl font-normal">
              You'll never have to worry about party planning again. Let us take
              care of the details while you sit back and enjoy the celebration!
            </div>
          </div>
        </div>
        <Marquee gradient={false} speed={50}>
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
    </section>
  );
};

export default Testimonials;
