<template>

    <div>
        <div class="uk-child-width-1-1@s uk-grid-medium uk-grid-match" uk-grid>

            <ChartCard></ChartCard>
            <DashboardCard column="2"></DashboardCard>
            <DashboardCard column="3" v-for="interview in interviews" :interview=interview></DashboardCard>


        </div>
    </div>

</template>
<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import DashboardCard from '../components/Dashboard-card.vue';
    import ChartCard from '../components/Chart-card.vue';
    import Interview from '../models/interview.interface';

    @Component({
        components:{
            DashboardCard,
            ChartCard
        }
    })
    export default class Dashboard extends Vue{

        interviews: Interview[] = [
            {
                type: 'technique',
                lounge: 20,
                applicants: 620,
                initial_date: "Mon Oct 13 2014 11:13:00 GMT-0500 (CDT)",
                final_date: "Mon Oct 15 2014 11:13:00 GMT-0500 (CDT)"
            },
            {
                type: 'interview',
                lounge: 23,
                applicants: 220,
                initial_date: "Mon Oct 2 2014 11:13:00 GMT-0500 (CDT)",
                final_date: "Mon Oct 15 2014 11:13:00 GMT-0500 (CDT)"
            },
            {
                type: 'technique',
                lounge: 10,
                applicants: 956,
                initial_date: "Mon Oct 1 2014 11:13:00 GMT-0500 (CDT)",
                final_date: "Mon Oct 16 2014 11:13:00 GMT-0500 (CDT)"
            }
        ]

    }


</script>

<style>
    #dashboard table thead th{
        text-align: center !important;
    }
</style>