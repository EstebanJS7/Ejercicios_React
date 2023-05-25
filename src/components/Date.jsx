import React from 'react'
import './Date.css'

function Date(props) {
  return (
    <div>
        <p id='fecha'>   {props.fecha}</p>
    </div>
  )
}

export default Date