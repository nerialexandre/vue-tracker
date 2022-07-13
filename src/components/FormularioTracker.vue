<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8"
           role="form"
           aria-label="Formulario para criacao de uma nova tarefa">
        <input type="text"
               class="input"
               placeholder="qual tarefa voce deseja iniciar?" />
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{ timer }}</strong>
          </section>
          <button class="button"
                  :disabled="playDisabled"
                  @click="start">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button"
                  @click="stop">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { secondsToHours, secondsToMinutes } from 'date-fns'

export default defineComponent({
  name: "FormularioTracker",
  data() {
    return {
      tempoEmSegundos: 0,
      contadorOn: false,
      playDisabled: false,
      interval: 0,
      timer: '00:00:00',
    };
  },
  methods: {
    start() {
      this.playDisabled = true;
      this.interval = setInterval(() => {
        this.tempoEmSegundos++;
        let horas = ("00" + secondsToHours(this.tempoEmSegundos)).slice(-2)
        let minutos = ("00" + secondsToMinutes(this.tempoEmSegundos)).slice(-2)
        let segundos = ("00" + (this.tempoEmSegundos % 60)).slice(-2)
        this.timer = `${horas}:${minutos}:${segundos}`
      }, 1000);
    },
    stop() {
      clearInterval(this.interval);
      this.playDisabled = false;
      this.tempoEmSegundos = 0;
      this.timer = '00:00:00'
    },
  },
});
</script>
