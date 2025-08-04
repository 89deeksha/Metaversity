import React from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Leftdropdown from './Components/Leftdropdown'
import Nav1 from './Components/Nav1'
import Games from './Components/Games'
import Data from './Components/Data'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
function App() {
  return (
   <>
   <Header/>
   <Navbar/>
   <div className='flex gap-2 '>
   <div className="self-start">
    <Leftdropdown />
  </div>
   <div className='flex flex-col'>
   <Nav1/>
   <Games/>
   <Data/>
   <Cards/>
   
   </div>
   
   </div>
   <Footer/>
   </>
  )
}

export default App