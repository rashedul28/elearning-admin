import Go from "./Go";
import "../CSS/NavigationBar.css" ;

function NavigationBar() {
    return (
        <div>
            <ul>
                <li><Go url="/" title="Home" /></li>
                <li><Go url="/addCourse" title="Add Course" /></li>
                <li><Go url="/showAllCourse" title="All Course" /></li>
                {/* <li><Go url="/deleteCourse" title="Delete Course" /></li> */}
                {/* <li><Go url="/updateCourse" title="Update Course" /></li> */}
                <li><Go url="/showAllTeacher" title="All Teacher" /></li>
                <li><Go url="/showAllStudent" title="All Student" /></li>
            </ul>
        </div>
    );
}
export default NavigationBar;