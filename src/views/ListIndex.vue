<template>
  <div>
    <b-button v-b-modal.modal-1 variant="outline-primary"><b-icon-plus scale="1.3" shift-v="-1"></b-icon-plus> Adicionar novo registro </b-button>

    <b-modal id="modal-1" title="Adicionar Registro" hide-header-close> 
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-default" label-text-align>Nome:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" v-model="nome"></b-form-input>
        </b-col>
        <b-col sm="2">
          <label class="mt-3" for="input-default" label-text-align>Email:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input class="mt-3" id="input-default" v-model="email"></b-form-input>
        </b-col>
      </b-row>
      <template #modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-1')">
          Cancelar <b-icon-x  shift-v="-1"></b-icon-x>
        </b-button>
        <b-button variant="success" @click="addUsuario">
          Salvar <b-icon-check2  shift-v="-1"></b-icon-check2>
        </b-button>
      </template>
    </b-modal>

    <table class="table mt-5">
    <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Email</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in listagem" :key="user.id">
        <td>{{ user.nome }}</td>
        <td>{{ user.email }}</td>
        <td>
          <div>
            <b-button-group>
              <b-button href="/editar/{:id}" variant="secondary" size="sm">Editar <b-icon-pencil-square></b-icon-pencil-square></b-button>
              <b-button @click="deleteUser" variant="danger" size="sm">Excluir <b-icon-trash></b-icon-trash></b-button>
            </b-button-group>
          </div>
        </td>
      </tr>

    </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listagem: [],
        nome: '',
        email: '',
        delete: false
      }
    },
    created() {
      this.addlistagem()
    },
    methods: {
      async addlistagem() {
        await this.$http.get('/list')
        .then((res)=>{
          this.listagem = res.data
        })
      },
      async addUsuario() {
        var data = {
          nome: this.nome, 
          email: this.email
        };

        await this.$http.post('/add-user', data)
          .then((res) => {
            console.log(res)
          })

        this.nome = ''
        this.email = ''
        this.$bvModal.hide('modal-1')

        await this.addlistagem()
      },
      deleteUser() {
        this.$bvModal.msgBoxConfirm('Tem certeza que deseja excluir este registro?', {
          title: 'Confirmar exclusão',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Sim, excluir!',
          cancelTitle: 'Cancelar',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
      }
    }
  }
</script>

<style>

</style>