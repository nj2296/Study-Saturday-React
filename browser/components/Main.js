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

  selectStudent(studentId) {
    return async () => {
      const res = await axios.get(`/student/${studentId}`);
      const student = res.data;
      this.setState({
        selectedStudent: student,
      });
    };
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
            </tr>
            <StudentList students={this.state.students} />
          </tbody>
        </table>
        <SingleStudent selectedStudent={this.state.selectedStudent} />
      </div>
    );
  }
}
