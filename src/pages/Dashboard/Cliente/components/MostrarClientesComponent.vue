<template>
  <div class="container">
    <div v-if="mensagem!=null">
      <h1 class="text-center display-3">{{mensagem}}</h1>
    </div>
    <div class="row" v-else>
      <div class="row">
        <h2 class="display-3 text-center">Clientes Cadastrados</h2>
      </div>
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">Email</th>
            <th scope="col">JSON</th>
            <th scope="col">XML</th>
          </tr>
        </thead>
        <tbody v-for="cliente of clientes" :key="cliente.id">
          <tr class="text-center">
            <th scope="row">{{cliente.id}}</th>
            <td>{{cliente.nome}}</td>
            <td>{{cliente.cpf}}</td>
            <td>{{cliente.email}}</td>
            <td>
              <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="buscarCliente(cliente.id)">
                <i class="material-icons">visibility</i>
              </button>
            </td>
            <td>
                            <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="buscarClienteXml(cliente.id)">
                <i class="material-icons">visibility</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{cliente != null ? cliente.nome : ''}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{cliente}}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true" v-if="cliente != null">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{cliente}}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>

</template>
<script>
const axios = require('axios')
const TOKEN = window.localStorage.getItem('token')
const BASEURL = 'http://localhost:8080/api/cliente'
const ENDPOINT = '/'
export default {
  name: 'MostrarClientesComponent',
  data () {
    return {
      clientes: [],
      cliente: null,
      mensagem: null
    }
  },
  methods: {
    listarClientes () {
      axios.create({
        baseURL: BASEURL,
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Bearer ' + TOKEN
        }
      })
        .get(ENDPOINT)
        .then(res => {
          if (res.data.objeto != null) {
            this.clientes = res.data.objeto
          } else {
            this.mensagem = res.data.message
          }
        })
    },
    buscarCliente (id) {
      axios.create({
        baseURL: BASEURL,
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Bearer ' + TOKEN
        }
      })
        .get(`/${id}`)
        .then(res => {
          this.cliente = res.data.objeto
        })
    },
    buscarClienteXml (id) {
      axios.create({
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Bearer ' + TOKEN
        }
      })
        .get(`http://localhost:8080/api/xml/cliente/${id}`)
        .then(res => {
          this.cliente = res.data
        })
    }
  },
  mounted () {
    setInterval(() => { this.listarClientes() }, 2000)
  }

}
</script>
