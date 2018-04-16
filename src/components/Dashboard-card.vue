<template>
    <div :class="getWidthClass(column)">
        <div class="uk-card uk-card-default uk-animation-scale-up">
            <div class="uk-card-header uk-padding-small">
                <div class="uk-card-badge uk-label" :class="{'tecnica': true, 'interview': interview.type === 'interview'}">Técnica</div>
                <div class="uk-grid-small uk-flex-middle uk-width-3-4" uk-grid>
                    <div>
                        <h3 class="uk-margin-remove-bottom">Entrevista 3</h3>
                    </div>
                </div>
            </div>
            <div class="uk-card-body uk-padding-small">
                <div class="uk-grid-small uk-child-width-1-2@m uk-child-width-1-2@s uk-text-center" uk-grid>
                    <div>
                        <h4 class="uk-margin-remove-bottom">5</h4>
                        <p class="uk-text-meta uk-margin-remove-top">Salas</p>
                    </div>

                    <div>
                        <h4 class="uk-margin-remove-bottom">600</h4>
                        <p class="uk-text-meta uk-margin-remove-top">Aplicantes</p>
                    </div>

                    <div>
                        <h4 class="uk-margin-remove-bottom">abril 23º 2018</h4>
                        <p class="uk-text-meta uk-margin-remove-top">Fecha de termino</p>
                    </div>

                    <div>
                        <h4 class="uk-margin-remove-bottom">abril 3º 2018</h4>
                        <p class="uk-text-meta uk-margin-remove-top">Fecha de Inicio</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component({})
    export default class DashboardCard extends Vue{
        @Prop() private column!: string;
        @Prop() private interview!: any;

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

</style>