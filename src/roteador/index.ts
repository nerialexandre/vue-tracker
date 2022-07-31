import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TarefasView from '../views/TarefasView.vue'
import TesteView from '../views/TesteView.vue'

const rotas: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tarefas',
    component: TarefasView
  },
  {
    path: '/teste',
    name: 'TESTE',
    component: TesteView
  }
]

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
})

export default roteador
