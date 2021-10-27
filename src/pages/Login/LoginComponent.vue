<template>
<div class="cent">
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Entrar</h5>
            <form>
              <div class="form-floating mb-3">
                <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Senha</label>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" @click.prevent="login(email,password)" type="submit">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import router from '../../router/index'
const axios = require('axios')
export default {
  name: 'LoginComponent',
  data () {
    return {

    }
  },
  methods: {
    login (email, senha) {
      axios
        .post('http://risonhaapi.herokuapp.com/api/login', {
          email: email,
          password: senha
        })
        .then(function (response) {
          const token = response.data.token
          console.log(response)
          localStorage.setItem('token', token)
          localStorage.setItem('nome', response.data.user.name)
          router.push({ name: 'Home' })
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          this.showMessage()
        })
    },
    showMessage () {
      this.$swal('Erro!', 'Login ou senha inválidos', 'error')
    }
  }

}
</script>
<style scoped>
.cent{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>
