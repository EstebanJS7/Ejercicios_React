import React from 'react'
import Imagen from './imagen'
import Text from './Text'
import './Card.css'
import Button from './Button'
import LinkRed from './LinkRed'
import Date from './Date'

function Card() {
  return (
    <div className="card">
        <Imagen />
        <Text />
        <Button name_button='STATE' /> <Button name_button='COST' /> <Button name_button='ORPHAN' />
        <Date fecha='4 ago 2022' />
        <LinkRed link='READ REPORT'/>
        <LinkRed link='DOWNLOAD REPORT'/>
    </div>
  )
}

export default Card