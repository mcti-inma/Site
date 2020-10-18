import axios from 'axios'
import config from '@/config'

// http://200.137.88.3:8081/geoserver
export default () => {
  return axios.create({
    baseURL: config.data().request.url,
    withCredentials:false,
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    }
  })
}

