<template>
  <div class="column is-three-quarter">
    <FormularioTracker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTracker from '../components/FormularioTracker.vue';


export default defineComponent({
  name: "TarefasView",
  components: { FormularioTracker }
});
</script>

<style>
</style>
