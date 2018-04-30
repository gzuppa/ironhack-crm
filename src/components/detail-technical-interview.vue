<template>

    <div>
        <div class="uk-width-auto text-lead uk-text-center score uk-border-circle"
             v-bind:class="{'uk-alert-success': user.technical_score === 1 , 'uk-alert-warning': user.technical_score === 2, 'uk-alert-danger': user.technical_score === 3 }">
            {{user.technical_score}}
        </div>

        <div class="uk-width-auto text-lead uk-text-center score uk-border-circle"
             v-bind:class="{'uk-alert-success': user.technical_score === 1 , 'uk-alert-warning': user.technical_score === 2, 'uk-alert-danger': user.technical_score === 3 }">
            {{user.points}}
        </div>

        <div>
            <p class="uk-text-lead">
                Why do you want to join Ironhack and what are your expectations from the bootcamp?
            </p>
            <p>
                Para incrementar mis conocimientos con tecnologías que aun no conozco y vienen incluidas en su temario, con esto podré lograr dar un paso mas hacia mi objetivo que es una carrera completa en el mundo de la programación
            </p>
        </div>

        <div>
            <p class="uk-text-lead">INVITATION SENT: <span class="uk-text-uppercase">yes</span></p>
        </div>
    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class DetailTechnicalInterview extends Vue {

        @Prop() user: any;

    }

</script>

<style scoped>

</style>