import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import Go from "../Navigation/Go";
import "../CSS/Table.css";
import "../CSS/Button.css";

const AllCourse = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/showAllCourse").then(
      (rsp) => {
        setCourse(rsp.data);
      },
      (err) => {}
    );
  }, []);

  const deleteCourse = (e, CourseId) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios
      .delete(`http://127.0.0.1:8000/api/deleteCourse/${CourseId}`)
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
          <th>Course Id</th>
          <th>Course Name</th>
          <th>Catagory</th>
          <th>Price</th>
          <th>Capacity</th>
          <th>Duration</th>
          <th>Course Created</th>
          <th>Last Update</th>
          <th>Banner</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {course.map((c) => {
          return (
            <tr key={c.course_id}>
              <td>{c.course_id}</td>
              <td>{c.course_name}</td>
              <td>{c.catagory}</td>
              <td>{c.price}</td>
              <td>{c.student_count}</td>
              <td>{c.duration}</td>
              <td>{c.created_at}</td>
              <td>{c.updated_at}</td>
              <td>{c.profile_image}</td>
              <td>
                <button type="button-blue">
                  <Go url={`/updateCourse/${c.course_id}`} title="Edit"></Go>
                </button>
              </td>
              <td>
                <button
                  type="button-red"
                  onClick={(e) => deleteCourse(e, c.course_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default AllCourse;
