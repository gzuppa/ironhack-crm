<template>

    <div>

        <div class="uk-flex uk-flex-right">
            <NewInterview class=""></NewInterview>
        </div>

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
                    <td><button class="uk-button uk-button-default">Ver Sala</button></td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
    
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import NewInterview from '@/components/New-interview.vue';

    @Component({
        components: {
            NewInterview,
        },
    })
    export default class Interviews extends Vue{

    }
</script>

<style scoped>


</style>