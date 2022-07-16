<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8"
                 role="form"
                 aria-label="Formulario para criacao de uma nova tarefa">
                <input type="text"
                       class="input"
                       v-model="taskName"
                       placeholder="qual tarefa voce deseja iniciar?" />
            </div>
            <div class="column">
                <TemporizadorComponent @temporizador-finalizado="finishedTask" />
            </div>
        </div>
    </div>
    <div class="column is-three-fifths is-offset-one-fifth  has-text-weight-bold">
        <h1 v-if="arrayTask.length == 0" class="box"> A Lista esta Vazia</h1>
        <ul v-if="arrayTask.length > 0" >
            <li  v-for="item in arrayTask" class="box is-flex is-align-items-center is-justify-content-space-between mb-4 bg-1 has-background-warning-light"
                :key="item.name">
                <span>{{ item.name }}</span><span>{{ item.time }}</span>
            </li>
        </ul>
    </div>

    <div class="columns is-mobile">
  <div class="column is-11 is-offset-1"></div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorComponent from "./TemporizadorComponent.vue";
import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
    name: "FormularioTracker",
    components: { TemporizadorComponent },
    data() {
        return {
            taskName: "",
            tempoEmSegundos: 0,
            contadorOn: false,
            playDisabled: false,
            interval: 0,
            timer: "00:00:00",
            arrayTask: [] as ITarefa[]
        };
    },
    methods: {
        finishedTask(tempoDecorrido: string) {
            this.arrayTask.push({
                name: this.taskName || "Tarefa sem nome",
                time: tempoDecorrido
            })
            this.taskName = ""
        }
    },
});
</script>
