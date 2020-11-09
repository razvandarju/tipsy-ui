import axios from 'axios'

const HOST = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'localhost:9000' : window.location.host


export default axios.create({
    baseURL: window.location.protocol + '//' + HOST + '/api'
});