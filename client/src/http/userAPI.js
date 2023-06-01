import { $host } from ".";
import jwt_decode from 'jwt-decode';

export const registration = async (email, password, role) => {
    const { data } = await $host.post('api/user/registration', { email, password, role })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const checkRole = () => {
    const token = localStorage.getItem('token')
    if (token) {
        const decodedToken = jwt_decode(token)
        const userRole = decodedToken.role
        if (userRole === 'USER') {
            return true
        }
    }
    return false
}
export const check = async (setUser) => {
    const token = localStorage.getItem('token')
    if (token) {
        const decodedToken = jwt_decode(token)
        return decodedToken
    }
}