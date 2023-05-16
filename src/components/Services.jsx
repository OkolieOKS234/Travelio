import React from 'react'
import Customization from "../assets/customization.png"
import Flights from "../assets/flights.png"
import LocalEvents from "../assets/Local_events.png"
import Weather from "../assets/weather.png"

const Services = () => {
  return (
    <section>
        <h3 className='text-center font-bold text-2xl'>WE OFFER THE BEST SERVICES</h3>
<div className='flex justify-center items-center gap-4'>
    <div className='mt-12'>
        <img src={Weather} alt="" className='w-24' />
       <p className='text-center w-24 text-sm'>Experience the perfect travel with our travel agency</p> 
    </div>
   
    <div>
    <img src={Flights} alt="" className=' w-28 mt-6' />
    <p className='text-center w-24 text-sm'>Book hotels online and book flights online</p>
    </div>

    <div  className=' w-28 mt-12' >
    <img src={LocalEvents} alt="" />
    <p className='text-center w-24 text-sm'>Book hotels online and book flights online</p>
    </div>
    <div>
    <img src={Customization} alt="" className=' w-24 mt-6'  />
    <p className='text-center w-24 text-sm'>Customize your travel package</p>
    </div>
</div>

    </section>
  )
}

export default Services