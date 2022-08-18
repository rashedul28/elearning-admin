import NavigationBar from "../Navigation/NavigationBar";
import Home from "../Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCourse from "../Pages/AllCourse";
import AddCourse from "../Pages/AddCourse";
import UpdateCourse from "../Pages/UpdateCourse";
import AllTeacher from "../Pages/AllTeacher";
import AllStudent from "../Pages/AllStudent";
import Login from "../Pages/Login";
import WaitingTeacher from "../Pages/WaitingTeacher";
import Logout from "../Pages/Logout";
// import Logout from "../Pages/Logout";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/logout" element={<Logout></Logout>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/showAllCourse"
            element={<AllCourse></AllCourse>}
          ></Route>
          <Route path="/addCourse" element={<AddCourse></AddCourse>}></Route>
          <Route
            path="/updateCourse/:id"
            element={<UpdateCourse></UpdateCourse>}
          ></Route>
          <Route
            path="/showAllTeacher"
            element={<AllTeacher></AllTeacher>}
          ></Route>
          <Route
            path="/showAllStudent"
            element={<AllStudent></AllStudent>}
          ></Route>
          <Route
            path="/waitingTeacher"
            element={<WaitingTeacher></WaitingTeacher>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Main;
