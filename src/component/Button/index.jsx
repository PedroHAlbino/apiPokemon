import { Component } from "react";

import './style.css';

export class Button extends Component{
    render(){
        const {text,onClick} = this.props;
        return(
            <button className="button" onClick={onClick}>
            {text}
            </button>
        )
    }
}
