import React, { Component } from 'react';
import StudentCard from './StudentCard';


class ForeignMethods extends Component {

  render() {
    const studentCards = this.props.students.map( (student, i) => {
      return <StudentCard key={i} student={student} />
    })

    return (
      <div>
        <h1>{this.props.nickName} Students</h1>
          <ul>
            { studentCards }
          </ul>
      </div>
    )
  }
}

export default ForeignMethods;
