import React, { useContext, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { context } from '../context'
import CreateDevice from '../components/modals/CreateDevice'

export default function Admin() {
  const user = useContext(context)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container>
      <Button variant='outline-dark' className="mt-4 p-2" onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>email</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{user.userInfo.email}</td>
            <td>
              <select>
                <option value={user.userInfo.role}>{user.userInfo.role}</option>
                <option value='ADMIN'>ADMIN</option>
              </select>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button variant='success' className='float-end'>Save</Button>
    </Container>
  )
}
