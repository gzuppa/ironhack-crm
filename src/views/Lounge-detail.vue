<template>

    <div>
        <h2>Detalle de la sala</h2>

        <div v-if="loading">
            <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
                <p class="uk-text-center">Loading ...</p>
            </div>
        </div>

        <div class="uk-overflow-auto" v-if="!loading">
            <table class="uk-table uk-table-middle uk-table-divider uk-margin-remove-top">
                <thead>
                <tr class="">
                    <th class="">Name</th>
                    <th>Status</th>
                    <th class="uk-width-small">Anwers (#)</th>
                    <th class="uk-width-medium">Comment</th>
                    <th class="uk-width-auto">Score</th>
                    <th class="uk-width-auto">Save</th>

                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">
                    <td>{{user.name}}</td>
                    <td>
                        <select class="uk-select">
                            <option value="" disabled selected>Status</option>
                            <option>Aprovado</option>
                            <option>Rechazado</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" class="uk-input">
                    </td>
                    <td>
                        <textarea class="uk-textarea" rows="1" placeholder="Comment"></textarea>
                    </td>
                    <td v-bind:class="['uk-text-center uk-width-auto' ,{'uk-alert-success': user.score === 'A' , 'uk-alert-warning': user.score === 'B', 'uk-alert-danger': user.score === 'C' }]" class="">{{user.score}}</td>
                    <td class="uk-text-center uk-width-auto">
                        <span uk-icon="icon: upload"></span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {appService} from '../services/app.service';

    @Component({})
    export default class LoungeDetail extends Vue{

        users: any[] = [];
        loading:boolean = true;

        created(){
            this.getUsers();
        }

        getUsers(){
            appService.getUsers()
                .then(response => response.json())
                .then(data=>{
                    this.users = data.docs;
                    this.loading = false;
                })
        }

    }
</script>

<style scoped>

    .sk-cube-grid {
        width: 100px;
        height: 100px;
        margin: 100px auto;
    }

    .sk-cube-grid .sk-cube {
        width: 33%;
        height: 33%;
        background-color: #00B7FF;
        float: left;
        -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    }
    .sk-cube-grid .sk-cube1 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }
    .sk-cube-grid .sk-cube2 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s; }
    .sk-cube-grid .sk-cube3 {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s; }
    .sk-cube-grid .sk-cube4 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s; }
    .sk-cube-grid .sk-cube5 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }
    .sk-cube-grid .sk-cube6 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s; }
    .sk-cube-grid .sk-cube7 {
        -webkit-animation-delay: 0s;
        animation-delay: 0s; }
    .sk-cube-grid .sk-cube8 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s; }
    .sk-cube-grid .sk-cube9 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }

    @-webkit-keyframes sk-cubeGridScaleDelay {
        0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
        } 35% {
              -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
          }
    }

    @keyframes sk-cubeGridScaleDelay {
        0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
        } 35% {
              -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
          }
    }

</style>