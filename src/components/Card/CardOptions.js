import React from "react";
import "./CardOptions.scss";
import CardOption from './CardOption';
const CardOptions = ({ options }) => {
    return (<div className="card-options">
        {options.map(option => 
          <CardOption option={option} >
              {option.children}
         </CardOption>
        )}
    </div>)
}

export default CardOptions;
