import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventLayout from '../views/event/Layout.vue'
import { ssrExportAllKey } from 'vite/module-runner'


const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to,from,savedPosition){
    //Funcion para dejar donde estaba en la posicion anterior en caso de que le de atra
    if(savedPosition){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(savedPosition)
          //Le tenemos que pasar un new Promise para que nos pille la posicion anterior y con un tiempo de 300
          //Asi le damos tiempo ya que la se empieza a construir todo de 0 pixeles
        },300)
      }) 
    }else{
      return{
        top:0
      }
    }
  },
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
      component: () => import('../views/event/Details.vue'),
    },
            {
      path: 'register',
      name: 'EventRegister',
      component:  () => import('../views/event/Register.vue'),
    },
        {
      path: 'edit',
      name: 'EventEdit',
      component:  () => import('../views/event/Edit.vue'),
    },
      ]
    },
    {
      //Metodo WildCard(Victor) esto atrapa al id y todo lo que vaya detras del event(pues ya sea edit,register etc etc)
    path: '/event/:afterEvent(.*)',
    //Redirigimos las rutas a las viejas
    redirect: to=> '/events/' + to.params.afterEvent
      //Dirigimos la ruta a lo que atrapo el metodo de arriba
      //return {path:'/events/'+ toString.params.aferEvent}

    
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      alias:'/about'
    },
    {
      //Te lleva a una ruta de error 404 y da igual si es evento erroneo pagina o etc
      path:'/404/:resource',
      name:'404Resource',
      component: () => import('../views/NotFound.vue'),
      props: true
    },

    {
      path:'/network-error',
      name:'NetworkError',
      component: () => import('../views/NetworkError.vue'),
    },
    {
      //path para mirar todas las rutas que se juntan y no existen
      path:'/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    }
  ],
})

export default router
