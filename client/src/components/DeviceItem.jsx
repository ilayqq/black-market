import React from 'react';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function DeviceItem({ device }) {
    const navigate = useNavigate()
    return (
        <Row className='d-inline-block m-3'>
            <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + '/' + device._id)}>
                <Card style={{ width: 150, cursor: 'pointer' }} border='light'>
                    <Image width={150} height={150} src={'http://localhost:5000/' + device.img} />
                    <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                        <div>{device.name}</div>
                        <div className='d-flex align-items-center'>
                            <div>{device.rating}</div>
                            <Image width={18} height={18} src={star} />
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}