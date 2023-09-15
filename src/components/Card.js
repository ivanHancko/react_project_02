import React from 'react'
import star from "../star.png"

const Card = (props) => {
let badgeText;
if (props.item.openSpots ===0){
  badgeText = "SOLD OUT";

}else if (props.item.location === "Online"){
  badgeText = "ONLINE";
}
  return (

    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img  src={`../images/${props.item.coverImg}`} className='card--image' alt='' />
        <div className='card--status'>
            <img className='card--star' src={star} alt='' />
            <span> {props.item.stats.rating} </span>
            <span className='gray'> ({props.item.total}) •</span>
            <span className='gray'> {props.item.location} </span>
        </div>
        
        <p>{props.item.title}</p>
        <p><span className='card--bold'>From $ {props.item.price} </span> / person</p>
    </div>
  )
}

export default Card