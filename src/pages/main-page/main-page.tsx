import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {AppRoute} from "../../const.ts";


export default function MainPage () {
    return (
        <div className="wrapper">
            <div className="main-page-img">
                <header className="main-page-header">
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">PILIGREEN</Navbar.Brand>
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
                </header>
                <main className="main-page">

                </main>
            </div>

        </div>
    )
}
