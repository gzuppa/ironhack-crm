<template>
    <div class="uk-width-1-2">
        <div class="uk-card uk-card-default uk-animation-scale-up uk-padding-small">
            <canvas ref="usersChart" width="" height=""></canvas>
            <canvas ref="lineChart" width="" height=""></canvas>
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
        @Prop() private type: string;
        @Prop() private datasets: any[];
        @Prop() private msg: string;

        chartConfig:any = {
            data: {},
            options:{
                title: {
                    display: true,
                    position: 'top'
                }
            }
        };

        /*lineChart:any = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Part time',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        fill: false
                    },
                    {
                        label: 'Full time',
                        data: [12, 12, 0, 5, 22, 3],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        fill: false
                    }
                    ,{
                        label: 'UX/UI',
                        data: [2, 9, 3, 5, 12, 33],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        fill: false
                    }
                ]
            },
            options:{
                title: {
                    display: true,
                    position: 'top'
                }
            }
        };*/

        created(){
            this.chartConfig.type = this.type;
            this.chartConfig.data.labels = this.labels;
            this.chartConfig.data.datasets = this.datasets;
            this.chartConfig.options.title.text = this.msg;
        }

        mounted(){
            let ctx = this.$refs['usersChart'].getContext('2d');
            let line = this.$refs['lineChart'].getContext('2d');
            new Chart(ctx, this.chartConfig);
            new Chart(line, this.lineChart);
        }

    }
</script>

<style scoped>

</style>