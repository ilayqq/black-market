import React, { useContext } from 'react'
import DeviceItem from '../components/DeviceItem.jsx'
import { context } from '../context.js';

export default function Shop() {
  const deviceContext = useContext(context)

  // const addToBasket = (device) => {
  //   let isInBasket = false
  //   deviceContext.basket.forEach(el => {
  //     if (el.id === device.id)
  //       isInBasket = true
  //   })
  //   if (!isInBasket)
  //     deviceContext.setBasket((prevBasket) => [...prevBasket, device])
  // }

  return (
    <div>
      {deviceContext.device?.map(device =>
        <DeviceItem key={device._id} device={device} addToBasket={() => deviceContext.setBasket((prevBasket) => [...prevBasket, device])} />
      )}
    </div>
  )
}