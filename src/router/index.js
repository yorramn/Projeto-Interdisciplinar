import { createRouter, createWebHashHistory } from 'vue-router'
import LoginComponent from '../pages/Login/LoginComponent'
import HomeComponent from '../pages/Home/HomeComponent'
import ClienteComponent from '../pages/Dashboard/Cliente/ClienteComponent'
import CategoriaComponent from '../pages/Dashboard/Categoria/CategoriaComponent'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: ClienteComponent
  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: CategoriaComponent
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL)
})

export default router
