
import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

//Componente globarl reactivo para mas componentes
const GStore = reactive({flashMessage: ''})
//Y esto hace que los componentes de nuestra app pueda utilizar este inject
app.provide('GStore',GStore)

app.mount('#app')
