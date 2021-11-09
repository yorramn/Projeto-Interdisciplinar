<template>
  <div class="container">
    <div v-if="mensagem!=null">
      <h1 class="text-center display-3">{{mensagem}}</h1>
    </div>
    <div class="row" v-else>
      <div class="row">
        <h2 class="display-3 text-center">Categorias cadastradas</h2>
      </div>
      <table class="table table-striped">
        <thead>
          <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">JSON</th>
            <th scope="col">XML</th>
          </tr>
        </thead>
        <tbody v-for="categoria of categorias" :key="categoria.id">
          <tr class="text-center">
            <td>{{categoria.id}}</td>
            <td>{{categoria.nome}}</td>
            <td>{{categoria.descricao}}</td>
            <td>
              <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="buscarCategoria(categoria.id)">
                <i class="material-icons">visibility</i>
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="buscarCategoriaXml(categoria.id)">
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
                  <h5 class="modal-title" id="exampleModalLabel">{{categoria != null ? categoria.nome : ''}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{categoria}}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true" v-if="categoria != null">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{categoria}}
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
const BASEURL = 'http://localhost:8080/api/categoria'
const ENDPOINT = '/'
export default {
  name: 'ListarCategoriasComponent',
  data () {
    return {
      categorias: [],
      categoria: null,
      xml: null,
      mensagem: null
    }
  },
  methods: {
    listarCategorias () {
      axios.create({
        baseURL: BASEURL,
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Bearer ' + TOKEN
        }
      })
        .get(ENDPOINT)
        .then(res => {
          if (res.data.objeto == null) {
            this.mensagem = res.data.mensagem
          } else {
            this.categorias = res.data.objeto
          }
        })
    },
    buscarCategoria (id) {
      axios.create({
        baseURL: BASEURL,
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Bearer ' + TOKEN
        }
      })
        .get(`/${id}`)
        .then(res => {
          this.categoria = res.data.objeto
        })
    },
    buscarCategoriaXml (id) {
      axios.create({
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Bearer ' + TOKEN
        }
      })
        .get(`http://localhost:8080/api/xml/categoria/${id}`)
        .then(res => {
          this.categoria = res.data
        })
    }
  },
  // watch:{
  // },
  mounted () {
    setInterval(() => { this.listarCategorias() }, 2000)
  }
}
</script>
