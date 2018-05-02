<template>
    
    <div>
        <form @submit.prevent="$emit('personal_Interview', user)">

            <div class="uk-child-width-1-2@m" uk-grid>
                <div>
                    <label class="uk-form-label" for="user-personal-score">Tipo de candidato</label>
                    <div class="uk-form-controls">
                        <select class="uk-select" id="user-personal-score" v-model="user.interview_score">
                            <option value="" disabled selected>selecciona calificación</option>
                            <option value="1">1 Candidato a beca completa</option>
                            <option value="2">2 Candidato a beca</option>
                            <option value="3">3 Rechazado</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="uk-form-label" for="user-course">Interesado en:</label>
                    <div class="uk-form-controls">
                        <select class="uk-select" id="user-course" v-model="user.course">
                            <option value="" disabled selected>Selecciona curso de interes</option>
                            <option value="Desarrollo Web Tiempo Parcial">Desarrollo Web Tiempo Parcial</option>
                            <option value="Desarrollo Web Tiempo Completo">Desarrollo Web Tiempo Completo</option>
                            <option value="Diseño UX/UI">Diseño UX/UI</option>
                            <option value="Diseño UX/UI Tiempo Parcial">Diseño UX/UI Tiempo Parcial</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="uk-form-label" for="user-personal-interviewer">Entrevistador Personal:</label>
                    <div class="uk-form-controls">
                        <select class="uk-select" id="user-personal-interviewer" v-model="user.personal_interviewer">
                            <option value="" disabled selected>Selecciona Entrevistador</option>
                            <option value="Anahi">Anahí</option>
                            <option value="Manon">Manon</option>
                            <option value="Julian">Julian</option>
                            <option value="Paula">Paula</option>
                            <option value="Brenda">Brenda</option>
                            <option value="Raul">Raúl</option>
                            <option value="David">David</option>
                            <option value="Bliss">Bliss</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="uk-form-label" for="user-extracomments">Comentarios del evaluador</label>
                    <div class="uk-form-controls">
                        <textarea class="uk-textarea" name="comments" id="" cols="30" rows="5" id="user-extracomments" v-model="user.interviewer_comment"></textarea>
                    </div>
                </div>
            </div>

            <div class="uk-margin-medium-top">
                <button class="uk-button uk-button-default btn-success">Guardar</button>
            </div>

        </form>
    </div>
    
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class DetailPersonalInterview extends Vue {

        @Prop() user: any;

        interview: any = {
            interview_score: "",
            interviewer_comment: ""
        };

        created(){

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