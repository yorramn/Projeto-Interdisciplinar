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
        <label for="descricao" class="form-label">Descrição</label>
        <textarea class="md-textarea form-control" v-model="descricao" id="descricao" cols="30" rows="10"></textarea>
      </div>
      <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary" @click.prevent="cadastrar(nome,descricao)">Cadastrar</button>
      </div>
    </form>
  </div>
</template>
<script>
const axios = require('axios')
const TOKEN = window.localStorage.getItem('token')
const BASEURL = 'http://localhost:8080/api/'
const ENDPOINT = 'categoria'
export default {
  name: 'CadastrarCategoriasComponent',
  methods: {
    showAlert (mensagem) {
      this.$swal('Parabéns!', mensagem, 'success')
    },
    cadastrar (nome, descricao) {
      axios.create({
        baseURL: BASEURL,
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Bearer ' + TOKEN
        }
      })
        .post(ENDPOINT, {
          nome: nome,
          descricao: descricao
        })
        .then(res => {
          this.showAlert('Categoria cadastrada com sucesso')
        // eslint-disable-next-line handle-callback-err
        }).catch(function (error) {
          this.showAlert('Erro ao cadastrar a categoria')
        })
    }
  }
}
</script>
