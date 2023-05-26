import { useState } from 'react'
import './App.css'
import Acordeon from './components/Acordeon'
import Card from './components/Card'
import Proyecto3 from './components/Proyecto3'
import ListButton from './components/ListButton'
import Navbar from './components/navbar'

function App() {
  

  return (
    <>
    
      <Navbar />
    
      
     <div className='ejercicio1'>
        <Acordeon />
      </div>
      <div className='ejercicio2'>  
         <Card />
      </div>
      <div className='ejercicio3'>
        <Proyecto3 />
      </div>
      <div>
        <ListButton/>

      </div>  
     
    </>
  )
}

export default App
