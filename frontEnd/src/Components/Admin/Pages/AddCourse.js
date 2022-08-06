import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
import "../CSS/Form.css";

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseType, setCourseType] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [studentCapacity, setStudentCapcity] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const FormHandle = (event) => {
    event.preventDefault();
    var data = {
      courseName: courseName,
      courseType: courseType,
      coursePrice: coursePrice,
      courseDuration: courseDuration,
      studentCapacity: studentCapacity,
    };
    axios.post("http://localhost:8000/api/addCourse", data).then(
      (rsp) => {
        setMsg(rsp.data.msg);
        if (rsp.data.message === "Course added successfully") {
          swal("success", rsp.data.message, "success");
        } else if (rsp.data.message === "Validation not match") {
          swal("error", rsp.data.message, "error");
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
    <div>
      <form onSubmit={FormHandle}>
        <table>
          <th>
            <td>Course Name:</td>
            <td>
              <input
                type="text"
                value={courseName}
                onChange={(e) => {
                  setCourseName(e.target.value);
                }}
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
                value={courseType}
                onChange={(e) => {
                  setCourseType(e.target.value);
                }}
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
                value={coursePrice}
                onChange={(e) => {
                  setCoursePrice(e.target.value);
                }}
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
                value={courseDuration}
                onChange={(e) => {
                  setCourseDuration(e.target.value);
                }}
              ></input>
            </td>
            <td>
              <span>{error.courseDuration ? error.courseDuration[0] : ""}</span>
            </td>
          </th>
          <th>
            <td>Student Capacity:</td>
            <td>
              <input
                type="text"
                value={studentCapacity}
                onChange={(e) => {
                  setStudentCapcity(e.target.value);
                }}
              ></input>
            </td>
            <td>
              <span>
                {error.studentCapacity ? error.studentCapacity[0] : ""}
              </span>
            </td>
          </th>
          <th colSpan="2">
            <td>
              <input type="submit" value="submit"></input>
            </td>
          </th>
        </table>
      </form>
    </div>
  );
};

export default AddCourse;
