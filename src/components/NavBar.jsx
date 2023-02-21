import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWiget from './CartWiget';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <>
            <Navbar bg="secondary" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Merlin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <Nav.Link href="kjkl">Inicio</Nav.Link>
                            </Link>
                            <Link to="/catalog" style={{textDecoration: 'none'}}>
                                <Nav.Link href="s">Catalogo</Nav.Link>
                            </Link>
                            <NavDropdown title="Categoria" id="navbarScrollingDropdown" menuVariant="dark">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
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
    )
}

export default NavBar