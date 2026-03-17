import axios from "axios"

//Entera Axio instancia para la app,la unica que se crea
const apiClient = axios.create({
    //La url que llamamos
    baseURL: 'http://localhost:3000',
    //Autenticacion y configuracion para comunicarnos con nuestro server
    withCredentials: false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
    },
})

export default{
    getEvents(){
        return apiClient.get('/events')
    },
    getEvent(id){
        return apiClient.get('/events' + id)
    },
} 