import React from "react";
import "./EditCard.scss";
const EditCard = props => (
  <textarea  className="edit-card" autoFocus defaultValue={props.text} style={{height: `${props.height}px`, width: `${props.width}px`}}></textarea>
);

export default EditCard;
