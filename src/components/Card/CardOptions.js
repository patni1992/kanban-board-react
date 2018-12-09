import React from "react";
import "./CardOptions.scss";
import CardOption from './CardOption';
const CardOptions = ({ options }) => {
    return (<div className="card-options">
        {options.map(option => 
        
        <CardOption option={option} >
        <div className="card-options__children">
              {option.children}
              </div>
         </CardOption>
          
        )}
    </div>)
}

export default CardOptions;
