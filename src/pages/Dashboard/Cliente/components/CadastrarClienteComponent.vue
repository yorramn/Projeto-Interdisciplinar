<template>
  <div class="row">
    <h2 class="display-3 text-center">Cadastrar</h2>
  </div>
  <div class="container">
        <form>
      <div class="mb-3">
        <label for="nome" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          aria-describedby="emailHelp"
          v-model="nome"
        />
      </div>
      <div class="mb-3">
        <label for="cpf" class="form-label">CPF</label>
        <input
          type="text"
          class="form-control"
          id="cpf"
          aria-describedby="emailHelp"
          v-model="cpf"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="cep" class="form-label">CEP</label>
        <input
          type="text"
          class="form-control"
          id="cep"
          aria-describedby="emailHelp"
          v-model="cep"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Logradouro</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="logradouro"
        />
      </div>
      <div class="mb-3">
        <label for="numero" class="form-label">Número</label>
        <input
          type="number"
          class="form-control"
          id="numero"
          aria-describedby="emailHelp"
          v-model="numero"
        />
      </div>
      <div class="mb-3">
        <label for="cidade" class="form-label">Cidade</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="cidade"
        />
      </div>
      <div class="mb-3">
        <label for="telefone" class="form-label">Telefone</label>
        <input
          type="number"
          class="form-control"
          id="telefone"
          aria-describedby="emailHelp"
          v-model="telefone"
        />
      </div>
      <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary" @click.prevent="cadastrar(nome,cpf,email,logradouro,cidade,cep,numero,telefone)">Cadastrar</button>
      </div>
    </form>
  </div>
</template>
<script>
const axios = require('axios')
const TOKEN = window.localStorage.getItem('token')
const BASEURL = 'http://localhost:8080/api/'
const ENDPOINT = 'cliente'
export default {
  name: 'CadastrarClienteComponent',
  methods: {
    showAlert (mensagem) {
      this.$swal('Parabéns!', mensagem, 'success')
    },
    cadastrar (nome, cpf, email, logradouro, cidade, cep, numero, telefone) {
      axios.create({
        baseURL: BASEURL,
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Bearer ' + TOKEN
        }
      })
        .post(ENDPOINT, {
          nome: nome,
          cpf: cpf,
          email: email,
          logradouro: logradouro,
          cidade: cidade,
          cep: cep,
          numero: numero,
          telefone: telefone
        })
        .then(res => {
          this.showAlert('Cliente cadastrado com sucesso')
        // eslint-disable-next-line handle-callback-err
        }).catch(function (error) {
          this.showAlert('Erro ao cadastrar o cliente')
        })
    }
  }
}
</script>
