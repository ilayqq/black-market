import axios from 'axios';

const $host = axios.create({
    baseURL: "http://localhost:9999/"
})

const $authHost = axios.create({
    baseURL: "http://localhost:9999/"
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}