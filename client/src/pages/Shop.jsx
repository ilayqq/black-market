import React, { useContext, useState } from 'react'
import DeviceItem from '../components/DeviceItem.jsx'
import { context } from '../context.js';
import { Button } from 'react-bootstrap';
import { BASKET_ROUTE } from '../utils/consts.js';
import { useNavigate } from 'react-router-dom';
import { SlBasket } from 'react-icons/sl';
import BasketItem from '../components/BasketItem.jsx';

export default function Shop() {
  const device = useContext(context)
  const [basket, setBasket] = useState([])
  const [basketOpen, setBasketOpen] = useState(false)
  const navigate = useNavigate()

  const addToBasket = (device) => {
    setBasket((prevBasket) => [...prevBasket, device])
  }

  return (
    <div>
      <div>
        <SlBasket style={{ position: 'relative', color: 'black', cursor: 'pointer' }} onClick={() => setBasketOpen(!basketOpen)} />
        {basketOpen && (
          <div className='d-flex flex-column' style={{ position: 'absolute', top: '90px' }}>
            {basket.map(device =>
              <BasketItem key={device._id} device={device} />
            )}
            <Button variant='dark' onClick={() => navigate(BASKET_ROUTE)}>Перейти в корзину</Button>
          </div>
        )}
      </div>
      {device.device?.map(device =>
        <DeviceItem key={device._id} device={device} addToBasket={addToBasket} />
      )}
    </div>
  )
}