import Go from "./Go";
import "../CSS/NavigationBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";

function NavigationBar() {
  return (
    <div>
      {/* <ul>
        <li>
          <Go url="/home" title="Dashboard" />
        </li>
        <li>
          <Go url="/addCourse" title="Add Course" />
        </li>
        <li>
          <Go url="/showAllCourse" title="All Course" />
        </li>
        <li>
          <Go url="/showAllTeacher" title="All Teacher" />
        </li>
        <li>
          <Go url="/showAllStudent" title="All Student" />
        </li>
        <li>
          <Go url="/waitingTeacher" title="Teacher approval Request"></Go>
        </li>
        <li>
          <Go url="/logout" title="LogOut" />
        </li>
        <li>
          <Go url="/login" title="Login"></Go>
        </li>
      </ul> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Admin-Panel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Go url="/home" title="Dashboard" />
              </Nav.Link>
              <Nav.Link>
                <Go url="/showAllStudent" title="All Student" />
              </Nav.Link>
              {/* Teacher */}
              <NavDropdown title="Teacher" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Go url="/showAllTeacher" title="All Teacher" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Go
                    url="/waitingTeacher"
                    title="Teacher approval Request"
                  ></Go>
                </NavDropdown.Item>
              </NavDropdown>
              {/* Course */}
              <NavDropdown title="Course" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Go url="/addCourse" title="Add Course" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Go url="/showAllCourse" title="All Course" />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link>
                <Go url="/logout" title="LogOut" />
              </Nav.Link>
              <Nav.Link>
                <Go url="/login" title="Login"></Go>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavigationBar;
