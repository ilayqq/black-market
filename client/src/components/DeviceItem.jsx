import React from 'react';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function DeviceItem({ device, addToBasket }) {
    const navigate = useNavigate()
    return (
        <Row className='d-inline-block m-3'>
            <Col md={3} className='mt-3'>
                <Card style={{ width: 200, height: 200}} border='light'>
                    <Image width={200} height={200} style={{ cursor: 'pointer' }} onClick={() => navigate(DEVICE_ROUTE + '/' + device._id)} src={'http://localhost:5000/' + device.img} />
                    <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                        <div>{device.name}</div>
                        <div>{device.price} тенге.</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>{device.rating}<Image width={18} height={18} src={star} /></div>
                        <div style={{ cursor: 'pointer' }} onClick={() => addToBasket(device)}>+</div>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}