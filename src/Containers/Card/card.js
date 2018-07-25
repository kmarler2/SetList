import React from "react";
import { connect } from "react-redux";
import './card.css'

export const Card = ({artist, date, venue, city, set}) => {
  console.log('props: ', artist)
  const data = {
    artist,
    date,
    venue,
    city, 
    set
  }
  return (
    <div className='card'>
      <h2>{artist}</h2>
      <h2>{date}</h2>
      <h2>{venue}</h2>
      <h2>{city}</h2>
      <button className='card-button'>Add playlist to spotify</button>
    </div>
  )
}