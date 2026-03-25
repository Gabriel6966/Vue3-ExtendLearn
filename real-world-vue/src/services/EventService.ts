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
    // 🛡️ Sentinel: Encode query parameters to prevent injection/path traversal
    // En la Query puedes hacer un {{$route.query.page}
    // Mirar bien variables
    return apiClient.get(
      '/events?_per_page=' + encodeURIComponent(perPage) + '&_page=' + encodeURIComponent(page)
    )
  },
  getEvent(id: number | string) {
    // 🛡️ Sentinel: Encode dynamic route parameters to prevent path traversal
    return apiClient.get('/events/' + encodeURIComponent(id))
  },
}
