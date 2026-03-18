import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetails from '../views/event/Details.vue'
import EventLayout from '../views/event/Layout.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*
    Ruta usando parametros
    {
    path:'/events/:page',
    component:Events


    Y ya en el html h1, {{$route.params.page}}
    },

    */
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      //Al poner el 1 entra en la primera pagina y tambien le decimos que no se vea feo el URL
      props:route=>({page:parseInt(route.query.page) || 1})
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      props:true,
      component: EventLayout,
      //Ponemos a los hijos
      children:[
            {
      //Al tener el path vacio eso significa qyue nos lleva al path de arriba del :id
      path: '',
      name: 'EventDetails',
      component: EventDetails,
    },
            {
      path: 'register',
      name: 'EventRegister',
      component: EventRegister,
    },
        {
      path: 'edit',
      name: 'EventEdit',
      component: EventEdit,
    },
      ]
    },
    {
      //Metodo WildCard(Victor) esto atrapa al id y todo lo que vaya detras del event(pues ya sea edit,register etc etc)
    path: '/event/:afterEvent(.*)',
    redirect: ()=>{
      //Dirigimos la ruta a lo que atrapo el metodo de arriba
      return {path:'/events/'+ toString.params.aferEvent}

    }
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
      alias:'/about'
    },
    {
      //Te lleva a una ruta de error 404 y da igual si es evento erroneo pagina o etc
      path:'/404/:resource',
      name:'404Resource',
      component: NotFound,
      props: true
    },

    {
      path:'/network-error',
      name:'NetworkError',
      component: NetworkError
    },
    {
      //path para mirar todas las rutas que se juntan y no existen
      path:'/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ],
})

export default router
