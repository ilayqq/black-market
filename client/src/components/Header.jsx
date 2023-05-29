import React, { useContext, useState } from 'react'
import { Navbar, Offcanvas, Form, Button, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BASKET_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { context } from '../context'
import Avatar from '@mui/joy/Avatar'
import { SlBasket } from 'react-icons/sl'

export default function Header() {
    const user = useContext(context)
    const navigate = useNavigate()
    let [basketOpen, setBasketOpen] = useState(false)
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }

    const logOut = () => {
        // user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg='dark' expand='sm'>
            <Container fluid>
                <Navbar.Brand href="/" style={{ color: 'white' }}>Black Market</Navbar.Brand>
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
                            <Button variant='dark'>Search</Button>
                        </Form>
                        <Button variant='dark' onClick={toggleTheme} style={{ cursor: 'pointer' }}>dark mode</Button>
                        {user.isAuth ?
                            <Nav>
                                <SlBasket style={{ position: 'relative', color: 'red', cursor: 'pointer' }} onClick={() => setBasketOpen(basketOpen = !basketOpen)} />
                                {basketOpen && (
                                    <div className='d-flex flex-column' style={{ position: 'absolute', top: '50px' }}>
                                        asd
                                        <Button variant='dark' onClick={() => navigate(BASKET_ROUTE)}>Перейти в корзину</Button>
                                    </div>
                                )}
                                <Avatar variant='solid' />
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