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
      <input
        v-model="newTask.label"
        type="text"
        placeholder="Añadir tarea"
        aria-label="Añadir tarea"
      />
      <select v-model="newTask.type" aria-label="Tipo de tarea">
        <option value="personal">Personal</option>
        <option value="work">Trabajo</option>
      </select>
      <button @click="addTask">Añadir</button>
    </div>

    <div>
      <button @click="listFilter = 'all'">Todas</button>
      <button @click="listFilter = 'complete'">Completadas</button>
      <button @click="listFilter = 'incomplete'">Incompletas</button>
    </div>

    <select v-model="newTask.priority" aria-label="Prioridad de tarea">
      <option value="alto">Alta</option>
      <option value="mediano">Media</option>
      <option value="bajo">Baja</option>
    </select>

    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index">
        <input
          type="checkbox"
          v-model="task.isComplete"
          :aria-label="'Marcar tarea como completada: ' + task.label"
        />
        <span :style="task.isComplete ? 'text-decoration:line-trought' : ''">
          {{ task.label }} - {{ task.type }} -{{ task.priority }}
        </span>
      </li>
    </ul>
  </div>
</template>
