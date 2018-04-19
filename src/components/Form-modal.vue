<template>

    <div>
        <button class="uk-button uk-button-default uk-margin-small-right btn-success uk-text-bold" type="button" uk-toggle="target: #modal-close-default">{{text}}</button>

        <div id="modal-close-default" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <component :is="componentType"></component>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import NewInterview from './New-interview.vue';
    import NewLounge from './New-lounge-form.vue';

    @Component({})
    export default class FormModal extends Vue{

        @Prop() private text!: string;
        @Prop() private type: string;

        componentType;

        created(){
            this.componentType = this.type === "interview" ? NewInterview : NewLounge;
        }

    }

</script>

<style scoped>

    .btn-success{
        background-color: limegreen;
        color: white;
        border: none;
    }
    .btn-success:hover{
        background-color: limegreen;
        color: white;
        border: none;
    }

</style>