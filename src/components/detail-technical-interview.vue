<template>

    <div >

        <div class="scores" uk-grid>
            <div class="">
                <div class="score-container uk-text-center  uk-border-circle uk-flex uk-flex-column uk-flex-middle uk-flex-center"
                     v-bind:class="{'uk-alert-success': user.technicalCategory === '1' , 'uk-alert-warning': user.technicalCategory === '2', 'uk-alert-danger': user.technicalCategory === '3' }">
                    <span class="uk-display-block">{{user.technicalCategory}}</span>
                    <span class="uk-display-block">Type Candidate</span>
                </div>
            </div>

            <div class="" v-if="user.webScore">
                <div class="score-container uk-text-center uk-border-circle uk-flex uk-flex-column uk-flex-center"
                     v-bind:class="{'uk-alert-success': user.technicalCategory === '1' , 'uk-alert-warning': user.technicalCategory === '2', 'uk-alert-danger': user.technicalCategory === '3' }">
                    <span class="uk-display-block">{{user.webScore}}</span>
                    <span class="uk-display-block">Web Dev</span>
                </div>
            </div>

            <div class="" v-if="user.uxScore">
                <div class="score-container uk-text-center uk-border-circle uk-flex uk-flex-column uk-flex-center"
                     v-bind:class="{'uk-alert-success': user.technicalCategory === '1' , 'uk-alert-warning': user.technicalCategory === '2', 'uk-alert-danger': user.technicalCategory === '3' }">
                    <span class="uk-display-block">{{user.uxScore}}</span>
                    <span class="uk-display-block">UX/UI</span>
                </div>
            </div>

        </div>

        <div class="uk-margin-medium-top">
            <p class="uk-text-lead">
                Why do you want to join Ironhack and what are your expectations from the bootcamp?
            </p>
            <p>
                {{user.whyTo}}
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


        created(){
            console.log(this.user)
        }

    }

</script>

<style scoped>

    .scores .score-container > span:first-child{
        font-size: 1.5em;
    }

    .scores .score-container{
        height: 80px;
        width: 80px;
        padding: 12%;
    }

</style>