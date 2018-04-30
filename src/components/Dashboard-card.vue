<template>
    <div :class="getWidthClass(column)">
        <div class="uk-card uk-card-default uk-animation-scale-up">
            <div class="uk-card-header uk-padding-small">
                <div class="uk-card-badge uk-label" :class="{'tecnica': true, 'interview': interview.type === 'interview'}">{{interview.type}}</div>
                <div class="uk-grid-small uk-flex-middle uk-width-1-2" uk-grid>
                    <div>
                        <router-link to="/interviews/loungelist">
                            <h3 class="uk-margin-remove-bottom">{{interview.name}}</h3>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="uk-card-body uk-padding-small">
                <div class="uk-grid-small uk-child-width-1-2@m uk-child-width-1-2@s uk-text-center" uk-grid>
                    <div>
                        <h4 class="uk-margin-remove-bottom">{{interview.lounge}}</h4>
                        <p class="uk-text-meta uk-margin-remove-top">Salas</p>
                    </div>

                    <div>
                        <h4 class="uk-margin-remove-bottom">{{interview.applicants}}</h4>
                        <p class="uk-text-meta uk-margin-remove-top">Aplicantes</p>
                    </div>

                    <div>
                        <h4 class="uk-margin-remove-bottom">{{moment(interview.initial_date)}}</h4>
                        <p class="uk-text-meta uk-margin-remove-top">Fecha de Inicio</p>
                    </div>

                    <div>
                        <h4 class="uk-margin-remove-bottom">{{moment(interview.final_date)}}</h4>
                        <p class="uk-text-meta uk-margin-remove-top">Fecha de termino</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import Interview from '../models/interview.interface';
    import moment from 'moment';

    @Component({})
    export default class DashboardCard extends Vue{
        @Prop() private column!: string;
        @Prop() private interview!: Interview;

        constructor(){
            super();
            moment.locale('es');
        }

        moment(data: string){
            return moment(data).format("dddd, MMMM Do YYYY")
        }

        getWidthClass(column: string){
            return "uk-width-1-"+this.column;
        }

    }
</script>

<style scoped>

    .tecnica{
        background: darkviolet;
    }
    .interview{
        background: #FF5252;
    }

    a{
        text-decoration: none;
    }

</style>