<template>
  <div>
    <h2>Welcome to Counter</h2>
    {{counter}}
  </br>
    <button @click="incrementCounter">increment counter</button>
  </div>
</template>

<script>
  export default {
    methods: {
      incrementCounter () {
        this.$store.dispatch('inrementAction', 1)
      }
    },

    computed: {
      counter () {
        return this.$store.getters.counter
      }
    }
  }
</script>
