import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../CSS/Form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  // const [key, setAuthToken] = useState("");

  const nav = useNavigate();

  const FormHandle = (event) => {
    event.preventDefault();
    var data = {
      email: email,
      password: password,
    };
    axios.post("http://localhost:8000/api/login", data).then(
      (rsp) => {
        // console.log(rsp);
        // const token = rsp.data.token;

        //set JWT token to local
        localStorage.setItem("token", rsp.data.token);
        // localStorage.setItem("email", email);
        // localStorage.setItem("password", password);
        
        //set token to axios common header
        // setAuthToken(token);
        setMsg(rsp.data.msg);
        if (rsp.data.message === "Login Successfull") {
          // console.log(rsp.response.status);
          // swal("success", rsp.response.message, "success");
          nav("/home");
        } else if (rsp.data.message === "Email/Password is wrong!") {
          swal("error", rsp.data.message, "error");
        }
      },
      (error) => {
        if (error.response.status === 422) {
          setErr(error.response.data);
        } else {
          setMsg("Server Error Occured");
        }
      }
    );
  };

  return (
    <div>
      <form onSubmit={FormHandle}>
        <table align="center">
          <tr>
            <th align="left">Email:</th>
            <td>
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                // required
              ></input>
            </td>
            <td>
              <span>{err.email ? err.email[0] : ""}</span>
              <br />
            </td>
          </tr>
          <tr>
            <th align="left">Password:</th>
            <td>
              <input
                type="password"
                name="password"
                onChange={(e) => setPass(e.target.value)}
                value={password}
                // required
              ></input>
            </td>
            <td>
              <span>{err.password ? err.password[0] : ""}</span>
              <br />
            </td>
          </tr>
          <tr colSpan="2">
            <td>
              <input type="submit" value="Login"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Login;
