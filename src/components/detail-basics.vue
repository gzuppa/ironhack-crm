<template>

    <div>
        <div class="uk-flex uk-flex-around">
            <div>Datos de contacto: </div>
            <div>Email: {{user.email}}</div>
            <div>Tel: {{user.tel}}</div>
        </div>
        <h5><span class="uk-text-muted">Aplicó para:</span> {{user.course}}</h5>
        <p><span class="uk-text-muted">Razón:</span> {{user.why}}</p>
        <p><span class="uk-text-muted">Objetivo:</span> {{user.objectives}}</p>
        <p><span class="uk-text-muted">Skills:</span> {{user.skills}}</p>


    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class DetailBasics extends Vue {

        @Prop() user: any;

        created(){

        }



    }
</script>

<style scoped>

</style>