//API CALLS

import axios from 'axios'

//Entera Axio instancia para la app,la unica que se crea
const apiClient = axios.create({
  //La url que llamamos
  baseURL: 'http://localhost:3000',
  //Autenticacion y configuracion para comunicarnos con nuestro server
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents(perPage: number, page: number) {
    //En la Query puedes hacer un {{$route.query.page}
    //Mirar bien variables
    // 🛡️ Sentinel: Sanitize dynamic parameters to prevent Path Traversal/SSRF
    const safePerPage = encodeURIComponent(String(perPage))
    const safePage = encodeURIComponent(String(page))
    return apiClient.get('/events?_per_page=' + safePerPage + '&_page=' + safePage)
  },
  getEvent(id: number) {
    // 🛡️ Sentinel: Sanitize dynamic ID to prevent Path Traversal
    const safeId = encodeURIComponent(String(id))
    return apiClient.get('/events/' + safeId)
  },
}
