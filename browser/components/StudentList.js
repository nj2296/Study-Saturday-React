import React from 'react';

const StudentList = props => {
  return props.students.map(student => {
    return (
      <tr key={student.id}>
        <td>{student.fullName}</td>
        <td>
          <a onClick={() => props.selectStudent(student)}>Details</a>
        </td>
      </tr>
    );
  });
};

export default StudentList;
