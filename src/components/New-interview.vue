<template>

    <div>
        <button class="uk-button uk-button-default uk-margin-small-right btn-success uk-text-bold" type="button" uk-toggle="target: #modal-close-default">Crear entrevista</button>

        <div id="modal-close-default" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <h2 class="uk-modal-title">Nueva Sala</h2>
                <form>
                    <div class="uk-grid-small uk-child-width-expand" uk-grid>
                        <div>
                            <label class="uk-form-label" for="interview-places">Lugares disponibles</label>
                            <div class="uk-form-controls">
                                <input class="uk-input" id="interview-places" type="number" placeholder="Lugares">
                            </div>
                        </div>
                        <div>
                            <label class="uk-form-label" for="interview-date">Fecha</label>
                            <div class="uk-form-controls">
                                <input class="uk-input" id="interview-date" type="datetime-local" placeholder="">
                            </div>
                        </div>
                        <div>
                            <label class="uk-form-label" for="interview-active">Activa</label>
                            <div class="uk-form-controls">
                                <input class="uk-checkbox" id="interview-active" type="checkbox" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="uk-margin-top">
                        <button class="uk-button uk-button-default">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class NewInterview extends Vue{

    }
</script>

<style scoped>

    .btn-success{
        background-color: limegreen;
        color: white;
        border: none;
    }

    .uk-checkbox, .uk-radio{
        width: 30px;
        height: 30px;
    }

</style>