import React, { useContext } from 'react'
import { context } from '../context'
import BasketItem from '../components/BasketItem'
import { Card, Container } from 'react-bootstrap'

export default function Basket() {
    const user = useContext(context)
    return (
        <Container>
            <h1>Basket</h1>
            {user.basket.length > 0 ?
                <Card>
                    {user.basket.map((device, index) =>
                        <BasketItem key={index} device={device} />,
                    )}
                </Card>
                :
                <div>
                    <span>Пусто...</span>
                </div>
            }
        </Container>
    )
}
