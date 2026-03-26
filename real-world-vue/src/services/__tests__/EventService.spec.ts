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
})
