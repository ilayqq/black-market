import React, { useContext, useEffect, useState } from 'react'
import bigstar from '../assets/bigstar.png';
import { fetchOneDevice } from '../http/deviceAPI'
import { useParams } from 'react-router-dom'
import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap'

export default function DevicePage() {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <div style={{ backgroundColor: 'black', width: '100%' }}>
            <Container className='d-flex p-3'>
                <Card className='p-3' style={{ width: 816, height: 492 }} >
                    <h1>{device.name}</h1>
                    <p>rating: {device.rating}</p>
                    <Image width={300} height={300} src={'http://localhost:5000/' + device.img} />
                </Card>
                <Card className='p-3' style={{ width: 400, height: 450 }}>
                    {device.price}
                </Card>
                {/* <Card>
                <Row className='d-flex flex-column m-3'>
                    <h1>Характеристики</h1>
                    {device.description.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>
                )}
                </Row>
            </Card> */}
            </Container>
        </div>
    )
}
