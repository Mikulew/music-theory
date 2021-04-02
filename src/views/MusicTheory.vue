<template>
  <div>
    <div class="options">
      <m-select
        class="select"
        label="Scales"
        :options="scaleOptions"
      />
      <m-select
        class="select"
        label="Music notation"
        :options="notationOptions"
        @input="changeNotation"
      />
    </div>
    <div class="scale">
      {{ scale }}
    </div>
  </div>
</template>

<script>
import { CHROMATIC_SCALE, NOTATION_OPTIONS, SCALES_OPTIONS } from '../consts';
import MSelect from '../components/m-select'

export default {
  name: 'MusicTheory',

  data() {
    return {
      notation: NOTATION_OPTIONS[0],
      notationOptions: NOTATION_OPTIONS,
      scaleOptions: SCALES_OPTIONS,
    };
  },

  computed: {
    scale() {
      return CHROMATIC_SCALE[this.notation.value];
    }
  },

  methods: {
    changeNotation(value) {
      this.notation = value;
    }
  },

  components: {
    MSelect
  }
}
</script>

<style scoped>
.options {
  display: flex;
}
.select, .scale {
  margin: 10px;
}
</style>