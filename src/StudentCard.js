import React, { Component } from 'react';
import OurButton from './OurButton';

class StudentCard extends Component {
  constructor(){
    super();

    this.state = {labsCompleted: 0};
  }

  handleClick(){
    this.setState({labsCompleted: this.state.labsCompleted + 1})
  }

  render() {
    return (
      <li>
      <h2>{this.props.student.name}</h2>
      <div>
        <h4>{this.state.labsCompleted}</h4>
        <OurButton
          numLabs={this.state.labsCompleted}
          callbackProp={this.handleClick.bind(this)} />
      </div>
    </li>
   )
  }
}

export default StudentCard;
