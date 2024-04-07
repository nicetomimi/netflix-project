import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom" //라우트 안에있는 자식들 가져와주는 
import { Link } from "react-router-dom";


const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to = "/" ><img src="Logo.png" width={30} alt=""/></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to = "/" > <Nav.Link href="#action1">Home</Nav.Link></Link>
              <Link to = "/movies" > <Nav.Link href="#action2">Movies</Nav.Link></Link>
            </Nav>
            <Form className="d-flex" >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet></Outlet>
    </div>
  );
};

export default AppLayout;
