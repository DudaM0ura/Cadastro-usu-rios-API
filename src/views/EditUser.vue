<template>
    <div>
        <h1>editar user {{ this.$route.params.id }}</h1>

        <div class="row">
            <div class="col-5">
                <b-form-input placeholder="nome"></b-form-input>
            </div>
            <div class="col-5">
                <b-form-input placeholder="email"></b-form-input>
            </div>
        </div>
        <div class="row-1 mt-4">
            <div class="col-12">
                <b-button block variant="success" class="me-4" >Salvar</b-button>
                <b-button block variant="secondary"  href="/lista">Cancelar</b-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Edit'
    }
</script>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

</style>