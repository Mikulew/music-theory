<template>
  <MusicTheory />
</template>

<script>
import { provide } from 'vue';
import global from './global';
import MusicTheory from './views/MusicTheory.vue'

export default {
  name: 'App',
  components: {
    MusicTheory
  },
  setup() {
    provide('global', global);
  }
}
</script>
