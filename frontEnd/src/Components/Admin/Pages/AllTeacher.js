import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
// import Go from "../Navigation/Go";
import "../CSS/Table.css";

const AllTeacher = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/showAllTeacher").then(
      (rsp) => {
        setTeacher(rsp.data);
      },
      (err) => {}
    );
  }, []);

  const deleteTeacher = (e, TeacherId) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Removing";

    axios
      .delete(`http://127.0.0.1:8000/api/deleteTeacher/${TeacherId}`)
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
          <th>Teacher Id</th>
          <th>Teacher Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Degree</th>
          <th>Address</th>
          <th>Remove</th>
        </tr>
        {teacher.map((t) => {
          return (
            <tr key={t.teacher_id}>
              <td>{t.teacher_id}</td>
              <td>{t.teacher_name}</td>
              <td>{t.email}</td>
              <td>{t.phone}</td>
              <td>{t.dob}</td>
              <td>{t.gender}</td>
              <td>{t.degree}</td>
              <td>{t.address}</td>
              {/* <td>
                <button type="button-green">
                  <Go url={`/updateCourse/${t.student_id}`} title="Edit"></Go>
                </button>
              </td> */}
              <td>
                <button
                  type="button-red"
                  onClick={(e) => deleteTeacher(e, t.teacher_id)}
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
export default AllTeacher;
