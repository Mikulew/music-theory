import { reactive, readonly } from 'vue';
import { CONVENTION_OPTIONS, CHROMATIC_OPTIONS, SCALES_OPTIONS } from '../consts';

const state = reactive({
  convention: CONVENTION_OPTIONS[0],
  note: CHROMATIC_OPTIONS[0],
  format: SCALES_OPTIONS[0],
});

const methods = {
  selectConvention(value) {
    state.convention = value;
  },
  selectNote(value) {
    state.note = value;
  },
  selectFormat(value) {
    state.format = value;
  },
};

export default { state: readonly(state), methods };
