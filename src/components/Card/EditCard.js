import React from "react";
import "./EditCard.scss";
const EditCard = props => (
  <textarea  className="edit-card" autoFocus defaultValue={props.text} style={{height: `${props.height}px`, width: "100%"}}></textarea>
);

export default EditCard;
