import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = (props) => {
  return (
    <Container fluid="xxl" className={props.className}>
      <Navbar expand="lg" className={props.margin}>
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
    </Container>
  );
};

export default MyNav;
