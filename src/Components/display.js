import React, { Component } from 'react';

class Display extends React.Component{
    render() {
        return(
            <center>
            <div class='dataForm'>
            <h1>Get Ready!</h1> 
            <br />
            <div class='result' >
            <h3>New Random student: <strong>{this.props.stu_without_rp}</strong></h3>
            <br />
            <h3>Random student: <strong>{this.props.stu_with_rp}</strong></h3>
            </div>
            </div>
            </center>
        )
    };
}

export default Display;