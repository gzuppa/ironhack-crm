<template>

    <div id="dashboard">

        <div class="uk-flex uk-flex-right">
            <FormModal text="Create User" :type="'user'"></FormModal>
        </div>

        <div class="uk-margin filters uk-padding-small uk-margin-remove-bottom">

            <div class="uk-flex-between uk-grid-small uk-flex-middle" uk-grid>
                <div class="">
                    <form v-on:submit.prevent="searchUser">

                        <div class="uk-search uk-search-default">
                            <span class="uk-search-icon-flip" uk-search-icon></span>
                            <input class="uk-search-input" type="search" placeholder="Buscar..." v-model="query.field">
                        </div>
                        <!-- Fin input search -->
                        <div uk-form-custom="target: > * > span:first-child" v-if="false">
                            <select v-model="query.score">
                                <option value="" selected disabled>Score de candidato</option>
                                <option value="all">Todos</option>
                                <option value="A">Tipo A</option>
                                <option value="B">Tipo B</option>
                                <option value="C">Tipo C</option>
                            </select>
                            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                                <span></span>
                                <span uk-icon="icon: chevron-down"></span>
                            </button>
                        </div>
                        <!-- Fin select search -->
                        <button class="uk-button uk-button-default" v-bind:disabled="(query.field === '') && (query.score === '')">Buscar</button>
                    </form>
                </div>

                <div>
                    <button class="uk-button uk-button-default" @click="reset" :disabled="!searching">Reset</button>
                </div>

                <div class="uk-flex-center uk-flex-middle uk-flex uk-width-1-4">
                    <span class="navigate uk-display-inline-block"
                          @click="previousPage()"
                          v-if="page > 1"
                          uk-icon="icon: chevron-left; ratio: 2">
                    </span>
                    <div class="uk-display-inline-block uk-width-1-3 uk-text-center">
                        <input class="uk-input uk-text-center" type="text" v-model="page" @keydown.enter="getPage(page)">
                        <span>de {{pages}} páginas</span>
                    </div>
                    <span class="navigate uk-display-inline-block"
                          @click="NextPage()"
                          v-if="page < pages"
                          uk-icon="icon: chevron-right; ratio: 2">
                    </span>
                </div>

                <div class="uk-width-auto">
                    <div class="users-count uk-position-relative">
                        <span class="uk-margin-small-right" uk-icon="icon: users; ratio: 2"></span>
                        <span class="uk-badge uk-position-absolute uk-position-top-right">{{total}}</span>
                    </div>
                </div>

            </div>

        </div>

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

        <div class="uk-alert-primary" v-if="!loading && (users.length < 1)" uk-alert>
            <p>No se encontraron usuarios con estos criterios</p>
        </div>


        <div class="uk-overflow-auto" v-if="!loading && (users.length > 0)">
            <table class="uk-table uk-table-middle uk-table-divider uk-text-center uk-margin-remove-top">
                <thead>
                <tr class="">
                    <th class="uk-width-auto">Evaluado</th>
                    <th class="uk-width-small">Nombre</th>
                    <th>Correo</th>
                    <!--<th>Télefono</th>-->
                    <th>Tipo</th>
                    <th>Score</th>
                    <th>Curso</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">

                    <td class="icon-container"><span class="icon uk-border-circle" uk-icon='icon: check; ratio:1.3' v-if="user.interview_score"></span></td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <!--<td>{{user.tel}}</td>-->
                    <td>{{user.kindOfUser}}</td>
                    <td v-bind:class="{'uk-alert-success': user.score === 'A' , 'uk-alert-warning': user.score === 'B', 'uk-alert-danger': user.score === 'C' }" class="">{{user.score}}</td>
                    <td>
                        {{user.course}}
                    </td>
                    <td>
                        <router-link :to="{name:'detail', params: {id:user._id}}">
                            <span uk-icon="icon:pencil"></span>
                        </router-link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <!--<ul class="uk-pagination uk-flex-center" uk-margin>
            <li v-bind:class="{'uk-disabled': page === 1}"><a v-on:click="previousPage()"><span uk-pagination-previous></span> Previous</a></li>
            <li v-for="i in pagesNumber" v-bind:class="{'page-active': i === page}"><a v-on:click="getPage(i)">{{i}}</a></li>
            <li class="uk-disabled"><span>...</span></li>
            <li v-bind:class="{'page-active': page === pages}"><a v-on:click="getPage(pages)">{{pages}}</a></li>
            <li v-bind:class="{'uk-disabled': page === pages}"><a v-on:click="NextPage()">Next <span uk-pagination-next></span></a></li>
        </ul>-->
    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import FormModal from '@/components/Form-modal.vue';

    @Component({
        components: {
            FormModal
        }
    })
    export default class UsersList extends Vue{

        base_paginated_url: string = 'https://iron-uber.herokuapp.com/finalinterview';

        loading:boolean = true;

        searching: boolean = false;

        users = [];
        query = {
            score: "",
            field: ""
        };
        pagination = {};
        pagesNumber = [];
        total = 0;
        pages = 10;
        limit = 10;
        offset = 9;
        page = 1;

        created(){
            this.fetchUsers();
            //this.getpagesArray();
        }

        reset(){
            this.searching = false;
            this.query.field = "";
            this.fetchUsers();
        }

        fetchUsers(){
            this.fetchData('https://iron-uber.herokuapp.com/finalinterview');
        }

        fetchData(url:string){
            fetch(url,{
                headers:{"Content-Type":"application/json"},
                method: 'GET'
            })
                .then(response=>{
                    return response.json()
                })
                .then(data => {
                    this.loading = false;
                    if(data.docs){
                        this.users = data.docs;
                        this.total = data.total;
                        this.pages = data.pages;
                        this.limit = data.limit;
                        return;
                    }
                    this.users = data;
                });
        }

        searchUser(){

            this.searching = true;

            if(this.query.score.toString() === "all") {
                location.reload();
                return;
            }
            let url;
            if (this.query.score && this.query.field){
                url = 'https://iron-uber.herokuapp.com/filter?score='+this.query.score+'&'+'field='+this.query.field;
            }else if(this.query.score && !this.query.field){
                url = 'https://iron-uber.herokuapp.com/filter?score='+this.query.score+'&'+'field=';
            }else{
                //url = 'https://iron-uber.herokuapp.com/filter?score='+'&'+'field='+this.query.field;
                url= `https://iron-uber.herokuapp.com/finalinterview?name=${this.query.field}&email=${this.query.field}&lastname=${this.query.field}&surname=${this.query.field}`
            }

            this.fetchData(url);

        }

        previousPage(){
            this.page--;

            let url;
            if(!this.searching){
                url = this.base_paginated_url + '?page=' + this.page;
                this.fetchData(url);
                return;
            }

            url= `https://iron-uber.herokuapp.com/finalinterview?page=${this.page}&name=${this.query.field}&email=${this.query.field}&lastname=${this.query.field}&surname=${this.query.field}`;

            this.fetchData(url)
        }

        NextPage(){
            this.page++;
            let url;
            if(!this.searching){
                url = this.base_paginated_url + '?page=' + this.page;
                this.fetchData(url);
                return;
            }

            url= `https://iron-uber.herokuapp.com/finalinterview?page=${this.page}&name=${this.query.field}&email=${this.query.field}&lastname=${this.query.field}&surname=${this.query.field}`;

            this.fetchData(url)
        }

        getPage(page:any){
            this.page = parseInt(page);
            let url = this.base_paginated_url + '?page=' + page.toString();
            this.fetchData(url);
        }

        /*getpagesArray(){
            let from = this.page - this.offset;
            if (from < 1) {
                from = 1;
            }
            let to = from + this.offset;
            if (to >= this.pages) {
                to = this.pages;
            }
            let pagesArray = [];
            for (let p = from; p <= to; p++) {
                pagesArray.push(p);
            }
            this.pagesNumber = pagesArray;
        }*/

    }
</script>

<style scoped>

    th{
        text-align: center;
    }

    td.icon-container{
        color: #32d296;
    }
    
    span.icon{
        border: 1px solid #32d296;
        height: 26px;
        width: 26px;
    }

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