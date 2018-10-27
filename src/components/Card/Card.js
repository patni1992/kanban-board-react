import React from "react";
import ReactMarkdown from "react-markdown";
import { Draggable } from "react-beautiful-dnd";
import "./Card.scss";
const Card = props => (
  <div className={` card lighten-${props.color}`}>
    <ReactMarkdown source={props.title} />
  </div>
);

export default Card;
