import React, { Component } from 'react';

class Button_rp extends React.Component {

    constructor() {
        super();
        this.state = { stu: "", stu_called: [{ name: "", times: 0 }]};
        this.handleClick = this.handleClick.bind(this);
    }

    Choose_stu = (list) => {
        let idx = Math.floor(Math.random() * list.length);
        let student = list[idx];
        this.setState({ stu: student });
        for (let i=0; i<this.state.stu_called.length; i++) {
            if (this.state.stu_called[i].name === student) {
                this.setState({ stu_called: this.state.stu_called[i].times += 1 });
                alert(this.state.stu + ' has been called ' + this.state.stu_called[i].times + " times!")
            } else {
                this.setState({ stu_called: this.state.stu_called.concat({ name: student, times: 1 }) })
            }    
        }
        if(this.props.reset === true){
            this.setState({stu: "", stu_called: [{ name: "", times: 0 }]})
        }
        }

        
    

    handleClick = (e) => {
        e.preventDefault();
        this.Choose_stu(this.props.nameList);
        this.props.handlerWrp(this.state.stu);
    }

    render() {
        return (
            <form onClick={this.handleClick}>
                <button type="submit" class="btn btn-primar" id="rp">Random Student</button>
                {/* this.Pop_stu(this.props.nameList) */}
            </form>
        );
    }
}

export default Button_rp;