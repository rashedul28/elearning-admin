import NavigationBar from "../Navigation/NavigationBar";
import Home from "../Pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllCourse from "../Pages/AllCourse";
import Footer from "../Pages/Footer";
import AddCourse from "../Pages/AddCourse";
import UpdateCourse from "../Pages/UpdateCourse";
import AllTeacher from "../Pages/AllTeacher";
import AllStudent from "../Pages/AllStudent";

const Main = () =>{
    
    return (
        <div>
            <BrowserRouter>
                <NavigationBar></NavigationBar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/showAllCourse" element={<AllCourse></AllCourse>}></Route>
                    <Route path="/addCourse" element={<AddCourse></AddCourse>}></Route>
                    <Route path="/updateCourse/:id" element={<UpdateCourse></UpdateCourse>}></Route>
                    <Route path="/showAllTeacher" element={<AllTeacher></AllTeacher>}></Route>
                    <Route path="/showAllStudent" element={<AllStudent></AllStudent>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    )
}
export default Main;