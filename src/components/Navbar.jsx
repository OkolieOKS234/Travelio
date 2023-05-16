import React, {useState} from 'react'

const Navbar = () => {
  let Links =[
    {name:"Home",link:"#", className:"text-black hover:text-gray-400 duration-500"},
    {name:"Destination",link:"#footer", className:"text-black hover:text-gray-400 duration-500"},
    {name:"Hotels",link:"#section", className:"text-black hover:text-gray-400 duration-500"},  
    {name:"Flights",link:"#section", className:"text-black hover:text-gray-400 duration-500"},  
    {name:"Bookings",link:"#section", className:"text-black hover:text-gray-400 duration-500"},  
    {name:"Login",link:"#section", className:"text-black hover:text-gray-400 duration-500 border-2"},  
    {name:"Sign up",link:"#section", className:"text-black hover:text-gray-400 duration-500"},  
  ];
  let [open, setOpen] = useState(false);
  // <div className=' mx-28'>
  // <li className=' mt-0 text-3xl'><span className='text-red-600  font-bold'>T</span>ravelio</li>
  // </div>

  return (
    <div className='shadow-sm w-full  top-0 left-0 '>
    <div className='  bg-white md:flex items-center justify-between  py-4 md:px-2 px-7'>
    <div className='font-bold bg-white  cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <div className=' mr-1 p-0 m-0 px-24 '>
      <li className=' mt-0 text-3xl list-none'><span className='text-red-600  font-bold'>T</span>ravelio</li>
      </div>
     
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-black'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>
    <ul className={`navbar_big text-black md:flex md:items-center md:pb-0 pb-2 absolute md:static  z-[2] left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            
            <ul key={link.name} to={link.link} className='md:ml-8 text-xl md:my-0 my-7 text-white' smooth >
              <li className={link.className}>{link.name}</li>
            </ul>
          ))
        }
        
      </ul>
      </div>
    </div>

  )
}

export default Navbar