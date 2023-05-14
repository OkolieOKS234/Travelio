import React from 'react'
import Customization from "../assets/customization.png"
import Flights from "../assets/flights.png"
import LocalEvents from "../assets/Local_events.png"
import Weather from "../assets/weather.png"

const Services = () => {
  return (
    <section>
        <h3 className='text-center font-bold text-2xl'>WE OFFER THE BEST SERVICES</h3>
<div className='flex justify-center items-center'>
    <div className='mt-12'>
        <img src={Weather} alt="" />
       <p className='text-center w-24 text-sm'>Experience the perfect travel with our travel agency</p> 
    </div>
    <div className='rounded'>
    <img src={Flights} alt="" className='mt-2' />
    </div>
    <div>
    <img src={LocalEvents} alt="" />
    </div>
    <div>
    <img src={Customization} alt="" />
    </div>
</div>

    </section>
  )
}

export default Services