import React,{useEffect, useState} from "react";
import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";
import Twitter from "../assets/icons/twitter.png";
import PlayStore from "../assets/icons/playstore.png";
import AppStore from "../assets/icons/appstore.png";

const Footer = () => {
// Date
const [currentDate, setCurrentDate] = useState(new Date());

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentDate(new Date());
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);

const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;



  return (
    <footer className="py-12">
      <div className="flex justify-center items-center pb-4">
        <div className="max-w-xs">
          <h2>Travelio</h2>
          <p className="text-sm">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div>
          <ul>
            <li className="font-bold underline">Company</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Mobile</li>
          </ul>
        </div>
        <div>
          <ul className="ml-11">
            <li className="font-bold underline ">Contact</li>
            <li className="cursor-pointer">Help/FAQ</li>
            <li className="cursor-pointer">Press</li>
            <li className="cursor-pointer">Affiliates</li>
          </ul>
        </div>
        <div>
          <ul className="ml-11">
            <li className="font-bold underline ">More</li>
            <li>Airlines</li>
            <li>Jobs</li>
            <li>Write for us</li>
          </ul>
        </div>
        {/* Last */}
        <div className="ml-12 mt-0">
          {/* socials */}
          <div className="flex h-10 self-center text-center ml-4 ">
            <img src={Facebook} alt="" className="cursor-pointer" />
            <img src={Instagram} alt=""  className="cursor-pointer"/>
            <img src={Twitter} alt=""   className="cursor-pointer"/>
          </div>
          <p className="ml-4">Download our app</p>
          <div className="flex gap-2">
            <img src={PlayStore} alt="" className="cursor-pointer" />
            <img src={AppStore} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center pt-4">Rights reserved &#169; {formattedDate}</p>
    </footer>
  );
};

export default Footer;
