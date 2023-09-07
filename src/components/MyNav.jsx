import { Nav, Navbar } from "react-bootstrap";

const MyNav = (props) => {
  return (
    <Navbar expand="lg" className={props.navBar}>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className={props.linkStyle} href="#">
            Home
          </Nav.Link>
          <Nav.Link className={props.linkStyle} href="#">
            About
          </Nav.Link>
          <Nav.Link className={props.linkStyle} href="#">
            Browse
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
