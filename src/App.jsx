import './App.css'
import Book from './components/Book'
import Destination from './components/Destination'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'

function App() {
  

  return (
    <>
    <div className='start'>
      <Navbar/>
      <Hero/>
      </div>
      <Services/>
      <Destination/>
      <Book/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
