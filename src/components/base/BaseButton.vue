<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  color: black;
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #f1a80a;
  border-color: #f1a80a;
}

.flat {
  background-color: transparent;
  color:  #11005c;
  border: none;
}

.outline {
  background-color: transparent;
  border-color:  #11005c;
  color:  #11005c;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #f1a80a;
}
</style>