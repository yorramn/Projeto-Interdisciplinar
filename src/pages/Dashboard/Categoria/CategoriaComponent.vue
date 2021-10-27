<template>
  <div class="row">
    <div class="col-2">
      <SideBarComponent />
    </div>
    <div class="col-10">
        <div class="row">
            <div class="col-md-5">
                <CadastrarCategoriasComponent />
            </div>
            <div class="col-md-7">
                <ListarCategoriasComponent/>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import CadastrarCategoriasComponent from './components/CadastrarCategoriaComponent.vue'
import ListarCategoriasComponent from './components/ListarCategoriasComponent.vue'
import SideBarComponent from '../components/SideBar'
import router from '../../../router/index'
export default {
  components: {
    CadastrarCategoriasComponent,
    ListarCategoriasComponent,
    SideBarComponent
  },
  mounted () {
    if (window.localStorage.getItem('token') == null) {
      router.push({ name: 'Login' })
    }
  }
}
</script>
