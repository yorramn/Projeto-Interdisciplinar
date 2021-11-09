<template>
  <div class="row">
    <h1 class="display-2 text-center">Bem vindo de volta, <span class="text-success">{{name}}</span></h1>
    <div class="col-2">
      <SideBarComponent />
    </div>
    <div class="col-10">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import DashboardComponent from '../Dashboard/DashboardComponent'
import router from '../../router/index'
import SideBarComponent from '../Dashboard/components/SideBar.vue'
export default {
  components: {
    // DashboardComponent
    SideBarComponent
  },
  data () {
    return {
      name: window.localStorage.getItem('nome')
    }
  },
  methods: {
    showMessage () {
      this.$swal('Bem vindo!', `Olá novamente, ${this.name}`, 'success')
    }
  },
  mounted () {
    if (window.localStorage.getItem('token') == null) {
      router.push({ name: 'Login' })
    } else {
      this.showMessage()
    }
  }
}
</script>
