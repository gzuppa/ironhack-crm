<template>

    <div>
        <div class="uk-child-width-1-1@s uk-grid-medium uk-grid-match" uk-grid>

            <ChartCard :datasets="doughnut_datasets" :labels="labels" :type="'doughnut'" :msg="'Candidatos por tipo de entrevista'"></ChartCard>
            <ChartCard :datasets="line_datasets" :labels="labels_line" :type="'line'" :msg="'Aplicantes por cursos'"></ChartCard>
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

        // doughnut
        labels: string[] = [];
        doughnut_datasets: any[] = [];

        // line
        line_datasets: any[];
        labels_line = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


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

        getLineChartData(){

        }

        getChartData(){

            let backgroundColor = [
                'rgba(148,0,211, 0.2)',
                'rgba(255,82,82, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ];

            let borderColor= [
                'rgba(148,0,211,1)',
                'rgba(255,82,82, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)'
            ];


            let datasets = {
                data: [],
                backgroundColor: [],
                borderColor: []
            };
            this.interviews.map((interview, i)=>{
                if(this.labels.indexOf(interview.type) === -1) {
                    this.labels.push(interview.type);
                    datasets.data.push(interview.applicants);
                    datasets.backgroundColor.push(backgroundColor[i]);
                    datasets.borderColor.push(borderColor[i]);
                    return;
                }
                datasets.data[this.labels.indexOf(interview.type)] = datasets.data[this.labels.indexOf(interview.type)] += interview.applicants;
            });
            this.doughnut_datasets.push(datasets);
        }

    }


</script>

<style>
    #dashboard table thead th{
        text-align: center !important;
    }
</style>