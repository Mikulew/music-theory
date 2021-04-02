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
      C D E F G A H C
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicTheory',
  props: {
    msg: String
  }
}
</script>
