import React, { Component } from 'react';

class Button_nrp extends React.Component {

    constructor() {
        super();
        this.state = { stu1:"" }
        this.handleClick = this.handleClick.bind(this);
    }

    Pop_stu = () => {
        if(this.props.nameList.length == 0) {
            alert("All student have been called once before!")
        }
        let idx = Math.floor(Math.random() * this.props.nameList.length);
        let stud = this.props.nameList.splice(idx, 1);
        this.setState({ stu1: stud });
      }

    handleClick = (e) => {
        e.preventDefault();
        this.Pop_stu();
        this.props.handlerFromParant(this.state.stu1);
    }

    render() {
        return(
            <form onClick={this.handleClick}>
            <button type="submit" class="btn btn-primar" id="nrp">New Random Student</button>
        {/* this.Pop_stu(this.props.nameList) */}
        </form>
        );
    }
}

export default Button_nrp;