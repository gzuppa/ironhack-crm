<template>

    <div>
        <h2>Create Lounge</h2>

        <form>
            <div class="uk-grid-small uk-child-width-1-2@m" uk-grid>

                <div>
                    <label class="uk-form-label" for="lounge-places">Lugares Disponibles</label>
                    <div class="uk-form-controls">
                        <input type="text" class="uk-input" id="lounge-places">
                    </div>
                </div>

                <div>
                    <label class="uk-form-label" for="lounge-interview">Entrevista</label>
                    <div class="uk-form-controls">
                        <select class="uk-select" id="lounge-interview">
                            <option>Entrevista técnica 1</option>
                            <option>Entrevista técnica 2</option>
                        </select>
                    </div>
                </div>

                <div class="date__input-container">
                    <label class="uk-form-label" for="lounge-date">Fecha y hora de Inicio</label>
                    <div class="uk-form-controls date-input">
                        <datetime type="datetime" id="lounge-date" v-model="date"></datetime>
                    </div>
                </div>

                <div>
                    <label class="uk-form-label" for="interview-active">Activa</label>
                    <div class="uk-form-controls">
                        <input class="uk-checkbox" id="interview-active" type="checkbox" placeholder="">
                    </div>
                </div>

                <div class="uk-width-1-1@m">
                    <label for="lounge-file">Select file</label>
                    <div>
                        <div uk-form-custom="target: true">
                            <input type="file" id="lounge-file">
                            <input class="uk-input uk-form-width-medium" type="text" placeholder="Select file" disabled>
                        </div>
                        <button class="uk-button uk-button-default">Submit</button>
                    </div>
                </div>

            </div>
            <div class="uk-margin-top">
                <button class="uk-button uk-button-default">Create</button>
            </div>
        </form>
    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {Datetime} from 'vue-datetime';

    @Component({
        components: {
            Datetime
        }
    })
    export default class NewLounge extends Vue{

        date: string = "";

    }
</script>

<style scoped>

    .uk-checkbox, .uk-radio{
        width: 30px;
        height: 30px;
    }

</style>