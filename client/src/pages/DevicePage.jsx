import React, { useEffect, useState } from 'react'
import { fetchOneDevice } from '../http/deviceAPI'
import { useParams } from 'react-router-dom'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import star from '../assets/star.png';

export default function DevicePage() {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <Container className='d-flex p-3'>
                <Card className='p-3' style={{ width: 816, height: 492 }}>
                    <h1>{device.name}</h1>
                    <p>rating: {device.rating}<Image width={18} height={18} src={star} /></p>
                    <Image width={300} height={300} src={'http://localhost:9999/' + device.img} />
                    <Col className='d-flex justify-content-between'>
                        {device.price}
                        <Button variant='dark'>Добавить в корзину</Button>
                    </Col>
                </Card>
                <Row className='d-flex flex-column m-3'>
                    <h1>Характеристики</h1>
                    <Row key={device.id} style={{ background: device % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {device.title}: {device.description}
                    </Row>
                    {/* {device.description.map((info, index) =>
                            <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                                {info.title}: {info.description}
                            </Row>
                        )} */}
                </Row>
            </Container>
        </div>
    )
}
