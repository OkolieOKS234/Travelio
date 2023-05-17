import React from "react";
import Alitalia from "../assets/brands/alitalia.png"
import Axon from "../assets/brands/axon.png"
import Expedia from "../assets/brands/expedia.png"
import Qantas from "../assets/brands/qantas.png"
import Jetstar from "../assets/brands/jetstar.png"

const Testimonials = () => {
  return (
    <div className="flex justify-center items-center gap-12">
      <img src={Alitalia} alt=""  />
      <img src={Axon} alt=""  />
      <img src={Expedia} alt="" className="self-center justify-self-center"/>
      <img src={Qantas} alt="" />
      <img src={Jetstar} alt="" />
    </div>
  );
};

export default Testimonials;
