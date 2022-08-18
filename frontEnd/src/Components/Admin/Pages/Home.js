import { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Dashboard.css";
import CountUp from "react-countup";

const Home = () => {
  const [count, setCount] = useState(""); //ekhane value assign hoy pore amra show korate parbo
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/home").then(
      (rsp) => {
        setCount(rsp.data);
      },
      (error) => {}
    );
  }, []);
  return (
    <div>
      <div id="card">
        <div id="digit">
          <CountUp end={count[0]} duration={5} />
        </div>
        <h4>
          <b>Course</b>
        </h4>
      </div>
      <div id="card">
        <div id="digit">
          <CountUp end={count[1]} duration={5} />
        </div>
        <h4>
          <b>Teacher</b>
        </h4>
      </div>
      <div id="card">
        <div id="digit">
          <CountUp end={count[2]} duration={5} />
        </div>
        <h4>
          <b>Student</b>
        </h4>
      </div>
      <div id="card">
        <div id="digit">
          <CountUp end={count[3]} duration={5} />
        </div>
        <h4>
          <b>Total User</b>
        </h4>
      </div>
    </div>
  );
};
export default Home;
