<template>
    <div class="uk-width-1-2">
        <div class="uk-card uk-card-default uk-animation-scale-up uk-padding-small">
            <canvas ref="usersChart" width="" height=""></canvas>
        </div>
    </div>
</template>

<script lang="ts">

    import * as Chart from 'chart.js';
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component({})
    export default class ChartCard extends Vue {

        @Prop() private labels: any[];
        @Prop() private data: any[];

        chartConfig:any = {
            type: 'doughnut',
            data: {
                datasets: [{
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options:{
                title: {
                    display: true,
                    text: 'Candidatos por entrevista',
                    position: 'top'
                }
            }
        };

        created(){
            this.chartConfig.data.labels = this.labels;
            this.chartConfig.data.datasets[0].data = this.data;
        }

        mounted(){
            let ctx = this.$refs['usersChart'].getContext('2d');
            new Chart(ctx, this.chartConfig);
        }

    }
</script>

<style scoped>

</style>