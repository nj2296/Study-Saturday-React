import React from 'react';

const SingleStudent = props => {
  return (
    <div>
      <h3>{props.selectedStudent.fullName}</h3>
      <h3>Average grade: </h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {props.selectedStudent.tests.map(test => {
              return (
                <tr key={test.id}>
                  <td>{test.subject}</td>
                  <td>{test.grade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleStudent;
