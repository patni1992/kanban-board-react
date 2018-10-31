import React, {Component} from "react";
import Card from './Card'
import EditCard from './EditCard'
import "./Card.scss";
class CardWrapper extends Component {
    state = {
        editing: false
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter' && this.state.editing) {
            console.log('update card');
            this.toggleEdit();
          }
    }

    handleClick = (e) => {
        if(e.target.tagName.toLowerCase() !== "textarea") {
            this.toggleEdit();
        }    
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            editing: !prevState.editing
          }));
    }

    render() {
        return (
            <div onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                 {this.state.editing ? <EditCard /> : <Card {...this.props} />} 
            </div>
        )
    }
    
}

export default CardWrapper;
