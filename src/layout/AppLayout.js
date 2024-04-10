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
import { useState } from "react"
import { useNavigate} from "react-router-dom"

const AppLayout = () => {
   const [keyword,setKeyword] = useState("")
   const navigate = useNavigate()

   const searchByKeyword = (e) => {
    e.preventDefault() 
    navigate(`/movies?q=${keyword}`)
    setKeyword("")
   }

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
              {/* <Nav.Link href="/tv">TV Series</Nav.Link> */}
            </Nav>

            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e)=> setKeyword(e.target.value)}
              />
              <Button variant="danger" type="submit">
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
