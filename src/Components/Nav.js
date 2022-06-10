import { Routes, Route, Link } from "react-router-dom";
// import Display from "./Components/Display";
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Nav1 = function () {

    return (
        <div>
         
            <Navbar bg="light" varient="light" >
                <Nav>
                  
                    <Nav.Link as={Link} to="/display" className="Morning">Morning</Nav.Link>
                    <Nav.Link as={Link} to="/display" className="Afternoon">Afternoon</Nav.Link>
                    <Nav.Link as={Link} to="/display" className="Evening">Evening</Nav.Link> 
                </Nav>
            </Navbar>
        </div>
    )
}

export default Nav1
