import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'

const { sget } = vi.hoisted(() => {
  return {
    sget: vi.fn(),
  }
})

//Robamos axios con Vitest
vi.mock('axios', () => {
  return {
    default: {
      create: vi.fn(() => ({
        get: sget,
      })),
    },
  }
})
//Importamos despues de que la variable se ponga al mismo nivel que el mock
import EventService from '@/services/EventService'

describe('EventService', () => {
  //Se limpia los mocks para que no se coma uno entre otro
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('error al llamar a la API', async () => {
    //Configuracion del fallo
    sget.mockRejectedValueOnce({
      response: {
        status: 500,
      },
    })

    //Ejecutamos el events y le pasamos los argumentos(2,1) del service y ya rechazamos
    await expect(EventService.getEvents(2, 1)).rejects.toThrow()
  })

  //Comprobacion correcta
  it('devolvemos llamada buena a la API', async () => {
    //Metemos datos falsos
    const eventos = [
      { id: 1, title: 'Primero' },
      { id: 2, title: 'Segundo' },
    ]

    sget.mockResolvedValueOnce({
      data: eventos,
    })

    //Ejecucions
    const respuesta = await EventService.getEvents(2, 1)

    //Comprobacion
    expect(respuesta.data).toEqual(eventos)
    expect(respuesta.data).toHaveLength(2)
  })
})
