import { useState } from 'react'
import './App.css'
import Acordeon from './components/Acordeon'
import Card from './components/Card'
import Proyecto3 from './components/Proyecto3'

function App() {
  

  return (
    <>
     <div className='ejercicio1'>
        <Acordeon />
      </div>
      <div className='ejercicio2'>  
         <Card />
      </div>
      <div className='ejercicio3'>
        <Proyecto3 />
      </div>  
     
    </>
  )
}

export default App