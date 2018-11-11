import React, { Component } from "react";
import "./CardOption.scss";
class CardOption extends Component {
    onClickHandler = () => {
        this.setState(prevState => ({
            showChildren: !prevState.showChildren
          }));
    }
    state = {
        showChildren: false
    }
    render() {
        const { option, children } = this.props
        return (<div className="card-option">
            <button onClick={this.onClickHandler} >{option.name}</button>
            <div className={`${!this.state.showChildren && "visibility-hidden"}`}>
                {children}
            </div>
        </div>)
    }
}


export default CardOption;
