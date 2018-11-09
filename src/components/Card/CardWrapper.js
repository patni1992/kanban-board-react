import React, {Component} from "react";
import { connect } from "react-redux";
import Card from './Card'
import ClickOutside from "../ClickOutside/ClickOutside";
import EditCard from './EditCard'
import {updateCard} from "../../actions/cards"
import "./CardWrapper.scss";
class CardWrapper extends Component {
    state = {
        editing: false,
        height: null,
        widht: null
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey && this.state.editing) {
            this.props.updateCard({...this.props, title: e.target.value})
            this.toggleEdit();
          }
    }

    handleClick = (e) => {
        if(e.target.tagName.toLowerCase() !== "textarea") {
            this.setState({
                height: e.currentTarget.offsetHeight,
                width: e.currentTarget.offsetWidth
            })
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
            <div class="card-wrapper" onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                 {this.state.editing ? <ClickOutside  handleClickOutside={this.handleClick}> <EditCard text={this.props.title} height={this.state.height}/> </ClickOutside> : <Card {...this.props} />} 
            </div>
        )
    }
    
}
  
  export default connect(
    null,
    { updateCard }
  )(CardWrapper);
  
