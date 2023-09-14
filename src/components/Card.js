import React from 'react'
import star from "../star.png"

const Card = (props) => {

  return (

    <div className='card'>
        <img  src={`../images/${props.img}`} className='card--image' alt='' />
        <div className='card--status'>
            <img className='card--star' src={star} alt='' />
            <span> {props.rate} </span>
            <span className='gray'> ({props.total}) •</span>
            <span className='gray'> {props.location} </span>
        </div>
        
        <p>{props.title}</p>
        <p><span className='card--bold'>From $ {props.price} </span> / person</p>
    </div>
  )
}

export default Card