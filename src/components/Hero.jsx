import React from "react";
import Woman from "../assets/Woman_with_passport.png"


const Hero = () => {
  return (
    <section className="hero">

      <div className="flex justify-center items-center">
      <div className=" px-28 w-3/5">
        <p className=" text-red-400">BEST DESTINATIONS AROUND THE WORLD</p>
        <h1 className="text-5xl">Travel, enjoy and live a new and full life</h1>
      <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
      </div>
      <div>
<img src={Woman} alt="" className=" w-3/4 " />

      </div>
      </div>
    </section>
  );
};

export default Hero;
