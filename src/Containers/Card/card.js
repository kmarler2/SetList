import React from "react";
import { connect } from "react-redux";

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
    <div>
    </div>
  )
}