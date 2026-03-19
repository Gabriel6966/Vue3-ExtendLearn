<script setup>
import {ref} from 'vue'
import { useTodoListStore } from '@/stores/todoList';

const todo = ref('')
const store = useTodoListStore()

function addItemAndClear() {
    if (todo.value.length === 0) {
        return
    }
    store.addTodo(todo.value)
    todo.value = ''
}
</script>

<template>
    <div>
        <form @submit.prevent="addItemAndClear()">
            <input v-model="todo" type="text"/><button>Add</button>
        </form>
    </div>
</template>

<style scoped>
form{
    margin-bottom: 15px;
}
input{
    margin-top: 25px;
    margin-bottom: 15px;
    height: 20px;
    width: 50%;
}
button{
    margin-left: 30px;
    background-color: #2f6089;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
}
.alert-div{
    min-height: 25px;
}
.alert-div{
    color:#d1495b;
    font-size: 1em;
    font-weight: 600;
}
</style>