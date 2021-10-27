<template>
  <div class="row">
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
  methods: {
    showMessage () {
      this.$swal('Bem vindo!', `Olá novamente, ${window.localStorage.getItem('nome')}`, 'success')
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
