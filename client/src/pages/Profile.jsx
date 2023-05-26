import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { context } from '../context'

export default function Profile() {
    const user = useContext(context)
    return (
        <Container>
            {user.userInfo.email}
        </Container>
    )
}
