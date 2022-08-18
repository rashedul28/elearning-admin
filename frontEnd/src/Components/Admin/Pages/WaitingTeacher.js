import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/Table.css";
import "../CSS/Button.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const WaitingTeacher = () => {
  const [teacher, setTeacher] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/waitingTeacher").then(
      (rsp) => {
        setTeacher(rsp.data);
      },
      (error) => {}
    );
  }, []);

  const acceptCourse = (e, email) => {
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Proccesing..."
    var data = {
      email: email,
    };
    axios.post("http://127.0.0.1:8000/api/accepteTeacher", data).then(
      (res) => {
        if (res.data.status === 200) {
          swal("success", res.data.message, "success");
          thisClicked.closest("tr").remove();
          nav("/showAllTeacher");
        }
      },
      (error) => {
        if (error.data.message === "Failed");
        swal("error", error.data.message, "error");
      }
    );
  };

  const rejectCourse = (e, wt_id) => {
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Proccesing...";

    axios.delete(`http://127.0.0.1:8000/api/rejectTeacher/${wt_id}`).then(
      (res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          thisClicked.closest("tr").remove();
        } else if (res.data.status === 400) {
          swal("Success", res.data.message, "success");
          thisClicked.innerText = "Delete";
        }
      },
      (error) => {}
    );
  };

  return (
    <div>
      <table border="1" id="css-table">
        <tr>
          <th>Pending T_Id</th>
          <th>E-mail</th>
          <th>Download Resume</th>
          <th colSpan="2">Feedback</th>
        </tr>
        {teacher.map((t) => {
          return (
            <tr key={t.wt_id}>
              <td>{t.wt_id}</td>
              <td>{t.email}</td>
              <td>{t.resume}</td>
              <td>
                <button
                  type="button-green"
                  onClick={(e) => acceptCourse(e, t.email)}
                >
                  Accepte Request
                </button>
              </td>
              <td>
                <button
                  type="button-red"
                  onClick={(e) => rejectCourse(e, t.wt_id)}
                >
                  Skip/Clear
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WaitingTeacher;
