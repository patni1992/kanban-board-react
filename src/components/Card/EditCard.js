import React from "react";

const EditCard = props => (
  <textarea  autoFocus defaultValue={props.text} style={{height: `${props.height}px`, width: "100%"}} id=""></textarea>
);

export default EditCard;
