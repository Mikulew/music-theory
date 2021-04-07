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
        label="Naming convention"
        :options="conventionOptions"
        @input="value => currentConvention = value"
      />
      <m-select
        class="select"
        label="Repeat"
        :options="repeatOptions"
        @input="value => repeat = value"
      />
    </div>
    <div class="scale">
      {{ scale }}
    </div>
  </div>
</template>

<script>
import { CHROMATIC_SCALE, CONVENTION_OPTIONS, SCALES_OPTIONS } from '../consts';
import MSelect from '../components/m-select'

export default {
  name: 'MusicTheory',

  data() {
    return {
      currentConvention: CONVENTION_OPTIONS[0],
      conventionOptions: CONVENTION_OPTIONS,
      scaleOptions: SCALES_OPTIONS,
      repeatOptions: [1, 2, 3, 4, 5].map(element => ({ label: `${element}`, value: element})),
      repeat: { value: 1 },
    };
  },

  computed: {
    scale() {
      return CHROMATIC_SCALE[this.currentConvention.value].join(", ").repeat(this.repeat.value);
    },
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