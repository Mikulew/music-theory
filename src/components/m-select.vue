<template>
  <div class="select-container">
    <div class="select-label">
      {{ label }}
    </div>
    <div class="select-options" @blur="open = false">
      <div class="selected" :class="{ open }" @click="toggle">
        {{ selected }}
      </div>
      <div class="items" :class="{ 'select-hide': !open }">
        <div
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'MSelect',

  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      open: false,
      initialOption: this.options[0].label,
    };
  },

  computed: {
    selected: {
      get() {
        return this.initialOption;
      },
      set(value) {
        return this.initialOption = value.label;
      },
    },
  },

  methods: {
    toggle() {
      this.open = !this.open;
    },

    selectOption(option) {
      this.selected = option;
      this.open = false;
      this.$emit('input', option)
    }
  },

};

</script>

<style scoped>

.select-container {
  display: flex;
  flex-direction: column;
  min-width: 150px;
}

.select-label {
  margin-bottom: 10px;
}

.select-options {
  position: relative;
  width: auto;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.select-options .selected {
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #000000;
  color: #000000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.select-options .selected.open {
  border: 1px solid #000000;
  border-radius: 6px 6px 0px 0px;
}

.select-options .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #000000 transparent transparent transparent;
}

.select-options .items {
  color: #000000;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #000000;
  border-left: 1px solid #000000;
  border-bottom: 1px solid #000000;
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
}

.select-options .items div {
  color: #000000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.select-options .items div:hover {
  color: #ffffff;
  background-color: #000000;
}

.select-hide {
  display: none;
}

</style>