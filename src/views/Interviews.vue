<template>

    <div>

        <div class="uk-flex uk-flex-right">
            <NewInterview class=""></NewInterview>
        </div>

        <div class="" uk-grid>

            <DashboardCard column="3" v-for="interview in interviews" :interview="interview"></DashboardCard>

        </div>

    </div>
    
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import NewInterview from '@/components/New-interview.vue';
    import DashboardCard from '../components/Dashboard-card.vue';
    import * as moment from 'moment';

    @Component({
        components: {
            NewInterview,
            DashboardCard
        },
    })
    export default class Interviews extends Vue{

        interviews = [
            {
                name: "Entrevista técnica 1",
                type: 'technique',
                lounge: 20,
                applicants: 620,
                initial_date: "Mon Oct 13 2018 11:13:00 GMT-0500 (CDT)",
                final_date: "Mon Oct 15 2018 11:13:00 GMT-0500 (CDT)"
            }
        ];

        constructor(){
            super();
            moment.locale('es');
        }

        moment(data: string){
            return moment(data).format("dddd, MMMM Do YYYY")
        }

    }
</script>

<style scoped>


</style>