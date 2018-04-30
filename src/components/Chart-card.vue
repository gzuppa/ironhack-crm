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

        @Prop() private labels!: any[];
        @Prop() private type!: string;
        @Prop() private datasets!: any[];
        @Prop() private msg!: string;

        chartConfig:any = {
            data: {},
            options:{
                title: {
                    display: true,
                    position: 'top'
                }
            }
        };

        $refs: any =  {
            userChart: HTMLCanvasElement
        };

        created(){
            this.chartConfig.type = this.type;
            this.chartConfig.data.labels = this.labels;
            this.chartConfig.data.datasets = this.datasets;
            this.chartConfig.options.title.text = this.msg;
        }

        mounted(){
            let ctx = this.$refs['usersChart'].getContext('2d');
            new Chart(ctx, this.chartConfig);
        }

    }
</script>

<style scoped>

</style>