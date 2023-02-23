import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWiget from "./CartWiget";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <Navbar bg="secondary" expand="lg">
        <Container fluid>
          <Link to={"/"} style={{textDecoration: 'none'}}>
            <Navbar.Brand href="#">Merlin</Navbar.Brand>

          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              
              <Link to="/catalogue" style={{ textDecoration: "none" }}>
                <Nav.Link href="s">Catalogo</Nav.Link>
              </Link>
              <NavDropdown
                title="Categoria"
                id="navbarScrollingDropdown"
                menuVariant="dark"
              >
                <Link to={`/category/${"armas"}`} style={{textDecoration: 'none'}}>
                <NavDropdown.Item href="#action3">armas</NavDropdown.Item>
                </Link>
                <Link to={`/category/${"posiones"}`} style={{textDecoration: 'none'}}>
                <NavDropdown.Item href="#action4">posiones</NavDropdown.Item>
                </Link>
                {/* <NavDropdown.Divider /> */}
                <Link to={`/category/${"armaduras"}`} style={{textDecoration: 'none'}}>
                <NavDropdown.Item href="#action5">armaduras</NavDropdown.Item>
                </Link>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            <div className="d-flex">
              <CartWiget />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
