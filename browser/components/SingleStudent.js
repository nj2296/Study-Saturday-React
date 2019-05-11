import React from 'react';

const SingleStudent = props => {
  return (
    <div>
      <h3>{props.selectedStudent.fullName}</h3>
      <h3>Average grade: </h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Subject</strong>
            </td>
            <td>
              <strong>Grade</strong>
            </td>
          </tr>
          {/* {props.selectedStudent.tests.map(test => {
            return (
              <tr key={test.id}>
                <td>{test.subject}</td>
                <td>{test.grade}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default SingleStudent;
