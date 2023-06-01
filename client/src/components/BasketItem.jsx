import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import Image from 'react-bootstrap/Image';

export default function BasketItem({ device }) {
    const navigate = useNavigate()
    return (
        <div className='d-flex justify-content-between align-items-center' style={{ width: '100%', marginRight: '20px', marginBottom: '20px' }}>
            <Image width={70} height={70} style={{ cursor: 'pointer' }} onClick={() => navigate(DEVICE_ROUTE + '/' + device._id)} src={'http://localhost:5000/' + device.img} />
            <div>{device.name}</div>
            <div>{device.price} руб.</div>
        </div>
    )
}