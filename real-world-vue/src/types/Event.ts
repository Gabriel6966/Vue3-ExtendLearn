//Clase de evento para llamarla en lo vue y asi no lo importo 30 veces
export interface Event {
  id: number
  title: string
  time: string
  date: string
  location: string
  description: string
  category: string
  organizer: string
}

type TaskType = 'personal' | 'work' | 'miscellaneous'

export interface TodoItem {
  label: string
  type: TaskType
  isComplete: boolean
}
