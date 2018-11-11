import React, {Component} from "react";
import { connect } from "react-redux";
import Card from './Card'
import CardOptions from "./CardOptions";
import ClickOutside from "../ClickOutside/ClickOutside";
import ColorPicker from "../ColorPicker/ColorPicker";
import EditCard from './EditCard'
import {updateCard, deleteCard} from "../../actions/cards"
import "./CardWrapper.scss";
class CardWrapper extends Component {
    state = {
        editing: false,
        height: null,
        width: null,
    }

    componentDidUpdate(prevProps) {
         this.CardOptions.find(option => option.name == "color")
          .children = <ColorPicker
          clickHandler={color => {
              this.props.updateCard({
                  ...this.props, color
              })
          }} default={this.props.color}
          colors={["blue", "orange", "green", "red"]} />
        }

    CardOptions = [{
        name: "color", icon: "", children: <ColorPicker
            clickHandler={color => {
                this.props.updateCard({
                    ...this.props, color
                })
            }} default={this.props.color}
            colors={["blue", "orange", "green", "red"]} />
    },
    {
        name: "delete", icon: "", onClick: () => this.props.deleteCard({...this.props, id: this.props.id})}
    ]

    handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey && this.state.editing && e.target.tagName.toLowerCase() === "textarea") {
            this.props.updateCard({...this.props, title: e.target.value})
            this.toggleEdit();
          }
    }

    disableEdit = () => {
        if(this.state.editing) {
            this.setState({
                editing: false,
                showColorPicker: false
            })
        }
    }

    activateEdit = (e) => {
      
        if( !this.state.editing) {
            this.setState({
                editing: true,
                height: e.currentTarget.offsetHeight,
                width: e.currentTarget.offsetWidth
            })
        }
       
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            editing: !prevState.editing
          }));
    }

    render() {
        return (
            <ClickOutside handleClickOutside={this.disableEdit}>
                <div class="card-wrapper" onClick={this.activateEdit} onKeyPress={this.handleKeyPress}>
                    {this.state.editing ? <div> <EditCard text={this.props.title} height={this.state.height} /> 
                    <CardOptions {...this.props} options={this.CardOptions} /> </div> 
                    : <Card {...this.props} />}
                </div>
            </ClickOutside>
        )
    }
    
}
  
  export default connect(
    null,
    { updateCard, deleteCard }
  )(CardWrapper);
  
