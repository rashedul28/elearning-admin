import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

const UpdateCourse = () => {
  const [course, setCourse] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  // console.log(id);
  useEffect(() => {
    const course_id = id;

    axios
      .get(`http://127.0.0.1:8000/api/updateCourse/${course_id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setCourse(res.data.course);
        } else if (res.data.status === 404) {
          swal("error", res.data.message, "error");
        }
      });
  }, [id]);

  const HandleInput = (e) => {
    // e.persist();
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const FormHandle = (event) => {
    event.preventDefault();

    const course_id = id;
    var data = { course };
    axios
      .put(`http://127.0.0.1:8000/api/updateCourse/${course_id}`, data, {
        method: "PUT",
      })
      .then(
        (rsp) => {
          setMsg(rsp.data.msg);
          if (rsp.data.status === 200) {
            swal("success", rsp.data.message, "success");
          } else if (rsp.data.status === 404) {
            swal("error", rsp.data.message, "error");
          } else if (rsp.data.status === 422) {
            swal("info", rsp.data.message, "info");
          }
        },
        (error) => {
          if (error.response.status === 422) {
            //for data validation
            setError(error.response.data);
          } else {
            setMsg("Server Error Occured");
          }
        }
      );
  };

  return (
    // <div>
    //   {course ? (
    //     <form onSubmit={FormHandle}>
    //       Course Name:
    //       <input
    //         type="text"
    //         name="course_name"
    //         value={course.course_name}
    //         onChange={HandleInput}
    //       ></input>
    //       {/* <span>{error.courseName ? error.courseName[0] : ""}</span> */}
    //       <br />
    //       Course Type:
    //       <input
    //         type="text"
    //         name="catagory"
    //         value={course.catagory}
    //         onChange={HandleInput}
    //       ></input>
    //       {/* <span>{error.courseType ? error.courseType[0] : ""}</span> */}
    //       <br />
    //       Course Price:
    //       <input
    //         type="text"
    //         name="price"
    //         value={course.price}
    //         onChange={HandleInput}
    //       ></input>
    //       {/* <span>{error.coursePrice ? error.coursePrice[0] : ""}</span> */}
    //       <br />
    //       Course Duration:
    //       <input
    //         type="text"
    //         name="duration"
    //         value={course.duration}
    //         onChange={HandleInput}
    //       ></input>
    //       {/* <span>{error.courseDuration ? error.courseDuration[0] : ""}</span> */}
    //       <br />
    //       Student Capacity:
    //       <input
    //         type="text"
    //         name="student_count"
    //         value={course.student_count}
    //         onChange={HandleInput}
    //       ></input>
    //       {/* <span>{error.studentCapacity ? error.studentCapacity[0] : ""}</span> */}
    //       <br />
    //       <input type="submit" value="submit"></input>
    //     </form>
    //   ) : null}
    // </div>

    <div>
      {course ? (
        <form onSubmit={FormHandle}>
          <table>
            <th>
              <td>Course Name:</td>
              <td>
                <input
                  type="text"
                  name="course_name"
                  value={course.course_name}
                  onChange={HandleInput}
                  required
                ></input>
              </td>
              <td>
                <span>{error.courseName ? error.courseName[0] : ""}</span>
              </td>
            </th>
            <th>
              <td>Course Type:</td>
              <td>
                <input
                  type="text"
                  name="catagory"
                  value={course.catagory}
                  onChange={HandleInput}
                  required
                ></input>
              </td>
              <td>
                <span>{error.courseType ? error.courseType[0] : ""}</span>
              </td>
            </th>
            <th>
              <td>Course Price:</td>
              <td>
                <input
                  type="text"
                  name="price"
                  value={course.price}
                  onChange={HandleInput}
                  required
                ></input>
              </td>
              <td>
                <span>{error.coursePrice ? error.coursePrice[0] : ""}</span>
              </td>
            </th>
            <th>
              <td>Course Duration:</td>
              <td>
                <input
                  type="text"
                  name="duration"
                  value={course.duration}
                  onChange={HandleInput}
                  required
                ></input>
              </td>
              <td>
                <span>
                  {error.courseDuration ? error.courseDuration[0] : ""}
                </span>
              </td>
            </th>
            <th>
              <td>Student Capacity:</td>
              <td>
                <input
                  type="text"
                  name="student_count"
                  value={course.student_count}
                  onChange={HandleInput}
                  required
                ></input>
              </td>
              <td>
                <span>
                  {error.studentCapacity ? error.studentCapacity[0] : ""}
                </span>
              </td>
            </th>
            {/* mod */}
            <th>
              <td>Description:</td>
              <td>
                <input
                  type="text"
                  name="description"
                  value={course.description}
                  onChange={HandleInput}
                  required
                ></input>
              </td>
              <td>
                <span>{error.description ? error.description[0] : ""}</span>
              </td>
            </th>
            <th>
              <td>Assign New Teacher?</td>
              <td>
                <input
                  type="text"
                  name="t_id"
                  value={course.t_id}
                  onChange={HandleInput}
                  required
                ></input>
              </td>
              <td>
                <span>{error.t_id ? error.t_id[0] : ""}</span>
              </td>
            </th>
            <th colSpan="2">
              <td>
                <input type="submit" value="submit"></input>
              </td>
            </th>
          </table>
        </form>
      ) : null}
    </div>
  );
};

export default UpdateCourse;
