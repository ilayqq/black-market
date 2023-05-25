import React, { createContext, useEffect, useInsertionEffect, useState } from 'react'
import { check } from './http/userAPI'
import { fetchDevices } from './http/deviceAPI'

export const context = createContext()

export default function UserContext(props) {
    const [userInfo, setUserInfo] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [device, setDevice] = useState(null)

    const fetchUser = async () => {
        const userData = await check()
        if (userData) {
            setIsAuth(true)
            setUserInfo(userData)
        }
    }

    const fetchDevice = async () => {
        const device = await fetchDevices()
        if (device) {
            setDevice(device)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    useEffect(() => {
        fetchDevice()
    }, [])

    return (
        <context.Provider value={{
            userInfo,
            isAuth,
            device,
            setIsAuth
        }}>
            {props.children}
        </context.Provider>
    )
}