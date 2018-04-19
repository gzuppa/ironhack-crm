<template>

    <div>
        <button class="uk-button uk-button-default uk-margin-small-right btn-success uk-text-bold" type="button" uk-toggle="target: #modal-close-default">Crear entrevista</button>

        <div id="modal-close-default" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <button class="uk-modal-close-default" type="button" uk-close></button>

            </div>
        </div>
    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({})
    export default class FormModal extends Vue{

    }
</script>

<style scoped>

</style>