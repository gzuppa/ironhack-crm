<template>
    
    <div>
        <form @submit.prevent="$emit('personal_Interview', interview)">

            <div class="uk-child-width-1-2@m" uk-grid>
                <div>
                    <label class="uk-form-label" for="user-personal-score">Tipo de candidato</label>
                    <div class="uk-form-controls">
                        <select class="uk-select" id="user-personal-score" v-model="interview.score">
                            <option value="" disabled selected>selecciona calificación</option>
                            <option value="1">1 Candidato a beca completa</option>
                            <option value="2">2 Candidato a beca</option>
                            <option value="3">3 Rechazado</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="uk-form-label" for="user-extracomments">Comentarios del evaluador</label>
                    <div class="uk-form-controls">
                        <textarea class="uk-textarea" name="comments" id="" cols="30" rows="5" id="user-extracomments" v-model="interview.comment"></textarea>
                    </div>
                </div>
            </div>

            <div>
                <button class="uk-button uk-button-default btn-success">Guardar</button>
            </div>

        </form>
    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class DetailPersonalInterview extends Vue {

        interview: any = {
            score: "",
            comment: ""
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