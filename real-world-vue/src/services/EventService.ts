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
    // Security: Sanitize dynamic inputs to prevent Path Traversal/SSRF
    return apiClient.get(
      '/events?_per_page=' + encodeURIComponent(perPage) + '&_page=' + encodeURIComponent(page),
    )
  },
  getEvent(id: number) {
    // Security: Sanitize dynamic inputs to prevent Path Traversal/SSRF
    return apiClient.get('/events/' + encodeURIComponent(id))
  },
}
