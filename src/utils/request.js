import axios from 'axios'

const request = axios.create({
  baseURL:'http://localhost:8885'
})

export default request
