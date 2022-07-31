<template>
  <main class="columns is-gapless is-multiline">
    <div class="column" :class="checkteste ? 'is-one-quarter ': 'is-1'">
      <BarraLateral @click="teste" />
    </div>
    <!-- <div class="column is-three-quarter"> -->
    <router-view></router-view>
    <!-- </div> -->

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: "App",
  components: { BarraLateral },
  data() {
    return {
      checkteste: true,

    };
  },
  methods: {
    teste() {
      this.checkteste = !this.checkteste
    }
  }
});
</script>

<style>
</style>
