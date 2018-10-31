import React from "react";
import marked from 'marked';
import { Draggable } from "react-beautiful-dnd";
import "./Card.scss";
const Card = props => (
  <div dangerouslySetInnerHTML={{__html: marked(props.title)}} className={` card lighten-${props.color}`}>
  
   
  </div>
);

export default Card;
