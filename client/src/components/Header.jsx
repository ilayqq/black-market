import React, { useContext, useState } from 'react'
import { Navbar, Offcanvas, Form, Button, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { context } from '../context'
import Avatar from '@mui/joy/Avatar'
import { SlBasket } from 'react-icons/sl'
import { checkRole } from '../http/userAPI'
import BasketItem from './BasketItem'

export default function Header({ basket }) {
    const user = useContext(context)
    const navigate = useNavigate()
    const [basketOpen, setBasketOpen] = useState(false)

    const role = () => {
        return checkRole()
    }

    const logOut = () => {
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg='light' expand='sm'>
            <Container fluid>
                <Navbar.Brand as={Link} to={SHOP_ROUTE}>Black Market</Navbar.Brand>
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
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant='dark'>Search</Button>
                        </Form> */}
                        {user.isAuth ?
                            <Nav>
                                <SlBasket style={{ position: 'relative', color: 'black', cursor: 'pointer', top: '10px' }} onClick={() => setBasketOpen(!basketOpen)} />
                                {basketOpen && (
                                    <div className='d-flex flex-column' style={{ position: 'absolute', top: '60px', right: 0, width: '450px', minHeight: '100px', zIndex: 1000, backgroundColor: 'white' }}>
                                        {user.basket.length > 0 ?
                                            <div>
                                                {user.basket.map((device, index) =>
                                                    <BasketItem key={index} device={device} />
                                                )}
                                            </div>
                                            :
                                            <div>
                                                <h2 style={{ fontSize: '20px' }}>Пусто...</h2>
                                            </div>
                                        }
                                        <Button variant='dark' onClick={() => navigate(BASKET_ROUTE)}>Перейти в корзину</Button>
                                    </div>
                                )}
                                <Avatar variant='solid' />
                                <NavDropdown id='nav-dropdown-dark-example' menuVariant='dark' title={user.userInfo.email}>
                                    <NavDropdown.Item onClick={() => navigate('profile')}>Profile</NavDropdown.Item>
                                    {role() && (
                                        <NavDropdown.Item variant='dark' onClick={() => navigate(ADMIN_ROUTE)}>Admin</NavDropdown.Item>
                                    )}
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