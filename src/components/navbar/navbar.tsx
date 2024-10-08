import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {AppRoute} from "../../const.ts";
import {Link} from "react-router-dom";

export default function NavbarMenu () {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to={AppRoute.Main}>
                        <img src="/img/images/piligreen.svg" alt="piligreen" height="80"/>
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-menu">
                        <NavDropdown title="Продукция" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Услуги</Nav.Link>
                        <Nav.Link href="#link">Распродажа</Nav.Link>
                        <Nav.Link href="#link">О производстве</Nav.Link>
                        <Nav.Link href={AppRoute.Contacts}>Контакты</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
