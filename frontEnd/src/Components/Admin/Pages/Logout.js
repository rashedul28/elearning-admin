import React from "react";
import "../CSS/Table.css";
import "../CSS/Button.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Logout = () => {
  const nav = useNavigate();
  const tk = localStorage.getItem("token");
  var data = {token: tk};
  const signout = (e) => {
    axios.post("http://127.0.0.1:8000/api/logout", data).then(
      (rsp) => {
        swal("success", "Signing Out Ok", "success");
        nav("/login");
        localStorage.setItem("token", "");
      },
      (error) => {
        swal("error", "Not working", "error");
      }
    );
  };
  return (
    <div>
      <button type="button-red" onClick={(e) => signout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
