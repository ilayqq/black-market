import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI';
import { context } from '../context';

export default function Auth() {
    const location = useLocation()
    const navigate = useNavigate()
    const user = useContext(context)
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            // user.setUserInfo(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: window.innerHeight - 54, }}>
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className="mt-3" placeholder='Введите ваш email...' value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Control className="mt-3" placeholder='Введите ваш пароль...' value={password} onChange={e => setPassword(e.target.value)} type="password" />
                </Form>
                <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                    <Col className='d-flex justify-content-between'>
                        <Button variant="outline-success" onClick={click} style={{ width: 150 }}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Col>
                    <Col xs='auto'>
                        {isLogin ?
                            <div>
                                <NavLink to={REGISTRATION_ROUTE}>Зарегиструйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}
