<template>

    <div>
        <h2>Lista de salas</h2>

        <div class="uk-margin-top uk-overflow-auto">
            <table class="uk-table uk-table-small uk-table-divider uk-table-middle uk-table-center">
                <thead>
                <tr>
                    <th>No. Sala</th>
                    <th>Participantes</th>
                    <th>Lugares</th>
                    <th>Fecha</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>30</td>
                    <td>30</td>
                    <td>abril 3º 2018, 7:52:46 pm</td>
                    <td><router-link to="/interviews/loungelist/1" class="uk-button uk-button-default">Ver Sala</router-link></td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({})
    export default class LoungeList extends Vue {

        created(){

        }

    }
</script>

<style scoped>


</style>