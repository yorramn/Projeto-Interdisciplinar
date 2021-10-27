<template>
  <div class="row">
    <div class="col-md-2">
      <SideBarComponent />
    </div>
    <div class="col-md-11">
      "salve"
    </div>
  </div>
</template>
<script>
import SideBarComponent from './components/SideBar.vue'
import router from '../../router/index'
export default {
  name: 'DashboardComponent',
  components: {
    SideBarComponent
  },
  mounted () {
    if (window.localStorage.getItem('token') == null) {
      router.push({ name: 'Login' })
    }
  }
}
</script>
