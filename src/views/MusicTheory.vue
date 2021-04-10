<template>
  <div>
    <div class="options">
      <m-select
        class="select"
        label="Notes"
        :options="chromaticOptions"
        @input="value => currentNote = value"
      />
      <m-select
        class="select"
        label="Scales"
        :options="scaleOptions"
        @input="value => currentFormat = value"
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
      <h3>{{ currentFormat.label }}</h3>
      {{ scale }}
    </div>
  </div>
</template>

<script>

import { inject, computed } from 'vue';
import {
  CHROMATIC_SCALE,
  CHROMATIC_OPTIONS,
  CONVENTION_OPTIONS,
  SCALES_OPTIONS,
  TYPE_OF_SCALES,
  } from '../consts';
import MSelect from '../components/m-select';

export default {

  name: 'MusicTheory',

  data() {
    return {
      conventionOptions: CONVENTION_OPTIONS,
      scaleOptions: SCALES_OPTIONS,
      repeatOptions: [1, 2, 3, 4, 5].map(element => ({ label: `${element}`, value: element})),
      repeat: { value: 1 },
    };
  },

  setup() {
    const global = inject('global');

    const currentConvention = computed({
      get() {
        return global.state.convention;
      },
      set(value) {
        return global.methods.selectConvention(value);
      },
    });

    const currentNote = computed({
      get() {
        return global.state.note;
      },
      set(value) {
        return global.methods.selectNote(value)
      },
    });

    const currentFormat = computed({
      get() {
        return global.state.format;
      },
      set(value) {
        return global.methods.selectFormat(value)
      },
    });

    return {
      currentConvention,
      currentNote,
      currentFormat,
    };
  },

  computed: {
    scale() {
      const scale = CHROMATIC_SCALE[this.currentConvention.value].join(", ").repeat(this.repeat.value);
      return this.formatScaleByNote(scale);
    },

    chromaticOptions() {
      return CHROMATIC_OPTIONS(this.currentConvention.value);
    },
  },

  methods: {
    formatScaleByNote(scale) {
      switch (this.currentFormat.value) {
        case TYPE_OF_SCALES.MAJOR:
          console.log('major');
          return scale;
        case TYPE_OF_SCALES.MINOR:
          console.log('minor');
          return scale;
        case TYPE_OF_SCALES.PASSAGE:
          console.log('passage');
          return scale;
        case TYPE_OF_SCALES.PROGRESSION:
          console.log('progression');
          return scale;
        default:
          console.log('chromatic');
          return scale;
      }
    },
  },

  components: {
    MSelect
  },

};

</script>

<style scoped>

.options {
  display: flex;
}
.select, .scale {
  margin: 10px;
}

</style>
