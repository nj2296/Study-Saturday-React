import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
    };
    this.selectStudent = this.selectStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
      console.log(this.state.students);
    } catch (err) {
      console.error(err);
    }
  }

  // selectStudent(studentId) {
  //   return async () => {
  //     const res = await axios.get(`/student/${studentId}`);
  //     const student = res.data;
  //     this.setState({
  //       selectedStudent: student,
  //     });
  //   };
  // }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <tbody>
            <StudentList
              students={this.state.students}
              selectStudent={this.selectStudent}
            />
          </tbody>
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent selectedStudent={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
