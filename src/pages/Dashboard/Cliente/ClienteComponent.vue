<template>
<div class="row">
    <div class="col-2">
      <SideBarComponent />
    </div>
    <div class="col-10">
        <div class="row">
            <div class="col-md-5">
                <CadastrarClienteComponent />
            </div>
            <div class="col-md-7">
                <MostrarClienteComponent/>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import CadastrarClienteComponent from './components/CadastrarClienteComponent'
import MostrarClienteComponent from './components/MostrarClientesComponent'
import SideBarComponent from '../components/SideBar'
import router from '../../../router/index'
export default {
  name: 'ClienteComponent',
  components: {
    CadastrarClienteComponent,
    MostrarClienteComponent,
    SideBarComponent
  },
  mounted () {
    if (window.localStorage.getItem('token') == null) {
      router.push({ name: 'Login' })
    }
  }
}
</script>
