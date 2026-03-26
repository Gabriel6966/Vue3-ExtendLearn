import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import EventCard from '../EventCard.vue'

describe('EventCard.vue', () => {
  it('Renderizamos con datos del evento', () => {
    const prueba1 = {
      id: 1,
      title: 'Toma de CerVuezas',
      time: '12:00 PM',
      date: '2026-05-20',
      location: 'Madrid',
      description: 'Evento de prueba',
      category: 'Cata',
      organizer: 'Gabi',
    }

    //Montamos el componente con la prop y el stub
    const contenedor = mount(EventCard, {
      props: {
        event: prueba1,
      },
      //configuracion global para el test para que ignore los router-links
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(contenedor.text()).toContain('')

    expect(contenedor.text()).toContain('2026-05-20')
  })

  //Prueba2
  it('enlaces a evnetos', () => {
    const prueba2 = {
      //Ponemos id 999 para asegurarnos que en caso de que alguien pase por parametro un 2 en vez de su event.id
      //para que no nos salte el error
      id: 999,
      title: 'Evento segundo',
      time: '6:00 PM',
      date: '2026-06-01',
      location: 'Logroño',
      description: 'Increible',
      category: 'Segunda prueba',
      organizer: 'Gabi',
    }

    const contenedor = mount(EventCard, {
      props: {
        event: prueba2,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    //Buscamos el componente que tenemos dentro de stubs
    const enlace = contenedor.findComponent(RouterLinkStub)

    expect(enlace.props().to).toEqual({
      name: 'EventDetails',
      params: {
        id: 999,
      },
    })
  })
})
