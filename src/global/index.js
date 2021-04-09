import { reactive, readonly } from 'vue';
import { CONVENTION_OPTIONS } from '../consts'

const state = reactive({
  convention: CONVENTION_OPTIONS[0],
})

const methods = {
  selectConvention(value) {
    state.convention = value
  }
}

export default { state: readonly(state), methods };
