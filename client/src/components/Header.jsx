import React, { useContext } from 'react'
import { Navbar, Offcanvas, Form, Button, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { context } from '../context'

export default function Header() {
    const user = useContext(context)
    const navigate = useNavigate()
    
    const logOut = () => {
        // user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="light" expand='sm'>
            <Container fluid>
                <Navbar.Brand href="/">Black Market</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-sm`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                            Black Market
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            <Nav.Link href="">Home</Nav.Link>
                            <Nav.Link href="">Link</Nav.Link>
                            <Nav.Link>Profile</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="dark">Search</Button>
                        </Form>
                        {user.isAuth ?
                            <Nav>
                                <NavDropdown id='nav-dropdown-dark-example' menuVariant='dark' title='dropdown'>
                                    <NavDropdown.Item onClick={() => navigate('profile')}>Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => logOut()}>Выйти</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                                :
                            <Button variant='dark' onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                        }
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar >
    )
}