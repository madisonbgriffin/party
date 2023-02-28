import { useState, useEffect } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { InView } from "react-intersection-observer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import axios from "axios";

import { swirl } from "../../assets";

const quotes = [
  {
    reviewer: "Dancey Dave",
    role: "President of Alpha Sigma Pi",
    quote:
      "Party in a Box is the ultimate frat house essential! It made throwing our rager a breeze and had everything we needed for a legendary night.",
    profilepic:
      "https://totalfratmove.com/wp-content/uploads/2021/01/Frar-Boy.jpg",
  },
  {
    reviewer: "Party Patricia",
    role: "Master Knitter",
    quote:
      "Party in a Box? More like Yarn in a Box! As a knitter, I was pleasantly surprised to find out it had everything we needed for a night of crafting and laughter.",
    profilepic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCiXWB9DQRT7__bG1iRRu3qFW-pTJF8zktA&usqp=CAU",
  },
  {
    reviewer: "Rotten Robby",
    role: "Professional Brat",
    quote:
      "I've been to every theme park, water park, and arcade in the world, but nothing compares to the excitement of opening a Party in a Box. It's like Christmas, but without the disappointment of not getting what I want.",
    profilepic:
      "https://i.pinimg.com/736x/bf/ef/1a/bfef1a1c8f8beb2d8b8c66851adbf5cb.jpg",
  },
  {
    reviewer: "Romantic Rachel",
    role: "Dysfunctional Newlywed",
    quote:
      "Using Party in a Box for my wedding was a total game-changer. It was like having a wedding planner, caterer, and DJ all rolled into one. And the best part? I didn't have to deal with any bridezilla meltdowns, because everything was so easy and stress-free. Now if only I could use Party in a Box for my marriage!",
    profilepic:
      "https://media.istockphoto.com/id/157293077/photo/unhappy-bride.jpg?s=612x612&w=0&k=20&c=Z2LxuHxaaxa-TVnny3LaRHNVtlO-m19R_BEYH38hO5c=",
  },
  {
    reviewer: "Splashy Samuel",
    role: "Incompetent Swimmer",
    quote:
      "I'm not exactly Michael Phelps, but thanks to Party in a Box, I felt like a swimming superstar! The pool noodles, floaties, and other fun pool accessories made me look like I knew what I was doing, even though I was just doggy-paddling my way around the shallow end. Plus, the quick and easy cleanup meant I could get back to my true calling: lounging on the pool deck with a cold drink in my hand!",
    profilepic:
      "http://3.bp.blogspot.com/-Olz3UC0WMxE/VbB5HXMudvI/AAAAAAAAazM/PxS1HZPzE-o/s1600/Edit_Champs_Swim_Meet_2015_0503.JPG",
  },
  {
    reviewer: "Grill Master Gary",
    role: "BBQ Dad",
    quote:
      "Let me tell you something, I've been grilling for 20 years, but Party in a Box made me look like a pro. I didn't have to worry about a thing - the food was hot, the drinks were cold, and the clean-up was a breeze. I even had time to take a nap in my hammock, which is something I haven't done since 1998.",
    profilepic:
      "https://cdn.shopify.com/s/files/1/0033/6576/5238/products/grillindad_1200x1200.jpg?v=1631207258",
  },
  {
    reviewer: "Birthday Brittany",
    role: "Egotistical 5-Year-Old",
    quote:
      "I don't always have parties, but when I do, I use Party in a Box. Because let's face it, without me, there would be no party. I'm the star of the show, the life of the party, the queen of the castle. And with Party in a Box, I get to be all those things and more, without even breaking a sweat. It's just one more thing to add to the list of things that make me awesome.",
    profilepic:
      "https://d.newsweek.com/en/full/2067542/file-photo-screaming-girl.jpg",
  },
  {
    reviewer: "Quarterback Quentin",
    role: "Local Football Hero",
    quote:
      "Let me tell you, folks, I've thrown a lot of game-winning touchdowns in my time, but Party in a Box was the real MVP of my Super Bowl party. It's like having a secret weapon in your back pocket - one minute you're setting up, and the next minute, boom, you've got a full-blown party on your hands. And when the game was over, cleanup was a breeze. I didn't even have to throw a Hail Mary to get my house back in order. Party in a Box, you've earned yourself a spot in the Hall of Fame!",
    profilepic:
      "https://media.npr.org/assets/img/2016/02/26/johncastello1_wide-98b9425f315a0a266d391480d4921584b88c936e-s1400-c100.jpg",
  },
  {
    reviewer: "Pepperoni Pete",
    role: "Italian Cuisine Connoisseur",
    quote:
      "I gotta say, Party in a Box really delivered the goods for my pizza party! With their decorations, it was like my living room turned into a pizzeria, but without the weird smell and the creepy guy behind the counter. And with everything so easy to set up, I had plenty of time to focus on what really matters - eating as much pizza as humanly possible! Thanks, Party in a Box - you're the real MVP of pizza parties!",
    profilepic:
      "https://cdn.dailyvoice.com/image/upload/c_fill,dpr_2,f_auto,q_auto:eco,w_640/Screenshot_966_n77eqe",
  },
];

const Testimonials = () => {
  const [quotesToShow, setQuotesToShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const randomIndex1 = Math.floor(Math.random() * quotes.length);
    let randomIndex2 = Math.floor(Math.random() * quotes.length);
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * quotes.length);
    }
    const randomQuote1 = quotes[randomIndex1];
    const randomQuote2 = quotes[randomIndex2];
    setTimeout(() => {
      setQuotesToShow([randomQuote1, randomQuote2]);
      setIsLoading(false);
    }, 3000);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://randomuser.me/api/")
  //     .then((response) => {
  //       console.log(response.data.results[0]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <section className=" p-5 lg:p-1 py-14 lg:py-16">
      <SkeletonTheme baseColor="#9940EB" highlightColor="#8b25e8">
        {/* Left-side swirl image */}
        <div className="absolute -left-48">
          <img src={swirl} alt="swirl" className="relative top-36" />
        </div>
        {/* Right-side background circle with gradient */}
        <div className="absolute -right-32">
          <div className="relative bottom-72 z-0 h-[675px] w-[675px] rounded-[50%] bg-gradient-to-b from-[#C194EA] to-[#EE77C7]/[0.94] opacity-[0.75] blur-[3px]" />
        </div>
        {/* Right-side foreground circle with gradient */}
        <div className="absolute right-72">
          <div className="relative bottom-0 z-0 h-[475px] w-[475px] rounded-[50%] bg-gradient-to-b from-[#9940EB]/[0.54] to-[#F05EC0]/[0.68] opacity-[0.75] blur-[3px]" />
        </div>

        {/* Load quotes then render */}
        {isLoading ? (
          <div className=" grid grid-cols-1 gap-10 text-white lg:grid-cols-3">
            {/* Loading first quote */}
            <div className="glass relative z-10 rounded-[69px]">
              <Skeleton circle className="h-32 w-32" />
              <div className="flex">
                <div className="mt-3 flex-[0.66] text-2xl">
                  <Skeleton />
                </div>
              </div>
              <div className="flex">
                <div className="mt-1 flex-[0.66] text-xl">
                  <Skeleton />
                </div>
              </div>
              <div className="mt-4 text-lg">
                <Skeleton count={7} />
              </div>
            </div>
            {/* Loading second quote */}
            <div className="glass relative z-10 rounded-[69px] p-8">
              <Skeleton circle className="h-32 w-32" />
              <div className="flex">
                <div className="mt-3 flex-[0.66] text-2xl">
                  <Skeleton />
                </div>
              </div>
              <div className="flex">
                <div className="mt-1 flex-[0.66] text-xl">
                  <Skeleton />
                </div>
              </div>
              <div className="mt-4 text-lg">
                <Skeleton count={7} />
              </div>
            </div>
            <div className="relative z-10">
              <div className="mt-8 text-6xl">
                <div className="flex">
                  <div className="flex-[0.35]">
                    <Skeleton />
                  </div>
                </div>
                <Skeleton className="mt-2" />
                <div className="mt-2 flex">
                  <div className="flex-[0.6]">
                    <Skeleton />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-2xl">
                <Skeleton count={4} />
              </div>
              <div className="flex">
                <div className="flex-[0.66]">
                  <Skeleton className="mt-10 mr-2 mb-2 rounded-full px-6 py-3 text-center text-2xl" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          quotesToShow.length > 0 && (
            <div className="grid grid-cols-1 gap-10 text-white lg:grid-cols-3">
              {/* First quote */}
              <div className="glass relative z-10 rounded-[69px] p-8">
                <div className="h-32 w-32 overflow-hidden rounded-full">
                  <img
                    src={quotesToShow[0].profilepic}
                    alt={quotesToShow[0].reviewer}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-3 text-2xl font-bold">
                  {quotesToShow[0].reviewer}
                </div>
                <div className="mt-1 text-xl font-medium">
                  {quotesToShow[0].role}
                </div>
                <div className="mt-4 text-lg font-normal">
                  “{quotesToShow[0].quote}”
                </div>
              </div>
              {/* Second quote */}
              <div className="glass relative z-10 rounded-[69px] p-8">
                <div className="h-32 w-32 overflow-hidden rounded-full">
                  <img
                    src={quotesToShow[1].profilepic}
                    alt={quotesToShow[1].reviewer}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-3 text-2xl font-bold">
                  {quotesToShow[1].reviewer}
                </div>
                <div className="mt-1 text-xl font-medium">
                  {quotesToShow[1].role}
                </div>
                <div className="mt-4 text-lg font-normal">
                  “{quotesToShow[1].quote}”
                </div>
              </div>
              {/* Counter */}
              <div className="relative z-10">
                <div className="mt-8 text-6xl font-bold lg:text-5xl xl:text-6xl">
                  <div>Join</div>
                  <InView triggerOnce>
                    {({ inView, ref }) => (
                      <div className="mt-2" ref={ref}>
                        {inView ? (
                          <CountUp
                            end={10000000}
                            separator=","
                            suffix="+"
                            duration={1}
                            delay={0.1}
                            start={69}
                          />
                        ) : (
                          <div className="mt-2">69</div>
                        )}
                      </div>
                    )}
                  </InView>
                  <div className="mt-2">Partiers</div>
                </div>
                <div className="mt-6 text-2xl font-normal">
                  You'll never have to worry about party planning again. Let us
                  take care of the details while you sit back and enjoy the
                  celebration!
                </div>
                <button
                  type="button"
                  className="glass mt-10 mr-2 mb-2 px-6 py-3 text-center text-2xl duration-200 ease-in-out hover:scale-110"
                >
                  View more stories
                </button>
              </div>
            </div>
          )
        )}
        
        <Marquee gradient={false} speed={30}>
          <div className="mt-16 flex h-20 lg:h-48 text-white brightness-0 invert ">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74deb6ff-8857-4c03-9da1-4107c547bbc6/dfawn6v-399fc6d5-8dae-4fc4-86cd-b85bf614218f.png/v1/fill/w_1000,h_163,strp/nickelodeon_is_white_logo_png_by_janiyawestbrook_dfawn6v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzIiwicGF0aCI6IlwvZlwvNzRkZWI2ZmYtODg1Ny00YzAzLTlkYTEtNDEwN2M1NDdiYmM2XC9kZmF3bjZ2LTM5OWZjNmQ1LThkYWUtNGZjNC04NmNkLWI4NWJmNjE0MjE4Zi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._TYtypH2yTLsiFciDZlJWGxVo1uZnTX_EVXXnz63lgE"
              alt="Nickelodeon"
              className=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
              alt="McDonald's"
              className=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
              alt="Amazon"
              className=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/800px-1960s_Gucci_Logo.svg.png"
              alt="Gucci"
              className=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Toys_R_Us.svg/1280px-Logo_Toys_R_Us.svg.png"
              alt="Toys R Us"
              className=""
            />
          </div>
        </Marquee>
      </SkeletonTheme>
    </section>
  );
};

export default Testimonials;
