import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../CSS/Form.css";

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseType, setCourseType] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [studentCapacity, setStudentCapcity] = useState("");

  // mod
  const [des, setDes] = useState("");
  const [tid, setTid] = useState("");
  // --

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const nav = useNavigate();

  const FormHandle = (event) => {
    event.preventDefault();
    var data = {
      courseName: courseName,
      courseType: courseType,
      coursePrice: coursePrice,
      courseDuration: courseDuration,
      studentCapacity: studentCapacity,
      // mod
      des: des,
      tid: tid,
    };
    axios.post("http://localhost:8000/api/addCourse", data).then(
      (rsp) => {
        setMsg(rsp.data.msg);
        if (rsp.data.message === "Course added successfully") {
          swal("success", rsp.data.message, "success");
          nav("/showAllCourse");
        } else if (rsp.data.message === "Validation Not match") {
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
          <tr>
            <th align="left">Course Name:</th>
            <td>
              <input
                type="text"
                value={courseName}
                onChange={(e) => {
                  setCourseName(e.target.value);
                }}
                required
              ></input>
            </td>
            <td>
              <span>{error.courseName ? error.courseName[0] : ""}</span>
            </td>
          </tr>
          <tr>
            <th align="left">Course Type:</th>
            <td>
              <input
                type="text"
                value={courseType}
                onChange={(e) => {
                  setCourseType(e.target.value);
                }}
                required
              ></input>
            </td>
            <td>
              <span>{error.courseType ? error.courseType[0] : ""}</span>
            </td>
          </tr>
          <tr>
            <th align="left">Course Price:</th>
            <td>
              <input
                type="text"
                value={coursePrice}
                onChange={(e) => {
                  setCoursePrice(e.target.value);
                }}
                required
              ></input>
            </td>
            <td>
              <span>{error.coursePrice ? error.coursePrice[0] : ""}</span>
            </td>
          </tr>
          <tr>
            <th align="left">Course Duration:</th>
            <td>
              <input
                type="text"
                value={courseDuration}
                onChange={(e) => {
                  setCourseDuration(e.target.value);
                }}
                required
              ></input>
            </td>
            <td>
              <span>{error.courseDuration ? error.courseDuration[0] : ""}</span>
            </td>
          </tr>
          <tr>
            <th align="left">Student Capacity:</th>
            <td>
              <input
                type="text"
                value={studentCapacity}
                onChange={(e) => {
                  setStudentCapcity(e.target.value);
                }}
                required
              ></input>
            </td>
            <td>
              <span>
                {error.studentCapacity ? error.studentCapacity[0] : ""}
              </span>
            </td>
          </tr>
          {/* mod */}
          <tr>
            <th align="left">Course description:</th>
            <td>
              <input
                type="text"
                value={des}
                onChange={(e) => {
                  setDes(e.target.value);
                }}
                required
              ></input>
            </td>
            <td>
              <span>{error.des ? error.des[0] : ""}</span>
            </td>
          </tr>
          <tr>
            <th align="left">Assign Teacher by his id:</th>
            <td>
              <input
                type="text"
                value={tid}
                onChange={(e) => {
                  setTid(e.target.value);
                }}
                required
              ></input>
            </td>
            <td>
              <span>{error.tid ? error.tid[0] : ""}</span>
            </td>
          </tr>
          <tr colSpan="2">
            <td>
              <input type="submit" value="submit"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default AddCourse;
