<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { TodoItem } from '../types/Event'

export default defineComponent({
  //Composition API
  setup() {
    const state = reactive({
      newTask: {
        label: '',
        type: 'personal',
        priority: 'mediano',
      } as TodoItem,
      taskItems: [] as TodoItem[],
      listFilter: 'all',
    })

    //Funcion compuesta
    const filteredTasks = computed(() => {
      //Hay que sustituir los this por state,ya que usamos el reactive import
      if (state.listFilter === 'complete') {
        return state.taskItems.filter((item: TodoItem) => item.isComplete === true)
      } else if (state.listFilter === 'incomplete') {
        return state.taskItems.filter((item: TodoItem) => item.isComplete === false)
      } else {
        return state.taskItems
      }
    })

    const addTask = () => {
      state.taskItems.push({
        ...state.newTask,
        isComplete: false,
      })
    }

    return {
      ...toRefs(state),
      filteredTasks,
      addTask,
    }
  },
})
</script>

<template>
  <div>
    <h1>Todo List</h1>

    <div>
      <input aria-label="Nueva tarea" v-model="newTask.label" type="text" placeholder="Añadir tarea" />
      <select aria-label="Tipo de tarea" v-model="newTask.type">
        <option value="personal">Personal</option>
        <option value="work">Trabajo</option>
      </select>
      <button aria-label="Añadir tarea" @click="addTask">Añadir</button>
    </div>

    <div>
      <button aria-label="Mostrar todas las tareas" @click="listFilter = 'all'">Todas</button>
      <button aria-label="Mostrar tareas completadas" @click="listFilter = 'complete'">Completadas</button>
      <button aria-label="Mostrar tareas incompletas" @click="listFilter = 'incomplete'">Incompletas</button>
    </div>

    <select aria-label="Prioridad de la tarea" v-model="newTask.priority">
      <option value="alto">Alta</option>
      <option value="mediano">Media</option>
      <option value="bajo">Baja</option>
    </select>

    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index">
        <input :aria-label="`Marcar como ${task.isComplete ? 'incompleta' : 'completa'} la tarea ${task.label}`" type="checkbox" v-model="task.isComplete" />
        <span :style="task.isComplete ? 'text-decoration: line-through' : ''">
          {{ task.label }} - {{ task.type }} -{{ task.priority }}
        </span>
      </li>
    </ul>
  </div>
</template>
