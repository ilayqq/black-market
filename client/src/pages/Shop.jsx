import React, { useContext } from 'react'
import DeviceItem from '../components/DeviceItem.jsx'
import { context } from '../context.js';

export default function Shop() {
  const device = useContext(context)
  return (
    <div>
      {device.device?.map(device =>
        <DeviceItem key={device._id} device={device} />
      )}
    </div>
  )
}