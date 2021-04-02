<template>
  <div>
    <div>
      <select name="type">
        <option value="chromatic">Chromatic scale</option>
        <option value="major">Major</option>
        <option value="minor">Minor</option>
        <option value="passages">Passages</option>
        <option value="progression">Progression</option>
      </select>
      <select name="notation">
        <option value="chromatic">European</option>
        <option value="major">American</option>
      </select>
    </div>
    <div>
      {{ scale }}
    </div>
  </div>
</template>

<script>
import { CHROMATIC_SCALE, LOCAL_NOTATION } from '../consts';

export default {
  name: 'MusicTheory',

  data() {
    return {
      notation: LOCAL_NOTATION.EU
    };
  },

  computed: {
    scale() {
      return CHROMATIC_SCALE[this.notation];
    }
  }
}
</script>
