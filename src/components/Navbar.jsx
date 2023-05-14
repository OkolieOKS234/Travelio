import React from 'react'

const Navbar = () => {
  return (
    <header>
      <ul className='flex gap-3 justify-between'>
        <div className=' mx-28'>
        <li className=' mt-0 text-3xl'><span className='text-red-600  font-bold'>T</span>ravelio</li>
        </div>
        {/* Other parts */}
        <div className='mx-32 flex gap-6 my-2'>
        <li className='ml-8'>Destinations</li>
        <li>Hotels</li>
        <li>Flights</li>
        <li>Bookings</li>
        <li>Login</li>
        <li>
          <button className='border-2 border-black px-2'>Sign up</button>
          </li>
        <li>EN </li>
        </div>
      </ul>
    </header>
  )
}

export default Navbar