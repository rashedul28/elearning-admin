import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
// import Go from "../Navigation/Go";
import "../CSS/Table.css";

const AllStudent = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/showAllStudent").then(
      (rsp) => {
        setStudent(rsp.data);
      },
      (err) => {}
    );
  }, []);

  const deleteStudent = (e, StudentId) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Removing";

    axios
      .delete(`http://127.0.0.1:8000/api/deleteStudent/${StudentId}`)
      .then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          thisClicked.closest("tr").remove();
        } else if (res.data.status === 400) {
          swal("Success", res.data.message, "success");
          thisClicked.innerText = "Delete";
        }
      });
  };

  return (
    <div>
      <table border="1" id="css-table">
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Remove</th>
        </tr>
        {student.map((s) => {
          return (
            <tr key={s.student_id}>
              <td>{s.student_id}</td>
              <td>{s.student_name}</td>
              <td>{s.email}</td>
              <td>{s.gender}</td>
              <td>{s.address}</td>
              {/* <td>
                <button type="button-green">
                  <Go url={`/updateCourse/${s.student_id}`} title="Edit"></Go>
                </button>
              </td> */}
              <td>
                <button
                  type="button-red"
                  onClick={(e) => deleteStudent(e, s.student_id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default AllStudent;
