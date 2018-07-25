import React from "react";
import { connect } from "react-redux";
import { Card } from "../../Containers/Card/card.js";

export const CardContainer = ({sets}) => {
  const displaySets = sets.map(set => {
    return <Card {...set} />
  })
  return <div className="card_section">{displaySets}</div>;
}

export const mapStateToProps = state => {
  return {
    sets: state.sets
  }
};

export default connect(mapStateToProps, null)(CardContainer)