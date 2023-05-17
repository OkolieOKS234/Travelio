import React from "react";

const Subscribe = () => {
  return (
    <section>
      <div className="subscribe m-auto shadow-2xl p-12">
        <h3 className="text-center text-2xl m-auto font-sans max-w-lg">
          Subscribe to get information, latest news and other interesting offers
          about <span className="underline-coor underline"> <span className="text-red-500">T</span>ravelio</span>
        </h3>
        <div className="flex justify-center items-center gap-2 pt-6">
        <input type="text" className="rounded  text-center" placeholder="Enter your email"/>
        <button className="text-black bg-orange-500 p-0.5 rounded px-4">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
