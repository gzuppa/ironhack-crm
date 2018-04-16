<template>

    <div id="dashboard">
        <div class="uk-margin filters uk-padding-small uk-margin-remove-bottom">

            <div class="uk-flex-between uk-grid-small uk-flex-middle" uk-grid>
                <div class="">
                    <form v-on:submit.prevent="searchUser">

                        <div class="uk-search uk-search-default">
                            <span class="uk-search-icon-flip" uk-search-icon></span>
                            <input class="uk-search-input" type="search" placeholder="Buscar..." v-model="query.field">
                        </div>
                        <!-- Fin input search -->
                        <div uk-form-custom="target: > * > span:first-child">
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

                <div class="uk-flex-center uk-flex-middle uk-flex uk-width-1-4">
                    <span class="navigate uk-display-inline-block"
                          v-on:click="previousPage()"
                          v-if="page !== 1"
                          uk-icon="icon: chevron-left; ratio: 2">
                    </span>
                    <div class="uk-display-inline-block uk-width-1-3 uk-text-center">
                        <input class="uk-input uk-text-center" type="text" v-model="page" @keydown.enter="getPage(page)">
                        <span>de {{pages}} páginas</span>
                    </div>
                    <span class="navigate"
                          v-on:click="NextPage()"
                          v-if="page !== pages"
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


        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-middle uk-table-divider uk-text-center uk-margin-remove-top">
                <thead>
                <tr class="">
                    <th><input class="uk-checkbox" type="checkbox"></th>
                    <th class="uk-width-small">Nombre</th>
                    <th>Correo</th>
                    <th>Télefono</th>
                    <th>Tipo</th>
                    <th>Score</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">
                    <td><input class="uk-checkbox" type="checkbox"></td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.tel}}</td>
                    <td>{{user.kindOfUser}}</td>
                    <td v-bind:class="{'uk-alert-success': user.score === 'A' , 'uk-alert-warning': user.score === 'B', 'uk-alert-danger': user.score === 'C' }" class="">{{user.score}}</td>
                    <td>
                        <input type="text" class="uk-input">
                    </td>
                    <td>
                        <a :href="'/detail/'+user._id">
                            <span uk-icon="icon:pencil"></span>
                        </a>
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

    @Component({})
    export default class UsersList extends Vue{

        base_paginated_url: string = 'https://iron-uber.herokuapp.com/paginated';

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

        fetchUsers(){
            this.fetchData('http://iron-uber.herokuapp.com/paginated');
        }

        fetchData(url:string){
            fetch(url,{
                headers:{"Content-Type":"application/json"}
            })
                .then(response=>{
                    return response.json()
                })
                .then(data => {
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
                url = 'https://iron-uber.herokuapp.com/filter?score='+'&'+'field='+this.query.field;
            }

            this.fetchData(url);

        }

        previousPage(){
            this.page--;
            let url = this.base_paginated_url + '?page=' + this.page;
            this.fetchData(url)
        }

        NextPage(){
            this.page++;
            let url = this.base_paginated_url + '?page=' + this.page;
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

</style>