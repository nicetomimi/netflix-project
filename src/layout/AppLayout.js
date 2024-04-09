import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom"; //라우트 안에있는 자식들 가져와주는
import "./AppLayout.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "../pages/Homepage/components/Footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" >
        <Container justify-content-md>
          <Navbar.Brand href="/">
            <img src="Logo.png" width={150} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/tv">TV Series</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">
                {" "}
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default AppLayout;
