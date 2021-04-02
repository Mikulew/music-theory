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
        @input="changeConvention"
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
    };
  },

  computed: {
    scale() {
      return CHROMATIC_SCALE[this.currentConvention.value];
    }
  },

  methods: {
    changeConvention(value) {
      this.currentConvention = value;
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