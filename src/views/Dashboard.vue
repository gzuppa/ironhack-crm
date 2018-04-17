<template>

    <div>
        <div class="uk-child-width-1-1@s uk-grid-medium uk-grid-match" uk-grid>

            <ChartCard :data="chart_data" :labels="labels"></ChartCard>
            <DashboardCard column="2" :interview="interviews[0]"></DashboardCard>
            <DashboardCard column="3" v-for="interview in interviews" :interview="interview"></DashboardCard>


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

        labels: string[] = [];
        chart_data: number[] = [];

        interviews: Interview[] = [
            {
                name: "Entrevista técnica 1",
                type: 'technique',
                lounge: 20,
                applicants: 620,
                initial_date: "Mon Oct 13 2018 11:13:00 GMT-0500 (CDT)",
                final_date: "Mon Oct 15 2018 11:13:00 GMT-0500 (CDT)"
            },
            {
                name: "Entrevista personal 1",
                type: 'interview',
                lounge: 23,
                applicants: 220,
                initial_date: "Mon Oct 2 2018 11:13:00 GMT-0500 (CDT)",
                final_date: "Mon Oct 15 2018 11:13:00 GMT-0500 (CDT)"
            },
            {
                name: "Entrevista técnica 2",
                type: 'technique',
                lounge: 10,
                applicants: 956,
                initial_date: "Mon Oct 1 2018 11:13:00 GMT-0500 (CDT)",
                final_date: "Mon Oct 16 2018 11:13:00 GMT-0500 (CDT)"
            }
        ];

        created(){
            this.getChartData();
        }

        getChartData(){
            this.interviews.map(interview=>{
                if(this.labels.indexOf(interview.type) === -1) {
                    this.labels.push(interview.type);
                    this.chart_data.push(interview.applicants);
                    return;
                }
                this.chart_data[this.labels.indexOf(interview.type)] = this.chart_data[this.labels.indexOf(interview.type)] += interview.applicants;
            });
        }

    }


</script>

<style>
    #dashboard table thead th{
        text-align: center !important;
    }
</style>