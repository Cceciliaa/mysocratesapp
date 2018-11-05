import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './Components/display';
import Button_nrp from './Components/button_nrp';
import Button_rp from './Components/button_rp';

class App extends Component {
  constructor() {
    super();
    this.state = {
        student_name: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum', 
        'Mason', 'Robert', 'Jacob', 'Michael','Charlie', 'Kyle', 'William', 'Thomas', 'Joe', 'Ethan', 'David', 
        'George', 'Reece', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'Amelia', 'Margaret','Emma', 'Mary', 
        'Olivia', 'Samantha', 'Patricia', 'Isla', 'Bethany', 'Sophia', 'Jennifer', 'Emily', 'Elizabeth', 'Poppy', 
        'Joanne', 'Ava', 'Linda', 'Ava','Megan', 'Mia', 'Barbara', 'Victoria'], stu_with_rp: "", stu_without_rp: "",
        cpy_nameList: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum', 
        'Mason', 'Robert', 'Jacob', 'Michael','Charlie', 'Kyle', 'William', 'Thomas', 'Joe', 'Ethan', 'David', 
        'George', 'Reece', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'Amelia', 'Margaret','Emma', 'Mary', 
        'Olivia', 'Samantha', 'Patricia', 'Isla', 'Bethany', 'Sophia', 'Jennifer', 'Emily', 'Elizabeth', 'Poppy', 
        'Joanne', 'Ava', 'Linda', 'Ava','Megan', 'Mia', 'Barbara', 'Victoria']
      };
    this.handleNrp = this.handleNrp.bind(this);
    this.handleWrp = this.handleWrp.bind(this);
  }

  handleNrp = (data) => {
    this.setState({
      stu_without_rp: data
    })
  }

  handleWrp = (data1) => {
    this.setState({
      stu_with_rp: data1
    })
  }

  Reset_state = () => {
    this.setState({stu_with_rp: "", stu_without_rp: ""}) 
    this.state.cpy_nameList = this.state.student_name.slice()
  }

  render() {
    return (
      <div class="ScoratesApp">
      <div>
        <Display nameList={this.state.student_name} stu_with_rp={this.state.stu_with_rp} stu_without_rp={this.state.stu_without_rp} />
      </div>
      <center>
      <div class="jumbotron">
      <div>
        <Button_nrp nameList={this.state.cpy_nameList} handlerFromParant={this.handleNrp} />
      </div>
      <div>
        <Button_rp nameList={this.state.student_name} handlerFromParant={this.handleWrp} />
      </div>
      <div>
        <button type="submit" class="btn btn-primar" id="rst" onClick={this.Reset_state}>Reset</button>
      </div>
      </div>
      </center>
    </div>

    );
  }
}

export default App;
