import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TarefasView from '../views/TarefasView.vue'
import TesteView from '../views/TesteView.vue'
import ProjetosView from '../views/ProjetosView.vue'

const rotas: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tarefas',
    component: TarefasView
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: ProjetosView
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
