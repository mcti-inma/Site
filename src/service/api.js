import axios from 'axios'
// http://200.137.88.3:8081/geoserver
export default () => {
  return axios.create({
    baseURL:'http://localhost:3000',
    // baseURL:'http://200.137.88.3:8081',
    withCredentials:false,
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    }
  })
}

