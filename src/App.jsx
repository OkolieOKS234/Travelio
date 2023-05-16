import './App.css'
import Book from './components/Book'
import Destination from './components/Destination'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

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
    </>
  )
}

export default App
