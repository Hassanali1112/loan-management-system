import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex">
        <div className="left">
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="d-flex justify-content-end w-100 "
            // className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/userdashboard">Dashboard</Nav.Link>
            <Nav.Link href="">Loan Requests</Nav.Link>

            <Nav.Link href="/loanrequest">Create Loan Request</Nav.Link>
            <Nav.Link href="#action2">Profile</Nav.Link>
            <Button className="btn btn-danger">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
