import React from 'react'
import './LinkRed.css'

function LinkRed(props) {
  return (
    <div className='linkdiv'>
      <a className='link' href='#'>{props.link} &gt; &gt; &gt;</a>
    </div>
  )
}

export default LinkRed