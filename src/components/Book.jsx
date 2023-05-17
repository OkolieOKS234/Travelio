import React from "react";
import BookTrip from "../assets/bookTrip.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Book = () => {
  return (
    <section>
      <div className="flex justify-center items-center gap-12">
        <div className="max-w-xs">
        <h3 className="text-3xl">Book your trip in 3 ways</h3>
        <p className="font-bold">Choose your destination</p>
        <p className=" pb-4">Choose from a range of locations and start your journey.</p>
        <p className="font-bold">Make payment</p>
        <p className=" pb-4">Easily pay for our service through our payment gateway with speed.</p>
        <p className="font-bold">Reach Airport on selected Date</p>
        <p className=" pb-4">Reach the airport without worries, knowing we have handled everything for you</p>
        </div>
         <div className="">
          <img src={BookTrip} alt=""  />
         </div>
      
    </div>
    </section>
  );
};

export default Book;
