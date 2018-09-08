import React from "react";
import ReactMarkdown from "react-markdown";
import "./Card.scss";
const Card = props => (
  <li className={` card lighten-${props.color}`}>
    <ReactMarkdown source={props.title} />
  </li>
);

export default Card;
